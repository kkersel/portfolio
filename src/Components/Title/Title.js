import React from 'react'
import a from './Title.module.scss'

export const Title = ({title, subtitle, description, titleStyle, TitleBig, text, imgRoute, alt}) => {
    return (
        <div className={a.WrapperTitle}>
            <img className={a.image} src={imgRoute} alt={alt}/>
            <div className={a.root}>
                <h2 style={titleStyle} className={a.title}>{title}</h2>
                {subtitle && <p style={titleStyle} className={a.subtitle}>{subtitle}</p>}
                {description && <p style={titleStyle} className={a.description}>{description}</p>}
            </div>
        </div>
    )
}

export default Title;
