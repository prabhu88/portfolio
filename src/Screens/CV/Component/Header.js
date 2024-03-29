import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { experimentalStyled } from "@material-ui/core/"
import avatar from './Avadhar.jpg'
import './Header.scss'
import Particles from './Particles'
import Footer from "./Footer";
import Prabhu from './Prabhu.jpg'
const useStyles = experimentalStyled((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato",
    },
    subtitle: {
        color: "tan",
        textTransform: "uppercase",
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
    },
}));
const Header = () => {
    const classes = useStyles();
    return (
        <div className="Cv_root">
            <Particles />
            <Box className="center_box">                
                <div className="content_center">
                    <div className="avathar">
                        <Avatar className={classes.avatar} src={Prabhu} alt="S. Prabhu" />
                    </div>
                    <Typography className={classes.title} variant="h4">
                        <Typed strings={["Hey! I'm S. Prabhu"]} typeSpeed={40} />
                    </Typography>

                    <Typography className={classes.subtitle} variant="h5">
                        <Typed
                            strings={[
                                "Frontend Developer",
                                "Backend Developer",
                                "Native App Developer",
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </Typography>
                </div>
                
                <div className="topNav">
                <Footer/>
                </div>
            </Box>
        </div>

    );
};

export default Header;