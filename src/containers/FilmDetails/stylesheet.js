import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    filmItem: {
        flex: 1,
        backgroundColor: '#ccc',
        padding: 15
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 10,
        maxWidth: 300,
        color: '#333'
    },
    info: {
        flexDirection: 'row'
    },
    details: {
        fontSize: 13,
        color: '#666'
    },
    image: {
        width: 120,
        height: 180,
        marginRight: 10
    },
    overview: {
        marginTop: 10
    }
});