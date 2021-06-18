import axios from "axios";
import { APIURL } from "../../../utils/constants";

export function requestGetPermits() {
  return axios.request({
    method: "get",
    url: `${APIURL}?$limit=10`,
  });
}
