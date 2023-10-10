import { Fragment} from "react";
import { styled, Box } from "@mui/material";
import Banner from "./Banner";
import NavBar from "./NavBar"; 

const Component = styled(Box)`
padding:10px 5px;
background: #f2f2f2;
`

const Home =() => {
    return (
        <>
            <NavBar/>
            <Component>
                <Banner/>
            </Component>
        </>
        
    )
}

export default Home;