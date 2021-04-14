import {NavLink} from 'react-router-dom';

function NavBarItems ({label, uri}){
    return(
        <li className="hover:bg-indigo-600">
            <NavLink to={uri}>{label}</NavLink>
        </li>
    );
}

export default NavBarItems;

/*<a alt={label} href={uri}> {label} </a> */