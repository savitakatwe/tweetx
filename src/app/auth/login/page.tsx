import Button from "@/components/Button/Button";
import TextBox from "@/components/TextBox/TextBox";
import Avatar from "@/components/Avatar/Avatar";

function LoginPage() {
  return (
    <div>
      <h2>Login</h2>
      <Button variant={"primary"}>Login</Button>
      <Button variant={"secondary"}>Create Account</Button>
      <Button variant={"transparent"}>Create Account</Button>
      <TextBox></TextBox>
      <Avatar />
    </div>
  );
}
export default LoginPage;
