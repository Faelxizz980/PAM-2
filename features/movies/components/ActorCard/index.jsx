import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles.js';

export default function ActorCard({ actor }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: actor.imagem }} style={styles.photo} />
            <Text numberOfLines={1} style={styles.name}>{actor.nome}</Text>
            <Text numberOfLines={1} style={styles.character}>{actor.personagem}</Text>
        </View>
    );
}