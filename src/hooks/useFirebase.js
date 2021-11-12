import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initialAuthentication from "../Pages/Authentication/Firebase/Firebase.init";

initialAuthentication();

const useFirebase = () => {


    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    //const [token, setToken] = useState('');
    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => { 
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name, };
        
            setUser(newUser);
            // save user to the database 
            saveUser(email, name, 'POST')
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
                }).then(() => {

                }).catch((error) => {
                    
                });
            history.replace('/');
            })
            .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from  || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const destination = location?.state?.from  || '/';
            history.replace(destination);
            setAuthError('');
            const user = result.user;

            saveUser(user.email, user.displayName, 'PUT')
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));

    }

    // Observer user state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
               /*  getIdToken(user)
                .then( idToken => {
                    setToken(idToken)
                }) */
            } else {
                setUser({})
            }
            setIsLoading(false);
            });
            return () => unsubscribe();
    }, [auth])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=> res.json())
        .then(data => setAdmin(data.admin))

    }, [user.email]);

    const LogOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        }).catch((error) => {
        })
        .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        admin,
        isLoading,
        registerUser,
        loginUser,
        signInWithGoogle,
        authError,
        setAuthError,
        LogOut
    }



};

export default useFirebase;