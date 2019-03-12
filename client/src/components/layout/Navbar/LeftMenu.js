import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PieChartIcon from '@material-ui/icons/PieChart';
import DomainIcon from '@material-ui/icons/Domain';
import GroupIcon from '@material-ui/icons/Group';

const styles = theme => ({
    list: {
        width: 480,
    }
});

const LeftMenu = (props) => {
    return (
        <Drawer open={props.isDrawerOpen} onClose={props.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={props.toggleDrawer(false)}
            onKeyDown={props.toggleDrawer(false)}
          >
            <List>
                <ListItem button key='Wykresy'>
                    <ListItemIcon> <PieChartIcon/> </ListItemIcon>
                    <ListItemText primary='Wykresy'/>
                </ListItem>
                <ListItem button key='Budynki'>
                    <ListItemIcon> <DomainIcon/> </ListItemIcon>
                    <ListItemText primary='Budynki'/>
                </ListItem>
                { props.userRole === 'admin'? 
                    <ListItem button key='Użytkownicy'>
                        <ListItemIcon> <GroupIcon/> </ListItemIcon>
                        <ListItemText primary='Użytkownicy'/>
                    </ListItem>
                    : null
                }
            </List>
          </div>
        </Drawer>
    );
};

export default withStyles(styles)(LeftMenu);