const initialState = ( jsonList ) => ({
    view: "ALL",
    list: [ ...jsonList ],
    startStatus: "FRONT",
    currentStatus: "FRONT",
    cardIndex: 1,
});

export default initialState;