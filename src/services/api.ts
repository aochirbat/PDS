import axios from "axios";

interface Props {
  baseUrl: string;
}

export const api = ({ baseUrl }: Props) => {
  return axios.create({
    baseURL: baseUrl,
    headers: { "Content-Type": "application/json" },
  });
};
