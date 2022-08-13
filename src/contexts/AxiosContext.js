import React from 'react';

export const AxiosContext = React.createContext({
    isPending: false,
    setIsPending: () => {},
    response: null,
    setResponse: () => {},
    error: null,
    setError: () => {},
});
