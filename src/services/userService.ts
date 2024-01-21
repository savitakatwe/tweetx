import { IUser } from "@/types/IUser";
import { backendUrl } from "@/configs/configs";

class UserService {
  async getUsers(): Promise<IUser[]> {
    const token = localStorage.getItem("token");
    const res = await fetch(backendUrl + "getUsers", {
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
