import React from 'react';
import f from './Footer.module.scss'
import { motion } from 'framer-motion';

const Footer = ({ isFaqVisible = false }) => {
    return (
        <div className={f.Wrapper}>
            <div className={f.FooterWrapper}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
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

                </motion.div>
            </div>
        </div>
    );
};

export default Footer;
