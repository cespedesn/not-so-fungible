import React, {useState, useEffect} from 'react'
import bb15 from './Carousel/bb15.png'
import dbb12 from './Carousel/dbb12.png'
import nn7 from './Carousel/nn7.png'
import ss14 from './Carousel/ss14.png'
import yc11 from './Carousel/yc11.png'


function Carousel() {
  const [index, setIndex] = useState(0);
// modulos function to return a positive value /checking if a number is odd/even
    const mod = (n, m) => {
        let result = n % m;

        // Return a positive value
        return result >= 0 ? result : result + m;
    };

    const tiles = [
        {
            id: "1",
            image: bb15,
        },
        {
            id: "2",
            image: dbb12,
        },
        {
            id: "3",
            image: yc11,
        },
        {
            id: "4",
            image: nn7,
        },
        {
            id: "5",
            image: ss14,
        },

    ]
// useEffect to make it dynamic and rotating images
    useEffect(() => {
        setTimeout(() => {
          setIndex((index + 1) % tiles.length);
        }, 3000);
      }, [index]);

  return (
    <div className='carousel-parent'>
        <div className='carousel'>
          {tiles.map((item, i) => {
            const indexLeft = mod(index - 1, tiles.length);
            const indexRight = mod(index + 1, tiles.length);
            const indexFarLeft = mod(index - 3, tiles.length);
            const indexFarRight = mod(index + 3, tiles.length);

            let className = "tiles";

            if (i === index) {
              className = "tile-highlight";
            } else if (i === indexRight) {
              className = "tile-right";
            } else if (i === indexFarRight) {
              className = "tile-far-right";
            } else if (i === indexLeft) {
              className = "tile-left";
            } else if (i === indexFarLeft) {
              className = "tile-far-left";
            } else className = "tiles";

            return (
              <img
                key={item.id}
                className={className}
                src={item.image}
                alt="Nft"
              ></img>
            );
          })}

            {/* <img className= "card-far-left" src={bb15.png} alt="bb15.png" />
            <img className= "card-left" src={dbb12.png} alt="dbb12.png" />
            <img className= "card-highlight" src={yc11.png} alt="yc11.png" />
            <img className= "card-right" src={nn7.png} alt="nn7.png" />
            <img className= "card-far-right" src={ss14.png} alt="ss14.png" /> */}
        </div>
        <div className='welcome-div'>
            <h2 className='welcome'> Welcome, to the exclusive NFT marketplace </h2>
            
        </div>
        <br/>
        <div>
          <img 
          className='logo'
          src='https://previews.dropbox.com/p/thumb/ABu77kNauS5YjjRicRN3moKjKkYUeaxJ5l57xhuT95gieUAvh8VhwTyJ8iG6hkZEAf8yVJvk_EbjkXy7bT6Cc-r8YvFDYksJLUyVQgvTNuKLUEmsmQjf56LoLH5Tt-YC6n69uAUc6tyctOc-Qpj7J-mb0KEAe-ls2_g2HbCnIeB0t4coXDPqPojsQbHTHbhUjHMvg8JJms8ZxWh8FJZoOOlcR4En8rU8lt_8MekAlmuwLVINxYO7kydTplE5PvFUmxud_EB7m1gCaxNxSMuc7d9j_LJHii7hZbY_s3bS8PYZv5dU8Az4-es60fj5BB20dQzvMNIVqnAvCS5FpTOazrS0ejaDboDFJBC0Zbf_vo3fjHCeD_s1D08LzDueTvq7HFA/p.png' alt='[not so] FUNgible'/>
        </div>
    </div>
  )
}

export default Carousel