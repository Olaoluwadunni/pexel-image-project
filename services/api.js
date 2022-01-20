import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    'Authorization': '563492ad6f917000010000015a11dbb0735341f8995bae23e34eee95'
  }
})

export const getSearch = (query) => apiInstance.get(`search`, {
  params: {
    query
  }
});