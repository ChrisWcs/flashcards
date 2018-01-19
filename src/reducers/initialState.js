const addStatus = ( card ) => ({
    ...card,
    flipped: false,
});

const initialState = ( jsonList ) => ({
    view: "ALL",
    list: [ ...(jsonList.cards.map(addStatus))],
    cardIndex: 1,
});

export default initialState;