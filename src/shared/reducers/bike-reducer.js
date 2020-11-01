export const bikeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.bike.title,
                author: action.bike.author,
                id: uuid()
            }]
        case 'REMOVE_BOOK':
            return state.filter(bike => bike.id !== action.id)
        default:
            return state
    }
}