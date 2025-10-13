import React from 'react'

function MyButton({children}) {

 const onClick = () => {
    console.log("clicked");
 };    


  return (
    <button onClick={onClick}>{children}</button>
  );
}

export default MyButton