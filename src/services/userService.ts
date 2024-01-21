import { IUser } from "@/types/IUser";

class UserService {
  async getUsers(): Promise<IUser[]> {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:4000/getUsers", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token || "",
      },
    });
    if (res.status === 200) {
      return res.json();
    }
    return Promise.reject(res);
  }
}

const userService = new UserService();
export default userService;
