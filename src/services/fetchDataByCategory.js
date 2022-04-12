const fetchDataByCategory = async (category, urlFetch) => {
    const res = await fetch(urlFetch);
    const data = await res.json();
    const productFiltered = data.filter(e => e.category === category);
    return productFiltered;
}

export default fetchDataByCategory;