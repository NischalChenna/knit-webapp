import { Button, Form, Input, InputNumber, Select, Space } from "antd";
import CheckableTag from "antd/es/tag/CheckableTag";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./../AdditionalForm/SignUpAdditionalForm.scss";
import { Option } from "antd/es/mentions";

function AdditionalForm() {
  const categories: string[] = [
    "HRMS",
    "Communication",
    "Accounting",
    "CRM",
    "Payroll",
    "JobBoards",
    "ERP",
  ];

  const orgSize: string[] = ["01-50", "51-100", "101-250", "251-1000", "1000+"];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleChange = (tag: string, checked: boolean) => {
    const newSelectedCategories = checked
      ? [...selectedCategories, tag]
      : selectedCategories.filter((t) => t !== tag);
    setSelectedCategories(newSelectedCategories);
  };

  const validateMessages = {
    required: "${label} is required",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  const onFinish = (values: any) => {
    const newMap = {
      ...values,
      user: { ...values.user, categories: selectedCategories },
    };
    console.log(newMap);
  };

  return (
    <div className="additional-form">
      <Form
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={["user", "username"]} label="What should we call you?">
          <Input placeholder="Enter username" />
        </Form.Item>

        <Form.Item name={["user", "org-name"]} label="Organisation Name">
          <Input placeholder="Enter your organisation name" />
        </Form.Item>
        <Form.Item name={["user", "designation"]} label="Designation Name">
          <Input placeholder="What is your designation ?" />
        </Form.Item>
        <Form.Item name={["user", "org-size"]} label="Organisation Size">
          <Select placeholder="Select your organisation size" allowClear>
            {orgSize &&
              orgSize.map((size) => <Option value={size}>{size}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item name={["user", "categories"]} label="API Category">
          <Space size={[0, 8]} wrap>
            {categories.map((tag) => (
              <CheckableTag
                key={tag}
                style={{ height: "2.5rem", padding: "10px 20px" }}
                checked={selectedCategories.includes(tag)}
                onChange={(checked) => handleChange(tag, checked)}
              >
                {tag} {selectedCategories.includes(tag) && <CloseOutlined />}
              </CheckableTag>
            ))}
          </Space>
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
