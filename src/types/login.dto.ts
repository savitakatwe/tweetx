import { IUser } from "@/types/IUser";

export interface ILoginDtoRequest {
  textId: string;
  password: string;
}

export interface ILoginDtoResponse {
  jwtToken: string;
  user: IUser;
}
