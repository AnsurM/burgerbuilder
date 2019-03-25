import React from 'react';
import Aux from '../../hoc1/Aux1';
import classes from './Layout.css';

const Layout = (props) => {
    return (
        <Aux >
            <div>
                Toolbar, SideDrawer, BackDrop
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;