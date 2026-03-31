import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles.js';

export default function ActorCard({ ator }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: ator.imagem }} style={styles.photo} />
            <Text style={styles.name}>{ator.nome}</Text>
            <Text style={styles.character}>{ator.personagem}</Text>
        </View>
    );
}