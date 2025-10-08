import { useState } from 'react'
import './App.css'
import User from './User'
import UserProvider from './UserProvider'
import { Page1, Page2, Page3 } from './Pages'


function Choosepage({ page }){
  const Page = [Page1, Page2, Page3] [page];

  return <Page />;
}

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(0);


  return (
    <UserProvider>
      <h1>Working With React Hooks</h1>
      <div className="card">

        <button onClick={() => setPage(0)} disabled={page === 0}>Page1</button>
        <button onClick={() => setPage(1)} disabled={page === 1}>Page2</button>
        <button onClick={() => setPage(2)} disabled={page === 2}>Page3</button>

        <Choosepage page={page} />


        {/* <Hook /> */}
        {/* <UpdateHookState /> */}
        {/* <UseEffect /> */}
        {/* <button onClick={ () => setShow(!show)}>
          { show ? "Hide User" : "Show User"}
        </button> */}

        {/* <ShowHideUser show={show} /> */}
        {/* <Country /> */}
      </div>
    </UserProvider>
  )
}

export default App
