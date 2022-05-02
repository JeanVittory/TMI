import {useState} from 'react';
import PropTypes from 'prop-types'

const useQuantity = (initialStock, stock) =>{
    const [quantity, setQuantity] = useState(1);
    const [currentStock, setCurrentStock] = useState(initialStock);

    const handlerClickQuantityAdd = () =>{
        if(stock === 0) return;
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
        if(stock === 0) return;
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