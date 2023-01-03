import React from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';

export default function Layout() {
  const ACTIVE_COLOR = '#6826c2';
  const MIN_HEIGHT = '60px';
  return (
    <Box minH={MIN_HEIGHT}>
      <Flex
        as="header"
        position="fixed"
        w="100%"
        zIndex={10}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={MIN_HEIGHT}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Image
          mr={10}
          maxH={MIN_HEIGHT}
          src={require('../../assets/logo.png')}
        />
        <Box px={3}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? ACTIVE_COLOR : undefined,
            })}
            to={'/'}
          >
            Home
          </NavLink>
        </Box>
        <Box px={3}>
          <NavLink
            to={'/create'}
            style={({ isActive }) => ({
              color: isActive ? ACTIVE_COLOR : undefined,
            })}
          >
            Create Post
          </NavLink>
        </Box>
      </Flex>
    </Box>
  );
}

// function Layout() {
//   return (
//     <div style={{ position: 'fixed' }}>
//       <NavLink to={'/'}>Home</NavLink>
//       <NavLink to={'/posts-list'}>Posts List</NavLink>
//     </div>
//   );
// }
//
// export default Layout;
