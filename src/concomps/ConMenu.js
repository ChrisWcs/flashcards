import React from 'react';
import { connect } from 'react-redux';

import { createChangeView } from '../actions/actionCreators';

import Menu from '../components/Menu';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    changeViewFunc: () => {
        dispatch(createChangeView());
    }
});

const ConMenu = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default ConMenu;