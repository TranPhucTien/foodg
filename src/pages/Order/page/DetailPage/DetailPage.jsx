import classNames from 'classnames/bind';
import styles from './DetailPage.module.scss';

const cx = classNames.bind(styles);

DetailPage.propTypes = {};

function DetailPage(props) {
    const handleError = () => {
        console.log("Loi roi ne")
    }

    return (
        <div>
            Detail Page
            <img
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68615/original-muffuletta-sandwich-2-pack.ee9a97c691374b6866ea5b7083dd46d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt="img"
                onError={handleError}
            />
        </div>
    );
}

export default DetailPage;
