import React, { createContext, useContext } from "react";
import useLocalFavorites from "../hooks/useLocalFavorites";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { favorites, toggleFavorite } = useLocalFavorites();

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
export default FavoritesContext;