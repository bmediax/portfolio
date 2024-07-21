import axios, { AxiosRequestConfig } from "axios";

const fetcher = (url: string, headers?: AxiosRequestConfig) =>
  axios.get(url, headers).then((res) => res.data);

// export const axiosFetcher = (url: string) =>
//   axios.get(url).then((res) => res.data);

export default fetcher;
