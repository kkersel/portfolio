import React from 'react';
import PropTypes from 'prop-types';
import lb from './LinkButton.module.scss'

const LinkButton = ({ url, text, isVisible, color }) => {
    if (!isVisible) {
        return null; // If isVisible is false, return null to hide the button
    }

    return (
        <div className={lb.linkButton}>
            <a rel="noreferrer" target='_blank' href={url}>
                <button className={lb.ButtonLink}>{text}</button>
            </a>
        </div>
    );
};

LinkButton.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isVisible: PropTypes.bool,
    color: PropTypes.string,
};

LinkButton.defaultProps = {
    isVisible: true,
    color: '#007bff',
};

export default LinkButton;
