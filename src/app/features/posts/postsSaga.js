import { call, put, takeEvery } from "redux-saga/effects"
import { getPostsSuccess } from "./postsSlice"

function* workGetPostFetch() {
    const posts =  yield call(() => fetch("https://jsonplaceholder.typicode.com/posts"))
    const parsedPosts = yield posts.json()
    const firstTenPosts = parsedPosts.slice(0, 10)
    yield put(getPostsSuccess(firstTenPosts))
}


function* postSaga() {
    yield takeEvery("posts/getPostsFetch", workGetPostFetch)
}

export default postSaga