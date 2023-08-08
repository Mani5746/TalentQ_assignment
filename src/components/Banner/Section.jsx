import { Stack, VStack, Text, Button, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import Card from '../Card/Card';
import { section } from '../data';
import { card } from '../data';
const Section = () => {
  return (
    <VStack
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'80%'}
      margin={'auto'}
      gap={'5'}
    >
      {section.map(item => {
        const arr = card.filter(c => c.parent_sec === item.id);
        return (
          <Stack
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            margin={'auto'}
            backgroundColor={item.color}
            gap={'5'}
          >
            <Heading children={`${item.title}`} />
            <Card arr={arr} />
          </Stack>
        );
      })}
    </VStack>
  );
};

export default Section;
