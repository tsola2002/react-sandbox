import React from 'react'

function MyList() {

  const items = [
    { id: 0, name: "First" },
    { id: 1, name: "Second" },
    { id: 2, name: "Third" }
  ];

  const handleClick = (id) => {
    const { name } = items.find((i) => i.id === id);
    console.log("clicked", `"${name}"`);
  };

  return (
    <ul>
      {items.map(({ id, name }) => (
        <li key={id} onClick={() => handleClick(id)}>
          {name}
        </li>
      ))}
    </ul>
  );
}

export default MyList