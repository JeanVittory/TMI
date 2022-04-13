import PropTypes from 'prop-types';

const SelectCategories = ({categories, handleSelectCategories}) =>{

    return (
        <div className='ml-12  md:ml-20  lg:ml-40  w-1/2  md:w-1/6 border border-black text-xs  tracking-wider font-Mono px-4 py-2 mt-16'>
            <select className='w-full' onChange={(e)=> handleSelectCategories(e.target.value)}>
                <option>Filter</option>
                <option value='/'>All</option>
                {categories.map(e => <option key={e.id} value={`/category/${e.id}`}>{e.value}</option>)}
            </select>
        </div>
    );
};

export default SelectCategories;

SelectCategories.propTypes = {
    handleSelectCategories:PropTypes.func
};