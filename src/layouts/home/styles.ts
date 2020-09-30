const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
    containerHome: { flex: 1 },
    containerContent: { flex: 1, backgroundColor: '#f2f2f2' },
    containerItem1: { flexDirection: 'row', marginHorizontal: 20, marginTop: 20 },
    containerItem2: { marginTop: 14, marginHorizontal: 17, paddingBottom: 14 },
    scrollView: { flex: 1 },
    scrollViewItem: {
        marginTop: 1
    },
    containerBar: {
        flex: 1 / 10,
        flexDirection: 'row',
        backgroundColor: '#fcfcfc',
    }
});

export default styles;