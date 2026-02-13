import React from 'react';
import {NavLink} from "react-router-dom";
import n from './NotFound.module.scss'
import { motion } from 'framer-motion';
import Navigation from '../Navigation/Navigation';

const NotFound = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className={n.Wrapper}>
            <Navigation darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className={n.Title}>404</h1>
                <h1 className={n.Subtitle}>никто не может придумать дизайн этой странице</h1>
                <NavLink  className={n.Link} to=''>
                    <button className={n.ButtonToMain}>
                        Вернуться на главную страницу
                    </button>
                </NavLink>
            </motion.div>
        </div>
    );
};

export default NotFound;
