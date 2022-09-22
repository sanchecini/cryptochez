import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid #20C20E",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#20C20E",
        color: "black",
      },
      width: "22%",
      //   margin: 5,
    },
  });

const SelectButton = ({ children, selected, onClick }) => {

    const styleProps = {backgroundColor: selected ? "#20C20E" : "", color: selected ? "black" : "", fontWeight: selected ? 700 : 500};
    const classes = useStyles(styleProps);

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;