import Button from "@/components/Button/Button";
import TextBox from "@/components/TextBox/TextBox";
import Avatar from "@/components/Avatar/Avatar";
import Typography from "@/components/Typography/Typography";

function LoginPage() {
  return (
    <div>
      <h2>Login</h2>
      <Button variant={"primary"}>Login</Button>
      <Button variant={"secondary"}>Create Account</Button>
      <Button variant={"transparent"}>Create Account</Button>
      <TextBox></TextBox>
      <Avatar size={"small"} />
      <Avatar size={"large"} />
      <Typography variant={"title1"} color={"pink"}>
        title1
      </Typography>
      <Typography variant={"title2"} color={"pink"}>
        title2
      </Typography>
      <Typography variant={"body"} color={"pink"}>
        body
      </Typography>
      <Typography variant={"small"} color={"pink"}>
        small
      </Typography>
    </div>
  );
}
export default LoginPage;
