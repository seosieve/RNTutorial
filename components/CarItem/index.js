import React from "react";
import {View, Text, ImageBackground} from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

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

      <StyledButton 
         type="primary"
         content={"custom order"}
         onPress={()=> {
            console.warn("custom order Pressed");
         }}
      />
      <StyledButton 
         type="secondary"
         content={"existing inventory"}
         onPress={() => {
            console.warn("existing inventory Pressed");
         }}
      />
      </View>
    );
};

export default CarItem;