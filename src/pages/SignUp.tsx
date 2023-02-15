import { Row, Col, Button } from "antd";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignUpHead from "../components/signin/SignUpHeader";
import AdditionalForm from "../components/signin/AdditionalForm";
import OtpInfoForm from "../components/signin/OtpForm";
import SignUpForm from "../components/signin/SignUpForm";
import SignUpFooter from "../components/signin/SignUpFooter";
import { useAppSelector } from "../store/hooks";

const SignUp: React.FC = () => {
  const { isLoggedIn, isFirstLogin } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [userEmail, setEmail] = useState<string | null>(null);
  const [orgId, setOrgId] = useState<string | null>(null);
  const [step, setStep] = useState<number>(0);
  const [newUser, setNewUser] = useState(false);
  const updateEmail: Function = (str: string | null): void => {
    setEmail(str);
  };

  const nextStep: Function = (orgId: string): void => {
    console.log("orgId", orgId);
    setOrgId(orgId);
    console.log("orgId 1", orgId);
    switch (step) {
      case 0:
        setStep(step + 1);
        break;
      case 1:
        newUser ? setStep(step + 1) : null;
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
  return !isLoggedIn ? (
    <Row justify={"center"}>
      <Col span={8} style={{ minWidth: "600px" }}>
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
            2: (
              <AdditionalForm
                userEmail={userEmail}
                newUser={newUser}
                orgId={orgId}
              />
            ),
          }[step]
        }
        <SignUpFooter newUser={newUser} toggleNewUser={toggleNewUser} />
      </Col>
    </Row>
  ) : (
    <Navigate to="/dashboard/home" />
  );
};

export default SignUp;
