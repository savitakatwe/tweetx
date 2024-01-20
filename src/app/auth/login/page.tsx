"use client";
import Button from "@/components/Button/Button";
import TextBox from "@/components/TextBox/TextBox";
import Avatar from "@/components/Avatar/Avatar";
import Typography from "@/components/Typography/Typography";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 20px 50px;
  width: 500px;
`;
const StyledTitle = styled.div`
  padding: 40px 0;
`;
const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
`;
const StyledButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function LoginPage() {
  return (
    <StyledContainer>
      <Button variant={"secondary"}>Create Account</Button>
      <StyledTitle>
        <Typography variant={"title1"} color={"black"}>
          Login
        </Typography>
      </StyledTitle>
      <StyledTextBox>
        <TextBox placeholder={"Email"} />
        <TextBox placeholder={"Password"} />
      </StyledTextBox>

      <StyledButton>
        <Typography variant={"body"} color={"black"}>
          Forgot Password ?
        </Typography>
        <Button variant={"primary"}>Sign up</Button>
      </StyledButton>
    </StyledContainer>
  );
}
export default LoginPage;
