"use client";
import Button from "@/components/Button/Button";
import TextBox from "@/components/TextBox/TextBox";
import Avatar from "@/components/Avatar/Avatar";
import Typography from "@/components/Typography/Typography";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import authService from "@/services/authService";
import Storage from "@/services/storage";

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
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const res = await authService.login({
      textId: email,
      password: password,
    });
    Storage.setItem("token", res.jwtToken);
    Storage.setItem("name", res.user.name);
    if (res) {
      router.push("/home/profile");
    }
  };

  return (
    <StyledContainer>
      <Button
        variant={"secondary"}
        onClick={() => router.push("/auth/register")}
      >
        Create Account
      </Button>
      <StyledTitle>
        <Typography variant={"title1"} color={"black"}>
          Login
        </Typography>
      </StyledTitle>
      <StyledTextBox>
        <TextBox
          placeholder={"Email"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextBox
          placeholder={"Password"}
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </StyledTextBox>

      <StyledButton>
        <Typography variant={"body"} color={"black"}>
          Forgot Password ?
        </Typography>
        <Button variant={"primary"} onClick={submit}>
          Login
        </Button>
      </StyledButton>
    </StyledContainer>
  );
}
export default LoginPage;
