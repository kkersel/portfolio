import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import n from './NotFound.module.scss'
import {Fade} from 'react-reveal'

class NotFound extends Component {
    render() {
        return (
            <div className={n.Wrapper}>
                <Fade>
                    <h1 className={n.Title}>404</h1>
                    <h1 className={n.Subtitle}>никто не может придумать дизайн этой странице</h1>
                    <NavLink  className={n.Link} to=''>
                        <button className={n.ButtonToMain}>
                            Вернуться на главную страницу
                        </button>
                    </NavLink>
                </Fade>
            </div>
        );
    }
}

export default NotFound;
