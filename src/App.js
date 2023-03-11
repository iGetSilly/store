import MainHeader from './components/Headers';
import { motion } from 'framer-motion'
import {useState, useEffect, useRef} from 'react'

// import images

import boxIcon from './images/carrousel/Box icon.svg'
import cashIcon from './images/carrousel/Cash Icon.svg'
import celIcon from './images/carrousel/Cel icon.svg'
import clockIcon from './images/carrousel/clock icon.svg'
import headphoneIcon from './images/carrousel/headphone icon.svg'
import pcIcon from './images/carrousel/PC icon.svg'


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
      <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
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
      </main>
    </div>
  ); 
}

export default App;
