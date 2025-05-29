import { View, ScrollView, Image } from "react-native";
import React from "react";

import { useRouter } from "expo-router";
import SearchBar from "@/components/searchbar";

const Home = () => {
  const router = useRouter();

  return (
    <View className="flex-1  bg-customPink">
      <ScrollView
        className="flex=1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-14 h-14 mt-20 mb-5 mx-auto"
        />
        <View className="flex-1 mt-5">
          <SearchBar
            placeholder={"Search for a movie"}
            onPress={() => router.push("/search")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
