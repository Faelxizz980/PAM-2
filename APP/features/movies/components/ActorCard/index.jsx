import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function ActorCard() {
    return (
        <View>
            <Image
                source={{ uri: movie.imagem }}
                style={styles.image}
            />
            <Text style={styles.title}>
                {movie.nome}
            </Text>
            <Text style={styles.year}>
                {movie.ano}
            </Text>
        </View>
    );
}