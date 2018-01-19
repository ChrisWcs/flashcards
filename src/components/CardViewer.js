import React from 'react';
import PropTypes from 'prop-types';

import AllCards from './AllCards';
import StudyView from './StudyView';

const CardViewer = ({view, list, flipFunc}) => {
    if( view === "ALL"){
        return (
            <AllCards list={list} flipFunc={flipFunc}/>
        );
    } else {
        return (
            <StudyView />
        );
    }
}

CardViewer.propTypes = {
    view: PropTypes.bool,
    list: PropTypes.array,
    flipFunc: PropTypes.func,
};

export default CardViewer;