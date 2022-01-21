import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme?: any) => ({
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15rem",
  },
  backColor: { backgroundColor: "black" },
  textAlign: { display: "flex", alignItems: "center", marginRight: "0.5rem" },
  cartIcon: {
    backgroundColor: "black",
    marginRight: "1rem",
    marginTop: "0.5rem",
  },
  sortBox: { display: "flex" },
  sortGroup: {
    marginBottom: "2rem",
    marginRight: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cartContainer: { maxWidth: 345, height: "100%" },
  cartAction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ml: 1,
    mr: 1,
  },
}));
