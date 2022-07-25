import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={{ padding: 25 }}>{label}</AppText>
    </TouchableOpacity>
  );
}

export default PickerItem;
