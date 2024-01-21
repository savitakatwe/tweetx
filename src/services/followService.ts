import { IFollowDto } from "@/types/follow.dto";
import { backendUrl } from "@/configs/configs";
import Storage from "@/services/storage";

class FollowService {
  async followUser(payload: IFollowDto) {
    const token = Storage.getItem("token");
    const res = await fetch(backendUrl + "followUser", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
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
const followService = new FollowService();
export default followService;
