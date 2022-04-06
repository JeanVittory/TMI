import {useState} from 'react';
import PropTypes from 'prop-types'

const useQuantity = (initialStock) =>{
    const [quantity, setQuantity] = useState(0);
    const [currentStock, setCurrentStock] = useState(initialStock);

    const handlerClickQuantityAdd = () =>{
        if(currentStock){
            setCurrentStock(prev => prev - 1)
            setQuantity(prev => prev + 1);
        };
    };

    const handlerQuantityLess = () =>{
        if(quantity){
            setCurrentStock(prev => prev + 1)
            setQuantity(prev => prev - 1);
        };
    };

    return [quantity, currentStock, handlerClickQuantityAdd, handlerQuantityLess];
}

export default useQuantity;


useQuantity.propTypes = {
    initialStock: PropTypes.number,
}