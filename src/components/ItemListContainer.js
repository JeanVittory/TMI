import Product from "./Product";

const ItemListContainer = () =>{
    return(
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Product/>
        </div>
    );
};

export default ItemListContainer;