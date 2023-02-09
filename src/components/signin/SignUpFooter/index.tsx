import { Button } from "antd";
interface SignUpFooterProps {
  toggleNewUser: Function;
  newUser: Boolean;
}

const SignUpFooter = (props: SignUpFooterProps): JSX.Element => {
  return (
    <div className="information-container">
      <p>
        {props.newUser ? `Already have an account?` : `Don't have an account?`}
        <Button
          onClick={(e: any) => {
            e?.preventDefault();
            props.toggleNewUser();
          }}
          type="text"
          className="px-0"
        >
          {props.newUser ? `Log In` : `Sign Up`}
        </Button>
      </p>
      <p>
        By {props.newUser ? `creating an account` : `logging in`}, you’re
        agreeing to our Terms and Conditions and Privacy Policy
      </p>
    </div>
  );
};

export default SignUpFooter;
