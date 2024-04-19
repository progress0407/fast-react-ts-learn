import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/Resturant';
import BestMenu from './BestMenu';

let data:Restaurant = {
  name: '누나네 식당',
  category: 'western',
  address: {
    city: 'incheon',
    detail: 'somewhere',
    zipCode: 23425634
  },
  menu: [
      {name:'rese pasta', price:2000, category:'pasta'}, 
      {name:'garlic steak', price: 3000, category:'steak'}
    ]
}

/**
 * 
 * @returns FC: Function Component
 */
const App:React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)
  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestaurant, address:address})
  }
  const showBestMenuName = (name:string) => {
    return name
  }

  return (
    <div className="App">
      <Store info={data} changeAddress={changeAddress}/>
      <BestMenu name="불고기 피자" category="피자" price={1000} showBestMenuName={showBestMenuName} />
    </div>
  );
}

export default App;
