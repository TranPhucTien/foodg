import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@mui/material';

SkeletonProductList.propTypes = {
    length: PropTypes.number,
};

function SkeletonProductList({ length = 16 }) {
    return (
        <div className="row">
            {Array.from(new Array(length)).map((x, index) => (
                <div className="col l-3 m-4 c-12" style={{ marginBottom: '30px' }} key={index}>
                    <Skeleton variant="rectangular" width="100%" height={165} />
                    <Skeleton width="60%" />
                    <Skeleton />
                    <Skeleton width="60%" />
                </div>
            ))}
        </div>
    );
}

export default SkeletonProductList;
