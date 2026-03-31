import React from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native-web";
import ActorCard from "../../components/ActorCard";
import { styles } from "./styles.js";

export default function MovieDetails({ route }) {
    const { movie } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{movie.nome}</Text>
            <Image source={{ uri: movie.img_capa }} style={styles.poster} />
            <View style={styles.boxsinopse}>
                <Text style={styles.subtitle}>Sinopse:</Text>
                <Text style={styles.synopsis}>{movie.sinopse}</Text>
            </View>

            <Text style={[styles.subtitle, {textAlign: 'center'}]}>Elenco</Text>
            {movie.elenco ? (
                <View style={styles.boxelenco}>
                    <FlatList
                        style={{ flex: 1 }}
                        data={movie.elenco}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-around' }}
                        renderItem={({ item }) => (
                            <ActorCard
                            ator={item}
                            />
                        )}
                        />
                </View>
            ) : (
                <Text>Elenco não disponível</Text>
            )
        }
        </ScrollView>
    );
}