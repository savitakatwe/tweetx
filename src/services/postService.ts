import { ICreateFeedDtoRequest, IFeedDtoResponse } from "@/types/feed.dto";
import { ILoginDtoRequest } from "@/types/login.dto";
import { backendUrl } from "@/configs/configs";
import Storage from "@/services/storage";

class PostService {
  async getMyFeed(): Promise<IFeedDtoResponse[]> {
    const token = Storage.getItem("token");
    const res = await fetch("http://localhost:4000/getMyFeed", {
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

  async createFeed(payload: ICreateFeedDtoRequest) {
    const token = Storage.getItem("token");
    const res = await fetch(backendUrl + "post", {
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
const postService = new PostService();
export default postService;
