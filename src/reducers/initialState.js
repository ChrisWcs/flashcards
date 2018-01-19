const addStatus = ( card ) => ({
    ...card,
    flipped: false,
});

const initialState = ( jsonList ) => ({
    view: "ALL",
    list: [ ...(jsonList.cards.map(addStatus))],
    cardIndex: 0,
});

export default initialState;