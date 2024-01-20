"use client";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import TextBox from "@/components/TextBox/TextBox";
import styled from "styled-components";
import { useRouter } from "next/navigation";

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
  justify-content: flex-end;
`;
function Register() {
  const router = useRouter();
  return (
    <StyledContainer>
      <Button variant={"secondary"} onClick={() => router.push("/auth/login")}>
        Login
      </Button>
      <StyledTitle>
        <Typography variant={"title1"} color={"black"}>
          Create Account
        </Typography>
      </StyledTitle>
      <StyledTextBox>
        <TextBox placeholder={"Name"} />
        <TextBox placeholder={"Email"} />
        <TextBox placeholder={"Password"} />
        <TextBox placeholder={"Confirm Password"} />
      </StyledTextBox>
      <StyledButton>
        <Button variant={"primary"}>Sign up</Button>
      </StyledButton>
    </StyledContainer>
  );
}
export default Register;
