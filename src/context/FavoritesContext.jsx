import React, { createContext, useContext } from "react";
import useLocalFavorites from "../hooks/useLocalFavorites"; // Import the hook

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const { favorites, toggleFavorite } = useLocalFavorites(); // Use the hook

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);
export default FavoritesContext;