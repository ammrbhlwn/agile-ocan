import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getToken = (): string => cookies.get("rplmonev_token");

export const setToken = (token: string) => {
  cookies.set("rplmonev_token", token, { path: "/" });
};

export const removeToken = () =>
  cookies.remove("rplmonev_token", { path: "/" });
