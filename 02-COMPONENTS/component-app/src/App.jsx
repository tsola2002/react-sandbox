import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shola from '../../../01-INTRO-REACT-APP/introreactpp/src/Shola'
import MySection from './MySection'
import MyButton from './MyButton'
import MyNamespace from './MyNamespace'

function App() {

  const placeholder = 'input value...';
  const text = 'Sholas Button';

  const array = ["First", "Second", "Third"];

  const object = {
    first: 1,
    second: 2,
    third: 3
  };
 

  return (
    <>
      <Shola />
      <MySection>
        <input  type="text" placeholder={placeholder}/>
        <MyButton>{text}</MyButton>
      </MySection>

      <MyNamespace>
        <MyNamespace.First />
        <MyNamespace.Second />
      </MyNamespace>

      <h1>Displaying Our Array</h1>
      <ul>
        { array.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <h1>Displaying Our Objects</h1>
      <ul>
        {Object.keys(object).map((i) => (
          <li key={i}>
            <strong>{i}:</strong>
            {object[i]}
          </li>
        ))

        }
      </ul>
    </>
  )
}

export default App
