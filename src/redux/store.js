import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, take } from 'redux-saga/effects';
import axios from 'axios';


function* rootSaga() {
    yield takeEvery('FETCH_GIF', fetchGifSaga) // GET from giphy
    yield takeEvery('FETCH_FAV', fetchFavSaga) // GET from favorites table from db
    yield takeEvery('ADD_FAV', addFavSaga) // POST fav to db from form
    yield takeEvery('SET_CATERGORY', setCategorySaga)

    // yield takeEvery("DELETE_FAV", deleteFavSaga)
  };

  const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ REDUCERHERE }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);


export default store;