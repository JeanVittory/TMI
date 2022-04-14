const fetchDataByCategory = async (category, urlFetch) => {
    try {        
        const res = await fetch(urlFetch);
        const data = await res.json();
        const productFiltered = data.filter(e => e.category === category);
        return productFiltered;
    } catch (error) {
        console.log(error);   
    }
};

export default fetchDataByCategory;