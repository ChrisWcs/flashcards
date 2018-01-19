import React from 'react';
import PropTypes from 'prop-types';

import AllCards from './AllCards';
import StudyView from './StudyView';

const CardViewer = ({view, list, cardIndex, flipFunc, forwardFunc, backwardFunc}) => {
    console.log(list);
    if( view === "ALL"){
        return (
            <AllCards list={list} flipFunc={flipFunc}/>
        );
    } else {
        return (
            <StudyView list={list}
                       cardIndex={cardIndex} 
                       flipFunc={flipFunc(cardIndex)} 
                       forwardFunc={forwardFunc} 
                       backwardFunc={backwardFunc}/>
        );
    }
};

CardViewer.propTypes = {
    view: PropTypes.string,
    list: PropTypes.array,
    flipFunc: PropTypes.func,
    cardIndex: PropTypes.number,
    forwardFunc: PropTypes.func,
    backwardFunc: PropTypes.func,
};

export default CardViewer;