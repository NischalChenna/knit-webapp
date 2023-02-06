import { Form, Input } from "antd";
import "./../OtpForm/EnterOtpForm.scss"
function OtpInfoForm() {
  
  const onFinish = (values: any) => {
    console.log(values);
  };
  const validateMessages = {
    required: "${label} is required",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  return (
    <div className="otp-form">
      <Form
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
        disabled={true}
      >
        <Form.Item
          name={["user", "name"]}
          rules={[{ required: true, type: "email" }]}
          label="Work Email"
        >
          <Input placeholder="Enter work email" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default OtpInfoForm;
