import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Home from "./Home/Home";
import {AppBar, Button, createMuiTheme, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import {blue, grey} from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton color={"inherit"} aria-label={"Open Drawer"}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography>
                            Ibrokhim Shokirov
                        </Typography>
                        <Button color="primary">
                            Button
                        </Button>
                    </Toolbar>
                </AppBar>

                <Home/>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
