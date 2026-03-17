import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Styles from "./Style";

export default function MovieCard({movie, onPress, width}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[Styles.container,{width:width}]} >
                <Image
                    source={{ uri:movie.img_capa}}
                    style={Styles.image}               
                />
                <Text style={Styles.title}>
                    {movie.nome}
                </Text>
                <Text style={Styles.year}>
                    {movie.ano}
                </Text>
               
            </View>
        
        </TouchableOpacity>
    )
}