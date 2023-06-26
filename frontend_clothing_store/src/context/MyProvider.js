import React from 'react'
import MyContext from './MyContext'

export default function MyProvider({ children }) {


  const context = {

  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  )
}
