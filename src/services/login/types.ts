export type LoginData = {
  email: string;
  password: string;
};

export interface LoginState {
  token: string;
  refreshToken: string;
}
