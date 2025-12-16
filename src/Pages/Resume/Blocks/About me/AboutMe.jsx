import React from 'react';
import a from './AboutMe.module.scss'
import {Fade} from "react-reveal";

const AboutMe = () => {
    return (
        <div className={a.Wrapper}>
            <Fade bottom>
                <span>А еще:</span>
                <span>Я менторю в <a href="https://productstar.ru/" target='_blank' rel="noreferrer">PRODUCTSTAR</a></span>
                <span>1.5 года работал front-end разработчиком</span>
                <span>играю в теннис, NTRP 3</span>
                {/*<span>нравится порядок и ясность в макетах</span>*/}
                {/*<span>не нравится Liquid Glass, стекло выше не в счет, это хорошее решение </span>*/}
            </Fade>
        </div>
    );
};

export default AboutMe;
