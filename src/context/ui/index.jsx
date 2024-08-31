import { useMediaQuery } from "@mui/material";
import { createContext,useContext, useState } from "react"
import theme from "../../styles/theme";


export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({children}) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [cartValue, setCartValue] = useState(0);
    const atMobileScreen = useMediaQuery(theme.breakpoints.up('md'));
    const [barActive, setBarActive] = useState(atMobileScreen);

    const value = {
        drawerOpen,
        setDrawerOpen,
        showSearchBox,
        setShowSearchBox,
        cartValue,
        setCartValue,
        barActive,
        setBarActive
    }

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}