import { createContext, useState } from "react";

export const allContext = createContext()

export default function AllContextProviderComponent({children}){
    const [user , setUser] = useState({})
    const [allChat, setAllChat] = useState([])
    const [selectChat, setSelectChat ] = useState({})

    return (
        <allContext.Provider value={{
            user,
            setUser,
            allChat,
            setAllChat,
            selectChat,
            setSelectChat
        }}>
            {children}
        </allContext.Provider>
    )
}