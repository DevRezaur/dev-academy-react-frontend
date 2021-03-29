import React, {createContext, useReducer} from "react";
import Reducer from './Reducer';

const initialState = {
    id: '',
    fullname: '',
    imageUrl: '',
    contact: '',
    email: '',
    password: '',
    role: '',
    error: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;