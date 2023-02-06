import { Button, Form, Input } from "antd";
import { useState } from "react";
import OtpInput from "react-otp-input";
import "./../OtpForm/EnterOtpForm.scss";

function OtpInfoForm() {
  
  /**
   * Otp validation left 
   */
  
    const validateMessages = {
    required: "${label} is required",
  };

  const [otpValue, setOtpValue] = useState<any>("");

  const handleChange = (otp: any) =>{
     setOtpValue(otp)
  }

  const onFinish = (values: any) => {
    const newMap = {...values, user:{ ...values.user, otp: otpValue}}
    console.log(newMap)  
};

  return (
    <div className="otp-form">
      <Form
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          rules={[{ required: false, type: "email" }]}
          label="Work Email"
        >
          <Input  disabled={true} placeholder="Enter work email" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true}]}
          label="Enter OTP"
        >
          <OtpInput 
           numInputs={6}
           value={otpValue}
           inputStyle="input-box"
           onChange={handleChange}
           hasErrored
           isInputNum
           separator={<span></span>}
           />
           <p className="otp-text">
            Didn’t receive the OTP ? 
           </p>
           <p className="resend-text">
           Click on Resend OTP in 1:00
           </p>
        </Form.Item>
        <Form.Item>
          <Button
            style={{ marginTop: "3rem" }}
            type="primary"
            htmlType="submit"
            block
          >
            Submit OTP
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default OtpInfoForm;
