import axios from "axios";

interface Props {
  baseUrl: string;
}

export const api = axios.create({
  baseURL: "https://doob.world:6499/v1",
  headers: { "Content-Type": "application/json" },
});
