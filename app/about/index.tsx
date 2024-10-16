import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const About = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "gray",
        }}
      >
        <Text style={{ fontSize: 50, color: "yellow" }}>About</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "gray",
        }}
      >
        <Text>
          <Link
            style={{
              fontSize: 30,
              textDecorationLine: "underline",
            }}
            href={"/"}
          >
            Home
          </Link>
        </Text>
      </View>
    </>
  );
};

export default About;
