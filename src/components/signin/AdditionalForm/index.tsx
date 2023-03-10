import { Button, Form, Input, InputNumber, Select, Space } from "antd";
import "./../AdditionalForm/SignUpAdditionalForm.scss";
import getAxiosInstance from "../../../services/Api";
import { useNavigate } from "react-router-dom";
import SelectableTags from "../../SelectableTags";
import { TagOption } from "../../../interfaces";
import { useAppDispatch } from "../../../store/hooks";
import { loginUser } from "../../../store/features/user";

interface OrgFormProps {
  userEmail: string | null;
  newUser: Boolean;
  orgId: string | null;
}

function AdditionalForm(props: OrgFormProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const categories: string[] = [
  //   "HRIS",
  //   "Communication",
  //   "Accounting",
  //   "CRM",
  //   "Payroll",
  //   "JobBoards",
  //   "ERP",
  // ];
  const categories: TagOption[] = [
    { label: "HRIS" },
    { label: "Communication" },
    { label: "Accounting" },
    { label: "CRM" },
    { label: "Payroll" },
    { label: "JobBoards" },
    { label: "ERP" },
  ];

  const orgSize: string[] = ["01-50", "51-100", "101-250", "251-1000", "1000+"];

  // const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // const handleChange = (tag: string, checked: boolean) => {
  //   const newSelectedCategories = checked
  //     ? [...selectedCategories, tag]
  //     : selectedCategories.filter((t) => t !== tag);
  //   setSelectedCategories(newSelectedCategories);
  // };

  const validateMessages = {
    required: "${label} is required",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  const onFinish = (values: any) => {
    console.log("props ", values);
    const newMap = {
      ...values,
      userEmail: props.userEmail,
      newUser: props.newUser,
      orgId: props.orgId,
      categories: values.categories.map((val: TagOption) =>
        val?.value ? val.value : val.label
      ),
    };
    getAxiosInstance()
      .post("auth.sendOrgDetails", newMap)
      .then((res: any) => {
        if (res.data.success) {
          dispatch(loginUser({ ...res.data.msg, isFirstLogin: true }));
          navigate("/dashboard/home");
        }
      });
  };

  return (
    <div className="additional-form">
      <Form
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
        initialValues={{ orgSize: orgSize[0] }}
      >
        <Form.Item name={["username"]} label="What should we call you?">
          <Input placeholder="Enter username" />
        </Form.Item>

        <Form.Item name={["orgName"]} label="Organisation Name">
          <Input placeholder="Enter your organisation name" />
        </Form.Item>
        <Form.Item name={["designation"]} label="Designation Name">
          <Input placeholder="What is your designation ?" />
        </Form.Item>
        <Form.Item name={["orgSize"]} label="Organisation Size">
          <Select
            placeholder="Select your organisation size"
            options={orgSize.map((val) => ({ label: val, value: val }))}
          ></Select>
        </Form.Item>
        <Form.Item
          name={["categories"]}
          label="API Category"
          rules={[
            {
              type: "array",
              required: true,
              message: "Please select atleast 1 category",
            },
          ]}
        >
          <SelectableTags options={categories} />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ marginTop: "3rem" }}
            type="primary"
            htmlType="submit"
            block
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AdditionalForm;
