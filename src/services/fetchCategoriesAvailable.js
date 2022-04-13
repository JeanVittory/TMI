const fetchCategoriesAvailable = async (urlFetch) => {
    const res = await fetch(urlFetch)
    const data = res.json()
    return data
}

export default fetchCategoriesAvailable