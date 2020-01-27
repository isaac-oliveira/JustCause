import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

Reactotron.configure({
    name: 'JustCause',
    host: '10.0.3.2',
})
    .useReactNative()
    .use(reduxPlugin())
    .use(sagaPlugin())
    .connect();

Reactotron.clear();

export default Reactotron;
