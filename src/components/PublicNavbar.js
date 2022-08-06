import styled from "styled-components";
import {NavLink} from "react-router-dom";

const items=[
    {
        name:"Home",
        path:"/",
    },
    {
        name:"About",
        path:"/about",
    }
]
function PublicNavbar(){
return(
    <Navbar>
        {
  items.map((item,index)=>{
      return(

              <NavLink key={index} to={item.path}>{item.name}</NavLink>

      )
  })
        }

    </Navbar>

)
}
const Navbar = styled.div`
  position: fixed;
  top: 0;
width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  height: 48px;
`
const Item = styled.a`
    cursor: pointer;

`
export default PublicNavbar;