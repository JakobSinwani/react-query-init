import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

function Loader() {
  return (
    <Flex minH={'50vh'} justifyContent={'center'} alignItems={'center'}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        minW={300}
        minH={300}
      />
    </Flex>
  );
}

export default Loader;
