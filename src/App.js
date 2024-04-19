import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import House from './components/House';
import { Route, Routes } from 'react-router-dom';
import Searchfilter from './components/Searchfilter';
import SearchFilter from './components/Searchfilter';
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  let [housesData,setHousesData] =useState([]);
   // get the data here, using fetch
  //async await with fetch and get json
  // console.log to check if data is correct

  useEffect(()=>
  {
    let fetchdata =async()=>
    {
      let response = await fetch("/houses.json");
      let data = await response.json();
        console.log(data);
        setHousesData(data);
    }
    fetchdata();
  },[]);
  return (
    <div className="container-fluid">
    <Header/>
    <SearchFilter allhouses={housesData} />

    <Routes>
          <Route path="/" element={<House houseInfo={housesData[7]} />} />
          
          {/* <Route path="/" element={ <House address={housesData[5].address} picture={housesData[5].photo} price={housesData[5].price} desc={housesData[5].description}/>} /> */}

          <Route path="searchresults/:county" element= {<SearchResults allhouses={housesData} />} />
          <Route path="searchedhouse" element= {<SearchedHouse/>} />
          <Route path="login" element= {<Login/>} />
          <Route path="signup" element= {<Signup/>} />


         </Routes>        

   
    <Footer/>
    </div>
  );
}

export default App;
