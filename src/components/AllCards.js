import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card';
import FlexRowStart from '../styledcomps/FlexRowStart';

const AllCards = ({list, flipFunc}) => (
    <FlexRowStart>
        {
            list.map( (card, i) => (<Card key={i}
                                         flipped={card.flipped} 
                                         front={card.front} 
                                         back={card.back}
                                         flipFunc={flipFunc(i)}/>))
        }
    </FlexRowStart>
);

AllCards.propTypes = {
    list: PropTypes.array,
    flipFunc: PropTypes.flipFunc,
};

export default AllCards;