import {useState} from 'react';
import PropTypes from 'prop-types'

const useQuantity = (initialStock) =>{
    const [quantity, setQuantity] = useState(1);
    const [currentStock, setCurrentStock] = useState(initialStock);

    const handlerClickQuantityAdd = () =>{
        if(currentStock - 1){
            setCurrentStock(prev => prev - 1)
            setQuantity(prev => prev + 1);
        }
        if(currentStock === 0){
            setCurrentStock(prev => prev - 1)
            return
        }
    };

    const handlerQuantityLess = () =>{
        if(quantity - 1){
            setCurrentStock(prev => prev + 1)
            setQuantity(prev => prev - 1);
        };
    };

    return [quantity, currentStock, handlerClickQuantityAdd, handlerQuantityLess];
}

export default useQuantity;


useQuantity.propTypes = {
    initialStock: PropTypes.number
}