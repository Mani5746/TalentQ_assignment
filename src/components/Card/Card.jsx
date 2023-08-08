import { Stack, Text, Button, VStack, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ arr, len }) => {
  const [length, setLength] = useState(false);
  let sliceArray = arr;
  if (length === false) {
    sliceArray = arr.slice(0, 3);
  }
  return (
    <VStack>
      <Stack display={'flex'} flexDirection={'row'} gap={'3'} flexWrap={'wrap'}>
        {sliceArray.map((item, index) => {
          let cursor = 'default';
          if (item.cursor === true) cursor = 'pointer';

          return item.link ? (
            <Stack
              display={'flex'}
              justifyContent={'center'}
              minWidth={'200'}
              height={'200'}
              padding={'5'}
              margin={'auto'}
              backgroundColor="#FFADC9"
              gap={'5'}
              cursor={`${cursor}`}
              borderRadius={'1rem'}
            >
              <Link to={item.redirect}>
                <Heading children={`${item.card_title}`} fontSize={'1xl'} />
                {item.data && <Text>{item.data_value}</Text>}
                {item.button_name && <Button>{item.button_name}</Button>}
                <Text>{item.note}</Text>
              </Link>
            </Stack>
          ) : (
            <Stack
              display={'flex'}
              justifyContent={'center'}
              alignItems={'start'}
              minWidth={'200'}
              height={'200'}
              padding={'5'}
              margin={'auto'}
              backgroundColor="#FFADC9"
              gap={'5'}
              cursor={`${cursor}`}
              borderRadius={'1rem'}
            >
              <Heading children={`${item.card_title}`} fontSize={'1xl'} />
              {item.button_name && <Button>{item.button_name}</Button>}
              <Text>NOTE: {item.note}</Text>
            </Stack>
          );
        })}
      </Stack>
      <Stack>
        {length ? (
          <Button onClick={() => setLength(false)} marginBottom={'2'}>
            show less
          </Button>
        ) : (
          <Button onClick={() => setLength(true)} marginBottom={'2'}>
            More items
          </Button>
        )}
      </Stack>
    </VStack>
  );
};

export default Card;
