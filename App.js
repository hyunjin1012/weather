import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./weather";
require("dotenv").config();

const API_KEY = process.env.API_KEY;

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
        name,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
    );
    console.log(temp, weather[0].main);
    console.log(weather);
    console.log(weather[0]);
    console.log(weather[0].main);
    console.log(latitude, longitude);
    const data = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
    );
    console.log(name);
    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main,
      city: name,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      await Location.getForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      console.log("jin");
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad.");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, city } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} city={city} />
    );
  }
}
