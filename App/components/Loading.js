import React, { useState, useEffect } from 'react';
import { Animated, Easing, Platform } from 'react-native';
import Lottie from 'lottie-react-native';

import { Container } from './styles/LoadingStyle';
import Color from '../themes/Color';

import animLoading from '../animation/loading.json';

const Loading = function() {
    const [ball1] = useState(new Animated.Value(5));
    const [ball2] = useState(new Animated.Value(5));
    const [ball3] = useState(new Animated.Value(5));

    useEffect(() => {
        function ballAnim(ball, value) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(ball, {
                        toValue: 25,
                        duration: 200,
                        easing: Easing.exp,
                    }),
                    Animated.delay(value),
                    Animated.timing(ball, {
                        toValue: 5,
                        duration: 200,
                        easing: Easing.exp,
                    }),
                ]),
            ).start();
        }
        ballAnim(ball1, 10);
        ballAnim(ball2, 40);
        ballAnim(ball3, 90);
    });

    return (
        <Container>
            <Ball ball={ball1} />
            <Ball ball={ball2} />
            <Ball ball={ball3} />
        </Container>
    );
};

function Ball({ ball }) {
    return (
        <Animated.View
            style={{
                margin: 5,
                marginBottom: ball ? ball : 5,
                height: 14,
                width: 14,
                borderRadius: 18,
                backgroundColor: Color.primary,
            }}
        />
    );
}

const LottieLoading = function() {
    return (
        <Lottie
            style={{
                height: 120,
                alignSelf: 'center',
                position: 'absolute',
            }}
            source={animLoading}
            resizeMode="cover"
            autoPlay
            loop
        />
    );
};

export default Platform.select({
    ios: LottieLoading,
    android: parseInt(Platform.Version) >= 25 ? LottieLoading : Loading,
});
