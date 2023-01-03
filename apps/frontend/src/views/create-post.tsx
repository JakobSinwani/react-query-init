import React from 'react';
import { Heading } from '@chakra-ui/react';
import PostCount from '../components/post-count';
import Error from '../components/Error';

function PostsList() {
  return (
    <Heading>
      Posts list:
      <PostCount />
      <Error message={'posts not found'} />
    </Heading>
  );
}

export default PostsList;
