import React,{useState} from 'react';
import {Navbar,NavbarBrand,NavItem,Collapse,NavbarToggler,Nav} from 'reactstrap';
import {Link} from 'react-router-dom'

type HeaderTypes = {
   username : string;
}

function Header({username} : HeaderTypes){
    const [isNavOpen , setNavOpen] = useState<boolean>(false)
    function toggleNav(){
        setNavOpen(isNavOpen => isNavOpen = !isNavOpen)
      }
      
    return(
        <React.Fragment>
            <Navbar dark expand="md" color="primary">
                <div className="container">
                    <NavbarToggler onClick={toggleNav}></NavbarToggler>
                    <NavbarBrand>Chess21-Quiz</NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                            <Link className="nav-link" to='/' style={{cursor : "pointer"}}>
                                    <span className="fa fa-home fa-lg"></span>Home</Link>
                            </NavItem>
                            <NavItem>
                                <p>Welcome , {username}</p>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            
        </React.Fragment>
       
    )
}

export {Header}