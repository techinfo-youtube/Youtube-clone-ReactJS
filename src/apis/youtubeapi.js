import axios from "axios";
const KEY = "AIzaSyAxYTdTGDlgbCAqKpQhTrVlpCN4l3Eyl0I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});
