import { useRoutes } from "react-router-dom";
import './App.css'
import ProductList  from './components/ProductList'


const App=()=>{
  const routes=useRoutes([
    {path:"/",element:<ProductList />}
  ]);
  return(
    <div>
    
      {routes}
    </div>
  );
};

export default App;
