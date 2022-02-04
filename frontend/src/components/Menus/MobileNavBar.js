import { AppBar, Toolbar } from '@mui/material';
import React from 'react';

const MobileNavBar = (props) => {
    return (
        <AppBar sx={{ display: { xs: "flex", md: "none" }, zIndex:10 }}>
            <Toolbar >
test
            </Toolbar>
        </AppBar>
    );
};

export default MobileNavBar;