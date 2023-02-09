import { Button, notification } from "antd";
import { useState, useEffect } from "react";
import OtpInput from "react18-input-otp";
import getAxiosInstance from "../../../services/Api";
import { OTP_TIMER } from "../../../utils/constants";
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
  const [counter, setCounter] = useState<number>(OTP_TIMER);
  const handleChange = (otp: any) => {
    console.log(otp, typeof otp);
    setOtpValue(otp);
  };
  useEffect(() => {
    let TimerInt: any;

    if (counter > 0) {
      TimerInt = setInterval(() => {
        setCounter((time) => time - 1);
      }, 1000);
    }
    return () => {
      clearInterval(TimerInt);
    };
  }, [counter]);
  console.log("rendered");

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

  const onReenter = (e: any) => {
    e?.preventDefault();
    console.log("timer var in wrong email", counter);

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
          disabled={counter > 0}
          className="font-bold"
          style={{ paddingInline: 0 }}
          onClick={(e: any) => {
            e?.preventDefault();
            console.log("timer var in resend", counter);
            setCounter(OTP_TIMER);
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
        in <span id="otp-timer">{counter}</span>s
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
