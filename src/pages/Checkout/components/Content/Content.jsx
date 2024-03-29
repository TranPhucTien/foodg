import classNames from 'classnames/bind';
import Detail from '../Detail';
import Form from '../Form';
import Main from '../Main';
import Progress from '../Progress';
import styles from './Content.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Content() {
    const [data, setData] = useState({
        discount: 0,
        shippingCost: 0,
    });

    const handleDataChange = (newData) => {
        setData({...data, ...newData});
    };

    return (
        <Main>
            <div className={cx('row')}>
                <div className={cx('col l-6')}>
                    <div className={cx('left')}>
                        <Progress />
                        <Form onDataChanged={handleDataChange} />
                    </div>
                </div>
                <div className={cx('col l-6')}>
                    <div className={cx('detail', 'right')}>
                        <Detail feeData={data} />
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default Content;
