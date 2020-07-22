import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numsOfCakes = useSelector(state => state.numsOfCakes) //subscribing
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes -{numsOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
