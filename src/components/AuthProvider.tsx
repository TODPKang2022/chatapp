import { useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';

const AuthProvider = ({children}: {Children: React.ReactNode}) => {

    const [initialized, setInitialized] = useState(false);
    
    useEffect(() =>{
        const unsubscribe = auth().onUserChanged(async fbUser => {
            if (fbUser != null) {
                // login
                setUser({
                    userId: fbUser.uid,
                    email: fbUser.email ?? '',
                    name: fbUser.displayName ?? '',
                })
            }
        });
    },[]);
    
    

    
};

// https://github.com/ghsdh3409/fc-react-native/blob/master/ChatApp/src/components/AuthProvider.tsx