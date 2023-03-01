import { createContext, useEffect, useState } from "react";

export const allContext = createContext()

export default function AllContextProviderComponent({children}){
    const [user , setUser] = useState(undefined)
    const [allChat, setAllChat] = useState([])
    const [selectChat, setSelectChat ] = useState({})
    const [globalRender, setGlobalRender] = useState(false)

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('we-connect-user-data')) || undefined
        setUser(userData)
    }, [globalRender])

    return (
        <allContext.Provider value={{
            user,
            setUser,
            allChat,
            setAllChat,
            selectChat,
            setSelectChat,
            setGlobalRender
        }}>
            {children}
        </allContext.Provider>
    )
}