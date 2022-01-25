import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme?: any) => ({
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15rem",
  },
  slider: {
    marginBottom: "2rem",
  },
  pages: { marginTop: "2rem", marginBottom: "2rem" },
  backColor: { backgroundColor: "black" },
  textAlign: { display: "flex", alignItems: "center", paddingRight: "0.5rem" },
  cartIcon: {
    backgroundColor: "black",
    marginRight: "1rem",
    marginTop: "0.5rem",
  },
  pageImage: { width: "100%" },
  homeContainer: { marginTop: "2rem", marginBottom: "3rem" },
  sortBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "4rem",
    marginBottom: "2rem",
  },
  sortGroup: {
    marginBottom: "2rem",
    marginRight: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },
  cartContainer: {
    maxWidth: 345,
    height: "100%",
    cursor: "pointer",
  },
  cartAction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ml: 1,
    mr: 1,
  },
  menuItem: {
    margin: "2rem",
    color: "white",
    textDecoration: "none",
    display: "block",
  },
  pageName: { color: "#fff" },
}));

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "#fff",
  border: "2px solid #231f20",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};
