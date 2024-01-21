import { IFeedDtoResponse } from "@/types/feed.dto";

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
}
const postService = new PostService();
export default postService;
