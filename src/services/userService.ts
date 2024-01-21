import { IUser } from "@/types/IUser";
import { backendUrl } from "@/configs/configs";
import Storage from "@/services/storage";

class UserService {
  async getUsers(): Promise<IUser[]> {
    const token = Storage.getItem("token");
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
