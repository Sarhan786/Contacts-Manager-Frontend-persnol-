import { Avatar } from '@mui/material';
import SearchBar from "material-ui-search-bar";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-light bg-light justify-content-between" className='navbar'>
                <p style={{fontSize:"25px",marginLeft:"10px",width:"100%"}}>Total Contact</p>
                <SearchBar style={{width:"50%",marginLeft:"auto"}}/>
                <div Classname="UserProfile" style={{display:"grid",gridTemplateColumns:"60% 40%"}}>
                <Avatar style={{marginLeft:"auto"}}/>
                <div style={{marginRight:"10px",marginLeft:"5px",marginTop:"5px"}}>
                    <p style={{fontSize:"10px",margin:"0px"}}>Ram Dravin</p>
                    <p style={{fontSize:"10px",margin:"0px",Opacity:"70%"}}>Super Admin</p>
                </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
