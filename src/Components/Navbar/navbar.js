import { AppBar, Container } from "@mui/material";
import PlaceholderImage from "../../Images/cone.png";

const Nav = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <img src={PlaceholderImage} alt="icon"></img>
        hi
      </AppBar>
    </Container>
  );
};

// const Navbar = () => {
//   return (
//     <Container maxwidth="lg">
//       <AppBar position="static" color="inherit">
//         <img src={PlaceholderImage}></img>
//       </AppBar>
//     </Container>
//   );
// };

export default Nav;
