import { BASE_URL } from "../../constants";
import { Api } from "../../routes/api";
import { RequestOptions } from "../types";

export async function fetchRoles(requestOptions?: RequestOptions) {
  const query = requestOptions?.query;
  const headers = requestOptions?.headers;
  const response = await fetch(`${BASE_URL}${Api.ROLES}${query ? query : ""}`, {
    headers,
  });
  return await response.json();
}
