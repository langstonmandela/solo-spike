import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, take } from 'redux-saga/effects';
import axios from 'axios';


function* rootSaga() {
    yield takeEvery('FETCH_GIF', fetchGifSaga) // GET from giphy (with search params)
    yield takeEvery('FETCH_FAV', fetchFavSaga) // GET from favorites table from db
    yield takeEvery('ADD_FAV', addFavSaga) // POST fav to db from form
    yield takeEvery('SET_CATERGORY', setCategorySaga) // PUT the category id in the fav table for the specific item
    // yield takeEvery("DELETE_FAV", deleteFavSaga)
  };


  function* fetchGifSaga(action){
    try {
        const response = yield axios.get('')
        console.log('respone', response.data);
        yield put({type: '', payload: response.data})
    } catch (error) {
        // console.error('Error in FETCH saga', error)
    }
  }

  function* fetchFavSaga(action){
    try {
        // const response = yield axios.get('/api/plants')
        // console.log('respone', response.data);
        // yield put({type: 'GET_PLANTS', payload: response.data})
    } catch (error) {
        // console.error('Error in FETCH saga', error)
    }
  }

  function* addFavSaga(action){
    try {
        // const response = yield axios.get('/api/plants')
        // console.log('respone', response.data);
        // yield put({type: 'GET_PLANTS', payload: response.data})
    } catch (error) {
        // console.error('Error in FETCH saga', error)
    }
  }

  function* setCategorySaga(action){
    try {
        // const response = yield axios.get('/api/plants')
        // console.log('respone', response.data);
        // yield put({type: 'GET_PLANTS', payload: response.data})
    } catch (error) {
        // console.error('Error in FETCH saga', error)
    }
  }


  const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ REDUCERHERE }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);


export default store;