"use client";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import TextBox from "@/components/TextBox/TextBox";
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
  justify-content: flex-end;
`;

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const submit = async () => {
    const res = await authService.register({
      name: name,
      textId: email,
      password: password,
    });

    Storage.setItem("token", res.jwtToken);
    if (res) {
      router.push("/auth/login");
    }
  };
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
        <TextBox
          placeholder={"Name"}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
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
        <TextBox
          placeholder={"Confirm Password"}
          value={confirmPassword}
          type="password"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </StyledTextBox>
      <StyledButton>
        <Button variant={"primary"} onClick={submit}>
          Sign up
        </Button>
      </StyledButton>
    </StyledContainer>
  );
}
export default Register;
