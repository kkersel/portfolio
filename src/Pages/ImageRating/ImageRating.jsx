import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './ImageRating.module.scss';

const ImageRating = ({darkTheme, setDarkTheme}) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Загрузка изображений из публичной папки
    useEffect(() => {
        // Для демонстрации используем изображения из public папки
        const imagePaths = [
            '/place.png',
            '/baz.png',
            '/baz2.png',
            '/Sparta.png',
            '/Sparta2.png',
            '/Chatlab.png',
            '/22.png',
            '/Dash.png',
            '/emply.png',
            '/pik.png',
            '/VK.png',
        ];

        const imageObjects = imagePaths.map((path, index) => ({
            id: index + 1,
            url: path,
            name: `UI кейс ${index + 1}`
        }));

        setImages(imageObjects);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div className={styles.loading}>Загрузка...</div>;
    }

    if (images.length === 0) {
        return <div className={styles['no-images']}>Нет доступных изображений для оценки</div>;
    }

    return (
        <div className={styles.ImageCenterPage}>
            <Link to="/resume" className={styles.BackButton}>
                Назад
            </Link>
            <div className={styles.ImagesContainer}>
                {images.map((image) => (
                    <div key={image.id} className={styles.ImageWrapper}>
                        <img
                            src={image.url}
                            alt={image.name}
                            className={styles.CenteredImage}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageRating;
