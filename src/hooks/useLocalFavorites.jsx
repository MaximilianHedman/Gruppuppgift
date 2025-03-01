import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "favoriteProducts";

const useLocalFavorites = () => {
    const [favorites, setFavorites] = useState(() => {
        // Load favorites from localStorage on initial render
        const storedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        // Save favorites to localStorage whenever they change
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (product) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some((fav) => fav.id === product.id);
            if (isFavorite) {
                return prevFavorites.filter((fav) => fav.id !== product.id); // Remove if already in favorites
            } else {
                return [...prevFavorites, product]; // Add if not in favorites
            }
        });
    };

    return { favorites, toggleFavorite };
};

export default useLocalFavorites;