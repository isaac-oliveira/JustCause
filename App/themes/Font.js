import { Platform } from 'react-native';

export default {
    normal: Platform.select({
        ios: 'Sarabun Regular',
        android: 'Sarabun-Regular',
    }),
    semibold: Platform.select({
        ios: 'Sarabun SemiBold',
        android: 'Sarabun-SemiBold',
    }),
};
