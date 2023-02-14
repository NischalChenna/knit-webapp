import { Row, Col, Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AdditionalForm,
  OtpInfoForm,
  SignUpForm,
  SignUpHead,
  TestimonialCard,
  SignUpFooter,
} from "../components";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [userEmail, setEmail] = useState<string | null>(null);
  const [step, setStep] = useState<number>(0);
  const [newUser, setNewUser] = useState(false);
  const updateEmail: Function = (str: string | null): void => {
    setEmail(str);
  };
  const nextStep: Function = (): void => {
    switch (step) {
      case 0:
        setStep(step + 1);
        break;
      case 1:
        newUser ? setStep(step + 1) : navigate("/dashboard/home");
        break;
      default:
        break;
    }
  };
  const prevStep: Function = (): void => {
    if (step > 0) setStep(step - 1);
  };

  const toggleNewUser: Function = (): void => {
    setNewUser(!newUser);
    if (step !== 0) setStep(0);
    if (userEmail) setEmail(null);
  };
  return (
    <Row justify={"center"}>
      <Col span={8}>
        <SignUpHead newUser={newUser} step={[0, 1].includes(step) ? 1 : 2} />
        {
          {
            0: (
              <React.Fragment>
                <SignUpForm
                  newUser={newUser}
                  userEmail={userEmail}
                  nextStep={nextStep}
                  updateEmail={updateEmail}
                />
              </React.Fragment>
            ),
            1: (
              <React.Fragment>
                <OtpInfoForm
                  newUser={newUser}
                  userEmail={userEmail}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              </React.Fragment>
            ),
            2: <AdditionalForm userEmail={userEmail} newUser={newUser} />,
          }[step]
        }
        <SignUpFooter newUser={newUser} toggleNewUser={toggleNewUser} />
      </Col>
    </Row>
  );
};

export default SignUp;
