import NavBarItems from "./NavBarItems";
import "./NavBar.css";

function NavBar() {

  let dummyData = [
    { label: "Home" , uri: "/"},
    { label: "Todos's" , uri: "/todos"},
    { label: "Login" , uri: "/Login"},
    { label: "Covid" , uri: "/Covid"}
  ];

  let navBarItems = dummyData.map((o, i)=>{
    return (<NavBarItems label={o.label} uri={o.uri} key={i}></NavBarItems>);
  });

    return(
        <nav>
            <ul>
              {navBarItems}
            </ul>
        </nav>
    );
}

export default NavBar;