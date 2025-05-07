import React from 'react'
import clean from "../assets/clean.png";
import paint from "../assets/paint.png";
import pest from "../assets/pest.png";
import gardener from "../assets/gardener.png";

const ArtisansTypeSmall = [
  {
    name: 'Cleaning',
    image: clean,
  },
  {
    name: 'Painting & Decorating',
    image: paint,
  },
  {
    name: 'Pest Control',
    image: pest,
  },
  {
    name: 'Gardeners',
    image: gardener,
  },
];


const ArtisanTypeSmall = () => {
  return (
    <div className='block lg:hidden'>
      {ArtisansTypeSmall.map((ArtisansTypeSmall,index)=>{
        return(
            <div key={index} className='flex flex-col items-center justify-center'>
                <img src ={ArtisansTypeSmall.image} alt={ArtisansTypeSmall.image}
                className='w-[100%] h-[100%] rounded-2xl shadow-lg group'/>
                <h2 className='text-center text-[16px] font-semibold mt-2'>{ArtisanTypeSmall.name}</h2>
                
        </div>
      )})}
    
    </div>
  )
}

export default ArtisanTypeSmall
