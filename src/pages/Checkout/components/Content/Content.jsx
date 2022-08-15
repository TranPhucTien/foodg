import classNames from 'classnames/bind';
import Detail from '../Detail';
import Form from '../Form';
import Main from '../Main';
import Progress from '../Progress';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content() {
    return (
        <Main>
            <div className={cx('row')}>
                <div className={cx('col l-6')}>
                    <div className={cx('left')}>
                        <Progress />
                        <Form />
                    </div>
                </div>
                <div className={cx('col l-6')}>
                    <div className={cx('detail', 'right')}>
                        <Detail />
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default Content;
