import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'

function Playground() {
    const [prompt, setPrompt] = useState('')
    const [nftResult, setNftResult] = useState('')
    const [nftLoading, setNftLoading] = useState(false)
    const [example, setExample] = useState(" A lama in pajamas drinking coffee digital art")

    // for api key
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_Key,
    })

    // asign configuration variable to openai to createImage
    const openai = new OpenAIApi(configuration);

    // code from openai to createImage
    const generateNft = async () => {
         const res = await openai.createImage({
            //description for image creation
            prompt: prompt,
            //number of images
            n: 1,
            //size of image
            size: "1024x1024"
          });
          console.log(res)
    // loading state to let user know that image is loading
          setNftLoading(false)
          setNftResult(res.data.data[0].url)
    }
    
    // track inputs in textarea
    const handleChange = (e) => {
        setPrompt(e.target.value)
    } 
    
  return (
    <div className='pg-main'>
        <h3>Generate you own very NFT!</h3>
        <textarea 
            className='pg-input'
            onChange={handleChange}
            placeholder= {example}
            rows= '10'
            cols= '20'
        />

            <button 
            className='generate-btn'
            onClick={generateNft}> Generate </button>
            
    </div>
  );
}

export default Playground


// {nftLoading ? (
//     <>
//         <h3>Loading Nft...</h3>
//         <div className='1ds-ripple'>
//             <div></div>
//             <div></div>
//         </div>
//     </>
// ) : (
//     <>
//         <h3> Generate you own very NFT! </h3>
//         <textarea 
//             className='pg-input'
//             onChange={handleChange}
//             placeholder= {example}
//             rows= '10'
//             cols= '30'
//         />
//         <button 
//         className='generate-btn'
//         onClick={generateNft}> Generate </button>

//         {/* {nftResult.length > 0 ? ( */}
//             <img className= 'nft-image'
//             src= {nftResult} 
//             alt= 'Nft Result'/>
//         {/* ) : (<> </>) } */}
//     </>
// )}