import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme?: any) => ({
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15rem",
  },
  slider: {
    marginBottom: '2rem'
  },
  backColor: { backgroundColor: "black" },
  textAlign: { display: "flex", alignItems: "center", paddingRight: "0.5rem" },
  cartIcon: {
    backgroundColor: "black",
    marginRight: "1rem",
    marginTop: "0.5rem",
  },
  homeContainer: { marginTop: "2rem" },
  sortBox: { display: "flex" },
  sortGroup: {
    marginBottom: "2rem",
    marginRight: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },
  cartContainer: { maxWidth: 345, height: "100%" },
  cartAction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ml: 1,
    mr: 1,
  },
  menuItem: { margin: "2rem", color: "white", display: "block" },
}));
