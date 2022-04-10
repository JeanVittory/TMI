const fetchData = async (urlFetch) =>{
    const res = await fetch(urlFetch);
    const data = await res.json();
    return data;
};

export default fetchData;