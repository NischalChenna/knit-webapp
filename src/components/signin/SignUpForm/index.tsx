import { Button, Form, Input, message, notification } from "antd";
import { useState } from "react";
import "./../SignUpForm/SignUpForm.scss";
import axios from "axios";
import getAxiosInstance from "../../../services/Api";
type SignUpProps = {
  updateEmail: Function;
  nextStep: Function;
  userEmail: string | null;
  newUser: Boolean;
};
const SignUpForm = (props: SignUpProps): JSX.Element => {
  /*ToDo: Add icons in buttons*/
  const [form] = Form.useForm();
  const [isLoading, setLoading] = useState<boolean>(false);

  const onFinish = (values: any): void => {
    console.log("on Submnit");
    console.log(values);
    setLoading(true);

    getAxiosInstance()
      .post("auth.signIn", {
        ...values,
        newUser: props.newUser,
      })
      .then((res: any) => {
        if (res.data.success) {
          props.updateEmail(values.userEmail);
          props.nextStep();
        }
      })
      .catch((err) => {
        notification.error({
          placement: "bottomRight",
          message:
            err?.response?.data?.error?.msg ||
            " Something went wrong, please try again",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const validateMessages = {
    required: "Email is required",
    types: {
      email: "Not a valid email!",
    },
  };

  return (
    <div className="signup-form">
      {/* <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ flex: 1, height: "0.2px", backgroundColor: "silver" }} />
        <div>
          <p style={{ width: "30px", textAlign: "center" }}>or</p>
        </div>
        <div style={{ flex: 1, height: "0.2px", backgroundColor: "silver" }} />
      </div> */}
      <div className="form">
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={{ userEmail: props.userEmail }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"userEmail"}
            rules={[{ required: true, type: "email" }]}
            label="Work Email"
          >
            <Input placeholder="Enter work email" />
          </Form.Item>
          <p className="mt-2 mb-0">
            You’ll receive a 6 digit OTP on your work email within 60 seconds.
            Click on Get OTP to receive one.
          </p>
          <Form.Item shouldUpdate className="submit">
            {() => (
              <Button
                className="mt-5"
                type="primary"
                htmlType="submit"
                loading={isLoading}
                block
                disabled={!form.getFieldValue("userEmail")?.length}
              >
                {isLoading ? null : "GET OTP"}
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
