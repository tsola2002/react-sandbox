import React, { createContext, useEffect, useState } from 'react'

// WE CREATE A GLOBAL CONTEXT TO BE USED
export const UserContext = createContext();

function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: "Adam" });
    }, 1000);
  });
}

function UserProvider({ children }) {

    const [user, setUser] = useState({ name: "..."});

    // UPDATE OUR STATE USING USEEFFECT HOOK
    useEffect(() => {
            fetchUser().then((user) => {
                setUser(user);
        });
    }, []);

  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  );
}

export default UserProvider