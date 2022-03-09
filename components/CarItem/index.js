import React from "react";
import {View, Text, ImageBackground} from "react-native";
import styles from "./style";

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground 
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
        />
        <View style={styles.titles}>
           <Text style={styles.title}>Model S</Text>
           <Text style={styles.subtitle}>Starting at $63,124</Text>
        </View>
      </View>
    );
};

export default CarItem;