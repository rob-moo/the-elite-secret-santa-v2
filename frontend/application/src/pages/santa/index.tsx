import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './santa.module.css';
import SantaInfo from '../../classes/userVerifier/Santa';

export const Santa = () => {
    const [santa, setSanta] = useState(<></>);
    const [explosion, setExplosion] = useState(
        <img
            className={styles['explosion']}
            src="https://i.gifer.com/2a9n.gif"
            alt=""
        ></img>
    );
    const params = useParams();
    const santaInfo = new SantaInfo(
        decodeURIComponent(params.password as string)
    );
    const santaName = santaInfo.get();
    const background = `../../${santaName}.JPG`;
    setTimeout(
        () =>
            setExplosion(
                <span className={styles['explosion']}>{santaName}</span>
            ),
        750
    );

    useEffect(() => {
        const backgroundStyles = {
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            maxHeight: '82.5vh',
            maxWidth: '100vw',
            zIndex: 9999,
        };

        setSanta(
            <div style={backgroundStyles}>
                <div className={styles['gif-container']}>
                    <img
                        className={styles['reindeer-dance']}
                        src="../../reindeer-dance.gif"
                        alt=""
                    ></img>
                    <img
                        className={styles['parrot']}
                        src="https://i.gifer.com/6oa.gif"
                        alt=""
                    ></img>
                </div>
                {explosion}
            </div>
        );
    }, [explosion, background]);

    return santa;
};
