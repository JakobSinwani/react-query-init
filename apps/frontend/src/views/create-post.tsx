import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useMutation } from 'react-query';
import { createPost, PostI } from '../api/posts';
import Loader from '../components/loader';
import Error from '../components/Error';
import Post from '../components/post';

function CreatePost() {
  const mutation = useMutation('posts', createPost);
  const [post, setPost] = React.useState<PostI>({
    title: '',
    body: '',
    id: Math.random() * 1000_000,
    userId: Math.random() * 1000_000,
  });

  const handleSubmit = async () => {
    mutation.mutate({
      title: post.title,
      body: post.body,
      id: post.id,
      userId: post.userId,
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  return (
    <Container>
      <FormControl isRequired>
        <Card m={10}>
          <CardHeader>
            <Heading>Create Post</Heading>
          </CardHeader>
          <CardBody>
            <FormLabel>Title</FormLabel>
            <Input onInput={handleChange} name={'title'} placeholder="Title" />
            <FormLabel>Content</FormLabel>
            <Input
              onInput={handleChange}
              name={'body'}
              placeholder="Write content here..."
            />
          </CardBody>
          <CardFooter>
            <Button type={'submit'} onClick={handleSubmit}>
              Submit
            </Button>
          </CardFooter>
        </Card>
      </FormControl>
      {mutation.isLoading && <Loader />}
      {mutation.isError && <Error message={JSON.stringify(mutation.error)} />}
      {mutation.isSuccess && <Post {...mutation.data} />}
    </Container>
  );
}

export default CreatePost;
