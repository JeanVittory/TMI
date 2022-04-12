import PropTypes from 'prop-types'

const SelectCategories = ({handleSelectCategories}) =>{
    return (
        <div className="ml-12 md:ml-20 lg:ml-40 min-w-min w-1/6 border border-black text-xs  tracking-wider font-Mono px-4 py-2 mt-16">
            <select className="w-full" onChange={(e)=> handleSelectCategories(e.target.value)}>
                <option>Filter</option>
                <option value="/">All</option>
                <option value="/category/t-shirt">T-shirt</option>
                <option value="/category/caps">Caps</option>
                <option value="/category/hoodies">Hoodies</option>
                <option value="/category/sleeves">Sleeves</option>
            </select>
        </div>
    )
}

export default SelectCategories;

SelectCategories.propTypes = {
    handleSelectCategories:PropTypes.func
}