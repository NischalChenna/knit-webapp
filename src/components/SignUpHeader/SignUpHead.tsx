import { Typography } from "antd"
import "./../SignUpHeader/SignUpHead.scss"

function SignUpHead(){
    
    
    return (
       
        <div className="signup-container">
            <Typography.Title className="title-text">Get Started</Typography.Title>
            <Typography.Title className="signup-type-title">1.Sign-Up</Typography.Title>
            <div className="status-shape-container">
                 <div className="status-shape"></div>
                 <div className="status-shape"></div>
            </div>
        </div>
      
    )
}


export default SignUpHead