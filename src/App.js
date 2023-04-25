import React from 'react';
import './style/main.scss';
import { useLocation } from "react-router-dom";
import Navbar from './components/components/Navbar';
import Main from './components/Main';
import Footer from './components/components/Footer';

function App() {
  const path = useLocation().pathname;
  const route = path.split("/")[1];
  console.log(route)
  return (
    <div className={"App " + route}>
      < Navbar/>
      < Main/>
      < Footer/>
    </div>
  );
}

export default App;
