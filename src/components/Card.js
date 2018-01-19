import React from 'react';
import PropTypes from 'prop-types';

import CFlexCol from '../styledcomps/CFlexCol';
import CardText from '../styledcomps/CardText';

const Card = ({front, back, flipped, flipFunc}) => (
    <CFlexCol flipped={flipped} onClick={flipFunc}>
        <CardText>
            {flipped ? back : front}
        </CardText>
    </CFlexCol>
);

Card.propTypes = {
    front: PropTypes.string,
    back: PropTypes.string,
    flipped: PropTypes.bool,
    flipFunc: PropTypes.func,
};

export default Card;