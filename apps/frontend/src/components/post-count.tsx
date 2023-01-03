import React from 'react';
import { useQueryClient } from 'react-query';
import { Heading } from '@chakra-ui/react';
import { PostI } from '../api/posts';

function PostCount() {
  const queryClient = useQueryClient();
  const posts = queryClient.getQueryData<PostI[]>('posts');
  return (
    <Heading m={4} variant={'h1'}>
      Total Posts: {posts && posts.length}
    </Heading>
  );
}

export default PostCount;
