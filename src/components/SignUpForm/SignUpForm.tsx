import { Button, Form, Input } from "antd";
import "./../SignUpForm/SignUpForm.scss";

function SignUpForm() {
  /*ToDo: Add icons in buttons*/

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
    <div className="signup-form">
      <div className="signup-btn-box">
        <Button disabled>Sign up with Google</Button>
        <Button disabled>Sign up with Microsoft</Button>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ flex: 1, height: "0.2px", backgroundColor: "silver" }} />
        <div>
          <p style={{ width: "30px", textAlign: "center" }}>or</p>
        </div>
        <div style={{ flex: 1, height: "0.2px", backgroundColor: "silver" }} />
      </div>
      <div className="form">
        <Form
          layout="vertical"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            rules={[{ required: true, type: "email" }]}
            label="Work Email"
          >
            <Input placeholder="Enter work email" />
          </Form.Item>
          <p style={{ marginTop: "12px" }}>
            You’ll receive a 6 digit OTP on your work email within 60 seconds.
            Click on Get OTP to receive one.
          </p>
          <Form.Item>
            <Button
              style={{ marginTop: "2.5rem" }}
              type="primary"
              htmlType="submit"
              block
            >
              GET OTP
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="information-container">
        <p>
          Already have an account? <span>Log In</span>
        </p>
        <p>
          By creating an account, you’re agreeing to our Terms and Conditions
          and Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
