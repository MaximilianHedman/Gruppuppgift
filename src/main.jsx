import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FavoritesProvider } from "./context/FavoritesContext";
import { ShoppingCartProvider } from './context/ShoppingCartContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </FavoritesProvider>
  </StrictMode>,
)
