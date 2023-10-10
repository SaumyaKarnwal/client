import './App.css';
import {Box} from "@mui/material";

//compnents
import Header from './components/header/Header';
import Home from './components/home/Home'; 
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <div>
    <ContextProvider>
        <Header/>
          <Box style={{marginTop:54}}>
            <Home/>
          </Box>
    </ContextProvider>
     
    </div>
  );
}

export default App;
