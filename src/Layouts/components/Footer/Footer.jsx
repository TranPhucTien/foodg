import {
    AttachEmail,
    Business,
    Facebook,
    Instagram,
    LinearScale,
    PhoneInTalk,
    Twitter,
    YouTube,
} from '@mui/icons-material';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

Footer.propTypes = {};

function Footer(props) {
    const timeTable = [
        {
            day: 'Sunday',
            status: 'Closed',
        },
        {
            day: 'Monday',
            status: '8.00-20.00',
        },
        {
            day: 'Tuesday',
            status: '10.00-5.00',
        },
        {
            day: 'Wednesday',
            status: '12.00-9.00',
        },
        {
            day: 'Friday',
            status: '7.00-1.00',
        },
        {
            day: 'Saturday',
            status: '9.00-12.00',
        },
    ];
    const address = [
        {
            icon: <PhoneInTalk sx={{ fontSize: 20 }} />,
            content: '+84911122003',
        },
        {
            icon: <AttachEmail sx={{ fontSize: 20 }} />,
            content: 'tranphuctien@gmail.com',
        },
        {
            icon: <Business sx={{ fontSize: 20 }} />,
            content: 'Giao Thủy - Nam Định - Việt Nam',
        },
    ];

    return (
        <footer className={cx('wrapper')}>
            <div className='container'>
                <div className="row">
                    <div className={cx('time', 'col', 'l-4', 'm-6', 'c-12')}>
                        {timeTable.map((row, index) => (
                            <div className='row' key={index}>
                                <span className={cx('time-day', 'col', 'l-3')}>{row.day}</span>
                                <span className={cx('time-icon', 'col', 'l-4')}>
                                    <LinearScale />
                                </span>
                                <span className={cx('time-status', 'col', 'l-5')}>{row.status}</span>
                            </div>
                        ))}
                    </div>
                    <div className={cx('address', 'col', 'l-4', 'm-6', 'c-12')}>
                        <h3 className={cx('address-title')}>Address</h3>
                        <div className={cx('address-content')}>
                            {address.map((x, i) => (
                                <div className={cx('address-container')} key={i}>
                                    <span className={cx('address-icon')}>{x.icon}</span>
                                    <span className={cx('address-text')}>{x.content}</span>
                                </div>
                            ))}
                        </div>
                        <div className={cx('address-social')}>
                            <a href="https://www.facebook.com/tranphuctien2003/">
                                <Facebook style={{ fill: '#2D88FF' }} className={cx('address-social-icon')} />
                            </a>
                            <Twitter style={{ fill: '#5DA9DD' }} className={cx('address-social-icon')} />
                            <Instagram style={{ fill: '#F56040' }} className={cx('address-social-icon')} />
                            <YouTube style={{ fill: '#FF0000' }} className={cx('address-social-icon')} />
                        </div>
                    </div>
                    <div className={cx('map', 'col', 'l-4', 'm-12', 'c-12')}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59826.42861157204!2d106.13179138969916!3d20.417833973682043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e0adb8d5f1cd%3A0xb5f4baba00e67462!2zVHAuIE5hbSDEkOG7i25oLCBOYW0gxJDhu4tuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1659007701960!5m2!1svi!2s"
                            width="600"
                            height="450"
                            style={{ width: '100%', height: '100%', border: 0 }}
                            loading="lazy"
                            title="map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
