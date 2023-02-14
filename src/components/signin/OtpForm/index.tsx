import { Button, notification } from "antd";
import { useState, useEffect } from "react";
import OtpInput from "react18-input-otp";
import getAxiosInstance from "../../../services/Api";
import { OTP_TIMER } from "../../../utils/constants";
import "./../OtpForm/EnterOtpForm.scss";
import Countdown from "../../Countdown";
import { subscribe, unsubscribe } from "../../../utils/events";
import { time } from "console";
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
  const [resendDisabled, setResendDisabled] = useState<boolean>(true);
  const handleChange = (otp: any) => {
    setOtpValue(otp);
  };

  useEffect(() => {
    subscribe("countdownComplete", () => {
      setResendDisabled(false);
    });
    return () => {
      unsubscribe("countdownComplete", () => {
        setResendDisabled(true);
      });
    };
  }, []);

  const submitOtp = (e: any): void => {
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
          if (!props.newUser) {
            localStorage.setItem(
              "knit_jwt",
              "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJuaXNjaGFsQGdldGtuaXQuZGV2IiwidXNlcklkIjoidV95NjdySmdQbWxKY05idE4wR2ZiNlc4Iiwib3JnSWQiOiJvX3pFMkFNUWVCZjlxckZnOWkxSjgwVkgiLCJleHBpcmVzQXQiOjE2NzcxNDU3MTl9.wzgaiK9dvIntyKA4kFx1iRf_suKhAYo-GX_AViJ4CwE"
            );
          }
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

  const onReenter = (e: any): void => {
    e?.preventDefault();
    props.prevStep();
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
          onClick={onReenter}
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
          disabled={resendDisabled}
          className="font-bold"
          style={{ paddingInline: 0 }}
          onClick={(e: any) => {
            e?.preventDefault();
            setResendDisabled(true);

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
        in <Countdown countMax={OTP_TIMER} timertoggler={resendDisabled} />s
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
