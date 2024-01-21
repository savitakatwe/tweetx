import { ILoginDtoRequest, ILoginDtoResponse } from "@/types/login.dto";
import { ISignUpDtoRequest, ISignUpDtoResponse } from "@/types/register.dto";

class AuthService {
  async login(payload: ILoginDtoRequest): Promise<ILoginDtoResponse> {
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status === 200) {
      return res.json();
    }
    return Promise.reject(res);
  }

  async register(payload: ISignUpDtoRequest): Promise<ISignUpDtoResponse> {
    const res = await fetch("http://localhost:4000/signup", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });

    if (res.status === 200) {
      return res.json();
    }
    return Promise.reject(res);
  }
}

const authService = new AuthService();
export default authService;
