import { BASE_URL } from "../../constants";
import { Api } from "../../routes/api";

export async function fetchRoles() {
  const response = await fetch(`${BASE_URL}${Api.ROLES}`);
  return await response.json();
}
