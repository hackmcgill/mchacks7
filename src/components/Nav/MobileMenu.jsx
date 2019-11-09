import * as styleVars from "../variable"

export const MobileMenu = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "25px",
    top: "22px",
    right: "30px",
  },
  bmBurgerBars: {
    background: styleVars.hackBlack40,
    borderRadius: "30px",
    height: "3.5px",
  },
  bmBurgerBarsHover: {
    background: styleVars.hackBlack60,
  },
  bmCrossButton: {
    height: "30px",
    width: "30px",
    top: "22px",
    right: "30px",
    outline: "none",
  },
  bmCross: {
    background: styleVars.hackBlack40,
    height: "5px",
    width: "30px",
    top: "5px",
    left: "-15px",
    borderRadius: "5px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: styleVars.hackBlack5,
    padding: "2.5em 1.5em 0",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: styleVars.colorHackRed,
    padding: "0.8em",
    top: "8em",
    display: "grid",
    height: "250px",
    textAlign: "center",
    fontSize: "24px",
    marginTop: "60px",
  },
  bmItem: {
    textAlign: "center",
    lineHeight: "7rem",
    fontDize: "36px",
    padding: "40px",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

export default MobileMenu
