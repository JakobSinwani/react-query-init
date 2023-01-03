import React, { useCallback } from 'react';
import { useQuery } from 'react-query';
import { getPosts, PostI } from '../api/posts';
import Post from '../components/post';
import { Box, Flex } from '@chakra-ui/react';
import Loader from '../components/loader';
import PostCount from '../components/post-count';
import Error from '../components/Error';

function Home() {
  const {
    data: posts,
    status,
    error,
    isLoading,
  } = useQuery<PostI[], { message: string }>('posts', getPosts);
  const postCard = useCallback(
    (post: PostI) => <Post {...post} key={Math.random() * 10000} />,
    []
  );
  if (isLoading) return <Loader />;
  if (status === 'error') return <Error message={error?.message} />;
  return (
    <Box>
      <PostCount />
      <Flex wrap={'wrap'} justifyContent={'center'} flexDirection={'row'}>
        {posts?.length && posts.map((post: PostI) => postCard(post))}
      </Flex>
    </Box>
  );
}

export default Home;
