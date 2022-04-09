import { urls } from "../utils/urls";
import { axiosService } from "./axiosService";

export const postService = {
  getAll: () => axiosService.get(urls.posts).then((response) => response.data),
  getById: (id) =>
    axiosService.get(`${urls.posts}/${id}`).then((response) => response.data),
};
