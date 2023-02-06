import { Row, Col } from "antd";
import { useState } from "react";
import { AdditionalForm, OtpInfoForm, SignUpForm, SignUpHead, TestimonialCard } from "../components";


function SignUp() {

    const [ title, setTitle ] = useState("1. Sign Up")

  return (
    <div>
      <div>
        <Row>
          <Col span={12}>
            <TestimonialCard />
          </Col>
          <Col span={12}>
           <SignUpHead />
           {/* <AdditionalForm /> */}
            <OtpInfoForm />  
           {/* <SignUpForm /> */}
        </Col>
        </Row>
      </div>
    </div>
  );
}

export default SignUp;
