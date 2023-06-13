import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchRecentItems() {
  try {
    const response = yield axios.get('/api/items/recentItems')
    // yield console.log('payload is', response.data)
    yield put({ type: 'SET_RECENT_ITEMS', payload: response.data });
  } catch (error) {
    console.log('Error fetching recent items.', error);
  }
}

function* fetchNumAssets(){
  try{
    const response = yield axios.get('/api/items/numAssets')
    // yield console.log('num assets is', response.data)
    yield put({type: 'SET_NUM_ASSETS', payload: response.data})
  } catch (error) {
    console.log('Error fetching total number of assets.', error)
  }
}

function* fetchLosses(){
  try{
    const response = yield axios.get('/api/items/numLosses')
    // yield console.log('num assets is', response.data)
    yield put({type: 'SET_LOSSES', payload: response.data})
  } catch (error) {
    console.log('Error fetching total number of losses.', error)
  }
}

function* itemsSaga() {
  yield takeLatest('FETCH_RECENT_ITEMS', fetchRecentItems);
  yield takeLatest('FETCH_NUM_ASSETS', fetchNumAssets);
  yield takeLatest('FETCH_LOSSES', fetchLosses);
}

export default itemsSaga;
