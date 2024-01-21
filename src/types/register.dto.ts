import { IUser } from "@/types/IUser";

export interface ISignUpDtoRequest {
  name: string;
  textId: string;
  password: string;
}

export interface ISignUpDtoResponse {
  jwtToken: string;
  user: IUser;
}
