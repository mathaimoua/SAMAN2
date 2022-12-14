import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

// This function loads on user login, grabs basic information and stores into store.
function* fetchUserInfo(){
  yield put({type: 'FETCH_MAIN_LOCATION'})
  yield put({type: "FETCH_RECENT_ITEMS" })
  yield put({type: 'FETCH_NUM_ASSETS' })
  yield put({type: 'FETCH_LOSSES' })
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield fetchUserInfo('FETCH_USER_INFO', fetchUserInfo)
}

export default userSaga;
