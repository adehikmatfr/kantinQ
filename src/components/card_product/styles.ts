const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 5,
        backgroundColor: 'white',
    },
    cardContainerItem: {
        height: 250,
        marginHorizontal: 10,
        marginTop: 20,
        backgroundColor: 'red',
        borderRadius: 10,
        position: 'relative',
    },
    cardImage: {
        width: 420,
        height: 250,
        borderRadius: 5
    },
    kantinText: {
        position: 'absolute',
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    hargaText: {
        position: 'absolute',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 310,
        marginTop: 210,
        paddingRight: 5,
    },
    containerDsc: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productName: {
        fontSize: 28,
        padding: 8,
        color: '#000',
    },
    productDsc: {
        marginTop: -10, marginLeft: 10
    },
    addCartContainer: {
        marginTop: 15, paddingRight: 10
    },
    addButton: {
        elevation: 8,
        backgroundColor: '#22aaf0',
        borderRadius: 100,
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
    line: {
        width: '100%',
        backgroundColor: '#f2f2f2',
        height: 3,
        marginTop: 15,
    }

});

export default styles;