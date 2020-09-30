const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
    containerPay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1ba7f0',
        padding: 16,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    branch: {
        fontSize: 20, fontWeight: 'bold', color: 'white'
    },
    saldo: {
        fontSize: 20, fontWeight: 'bold', color: 'white'
    },
    containerItem: {
        flexDirection: 'row',
        backgroundColor: '#22aaf0',
        padding: 16,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    containerIcon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textIcon: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 8,
    }
});

export default styles;