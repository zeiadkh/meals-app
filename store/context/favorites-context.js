import { createContext, useState } from "react";
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});
export default function FavoritesContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([])
    function addFavorite(id){
        setFavoriteMealIds(currentFavIds => [...currentFavIds, id])
    }
    function removeFavorite(id){
        setFavoriteMealIds(currentFavIds => currentFavIds.filter(cid => cid !== id))
    }
    
    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
