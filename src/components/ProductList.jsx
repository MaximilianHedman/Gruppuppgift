import {useState,useEffect} from "react";

const ProductList =()=>{
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data)=>{
                setProducts(data);
                setLoading(false);
            })
            .catch((error)=>{
                setError(error.message);
                setLoading (false);
            });
    },[]);
    if(loading){
        return<div>loading</div>;
    }
    if(error){
        return<div>Error:{error}</div>;
    }
    return(
        <div>
            <h1>List of products</h1>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.title} />
                        <p>{product.description}</p>
                        <p>Price:${product.price}</p>    
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProductList;