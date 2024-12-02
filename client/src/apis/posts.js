import { baseApi } from "./base";

export function getPosts(options) {
  return baseApi.get("/posts", options).then(res => res.data)
}

export function getPost(postId, options) {
  return baseApi.get(`/posts/${postId}`, options).then((res) => res.data);
}

export function createPost(data, options) {
  return baseApi.post(`/posts`, data, options).then(res => res.data)
}

export function updatePost(id, data, options) {
  return baseApi.put(`/posts/${id}`, data, options).then((res) => res.data);
}
