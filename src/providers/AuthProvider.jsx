import { Children, createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";


export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //register user
    const userRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }



    //------
    const authInfo = {
        user,
        setUser,
        userRegister,
    }

    return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
    );
};

export default AuthProvider;