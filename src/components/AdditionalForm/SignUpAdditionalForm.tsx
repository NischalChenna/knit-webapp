import { Button, Form, Input, InputNumber } from "antd";
import "./../AdditionalForm/SignUpAdditionalForm.scss";

function AdditionalForm() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  const validateMessages = {
    required: "${label} is required",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!"
    },
  };
  /**
   * Form validation for org size left
   */
  

  return (
    <div className="additional-form">
      <Form
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "org-name"]}
          label="Organisation Name"
        >
          <Input placeholder="Enter your organisation name" />
        </Form.Item>
        <Form.Item
          name={["user", "org-size"]}
          label="Organisation Size"
          rules={[{ message: 'Please input donation amount!' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="Enter your organisation size" />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ marginTop: "4rem" }}
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
