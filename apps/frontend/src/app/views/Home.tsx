import React, { useCallback } from 'react';
import { PostI } from '../api/posts';
import Post from '../components/post';
import { Box, Flex } from '@chakra-ui/react';
import PostCount from '../components/post-count';

function Home() {
  /** Replace this post variable with useQuery hook that return posts.*/
  const posts: PostI[] = [];
  const postCard = useCallback(
    (post: PostI) => <Post {...post} key={Math.random() * 10000} />,
    []
  );
  /** Add Here Loader Component When status is "loading", and Error component when status is "error" */
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
