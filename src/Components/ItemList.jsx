import {useState} from 'react';
import { CDN_URL } from '../utils/constants';

const ItemList = ({ items }) => {

  console.log(items);
 
  return (
    <div>
        {
        items.map((item) => (
            <div className = " p-2 m-2  border-stone-400 border-b-2 text-left flex justify-between"
              key={item.card.info.id}>
              <div className='w-9/12'>
                <div className='py-2'>
                <span className='text-lg font-semibold'>
                  {item.card.info.name}
                  </span>
                  <span className='ml-[8px]  text-lg font-semibold text-green-600 bg-pink-300 rounded-md p-[4px]'>
                  - ₹
                  {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
                </span>
                </div>
                <p className='text-xs'>{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4 relative">
            <div className="">
              <button className="absolute bottom-0 p-2 mt-12 ml-10 rounded-lg bg-black text-white shadow-lg opacity-85  hover:opacity-65 active:opacity-90">
                  Add +
                  
              </button>
            </div>
            <img  src={CDN_URL + item.card.info.imageId} className="w-full rounded-md" />
          </div>
            </div>
          )
          )
        }

    </div>
  )
}

export default ItemList
