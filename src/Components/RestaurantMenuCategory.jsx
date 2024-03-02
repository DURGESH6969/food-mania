import React,{useState} from 'react'
import ItemList from './ItemList';

const RestaurantMenuCategory = (props) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = ()=>{
    setShowItems(!showItems)
  }
  return (
    <div>
      <div className='w-6/12 mx-auto my-4 bg-green-100 shadow-lg p-4 '>
        <div className='flex justify-between cursor-pointer'
          onClick={handleClick}
        >
          <span className='font-bold text-lg'>
            {props.props.title}({props?.props?.itemCards?.length})
          </span>
          <span>⬇️</span>
      </div>
          { showItems && <ItemList items = {props?.props?.itemCards}/>}
      </div>
    </div>

  )
}

export default RestaurantMenuCategory
