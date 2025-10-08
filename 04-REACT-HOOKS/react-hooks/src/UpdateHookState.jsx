import React, { useState } from 'react'

function UpdateHookState() {

  // CREATING STATE USING A HOOK
  const [name, setName] = useState("Adam");
  const [age, setAge] = useState(35);

  return (
    <>
      <section>
        <input value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>name is {name}</p>
      </section>
      <section>
        <input type="number" value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>age is {age}</p>
      </section>            
    </>
  );
}

export default UpdateHookState