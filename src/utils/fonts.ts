import { Platform } from "react-native";
const androidFonts = {
  rocheSansRegular: "RocheSans-Regular",
};
const iOSFonts = {
  rocheSansRegular: "RocheSans-Regular",
};
export default Platform.OS === "ios" ? iOSFonts : androidFonts;
