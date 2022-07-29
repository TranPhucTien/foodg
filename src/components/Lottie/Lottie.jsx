import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import shipper from '~/assets/lottie/shipper';

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

export { ShipperLottie };
