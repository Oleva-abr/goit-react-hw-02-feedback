import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
    <>
        <h1>{title}</h1>
        {children}
    </>
);

Section.PropTypes = {
    title: PropTypes.string.isRequired,
};
export default Section;
