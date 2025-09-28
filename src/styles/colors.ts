const Generic = {
  black: "#000",
  red: "red",
  white: "#fff",
  gray: "gray",
  gray138T60:"gray"
};

const Text = {
  black: "rgb(0, 0, 0)",
  white: "#fff",
  primary:"#000",
  completedColorText:"green",
  completedColor:'green'
};

const Button = {
  primary: "#000",
  disabled: Generic.black,
  outlined: "transparent",
  selectedCheckBox: "#00B458",
  disabledText: "#706B69",
  secondary: "#4678F8",
};

const Categories = {
  other: {
    background: "#fff7f5",
    blackshadow:"rgba(0, 0, 0, 0.5)"
  },
};

const IntroScreens = {
  progressColor: "#00B458",
  inActiveColor: "#F0F0F0",
  blueGradient: ["#0B3297", "#356DFFE3"],
};

const ProfileInfo = {
  blueGradient: ["rgba(2, 35, 102, 1)", "rgba(2, 35, 102, 1)"],
  greenGradient: ["rgba(20, 130, 250, 1)", "rgba(20, 130, 250, 1)"],
};
const ProgressCircle = {
  layerTwoColor: "#E3F0FF",
  layerThreeColor: "#FFFFFF",
  layerFourColor: "#eff6fc",
  inActiveColor: "#BDE3FF",
  endColor: "#1482FA",
  middleColor: "#1482FA",
  startColor: "#1482FA",
  doneColor: "#00B458",
};

const Theme = {
  blueTheme: {
    TextColor: "rgba(146, 39, 143, 1)",
    branchDetailsColor: {
      facilityColor: "rgba(92, 46, 145, 1)",
    },
    changeLocation: {
      buttonOpacity_BlueTheme: "rgba(0, 174, 239, 0.4)",
    },
  },

  greenTheme: {
    TextColor: "rgba(0, 137, 208, 1)",

    branchDetailsColor: {
      facilityColor: "rgba(0, 96, 175, 1)",
    },
    changeLocation: {
      buttonOpacity_GreenTheme: "rgba(32, 189, 190, 0.4)",
    },
  },
};

export default {
  Categories,
  Generic,
  Text,
  Button,
  IntroScreens,
  ProgressCircle,
  ProfileInfo,
  Theme,
};
