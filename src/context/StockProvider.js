import React from "react";
import StockContext from "./StockContext";

export function StockProvider({children}) {
    return (
        <StockContext.Provider>
            { children }   
        </StockContext.Provider>
    )
}