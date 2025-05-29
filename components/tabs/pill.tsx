import React, { useEffect } from "react";
import { Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";

type AnimatedTabIconProps = {
  label?: string;
  iconColor?: string;
  pillBg?: string;
  isFocused: boolean;
  iconName: string;
};

const AnimatedTabIcon: React.FC<AnimatedTabIconProps> = ({
  label,
  pillBg = "violet",
  isFocused,
  iconColor = "black",
  iconName,
}) => {
  const originalWidth = 50;
  const expandedWidth = 100;

  const width = useSharedValue(originalWidth);

  useEffect(() => {
    width.value = withSpring(isFocused ? expandedWidth : originalWidth, {
      damping: 50,
      stiffness: 120,
    });
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: width.value,
    height: 60,
    backgroundColor: isFocused ? pillBg : "transparent",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  }));

  const iconToShow = isFocused ? iconName : `${iconName}-outline`;

  return (
    <Animated.View style={animatedStyle}>
      <Ionicons name={iconToShow as any} size={24} color={iconColor} />
      {isFocused && (
        <Text style={{ marginLeft: 6, fontSize: 14, color: iconColor }}>
          {label}
        </Text>
      )}
    </Animated.View>
  );
};

export default AnimatedTabIcon;
