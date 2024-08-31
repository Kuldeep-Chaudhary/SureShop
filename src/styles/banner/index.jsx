import { Box, styled, Typography, Button } from "@mui/material";
import { Colors } from "../theme";
// import { padding } from "polished";

// container
export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

// content
export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  padding: "30px",
}));

// title
export const BannerTitile = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "72px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

// description
export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.24,
  marginBottom: "3rem",
  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5rem",
  },
}));

// banner image
export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "400px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    // height:'300px'
  },
}));

// banner shop button (mui custom)
export const BannerShopButton = styled(Button,{
    shouldForwardProp: (prop) => prop !== "color",
    name: "MyShopButton",
    slot: "Root",
    overridesResolver: (props, styles) => [
      styles.root,
      props.color === "primary" && styles.primary,
      props.color === "secondary" && styles.secondary,
    ],

})(({theme}) => ({
    padding: "20px 0px",
    fontWeight: "bold",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0",
      fontSize: "14px",
    },

}))
