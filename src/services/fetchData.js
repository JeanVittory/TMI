const fetchData = async (urlFetch) =>{
    try {        
        const res = await fetch(urlFetch);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    };
};

export default fetchData;