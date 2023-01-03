import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Heading, Text } from '@chakra-ui/react';

function PostPage() {
  const { postId } = useParams();
  // const {
  //   data: post,
  //   isLoading,
  //   isError,
  // } = useQuery<PostI, { message: string }>('post', () =>
  //   getPost(postId as string)
  // );

  return (
    <Container p={10}>
      <Heading variant={'h6'}>Title</Heading>
      <Text>Body</Text>
    </Container>
  );
}

export default PostPage;
