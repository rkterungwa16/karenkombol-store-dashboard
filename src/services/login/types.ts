export type LoginData = {
  email: string;
  password: string;
};

export interface LoginState {
  status: number | null;
  token: string;
  refreshToken: string;
  error: string;
}
