import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        jwt: '',
        id: '',
        fullname: '',
        imageUrl: '',
        contact: '',
        email: '',
        password: '',
        role: ''
    });

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}
