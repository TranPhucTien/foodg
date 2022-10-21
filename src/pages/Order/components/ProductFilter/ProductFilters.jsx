import PropTypes from 'prop-types';
import FilterByCategory from '../Filters/FilterByCategory';

ProductFilters.propTypes = {
    onChange: PropTypes.func,
};

function ProductFilters({ onChange, setIsShowCategory }) {
    const handleCategoryChange = (newCategoryType) => {
        if (onChange) onChange(newCategoryType);
    };
    return (
        <div>
            <FilterByCategory onChange={handleCategoryChange} setIsShowCategory={setIsShowCategory} />
        </div>
    );
}

export default ProductFilters;
