import React from 'react';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
import Home from '@material-ui/icons/Home'

type HeaderTypes = {
   username : string;
}


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Header({username} : HeaderTypes){
      const classes = useStyles();
      
    return(
      <div className={classes.root}>
           <AppBar position="static">
           <Toolbar>
          <Link to="/" style={{color : "white"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Home />
          </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            {"Chess21-Quiz"}
          </Typography>
            <Typography>
                {username}
            </Typography>
        </Toolbar>
      </AppBar>
      </div>
       
    )
}

export {Header}

/*
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
*/