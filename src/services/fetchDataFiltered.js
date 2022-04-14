const fetchDataFiltered = async (productId, urlFetch) =>{
    try {        
        const res = await fetch(urlFetch);
        const data = await res.json();
        const productFiltered = data.find(e => e.id === parseInt(productId))
        return productFiltered;
    } catch (error) {
        console.log(error)
    }
};

export default fetchDataFiltered;