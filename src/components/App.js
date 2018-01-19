import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';

import reducer from '../reducers/reducer';

import ConMenu from '../concomps/ConMenu';

import MFlexCol from '../styledcomps/MFlexCol';


const App = () => (
    <Provider store={createStore(reducer)}>
        <MFlexCol>
            <ConMenu />
        </MFlexCol>
    </Provider>
);

export default App;