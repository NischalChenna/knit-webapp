import { Row, Col } from "antd";
import { useState } from "react";
import {
  AdditionalForm,
  OtpInfoForm,
  SignUpForm,
  SignUpHead,
  TestimonialCard,
} from "../components";

const SignUp: React.FC = () => {
  const [userEmail, setEmail] = useState<string | null>(null);
  const [step, setStep] = useState<number>(0);
  const updateEmail: Function = (str: string | null): void => {
    setEmail(str);
  };
  const nextStep: Function = (): void => {
    if (step < 2) setStep(step + 1);
  };
  const prevStep: Function = (): void => {
    if (step > 0) setStep(step - 1);
  };
  return (
    <Row>
      <Col span={12}>
        <TestimonialCard />
      </Col>
      <Col span={12}>
        <SignUpHead />
        {/* <AdditionalForm /> */}
        {/* <OtpInfoForm />   */}
        {
          {
            0: <SignUpForm nextStep={nextStep} updateEmail={updateEmail} />,
            1: (
              <OtpInfoForm
                userEmail={userEmail}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            ),
          }[step]
        }
      </Col>
    </Row>
  );
};

export default SignUp;
