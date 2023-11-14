import { BASE_URL } from "../../constants";
import { Api } from "../../routes/api";

export async function login(data: { email: string; password: string }) {
  const response = await fetch(`${BASE_URL}/auth${Api.LOGIN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}
