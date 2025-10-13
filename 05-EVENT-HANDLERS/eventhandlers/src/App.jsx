import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton';
import MyInput from './MyInput';
import MyList from './MyList';
import MyInlineHandler from './MyInlineHandler';

function App() {


  return (
    <>
     <h1>Event Handlers in React</h1>
     {/* <MyButton>Click Me</MyButton> */}
     {/* <MyInput /> */}
     {/* <MyList /> */}
     <MyInlineHandler>Click Me</MyInlineHandler>
    </>
  );
}

export default App
