import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream} from './iceCream/iceCreamActions'

function IceCreamContainer (props) {
  return (
    <div>
      <h2>Number of iceCream - {props.numOfIceCreams} </h2>
      <button onClick={props.buyIceCream}>Buy Ice cream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams // ice cream here is the key provided in the root reducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer)