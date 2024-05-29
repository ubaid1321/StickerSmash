import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={{ backgroundColor: "#f39c12", flex: 1 }}>
      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 16,
          paddingVertical: 10,
        }}
      >
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={30} color="white" />
        </Pressable>
        <FontAwesome name={"heart-o"} size={26} color="white" />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
          paddingHorizontal: 16,
          paddingTop: 100, // Increase top padding to accommodate the image
        }}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 28,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {item.name}
          </Text>
          <Text style={{ fontSize: 20, marginVertical: 16, textAlign: "center" }}>
            {item.description}
          </Text>

          {/* Recipe extra details */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginBottom: 20,
            }}
          >
            <View style={{ backgroundColor: "orange", padding: 10, borderRadius: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>{item.time}</Text>
            </View>
            <View
              style={{
                backgroundColor: "orange",
                padding: 10,
                borderRadius: 10,
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "500" }}>{item.difficulty}</Text>
            </View>
            <View
              style={{
                backgroundColor: "orange",
                padding: 10,
                borderRadius: 10,
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "500" }}>{item.calories}</Text>
            </View>
          </View>

          {/* Recipe Ingredients */}
          <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
            <Text style={{ fontSize: 22, fontWeight: "600" }}>Ingredients:</Text>
            {item.ingredients.map((ingredient, index) => (
              <View key={index} style={{ flexDirection: "row", alignItems: "center", marginVertical: 4 }}>
                <View style={{ backgroundColor: "red", height: 10, width: 10, borderRadius: 5 }}></View>
                <Text style={{ fontSize: 18, marginLeft: 6 }}>{ingredient}</Text>
              </View>
            ))}
          </View>

          {/* Recipe Steps */}
          <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
            <Text style={{ fontSize: 22, fontWeight: "600" }}>Steps:</Text>
            {item.steps.map((step, index) => (
              <View key={index} style={{ flexDirection: "row", alignItems: "center", marginVertical: 4 }}>
                 <Text style={{ fontSize: 18, marginLeft: 6 }}>{`${index +1} ) ${step}`}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          height: 200,
          width: 200,
          position: "absolute",
          top: 140, // Adjust top position to fit the image above the white background
         
        }}
      >
        <Image
          source={item.image}
          style={{ width: "100%", height: "100%", resizeMode: "cover",marginLeft:80,marginTop:60 }}
        />
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;