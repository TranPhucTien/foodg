import React, { useState } from 'react';
import PropTypes from 'prop-types';
import imageError from '~/assets/images/image-error.png';

Img.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

function Img({ src, alt, className, ...props }) {
    const [img, setImg] = useState(src || '');

    const handleError = () => {
        setImg(imageError);
    };

    return <img src={img} alt={alt} onError={handleError} className={className} {...props} />;
}

export default Img;
