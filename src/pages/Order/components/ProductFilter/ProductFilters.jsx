import PropTypes from 'prop-types';
import FilterByCategory from '../Filters/FilterByCategory';

ProductFilters.propTypes = {
    onChange: PropTypes.func,
};

function ProductFilters({ onChange }) {
    const handleCategoryChange = (newCategoryType) => {
        if (!onChange) return;

        onChange(newCategoryType);
    };
    return (
        <div>
            <FilterByCategory onChange={handleCategoryChange} />
        </div>
    );
}

export default ProductFilters;
