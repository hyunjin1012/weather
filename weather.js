import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import {Ionicons} from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm : {
    iconName: "ios-thunderstorm",
    color: ["#0f2027","#2c5364"]
  },
  Drizzle : {
    iconName: "rainy-outline",
    color: ["#2193b0", "#6dd5ed"]},
  Rain : {
    iconName: "rainy",
    color:["#bdc3c7", "#2c3e50"]
  },
  Snow : {
    iconName: "ios-snow",
    color:["#7f7fd5", "#91eae4"]
  },
  Mist : {
    iconName: "ios-cloudy-outline",
    color:["#7f7fd5", "#91eae4"]
  },
  Smoke : {
    iconName: "ios-cloudy-outline",
    color:["#bdc3c7", "#2c3e50"]
  },
  Haze : {
    iconName: "ios-cloudy-outline",
    color:["#005aa7", "#fffde4"]
  },
  Dust : {
    iconName: "ios-partly-sunny",
    color:["#005aa7", "#fffde4"]
  },
  Fog : {
    iconName: "ios-cloudy-outline",
    color:["#005aa7", "#fffde4"]
  },
  Sand : {
    iconName: "ios-partly-sunny",
    color:["#636363", "#a2ab58"]
  },
  Dust : {
    iconName: "ios-partly-sunny",
    color:["#005aa7", "#fffde4"]
  },
  Ash : {
    iconName: "ios-partly-sunny",
    color:["#005aa7", "#fffde4"]
  },
  Squall : {
    iconName: "rainy",
    color:["#bdc3c7", "#2c3e50"]
  },
  Tornado : {
    iconName: "rainy",
    color:["#bdc3c7", "#2c3e50"]
  },
  Clear : {
    iconName: "sunny",
    color:["#1c92d2", "#f2fcfe"]
  },
  Clouds : {
    iconName: "ios-cloudy",
    color:["#f0f2f0", "#000c40"]
  },
}

export default function Weather({ temp, condition, city }) {
  return (
    <LinearGradient style={styles.container} colors={weatherOptions[condition].color}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Ionicons size={96} name={weatherOptions[condition].iconName} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.condition}>{condition}</Text>
        <Text style={styles.city}>{city}</Text>
      </View>
    </LinearGradient>
    
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
  city: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  halfContainer: {
    flex:1,
    alignItems:"center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 42,
    color: "#fff"
  },
  
  condition: {
    fontSize:42,
    color: "#fff"
  },

  city: {
    fontSize:20,
    color: "#fff"
  }

});
