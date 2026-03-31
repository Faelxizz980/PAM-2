import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'collumn',
        alignItems: 'center',
        padding: 16,
        flex: 1,
        backgroundColor:"#2c343fff",
        borderRadius:20,
        margin: 10
    },
    name: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8
    },
    photo: {
        width: 125,
        height: 150,
        marginBottom: 8,
        borderRadius: 8,
    },
    character: {
        fontSize: 14,
        color: "#fff",
    }
});