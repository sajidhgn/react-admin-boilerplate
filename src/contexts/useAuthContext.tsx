import  { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { User } from '@/types'; // Assuming you have defined User type in '@/types'
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

// Define the context for authentication
interface AuthContextType {
    token: User | undefined; // Token or undefined when not authenticated
    loggedInUser: User | undefined; // User object or undefined when not authenticated
    isAuthenticated: boolean; // Indicates if the user is authenticated
    saveSession: (token: User) => void; // Function to save token session
    removeSession: () => void; // Function to remove token session (logout)
    saveSessionUser: (user: User) => void; // Function to save user session
    removeSessionUser: () => void; // Function to remove user session (logout)
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to access the authentication context
export function useAuthContext(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
}

// Component to provide authentication context to the app
export function AuthProvider({ children }: { children: ReactNode }) {
    // Key for storing authentication session in cookies
    const authSessionKey = 'token';
    const loggedInUser = 'loggedInUser';

    // Initialize user state based on cookie value
    const [token, setToken] = useState<any>(() => {
        const cookieValue = getCookie(authSessionKey);
        return cookieValue; // Initialize user state with the cookie value
    });
    const [user, setUser] = useState<any>(() => {
        const userValue = JSON.stringify(getCookie(loggedInUser));
        return userValue; // Initialize user state with the cookie value
    });

    // Function to save token session (login)
    const saveSession = useCallback((token: User) => {
        setCookie(authSessionKey, token); // Save token in cookie
        setToken(token); // Set the token in state
    }, [setToken]);

    // Function to save user session (login)
    const saveSessionUser = useCallback((user: User) => {
        setCookie(loggedInUser, JSON.stringify(user)); // Save user info in cookie
        setUser(user); // Set the user in state
    }, [setUser]);

    // Function to remove user session (logout)
    const removeSession = useCallback(() => {
        deleteCookie(authSessionKey); // Remove authentication cookie
        deleteCookie(loggedInUser); // Remove authentication cookie
        setToken(undefined); // Clear token from state
        setUser(undefined); // Clear user from state
    }, [setToken, setUser]);

    const removeSessionUser = useCallback(() => {
        deleteCookie(loggedInUser); // Remove authentication cookie
        setUser(undefined); // Clear user from state
    }, [setUser]);

    // Determine if user is authenticated based on presence of user object
    const isAuthenticated = !!token;

    // Provide the authentication context to the app
    return (
        <AuthContext.Provider
            value={{
                token,
                loggedInUser: user,
                isAuthenticated,
                saveSession,
                removeSession,
                saveSessionUser,
                removeSessionUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
