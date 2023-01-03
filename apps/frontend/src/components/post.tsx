import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';
import { PostI } from '../api/posts';
import { useNavigate } from 'react-router-dom';

function Post({ title, body, id }: PostI) {
  const navigate = useNavigate();
  return (
    <Card variant={'outline'} maxW={300} m={3}>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text pt="2" fontSize="sm">
          {body}
        </Text>
      </CardBody>
      <CardFooter>
        <Button onClick={() => navigate('/' + id)}>Read More</Button>
      </CardFooter>
    </Card>
  );
}

export default Post;
