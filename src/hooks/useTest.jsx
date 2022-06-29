import { useContext } from "react";
import { Test } from "../content/Test";

function useTest() {
    const { handleLove, setHandleLove, karzinka, setKarzinka, sanoq, setSanoq } = useContext(Test)

    return {
         handleLove, 
         setHandleLove,
         karzinka,
         setKarzinka,
         sanoq,
         setSanoq
    }
}

export default useTest;