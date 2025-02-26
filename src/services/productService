const getProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

const getWomenProducts = async () => {
    try {
        const products = await getProducts();
        return products.filter(product => product.category.toLowerCase() === "women's clothing");
    } catch (error) {
        console.error("Error filtering women's clothing products:", error);
        throw error;
    }
};

const getMenProducts = async () => {
    try {
        const products = await getProducts();
        return products.filter(product => product.category.toLowerCase() === "men's clothing");
    } catch (error) {
        console.error("Error filtering men's clothing products:", error);
        throw error;
    }
};

const getJeweleryProducts = async () => {
    try {
        const products = await getProducts();
        return products.filter(product => product.category.toLowerCase() === "jewelery");
    } catch (error) {
        console.error("Error filtering jewelery products:", error);
        throw error;
    }
};

const getSingleProduct = async (id) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch product with ID ${id}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching single product:', error);
        throw error;
    }
};

export default {
    getProducts,
    getSingleProduct,
    getWomenProducts,
    getMenProducts,
    getJeweleryProducts
};