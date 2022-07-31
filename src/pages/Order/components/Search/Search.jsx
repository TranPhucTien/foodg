import { Search as SearchIcon } from '@mui/icons-material';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

Search.propTypes = {};

function Search(props) {
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div className={cx('search')}>
            <input
                type="text"
                placeholder="Search your food"
                spellCheck={false}
                value={searchValue}
                ref={inputRef}
                onChange={handleChange}
            />
            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
        </div>
    );
}

export default Search;
