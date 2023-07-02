 import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  registerContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    height: 549,
    marginTop: "auto",
    alignItems: "center",
  },
  imagebg: {
    flex: 1,
    justifyContent: "center",
  },

  text: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "medium",
    textAlign: "center",
  },
  inputWrap: {
    position: "relative",
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 16,
    marginBottom: 16,
  },
  pressableShowPassword: {
    position: "absolute",
    right: 16,

    top: "35%",
    transform: [{ translateY: -8 }],
  },
  showPasswordText: {
    color: "#1B4371",
    textAlign: "right",
    fontSize: 16,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "relative",
    top: -60,
    marginBottom: -32,
   
  },
  addCross: {
    width: 25,
    height: 25,
    zIndex: 100,
    position: "absolute",
    right: -12.5,
    bottom: 14,
    backgroundColor: "transparent",
  },
  registerButton: {
    display: "flex",
    width: 343,
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  linkWrap: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  linkText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  underlineText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
  },
  loginContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    height: 489,
    marginTop: "auto",
    alignItems: "center",
  },
  starsInput: {
    color: "#212121",
    fontSize: 15,
  },

  scrollArea: {
    height: 549,

    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});