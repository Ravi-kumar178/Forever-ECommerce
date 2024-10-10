import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const PrivateRoute = ({element,isAuthenticated}) => {

    const {navigate} = useContext(ShopContext);

  return(
    isAuthenticated?element: navigate('/login')
  )
  
}

export default PrivateRoute