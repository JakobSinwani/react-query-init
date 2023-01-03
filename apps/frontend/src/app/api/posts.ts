import axios from 'axios';

export interface PostI {
  title: string;
  body: string;
  id: number;
  userId: number;
}

const postsClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
export async function getPosts() {
  try {
    const { data } = await postsClient('posts');
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getPost(id: string) {
  const { data } = await postsClient.get('posts/' + id);
  return data;
}

export async function createPost(post: PostI) {
  const { data } = await postsClient.post('posts', post);
  return data;
}
