import React, { createContext, useState } from 'react'

import { BIKES } from '../../data'

export const BikesContext = createContext()

const BikesContextProvider = (props) => {
    const [bikes, setBikes] = useState(BIKES)
    const removeBike = (id) =>{
        setBikes(bikes.filter(bike => bike.id !== id))
    }
    const addBike = (data) =>{
        setBikes([...bikes,data])
    }
    return (
        <BikesContext.Provider value={{ bikes, removeBike, addBike }}>
            {props.children}
        </BikesContext.Provider>
    )
}

export default BikesContextProvider
