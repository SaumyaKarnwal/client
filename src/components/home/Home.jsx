import { Fragment} from "react";
import { styled, Box } from "@mui/material";
import Banner from "./Banner";
import NavBar from "./NavBar"; 
import { useEffect } from "react";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import {useDispatch, useSelector } from 'react-redux';
import Slide from "./Slide";
import MidSection from "./MidSection";
import MidSlide from "./MidSlide";

const Component = styled(Box)`
padding:10px 5px;
background: #f2f2f2;
`

const Home = () => {
    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    // const getProducts = useSelector(state => state.getProducts)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Component>
        </>
    )
}

export default Home;