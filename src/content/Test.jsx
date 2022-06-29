import { createContext, useState } from "react";

 export const Test = createContext();

 export const TestProvider = ({children}) => {
    const [handleLove, setHandleLove] = useState(false); // tanlab olish uchun state
    const [sanoq, setSanoq] = useState(0); // sersa qoshish uchun state
    const [karzinka, setKarzinka] = useState(0); // karzinkaga qoshish uchun state





    const data = {
        handleLove,
        setHandleLove,
        karzinka,
        setKarzinka,
        sanoq,
        setSanoq,
    }




    return <Test.Provider value={data}>{children}</Test.Provider>
 }
