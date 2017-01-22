import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    filmItem: {
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#eee',
        padding: 10,
        marginTop: 5,
        marginBottom: 5
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
        width: 70,
        height: 100,
        marginRight: 5
    }
});