import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import shipper from '~/assets/lottie/shipper';
import emptyCart from '~/assets/lottie/empty_cart3.json';
import emptyProduct from '~/assets/lottie/empty_cart5.json';
import login from '~/assets/lottie/login.json';
import successful from '~/assets/lottie/successful.json';
import failed from '~/assets/lottie/failed.json';
import notFound from '~/assets/lottie/notFound3.json';

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

function LoginLottie() {
    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            ...configLoop,
            container: anime.current,
            animationData: login,
            name: 'login',
        });

        return () => lottie.stop();
    }, []);

    return <div ref={anime}></div>;
}

function EmptyProductLottie() {
    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            ...configLoop,
            container: anime.current,
            animationData: emptyProduct,
            name: 'emptyProduct',
        });

        return () => lottie.stop();
    }, []);

    return <div ref={anime}></div>;
}

function SuccessfulLottie() {
    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            ...configLoop,
            loop: false,
            container: anime.current,
            animationData: successful,
            name: 'successful',
        });

        return () => lottie.stop();
    }, []);

    return <div ref={anime}></div>;
}

function FailedLottie() {
    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            ...configLoop,
            loop: false,
            container: anime.current,
            animationData: failed,
            name: 'failed',
        });

        return () => lottie.stop();
    }, []);

    return <div ref={anime}></div>;
}

function NotFoundLottie() {
    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            ...configLoop,
            container: anime.current,
            animationData: notFound,
            name: 'notFound',
        });

        return () => lottie.stop();
    }, []);

    return <div ref={anime}></div>;
}

export { ShipperLottie, EmptyCartLottie, LoginLottie, EmptyProductLottie, SuccessfulLottie, FailedLottie, NotFoundLottie };
