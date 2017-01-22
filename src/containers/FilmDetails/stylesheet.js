import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    filmItem: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#ccc',
        padding: 15,
    },
    title: {
        fontSize: 15,
        maxWidth: 200,
        color: '#333'
    },
    year: {
        fontSize: 11,
        color: '#666'
    },
    image: {
        width: 120,
        height: 180,
        marginRight: 5
    }
});