import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, take } from "redux-saga/effects";
import axios from "axios";

const gifList = (state = [], action) => {
  switch (action.type) {
    case "DISPLAY_GIF":
      return action.payload;
    default:
      return state;
  }
};

const favoriteList = (state = [], action) => {
  switch (action.type) {
    case "DISPLAY_FAVS":
      return action.payload;
    case "ADD_FAV":
      return [...state, action.payload];
    default:
      return state;
  }
};

const categoryList = (state = [], action) => {
  switch (action.type) {
    case "DISPLAY_CATEGORIES":
      return action.payload;
    default:
    return state;
}
 
}

function* rootSaga() {
  yield takeEvery("FETCH_GIF", fetchGifSaga); // GET from giphy (with search params)
  yield takeEvery("FETCH_FAVS", fetchFavSaga); // GET from favorites table from db
  yield takeEvery("POST_FAV", postFavSaga); // POST fav to db from form
  yield takeEvery("FETCH_CATEGORIES", fetchCategoriesSaga);
  yield takeEvery("SET_CATERGORY", setCategorySaga); // PUT the category id in the fav table for the specific item
  yield takeEvery("DELETE_FAV", deleteFavSaga)
}

function* fetchGifSaga(action) {
  try {
    const response = yield axios.get("/api/search");
    console.log("response", response.data);
    yield put({ type: "DISPLAY_GIF", payload: response.data });
  } catch (error) {
    console.error("Error in FETCH saga", error);
  }
}

function* fetchFavSaga(action) {
  try {
    const response = yield axios.get("/api/favorites");
    console.log("response", response.data);
    yield put({ type: "DISPLAY_FAVS", payload: response.data });
  } catch (error) {
    console.error("Error in FETCH saga", error);
  }
}

function* postFavSaga(action) {
  try {
    const response = yield axios.post("/api/favorites");
    console.log("respone", response.data);
    yield put({ type: "ADD_FAV", payload: response.data });
  } catch (error) {
    console.error("Error in FETCH saga", error);
  }
}

function* fetchCategoriesSaga() {
  try {
    const response = yield axios.get("/api/categories");
    yield put({ type: "DISPLAY_CATEGORIES", payload: response.data });
  } catch (error) {
    console.error("Error in FetchCategoriesSaga", error);
  }
}

function* setCategorySaga(action) {
  try {
    const response = yield axios.put(`/api/favorites/${action.payload}`);
    console.log('respone', response.data);
    yield put({ type: 'FETCH_FAVS' });
  } catch (error) {
    console.error('Error in PUT saga', error)
  }
}

function* deleteFavSaga(action) {
    try {
      const response = yield axios.delete(`/api/favorites/${action.payload}`);
      console.log('respone', response.data);
      yield put({type: 'FETCH_FAVS'});
    } catch (error) {
      console.error('Error in PUT saga', error)
    }
  }

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ gifList, favoriteList, categoryList }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
