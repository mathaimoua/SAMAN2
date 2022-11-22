import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchMainLocation() {
  try {
    const response = yield axios.get('/api/locations/main');
    yield console.log('response is', response.data[0])
    if ( response.data[0] === undefined ){
      yield put({ type: 'SET_MAIN_LOCATION', payload: {location_id: '0', location_name: 'NA'} })
    } else {
      yield put({ type: 'SET_MAIN_LOCATION', payload: response.data[0] });
    }

  } catch (error) {
    console.log('Error fetching main location.', error);
  }
}

function* locationsSaga() {
  yield takeLatest('FETCH_MAIN_LOCATION', fetchMainLocation);
}

export default locationsSaga;
