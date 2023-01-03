import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPost, PostI } from '../api/posts';
import { Container, Heading, Text } from '@chakra-ui/react';
import Loader from '../components/loader';
import Error from '../components/Error';

function PostPage() {
  const { postId } = useParams();
  const {
    data: post,
    isLoading,
    isError,
  } = useQuery<PostI, { message: string }>('post', () =>
    getPost(postId as string)
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error message={'this is fake api....'} />;
  return (
    <Container p={10}>
      <Heading variant={'h6'}>{post?.title}</Heading>
      <Text>{post?.body}</Text>
    </Container>
  );
}

export default PostPage;
