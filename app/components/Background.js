import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

const propsType = {
    colors: PropTypes.arrayOf(),
    style: PropTypes.any,
    opacity: PropTypes.number
};

const propsDefault = {
    opacity: 1
};

const Background = (props) => {
    const {colors, style, children, transparent} = props;
    const opacity = transparent ? 0.9 : 1
    return (
        <LinearGradient
            start={{x: 0.25, y: 0.0}} end={{x: 1, y: 1.75}}
            locations={[0, 0.5]}
            colors={['#FFF', `rgba(255, 237, 196,${opacity})`]}
            style={style}
            {...props}
        >
            {children}
        </LinearGradient>
    );
};

Background.propTypes = propsType;

Background.defaultProps = propsDefault;

export default Background;
