import { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import io from 'socket.io-client';

export default function useSocketIO(connect, disconnect) {
    const [socketIO, setSocketIO] = useState(null);
    useEffect(() => {
        async function load() {
            const token = await AsyncStorage.getItem('@JustCause:token');
            const socket = io('http://softeam.com.br:8080', {
                transports: ['polling'],
                path: '/justcause/socket.io',
                query: { token },
            });

            socket.on('connect', connect);
            socket.on('disconnect', disconnect);

            setSocketIO(socket);
        }
        load();
    }, [connect, disconnect, socketIO]);

    return socketIO;
}
