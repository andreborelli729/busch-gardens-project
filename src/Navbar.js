import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from './assets/logo.jpg';
import './css/navbar.css';


const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
    <header className="header__middle">
       
        <div className="container">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img src={logo} alt="logo" /> 
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#">Informações do Parque<FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/endereco`}>Endereço </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mapa`}> Mapa</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/acessibilidade`}> Acessibilidade</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/aplicativo`}>Baixe o aplicativo</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/cashless`}>Cashless</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/politica-do-parque`}>Políticas do parque</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/garantia-weather-or-not`}> Garantia Weather-or-not</NavLink> </li>

                        </ul>
                    </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> O que fazer <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/atracoes`}>Atrações </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/apresentacoes`}>Apresentações </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/experiencias`}>Experiências </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/restaurantes`}>Restaurantes </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/lojas`}>Lojas</NavLink> </li>

                        </ul>
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/transporte-gratuito`}> Transporte Gratuíto </NavLink> </li>

                    </ul>


                    </nav>     
                </div>   



        
        
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu
