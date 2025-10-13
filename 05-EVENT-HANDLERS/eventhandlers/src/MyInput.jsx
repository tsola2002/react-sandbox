import React from 'react'

function MyInput() {

  const handleChange = () => {
    console.log("changed");
  };

  const handleBlur = () => {
    console.log("blured");
  };

  return (
    <input onChange={handleChange} onBlur={handleBlur}/>
  );
}

export default MyInput