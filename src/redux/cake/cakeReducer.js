import {BUY_CAKE} from './cakeTypes'
const initialState = {
    numsOfCakes: 10
}

const cakeReducer= (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numsOfCakes: state.numsOfCakes -action.payload
        }
        default: return state
    }
}

export default cakeReducer
