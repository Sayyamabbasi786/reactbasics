export default (state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION": 
            return [...state, action.payload]
        case "REMOVE_TRANSACTION":
            return state.filter(element=>element.Id!==action.payload)
        default:
            return state;
    }
}