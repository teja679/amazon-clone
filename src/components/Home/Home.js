import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Header/Header';

const Home = () => {
  return (
    <div className='home'>
        <Header />
    </div>
  )
}

export default Home