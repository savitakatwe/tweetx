export interface IFeedDtoResponse {
  _id: string;
  userId: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ICreateFeedDtoRequest {
  message: string;
}
export interface ICreateFeedDtoResponse {
  _id: string;
  userId: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}
