import { View, Text, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SearchProps {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: SearchProps) => {
  return (
    <View className="flex-row items-center rounded-full px-5 py-4 bg-black">
      <Ionicons name="search" size={24} />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#000"}
        className="flex-1 ml-2 text-black"
      />
    </View>
  );
};

export default SearchBar;
