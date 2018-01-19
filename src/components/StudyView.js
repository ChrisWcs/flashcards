import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card';

import NextBtn from '../styledcomps/NextBtn';
import FlexRowCenter from '../styledcomps/FlexRowCenter';

const StudyView = ({list, cardIndex, flipFunc, forwardFunc, backwardFunc}) => (
    <FlexRowCenter>
        <NextBtn onClick={backwardFunc}>
            {"<"}
        </NextBtn>
        <Card front={(list[cardIndex].front)} 
              back={list[cardIndex].back} 
              flipped={list[cardIndex].flipped} 
              flipFunc={flipFunc}/>
        <NextBtn onClick={forwardFunc}>
            {">"}
        </NextBtn>
    </FlexRowCenter>
);

StudyView.propTypes = {
    list: PropTypes.array,
    cardIndex: PropTypes.number,
    flipFunc: PropTypes.func,
    forwardFunc: PropTypes.func,
    backwardFunc: PropTypes.func,
};

export default StudyView;