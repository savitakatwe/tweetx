import { ICreateFeedDtoRequest, IFeedDtoResponse } from "@/types/feed.dto";
import { ILoginDtoRequest } from "@/types/login.dto";

class PostService {
  async getMyFeed(): Promise<IFeedDtoResponse[]> {
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:4000/post", {
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
