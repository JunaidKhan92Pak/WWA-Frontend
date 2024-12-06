import cookie from "cookie";

export const getAuthToken = () => {
  if (typeof document !== "undefined") {
    const cookies = cookie.parse(document.cookie);
    return cookies.authToken || null;
  }
  return null;
};