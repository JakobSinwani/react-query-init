import React from 'react';
import { useQueryClient } from 'react-query';
import { Heading } from '@chakra-ui/react';
import { PostI } from '../api/posts';

function PostsCount() {
  const queryClient = useQueryClient();
  const posts = queryClient.getQueryData<PostI[]>('posts');
  return <Heading variant={'h1'}>{posts && posts.length}</Heading>;
}

export default PostsCount;
