import { createContext,useContext } from "react";

const ShipContext = createContext();


const Mycontext = ({children}) =>{

    return <ShipContext.Provider>
        {children}
    </ShipContext.Provider>

}

export const ShipState = () =>{
    return useContext(Mycontext)
}

export default Mycontext

