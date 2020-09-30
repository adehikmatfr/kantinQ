const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
    containerSearch: {
        position: 'relative', flex: 1
    },
    inputSearch: {
        borderColor: '#E8E8E8',
        backgroundColor: 'white',
        borderRadius: 25,
        height: 48,
        fontSize: 14,
        paddingLeft: 45,
        paddingRight: 20,
    },
    iconSearch: { position: 'absolute', paddingTop: 11, paddingLeft: 14 },
});

export default styles;