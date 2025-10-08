import React, {useEffect, useState} from 'react'
import { Promise,  } from 'bluebird';

// cancelling our promise
Promise.config({ cancellation: true});

function fetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Adam"});
        }, 5000);
    });
}

function User() {
    // CREATING OUR STATES WILL WILL BE UPDATED
    const [id, setId] = useState("loading...");
    const [name, setName] = useState("loading...");

    // UPDATE OUR STATE USING USEEFFECT HOOKS
    useEffect(() => {
        const promise = fetchUser().then((user) => {
            setId(user.id);
            setName(user.name);
        });

        // CANCEL A PROMISE 
        return () => {
            promise.cancel();
        }
    });


  return (
    <>
        <p>ID: { id }</p>
        <p>Name: { name }</p>
    </>
  );
}
export default User