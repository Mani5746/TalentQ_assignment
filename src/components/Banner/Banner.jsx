import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './Banner.css';
import { Carousel } from 'react-responsive-carousel';
import { Button, Stack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {banner} from '../data';
const Banner = () => {
  console.log(banner);
  return (
    <Stack marginTop={'10'}>
      <Carousel autoPlay={'true'} interval={2000} infiniteLoop={true}>
        {banner.map(item => (
          <VStack
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'80%'}
            height={'200'}
            background={'red'}
            margin={'auto'}
            gap={'5'}
            backgroundColor={`${item.color}`}
            borderRadius={'3'}
          >
            <Text children={`${item.text}`} />
            {item.button && (
              <Link to={item.link}>
                <Button>Banner</Button>
              </Link>
            )}
            
          </VStack>
        ))}
      </Carousel>
    </Stack>
  );
};

export default Banner;
