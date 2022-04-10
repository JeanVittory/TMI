const fetchDataFiltered = async (productId, urlFetch) =>{

    const res = await fetch(urlFetch);
    const data = await res.json();
    const productFiltered = data.find(e => e.id === parseInt(productId))
    return productFiltered;

};

export default fetchDataFiltered;