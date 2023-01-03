import React, { useCallback } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createPost, getPosts, PostI } from '../api/posts';
import Post from '../components/post';
import { Button, Container, Heading } from '@chakra-ui/react';
import PostCount from '../components/post-count';

function Home() {
  const queryClient = useQueryClient();
  const { data: posts } = useQuery<PostI[]>('posts', getPosts);
  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  const postCard = useCallback(
    (post: PostI) => <Post {...post} key={Math.random() * 10000} />,
    []
  );
  return (
    <Container>
      <Button
        onClick={() =>
          mutation.mutate({
            title: 'New Post',
            body: 'hello world',
            id: Math.random() * 100203001,
            userId: Math.random() * 100000000,
          })
        }
      >
        Add Post
      </Button>
      <Heading variant={'h3'}>
        {mutation.isLoading ? 'lodaing...' : <Post {...mutation.data} />}
      </Heading>
      <PostCount />
      {posts?.length && posts.map((post: PostI, index) => postCard(post))}
    </Container>
  );
}

export default Home;
