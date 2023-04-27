import './App.css';
import React from 'react';
//не спорю, миллион импортов - это ущербно. но по другому оно просто не отображает ничего
import ReactCardSlider from './components/ReactCardSlider';
import google from './images/google.svg';
import amazon from './images/amazon.svg';
import defence from './images/defense.svg';
import instacart from './images/instacart.svg';
import Microsoft from './images/Microsoft.svg';
import nike from './images/nike.svg';
import uber from './images/uber.svg';

const images = require.context('./images', false, /\.svg$/);
const imageNames = images.keys();

function App() {
  const slides = [
    { image: google },
    { image: amazon },
    { image: defence },
    { image: instacart },
    { image: Microsoft },
    { image: nike },
    { image: uber },
  ];
  return (
    <div id="body">
      <ReactCardSlider slides={slides} />
    </div>
  );
}

export default App;