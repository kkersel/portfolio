import React from 'react';
import a from './AboutMe.module.scss'
import { motion } from 'framer-motion';

const AboutMe = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className={a.Wrapper}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span>А еще:</span>
                <span>Я менторю в <a href="https://productstar.ru/" target='_blank' rel="noreferrer">PRODUCTSTAR</a></span>
                <span>1.5 года работал front-end разработчиком</span>
                <span>играю в теннис, NTRP 3</span>
                {/*<span>нравится порядок и ясность в макетах</span>*/}
                {/*<span>не нравится Liquid Glass, стекло выше не в счет, это хорошее решение </span>*/}
            </motion.div>
        </div>
    );
};

export default AboutMe;
