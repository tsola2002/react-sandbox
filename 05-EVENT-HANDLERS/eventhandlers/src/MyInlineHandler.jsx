import React from 'react'

function MyInlineHandler({children}) {


  return (
    <button onClick={e => console.log("clicked", e)}>
        {children}
    </button>
  );
}

export default MyInlineHandler