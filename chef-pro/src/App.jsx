
import { useState } from 'react';
import './App.css'
import Banner from './components/header/Banner'
import Navbar from './components/header/Navbar'
import Our from './components/main/Our';
import Recipes from './components/main/Recipes';
import SideBar from './components/main/SideBar';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

   const handleToast =()=>{
    toast(`Already Exist`);
   }

  const [addToCart, setAddtocart]= useState([]);
  const [addtocc, setAddtocc]= useState([]);

  const handleAddtocartBtn =(food)=>{
     
    const isExist = addToCart.find((item) => item.recipe_id===food.recipe_id);
    if(!isExist){
      setAddtocart([...addToCart, food]);
    } else {
      handleToast();
    } 
  }

  const handlePreparingBtn =(card)=>{
    const newAddtocc = [...addtocc, card];
    setAddtocc(newAddtocc);
    const newAddToCart = addToCart.filter(
      (item) => item.recipe_id != card.recipe_id
    );
    setAddtocart(newAddToCart)
  }


  return (
    <div>
      <header className="mx-auto container">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="mx-auto container">
        <Our></Our>
        <div className="flex gap-x-6 ">
          <Recipes handleAddtocartBtn={handleAddtocartBtn}></Recipes>
          <SideBar
            addToCart={addToCart}
            handlePreparingBtn={handlePreparingBtn}
            addtocc={addtocc}
          ></SideBar>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App
//             handlePreparingBtn={handlePreparingBtn}