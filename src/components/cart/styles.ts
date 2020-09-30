const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
    iconCart: { paddingTop: 10, paddingLeft: 14, marginLeft: 5 },
    containerCount: {
        backgroundColor: '#1ba7f0',
        position: 'absolute',
        width: 12,
        height: 12,
        marginLeft: 28,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    countText: {
        color: '#000',
        fontSize: 8,
    },
});

export default styles;