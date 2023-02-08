import { Button, notification } from "antd";
import { useState } from "react";
import OtpInput from "react18-input-otp";
import getAxiosInstance from "../../../services/Api";
import "./../OtpForm/EnterOtpForm.scss";

interface optFormProps {
  userEmail: string | null;
  prevStep: Function;
  nextStep: Function;
  newUser: Boolean;
}

const OtpInfoForm = (props: optFormProps) => {
  /**
   * Otp validation left
   */

  const validateMessages = {
    required: "${label} is required",
  };

  const [otpValue, setOtpValue] = useState<any>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const handleChange = (otp: any) => {
    console.log(otp, typeof otp);
    setOtpValue(otp);
  };

  const submitOtp = (e: any) => {
    e?.preventDefault();
    setLoading(true);
    getAxiosInstance()
      .post("auth.verifyOtp", {
        userEmail: props.userEmail,
        otp: otpValue,
        newUser: props.newUser,
      })
      .then((res) => {
        if (res.data.success) {
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

  return (
    <div className="otp-form">
      <p>
        The OTP has been sent to <b>{props.userEmail}</b>
      </p>
      <p>
        Entered wrong email ?{" "}
        <Button
          type="text"
          className="font-bold"
          style={{ paddingInline: 0 }}
          onClick={(e: any) => {
            e?.preventDefault();
            props.prevStep();
          }}
        >
          Re-enter{" "}
        </Button>{" "}
        the correct one
      </p>
      <OtpInput
        numInputs={6}
        value={otpValue}
        inputStyle="input-box"
        onChange={handleChange}
        hasErrored
        isInputNum={true}
        separator={<span></span>}
      />
      <p className="otp-text">Didn’t receive the OTP ?</p>
      <p className="resend-text">
        Click on{" "}
        <Button
          type="text"
          className="font-bold"
          style={{ paddingInline: 0 }}
          onClick={(e: any) => {
            e?.preventDefault();
            getAxiosInstance()
              .post("auth.resendOtp", {
                userEmail: props.userEmail,
              })
              .then((res) => {
                if (res.data.success) {
                  console.log("new OTP sent");
                }
              });
          }}
        >
          Resend OTP{" "}
        </Button>{" "}
        in 1:00
      </p>
      <Button
        style={{ marginTop: "1rem" }}
        type="primary"
        htmlType="submit"
        disabled={!/^\d{6}$/gm.test(otpValue)}
        block
        loading={isLoading}
        onClick={submitOtp}
      >
        {isLoading ? null : `Submit OTP`}
      </Button>
    </div>
  );
};

export default OtpInfoForm;
