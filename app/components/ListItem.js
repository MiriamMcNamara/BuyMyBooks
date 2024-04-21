import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.container}>
          {IconComponent && IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </Swipeable>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 18,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});
