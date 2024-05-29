import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image style={{marginTop:60}} source={require("../../assets/images/food_31.png")} />
      <Text style={{color: "#f96163", fontSize: 22, fontWeight: "bold",marginTop:30 }}>
        40K+ Premium Recipes
      </Text>
      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 44,
          marginBottom: 40,
        }}
      >
        Cook Like a Chef
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate("recipe")}
        style={{
        
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center"
        }}
      >
        <Text style={{fontSize:18,color:"#fff",fontWeight:"700"}}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
