import { Children, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";


export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //register user
    const userRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // update profile
    const profileUpdate = (name, photo) => {
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    //User Login
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logOut
    const userLogout = () => {
        setLoading(true);
        return signOut(auth)
    }

     //-------
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("from authProvider",currentUser);

            if(currentUser){
                setUser(currentUser)
            }
            else(
                setUser(null)
            )
            setLoading(false)
        } )
        return () => {
            unsubscribe()
        }
    }, [])


    //------
    const authInfo = {
        user,
        setUser,
        userRegister,
        profileUpdate,
        userLogin,
        userLogout,
    }

    return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
    );
};

export default AuthProvider;