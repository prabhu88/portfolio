import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Badge,
    Box,
    Hidden,
    IconButton,
    Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
const DashboardNavbar = ({ onMobileNavOpen, ...rest }) =>{
    const [notifications] = useState([]);
    return (
        <AppBar
            elevation={0}
            {...rest}
        >
            <Toolbar>
                <RouterLink to="/"> 
                </RouterLink>
                <Box sx={{ flexGrow: 1 }} />
                <Hidden lgDown>
                    <IconButton color="inherit">
                        <Badge
                            badgeContent = "45"
                            color="warning"
                            variant="dot"
                        >
                            {/* badgeContent={notifications.length} */}
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" >
                        <InputIcon />
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                    <IconButton
                        color="inherit"
                        onClick={onMobileNavOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}
export default DashboardNavbar;