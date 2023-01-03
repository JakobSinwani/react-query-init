import React from 'react';
import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';

interface ErrorProps {
  message: string;
}
function Error({ message = 'error...' }: ErrorProps) {
  return (
    <Card variant={'outline'} maxW={300} m={3}>
      <CardHeader>
        <Heading size="md" color={'red.400'}>
          Error
        </Heading>
      </CardHeader>
      <CardBody>
        <Text pt="2" fontSize="sm">
          {message}
        </Text>
      </CardBody>
    </Card>
  );
}

export default Error;
