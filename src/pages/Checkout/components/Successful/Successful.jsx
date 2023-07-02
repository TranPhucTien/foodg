import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FailedLottie, SuccessfulLottie } from '~/components/Lottie';
import config from '~/config';
import { FIRST_SHOW_ORDER } from '~/constants';
import styles from '../../Checkout.module.scss';
import invoiceApi from '~/api/invoiceApi';

const cx = classNames.bind(styles);

function Successful() {
    const url = window.location.href;
    const params = url.split('successful?')[1];
    let success = false;
    let invoiceNumber = null;

    try {
        const data = atob(params.split('data=')[1]);
        const searchParams = new URLSearchParams(data);
        success = searchParams.get('success');
        invoiceNumber = searchParams.get('OrderID');
    } catch (er) {
        console.log(er);
    }

    (async () => {
        const data = (await invoiceApi.update(JSON.stringify({ invoiceNumber, paid: 1 }))).data;
        console.log('🚀 ~ file: Successful.jsx:22 ~ data:', data);
    })();

    return (
        <div className={cx('center')}>
            {success ? (
                <>
                    <div className={cx('lottie')}>
                        <SuccessfulLottie />
                    </div>
                    <h2 className={classNames('section-title', styles.title)}>Your purchase was successfull 🍔</h2>
                    <Button to={`${config.routes.order}/${FIRST_SHOW_ORDER}`} className={cx('link')}>
                        Buy more
                    </Button>
                </>
            ) : (
                <>
                    <div className={cx('lottie')}>
                        <FailedLottie />
                    </div>
                    <h2 className={classNames('section-title', styles.title)}>Some thing error</h2>
                    <Button to={`${config.routes.order}/${FIRST_SHOW_ORDER}`} className={cx('link')}>
                        Try again
                    </Button>
                </>
            )}
        </div>
    );
}

export default Successful;
