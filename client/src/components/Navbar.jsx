import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    Link,
    Box
} from '@material-ui/core'
 import {makeStyles} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme =>({
    appbar:{
        background: "#0A0206",
        zIndex: theme.zIndex.drawer + 1 
    },
    iconbtn: {
        marginLeft:"auto",
        [theme.breakpoints.up("sm")]:{
            display: "none"
        }
    },
    icon:{
        color: "white"
    },
    link:{
        color : "#E5E5E5",
        marginLeft:"auto",
        [theme.breakpoints.down("sm")]:{
            display: "none"
        },
        [theme.breakpoints.between("sm", "md")]:{
            display: "block"
        }
    },
    drawer:{
        width: "100%"
    }
}))






const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <>
        <Drawer
            anchor="top"
            open={open}
            onClose={()=> setOpen(false)}
            className={classes.drawer}>
                <List>
                    <ListItem>
                        <Link style={{color: "#606060"}}>
                            Github
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        <Box component="div" style={{marginBottom:"4rem"}}>
            <AppBar  className={classes.appbar} >
                <Toolbar>
                    <Typography variant="h4">
                        Shopping Cart
                    </Typography>
                    <div className={classes.link}>
                        <Link variant="body1" style={{color: "#E5E5E5"}}>
                            Github
                        </Link>
                    </div>
                    <IconButton className={classes.iconbtn} onClick={()=> setOpen(true)}>
                        <MenuIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
