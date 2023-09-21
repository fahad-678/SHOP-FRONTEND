import React, { createContext, useReducer } from "react";

export const userContext = createContext();

const INITIAL_STATE = {
    userAuth: localStorage.getItem("userAuth"),
    profile: null,
    loading: false,
    error: null,
};

const UserContext = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return <div>userContext</div>;
};

export default UserContext;
