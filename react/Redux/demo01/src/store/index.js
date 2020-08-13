import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSageMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSageMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk)); // 整合这两个中间件
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware)); // 整合这两个中间件

const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(thunk) // 只能用thunk，chrome调试就有问题
    enhancer
)

sagaMiddleware.run(mySaga)
export default store