import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  
  export default function QuiltedImageList() {
    return (
      <ImageList
      className='topquilt'
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
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
    img: './images/yc9.png',
    title: 'Yacht Chimps',
    rows: 2,
    cols: 2,
  },
  {
    img: './images/bb16.png',
    title: 'Baby Baboons',
  },
  {
    img: './images/nn13.png',
    title: 'Nunchuck Norris',
  },
  {
    img: './images/ss11.png',
    title: 'Silly Sloths',
    cols: 2,
  },
  {
    img: './images/dbb1.png',
    title: 'Dance Battle Bears',
    cols: 2,
  },
  {
    img: './images/dbb15.png',
    title: 'Honey',
    author: '@arwinneil',
    rows: 1,
    cols: 2,
  }
];
