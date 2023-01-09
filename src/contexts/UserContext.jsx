import { createContext, useEffect, useState } from "react";
import { onAuthStateChangeListener,createUserDocumentFromAuth } from "../utils/firebase/firebaseUtils";

// actual value you want to access
export const userContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>null
})



export const UserProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser,setCurrentUser}

    useEffect(()=>{
        const unsubscribe = onAuthStateChangeListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
        })


        return unsubscribe
    },[])

    return <userContext.Provider value={value}>{children}</userContext.Provider>
}