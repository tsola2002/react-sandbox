import React, { useState } from 'react'

function Hook() {

    // CREATING STATE USING A HOOK
    const [name] = useState("Adam");
    const [age] = useState(35);


  return (
    <>
        <p>name is {name}</p>
        <p>age is {age}</p>
    </>
  );
}

export default Hook