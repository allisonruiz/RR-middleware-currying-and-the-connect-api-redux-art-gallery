import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { useEffect } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

function App(props) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if(data.apiData) {
      return <img style={{'width': '100vw'}} src={data.apiData}
    }
  }

  useEffect(() => {
    dispatchEvent(fetchData())
  }, [props.ojectId, dispatch])

  return (
    <div className="App">
      <div>
        <button onClick={() => {}}>Trigger Thunk</button>
        <button onClick={() => {}}>Clear</button>
        <button onClick={() => {}}>Next</button>
        <button onClick={() => {}}>Back</button>
      </div>
      <input onChange={(e) => { }} />
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({ objectId: state.data.objectId})
export default connect(mapStateToProps) (App)
