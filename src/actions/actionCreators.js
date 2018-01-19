import { FLIP_CARD, FORWARD_CARD, BACKWARD_CARD, CHANGE_VIEW } from './actions';

export const createChangeView = () => ({
    type: CHANGE_VIEW,
});

export const createFlipCard = (index) => ({
    type: FLIP_CARD,
    index,
});

export const createForwardCard = () => ({
    type: FORWARD_CARD
});

export const createBackwardCard = () => ({
    type: BACKWARD_CARD
});