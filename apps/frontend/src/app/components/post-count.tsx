import React from 'react';
import { Heading } from '@chakra-ui/react';
import { PostI } from '../api/posts';

function PostCount() {
  /** retrieve the posts from the React query cache.
   * Read about "getQueryData" here:
   * https://tanstack.com/query/v4/docs/react/reference/QueryClient
   * */
  const posts: PostI[] = [];
  return (
    <Heading m={4} variant={'h1'}>
      Total Posts: {posts && posts.length}
    </Heading>
  );
}

export default PostCount;
