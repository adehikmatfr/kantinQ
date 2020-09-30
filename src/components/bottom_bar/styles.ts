const {StyleSheet}=require('react-native');

 const styles = StyleSheet.create({
    touchItem:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    colorText:(active=false)=>{
        return {
        fontSize: 10,
        color: active ? '#58b4e9' : '#545454',
        marginTop: 4,
        }
    },
    colorIcon:(active=false)=>{
        return {
        color: active ?  '#58b4e9' : '#ccc',
        }
    },
});

export default styles;