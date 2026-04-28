import React from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native-web";
import { useElencoMovie } from "../../hooks/useMovies";
import ActorCard from "../../components/ActorCard";
import { useRoute } from "@react-navigation/native";
import styles from './styles'


export default function MovieDetails(){
    const route = useRoute();
    const {movie} = route.params;
    const {elenco} =useElencoMovie(movie.id);
    console.log(movie)
    return(
        <ScrollView style={styles.container}>

            <Image
            source={{uri: movie.img_capa}}
            style={styles.image}
            />

            <Text style={styles.title}>
            {movie.nome}
            </Text>

            <Text style={styles.year}>
            {movie.ano}
            </Text>

            <Text style={styles.descricao}>
            {movie.sinopse}
            </Text>

            <FlatList
            data={elenco}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <ActorCard actor={item}/>}
            />

        </ScrollView>
    );
}