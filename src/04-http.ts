/**
 * Типізація HTTP-запитів з Axios.
 *
 * План:
 * - Generics у axios.get/post для типізації даних.
 * - Опис контрактів відповіді (DTO) і вкладених полів.
 * - Типізація запитів: params/body, коди відповіді.
 * - Обробка помилок AxiosError (unknown -> звуження).
 * - Завдання: прибрати any/unknown, додати контракти для постів.
 */

import axios from "axios";
//!======================================================
// axios.get<T> повертає Promise<AxiosResponse<T>>; data матиме тип T.
//!======================================================
// DTO: описуємо структуру відповіді/запиту окремими типами, щоб не дублювати.
//!======================================================
// Помилки: catch отримує unknown; звужуємо через axios.isAxiosError.
//!======================================================
/* 🧩 Task 1 — модель поста
 * Опиши Post з полями id/title/body/tags/reactions/views/userId.
 */
export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

interface GetPostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number
}

/* 🧩 Task 2 — отримати всі пости
 * Типізуй відповідь від dummyjson.com/posts (posts, total, skip, limit).
 */
export async function getAllPosts(): Promise<GetPostsResponse> {
  const response = await axios.get<GetPostsResponse>("https://dummyjson.com/posts");
  return response.data;
}

document.addEventListener('DOMContentLoaded', async () => {
  const data = await getAllPosts()
  data.
})

// {
//   "posts": ,
//   "total": 251,
//   "skip": 0,
//   "limit": 30
// }

/* 🧩 Task 3 — отримати пост за id
 * Додай тип для поста і параметра postId без any.
 */
export async function getPostById(postId: Post['id']): Promise<Post> {
  const response = await axios.get<Post>(`https://dummyjson.com/posts/${postId}`);
  return response.data;
}

/* 🧩 Task 4 — створити пост
 * Типізуй тіло запиту (title/body/tags) та відповідь.
 */
export type NewPost = {
  title: unknown;
  body: unknown;
  tags: unknown;
};

export async function createPost(newPost: NewPost): Promise<any> {
  const response = await axios.post("https://dummyjson.com/posts/add", newPost);
  return response.data;
}

/* 🧩 Task 5 — обгортка відповіді
 * Узагальни HttpResponse<T>, прибери any і додай код статусу.
 */
export type HttpResponse<T> = {
  data: T;
  code: number;
};

export const samplePost: HttpResponse<Post> = {
  data: {
    id: 0,
    title: "Sample",
    body: "Replace types",
    tags: [],
    reactions: { likes: 0, dislikes: 0 },
    views: 0,
    userId: 0,
  },
  code: 200,
};
