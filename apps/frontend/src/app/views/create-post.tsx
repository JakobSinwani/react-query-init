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
import { PostI } from '../api/posts';

function CreatePost() {
  const [post, setPost] = React.useState<PostI>({
    title: '',
    body: '',
    id: Math.random() * 1000_000,
    userId: Math.random() * 1000_000,
  });

  const handleSubmit = async () => {
    alert(JSON.stringify(post));
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
    </Container>
  );
}

export default CreatePost;
