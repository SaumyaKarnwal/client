import React, { useState, useContext } from 'react';
import {Box, Button, Typography, styled} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';

import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';
import LoginDialog from '../login/LoginDialog';

const Wrapper = styled(Box)`
display:flex;
margin: 0 1% 0 auto;
& > button, & >p, & >div{
   margin-right: 40px;
}`

const Conatiner = styled(Box)`
display:flex;
padding-top:5px;
`

const LoginButton = styled(Button)`
color: #fff;
${'' /* background: white; */}
text-transform: none;
border-radius:2px;
padding: 5px 40px;
box-shadow:none;
${'' /* font-weight:600; */}
height:32px;
`

const CustomButtons =()=>{

    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    // const cartDetails = useSelector(state => state.cart);
    // const { cartItems } = cartDetails;

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
                
            }

            <Typography style={{marginTop:5, width:135}} >Become a seller</Typography>
            <Typography style={{marginTop:5, width:90}} >More</Typography>
            
            <Conatiner>
            <ShoppingCartIcon/>
                <Typography>&nbsp;Cart</Typography>
            </Conatiner>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Wrapper>
    )
}

export default CustomButtons;