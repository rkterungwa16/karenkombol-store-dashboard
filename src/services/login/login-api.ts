import { CookieNames } from "../../components/auth/constants";
import { BASE_URL } from "../../constants";
import { Api } from "../../routes/api";
import { RequestWithPayloadOptions } from "../types";
import { LoginData } from "./types";

export async function login(
  requestOptions: RequestWithPayloadOptions<LoginData>,
) {
  const response = await fetch(`${BASE_URL}${Api.LOGIN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestOptions?.payload),
  });
  const responseWithJson = await response.json();
  return responseWithJson;
}
export async function refreshToken(refreshToken: string) {
  const headers = new Headers({
    "Content-Type": "application/json",
    "Set-Cookie": `${CookieNames.REFRESH_TOKEN}=${refreshToken}`,
  });
  const response = await fetch(`${BASE_URL}${Api.REFRESH_TOKEN}`, {
    method: "POST",
    headers,
  });
  return await response.json();
}
