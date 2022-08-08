import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import shipper from '~/assets/lottie/shipper';
import emptyCart from '~/assets/lottie/empty_cart3.json'

// const config = {
//     renderer: 'svg',
//     autoplay: false,
//     loop: true,
//     isClickToPauseDisabled: false,
// };

const configLoop = {
    renderer: 'svg',
    autoplay: true,
    loop: true,
};

function ShipperLottie() {
    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            ...configLoop,
            container: anime.current,
            animationData: shipper,
            name: 'shipper',
        });

        return () => lottie.stop();
    }, []);

    return <div ref={anime}></div>;
}

function EmptyCartLottie() {
    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            ...configLoop,
            container: anime.current,
            animationData: emptyCart,
            name: 'emptyCart',
        });

        return () => lottie.stop();
    }, []);

    return <div ref={anime}></div>;
}

export { ShipperLottie, EmptyCartLottie };
