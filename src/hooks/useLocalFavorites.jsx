import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "favoriteProducts";

const useLocalFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === product.id);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== product.id);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  return { favorites, toggleFavorite };
};

export default useLocalFavorites;