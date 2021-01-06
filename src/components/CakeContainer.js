import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from "./redux/reduxAction/reduxAction";

function CakeContainer() {
  const numberOfCakes = useSelector(state => state.numberOfCakes)

  const dispatch = useDispatch()
  return (
    <div className="container ">
      <h3>Number of cake-{numberOfCakes}</h3>
      <button type="button" className="btn btn-primary"onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
}

export default CakeContainer;
