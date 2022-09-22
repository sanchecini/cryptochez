import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Homepage from "./Pages/Homepage";
import "./App.css";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import 'react-alice-carousel/lib/alice-carousel.css';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();


 
  return (
    <BrowserRouter>
    <div className={classes.App}>

   
    <Header/>
      <Routes>
        
        <Route path="/" element={<Homepage />} /> 
        <Route path="/coins/:id" element={<CoinPage />} /> 
      </Routes>

      
    </div>
    </BrowserRouter>
  )
}

export default App
