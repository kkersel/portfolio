import React from 'react';
import f from './Footer.module.scss'
import {Fade} from "react-reveal";

const Footer = ({ isFaqVisible = false }) => {
    return (
        <div className={f.Wrapper}>
            <div className={f.FooterWrapper}>
                <Fade bottom>
                    <a
                        href="https://t.me/innv1"
                        target="_blank"
                        className={`${f.WrapperCoin} ${isFaqVisible ? f.gradientAnimation : ''}`}
                        rel="noreferrer"
                    >
                        <span className={f.Title}>Написать <br/>
                            в telegram</span>

                        <img src="/1.gif" alt=""/>
                    </a>

                    <div className={f.Info}>
                        <h2 className={'cursorhover'}>Сделано с любовью к проектированию 🖤</h2>
                        <h2>2025</h2>
                    </div>

                </Fade>
            </div>
        </div>
    );
};

export default Footer;
