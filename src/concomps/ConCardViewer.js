import { connect } from 'react-redux';

import { createFlipCard } from '../actions/actionCreators';

import CardViewer from '../components/CardViewer';

const mapStateToProps = (state) => ({
    list: state.list,
    view: state.view,
});

const mapDispatchToProps = (dispatch) => ({
    flipFunc: (i) => () => {
        dispatch(createFlipCard(i));
    }
});

const ConCardViewer = connect(mapStateToProps, mapDispatchToProps)(CardViewer);

export default ConCardViewer;