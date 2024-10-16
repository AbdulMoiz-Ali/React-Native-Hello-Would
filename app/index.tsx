import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
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
        <Text style={{ fontSize: 50, color: "yellow" }}>Hello Would</Text>
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
            href={"/about"}
          >
            About
          </Link>
        </Text>
      </View>
    </>
  );
}
