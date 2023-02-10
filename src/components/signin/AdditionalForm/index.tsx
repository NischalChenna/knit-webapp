import { Button, Form, Input, InputNumber, Select, Space } from "antd";
import "./../AdditionalForm/SignUpAdditionalForm.scss";
import getAxiosInstance from "../../../services/Api";
import { useNavigate } from "react-router-dom";
import SelectableTags from "../../SelectableTags";
import { TagOption } from "../../../interfaces";

interface OrgFormProps {
  userEmail: string | null;
  newUser: Boolean;
}

function AdditionalForm(props: OrgFormProps) {
  const navigate = useNavigate();
  // const categories: string[] = [
  //   "HRMS",
  //   "Communication",
  //   "Accounting",
  //   "CRM",
  //   "Payroll",
  //   "JobBoards",
  //   "ERP",
  // ];
  const categories: TagOption[] = [
    { label: "HRMS" },
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
    const newMap = {
      ...values,
      userEmail: props.userEmail,
      newUser: props.newUser,
      categories: values.categories.map((val: TagOption) =>
        val?.value ? val.value : val.label
      ),
    };
    getAxiosInstance()
      .post("auth.sendOrgDetails", newMap)
      .then((res: any) => {
        if (res.data.success) {
          navigate("dashboard/home");
        }
      });
  };

  return (
    <div className="additional-form">
      <Form
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
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
            allowClear
            options={orgSize.map((val) => ({ label: val, value: val }))}
            defaultValue={orgSize[0]}
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
