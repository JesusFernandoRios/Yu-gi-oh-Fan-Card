
// this is the global State
export const initialState = {
    cards:[],
    user:null
}

function reducer(state, action) {
    // this console log is important 
    console.log(action)

    switch(action.type){
        // setting case for user authentication
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return {
                // return whatever the state currently was ...state 
                ...state,
                // include whatever we had in the current basket and return the dispatch(action)
                basket:[...state.basket, action.item]
            }
            
        default:
            return state
    }
}

export default reducer;