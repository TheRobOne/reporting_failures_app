import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

import { logoutUser } from '../../../actions/authActions';
import LeftMenu from './LeftMenu';

const styles = theme => ({
    root: {
      flexGrow: 1,
      paddingLeft: 0,
    },
    grow: {
      flexGrow: 1,
    },
    link: {
        margin: theme.spacing.unit,
        marginLeft: 0
      },
    contrastText: {
        color: theme.palette.primary.contrastText
    },
    toolbar: theme.mixins.toolbar,
    left: {
        marginLeft: 200,
        paddingLeft: 0,
    },
    adminLeft: {
        marginLeft: 0,
        paddingLeft: 0,
    },
    menuItemLeft: {
        backgroundColor: theme.palette.secondary.dark,
        padding: '13px 30px'
    },
    right: {
        marginRight: 200,
    },
  });

class Navbar extends Component {
    state = {
        isDrawerOpen: false
      };

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
        window.location.href = '/login';
    }

    toggleDrawer = (open) => () => {
        this.setState({
            isDrawerOpen: open,
        });
    };
    
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const { classes } = this.props;

        const guestLinks = (
            <React.Fragment>
                <Typography variant="h4" className={`${classes.grow} ${classes.left}`}>
                    <Link color="inherit" component={RouterLink} className={`${classes.link} ${classes.menuItemLeft}`} to="/">Podgląd</Link>
                </Typography>
                <Typography variant="h6" className={`${classes.grow} ${classes.right}`} align="right">
                    <Link component={RouterLink} className={`${classes.link} ${classes.contrastText}`}  to="/login">Logowanie</Link>
                    <Link component={RouterLink} className={`${classes.link} ${classes.contrastText}`} to="/register">Rejestracja</Link>
                </Typography>
            </React.Fragment>
        );

        const authLinks = (
            <React.Fragment>
                <Typography variant="h4" className={`${classes.grow} ${classes.left}`}>
                    <Link color="inherit" component={RouterLink} className={`${classes.link} ${classes.menuItemLeft}`} to="/">Podgląd</Link>
                </Typography>
                <Typography variant="h6" className={`${classes.grow} ${classes.right}`} align="right">
                    <Link color="inherit" component={RouterLink} className={classes.link} to="/add-failure">Dodaj usterkę</Link>
                    <Link className={`${classes.link} ${classes.contrastText}`} onClick={this.onLogoutClick.bind(this)} to="/login">Wyloguj</Link>
                </Typography>
            </React.Fragment>
        );

        const adminLinks = (
            <React.Fragment>
                <IconButton className={`${classes.menuButton} ${classes.left}`}color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h4" className={`${classes.grow} ${classes.adminLeft}`}>
                    <Link color="inherit" component={RouterLink} className={`${classes.link} ${classes.menuItemLeft}`} to="/">Podgląd</Link>
                </Typography>
                <Typography variant="h6" className={`${classes.grow} ${classes.right}`} align="right">
                    <Link color="inherit" component={RouterLink} className={classes.link} to="/add-failure">Dodaj usterkę</Link>
                    <Link className={`${classes.link} ${classes.contrastText}`} onClick={this.onLogoutClick.bind(this)} to="/login">Wyloguj</Link>
                </Typography>
            </React.Fragment>
        );

        let leftMenuLinks = null;

        if(user.role === 'admin' || user.role === 'conservator'){
            leftMenuLinks = adminLinks;
        }

        return(
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    { isAuthenticated ? leftMenuLinks: null }
                    { isAuthenticated && user.role === 'basic' ? authLinks: null }
                    { !isAuthenticated ? guestLinks: null }
                    </Toolbar>
                </AppBar>
                <LeftMenu isDrawerOpen={this.state.isDrawerOpen} toggleDrawer={() => this.toggleDrawer()} userRole={user.role}/>
            </div>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps, { logoutUser })(withStyles(styles)(Navbar));