import MainHeader from './components/Headers';
import { motion } from 'framer-motion'
import {useState, useEffect, useRef} from 'react'

// import images carousel

import boxIcon from './images/carrousel/Box icon.svg'
import cashIcon from './images/carrousel/Cash Icon.svg'
import celIcon from './images/carrousel/Cel icon.svg'
import clockIcon from './images/carrousel/clock icon.svg'
import headphoneIcon from './images/carrousel/headphone icon.svg'
import pcIcon from './images/carrousel/PC icon.svg'

// import images benefits

import boxIconBenefits from './images/benefits/boxIcon.svg'
import truckIcon from './images/benefits/Caminhao Frete Gratis.svg'
import cardIcon from './images/benefits/Card icon.svg'
import tradeIcon from './images/benefits/Troca Gratis Icon.svg'


import './css/App.css';

const images = [boxIcon, cashIcon, celIcon, clockIcon, headphoneIcon, pcIcon ]


function App() {

  const carousel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    console.log(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

  })

  return (
    <div className="App">
      <header className="">
        <MainHeader></MainHeader>
      </header>
      <main>
      <motion.div  ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
          <motion.div 
            className='inner' 
            drag="x"
            dragConstraints={{right: 0, left: -width}}
            initial={{x: 200}}
            animate={{x: 0}}
            transition= {{ duration: 0.8}}
          >
              {images.map((img) => (
                <motion.div className='item' key={img}>
                  <img src={img}></img>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
        <section className='benefits'>
          <label><img src={truckIcon}></img>Frete Grátis</label>
          <label><img src={tradeIcon}></img>troca grátis</label>
          <label><img src={cardIcon}></img>Até 12x S/Juros</label>
          <label><img src={boxIconBenefits}></img>Entrega rápida</label>
        </section>
      </main>
    </div>
  ); 
}

export default App;
