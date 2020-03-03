import { AsyncStorage } from 'react-native';
import io from 'socket.io-client';

export default async function() {
    const token = await AsyncStorage.getItem('@JustCause:token');
    const socket = io('http://softeam.com.br:8080', {
        transports: ['polling'],
        path: '/justcause/socket.io',
        query: { token },
    });

    return socket;
}
