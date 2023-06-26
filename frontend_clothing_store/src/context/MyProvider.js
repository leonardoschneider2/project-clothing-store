import React, { useState } from 'react'
import MyContext from './MyContext';
import { logging } from './ProviderFunctions/LoginFunctions';

export default function MyProvider({ children }) {
  const [jsonWebToken, setJsonWebToken] = useState(null)

  const context = {
    logging,
    jsonWebToken,
    setJsonWebToken,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  )
}
