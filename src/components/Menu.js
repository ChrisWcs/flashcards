import React from 'react';
import PropTypes from 'prop-types';

import FlexRowCenter from '../styledcomps/FlexRowCenter';
import MenuBtn from '../styledcomps/MenuBtn';

const Menu = ({ changeViewFunc }) => (
    <FlexRowCenter>
        <MenuBtn onClick={changeViewFunc}>Change View</MenuBtn>
    </FlexRowCenter>
);

Menu.propTypes = {
    changeViewFunc: PropTypes.func
};

export default Menu;