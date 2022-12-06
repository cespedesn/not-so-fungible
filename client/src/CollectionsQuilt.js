import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function WovenImageList() {
  return (
    <ImageList 
    className='collectionsquilt'
    sx={{ width: 500, height: 450 }} 
    variant="woven" 
    cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: './images/a13.png',
    title: 'Astronuts',
  },
  {
    img: './images/bb5.png',
    title: 'Baby Baboons',
  },
  {
    img: './images/brf16.png',
    title: 'Bob Ross Flossies',
  },
  {
    img: './images/dbb3.png',
    title: 'Dance Battle Bears',
  },
  {
    img: './images/fg16.png',
    title: 'Forrest Grumps',
  },
  {
    img: './images/hd15.png',
    title: 'Hot Dawgs',
  },
  {
    img: './images/ll16.png',
    title: 'Lonely Lemurs',
  },
  {
    img: '/images/mm15.png',
    title: 'MerMommas',
  },
  {
    img: './images/mmm14.png',
    title: 'MoMa Meow Meows',
  },
  {
    img: './images/nn16.png',
    title: 'Nunchuck Norris',
  },
  {
    img: './images/oef8.png',
    title: 'One Eyed Frens',
  },
  {
    img: './images/sm16.png',
    title: 'Snail Mail',
  },
];