import { User } from "@/types/user";

export interface ILoginDtoRequest {
  textId: string;
  password: string;
}

export interface ILoginDtoResponse {
  jwtToken: string;
  user: User;
}
