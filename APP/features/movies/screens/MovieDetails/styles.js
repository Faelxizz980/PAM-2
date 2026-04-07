import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor:"#131314ff",
        padding: 16,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    title: {
        fontSize: 40,
        color:"#fff",
        fontWeight: "700",
        marginBottom: 16
    },
    subtitle:{
        fontSize: 24,
        color:"#fff",
        fontWeight: "700",
        marginBottom: 16
    },
    poster: {
        width: 200,
        height: 300,
        marginBottom: 16,
        borderRadius: 8,
    },
    synopsis: {
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'center',
        color:"#fff"
       
    },
    boxsinopse:{
        backgroundColor:"#2c343fff",
        padding:6,
        alignItems:"center",
        borderRadius:20,
        width:"70%",
        boxShadow:"0 0 30px #0a0a4eff"
    },
    boxelenco:{
        padding:6,
        alignItems:"center",
        borderRadius:20,


    }
});