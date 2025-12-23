import React from 'react';
import AboutMe from './AboutMe';

const ThemeWrappedAboutMe = ({ darkTheme, setDarkTheme, ...props }) => {
    return <AboutMe darkTheme={darkTheme} setDarkTheme={setDarkTheme} {...props} />;
};

export default ThemeWrappedAboutMe;