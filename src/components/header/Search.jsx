import { InputBase ,styled, Box} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left:10px;
    display:flex;
    min-width:200px;
    `
const InputSearchBase = styled(InputBase)`
padding-left:10px;
width:100%;
font-size:unset;
`
const SearchIconWrapper = styled(Box)`
color:darkgreen;
padding:6px;
padding-left:10px;`

const Search = () => {
    return (
        <SearchContainer>
            <SearchIconWrapper><SearchIcon/></SearchIconWrapper>
            <InputSearchBase placeholder="Search for products, brands and more"/>
            
        </SearchContainer>
    )
}

export default Search;