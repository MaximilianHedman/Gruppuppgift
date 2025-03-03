// const getProducts = async () => {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (!response.ok) throw new Error('Failed to fetch products');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         throw error;
//     }
// };

// const getWomenProducts = async () => {
//     try {
//         const products = await getProducts();
//         return products.filter(product => product.category.toLowerCase() === "women's clothing");
//     } catch (error) {
//         console.error("Error filtering women's clothing products:", error);
//         throw error;
//     }
// };

// const getMenProducts = async () => {
//     try {
//         const products = await getProducts();
//         return products.filter(product => product.category.toLowerCase() === "men's clothing");
//     } catch (error) {
//         console.error("Error filtering men's clothing products:", error);
//         throw error;
//     }
// };

// const getJeweleryProducts = async () => {
//     try {
//         const products = await getProducts();
//         return products.filter(product => product.category.toLowerCase() === "jewelery");
//     } catch (error) {
//         console.error("Error filtering jewelery products:", error);
//         throw error;
//     }
// };

// const getSingleProduct = async (id) => {
//     try {
//         const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//         if (!response.ok) throw new Error(`Failed to fetch product with ID ${id}`);
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching single product:', error);
//         throw error;
//     }
// };

// export default {
//     getProducts,
//     getSingleProduct,
//     getWomenProducts,
//     getMenProducts,
//     getJeweleryProducts
// };

const BASE_URL = "https://fakestoreapi.com/products";

/**
 * Fetches all products from Fake Store API.
 */
const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

/**
 * Filters products by category from fetched API data.
 */
const filterProductsByCategory = async (category) => {
  try {
    const products = await getProducts();
    return products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  } catch (error) {
    console.error(`Error filtering ${category} products:`, error);
    throw error;
  }
};

/**
 * Fetches only women's clothing products.
 */
const getWomenProducts = async () =>
  filterProductsByCategory("women's clothing");

/**
 * Fetches only men's clothing products.
 */
const getMenProducts = async () => filterProductsByCategory("men's clothing");

/**
 * Fetches only jewelry products.
 */
const getJeweleryProducts = async () => filterProductsByCategory("jewelery");

/**
 * Fetches a single product by ID.
 */
const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch product with ID ${id}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching single product:", error);
    throw error;
  }
};

export default {
  getProducts,
  getSingleProduct,
  getWomenProducts,
  getMenProducts,
  getJeweleryProducts,
};
