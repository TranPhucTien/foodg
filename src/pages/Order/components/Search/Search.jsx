import { Cached, Cancel, Search as SearchIcon } from '@mui/icons-material';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

Search.propTypes = {
    currentValue: PropTypes.string,
    searchLoading: PropTypes.bool,
    onChange: PropTypes.func,
};

function Search({ currentValue = '', searchLoading = false, onChange }) {
    const [searchValue, setSearchValue] = useState(currentValue);
    const [loading, setLoading] = useState(false);
    const { pathname } = useLocation();
    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue, 700);

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    useEffect(() => {
        if (onChange) onChange(debouncedValue);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    useEffect(() => {
        setLoading(searchLoading);
    }, [searchLoading]);

    useEffect(() => {
        setSearchValue(currentValue);
        focusInput();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const handleClear = () => {
        setSearchValue('');
        focusInput();
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div className={cx('search')}>
            <input
                type="text"
                placeholder="Search your food"
                spellCheck={false}
                value={searchValue || ''}
                ref={inputRef}
                onChange={handleChange}
            />
            {!!searchValue && !loading && (
                <button className={cx('clear')} onClick={handleClear}>
                    <Cancel sx={{ fontSize: '20px' }} />
                </button>
            )}
            {loading && <Cached className={cx('loading')} sx={{ fontSize: '20px' }} />}

            <button className={cx('search-btn')} onClick={focusInput}>
                <SearchIcon sx={{ fontSize: '2.4rem', display: 'block', margin: 'auto' }} />
            </button>
        </div>
    );
}

export default Search;
