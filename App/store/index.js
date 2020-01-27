import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reactotron from '../config/ReactotronConfig';

import reducers from './reducers';
import sagas from '../sagas';

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = applyMiddleware(sagaMiddleware);
const reactotron = Reactotron.createEnhancer();

const store = createStore(
    reducers,
    compose(
        middleware,
        reactotron,
    ),
);

sagaMiddleware.run(sagas);

export default store;
