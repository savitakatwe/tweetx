import { User } from "@/types/user";

export interface ISignUpDtoRequest {
  name: string;
  textId: string;
  password: string;
}

export interface ISignUpDtoResponse {
  jwtToken: string;
  user: User;
}
