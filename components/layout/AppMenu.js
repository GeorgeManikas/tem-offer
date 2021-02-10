import React from 'react'
import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// styling 
const useStyles = makeStyles( theme => ({

}))
const AppMenu = () => {
    const classes = useStyles();
    return (
        <>
         <AppBar position="sticky" color="primary">
           <Toolbar>
             <Typography variant="h6" >
               Προσφορά
             </Typography>
           </Toolbar>
         </AppBar>   
        </>
    )
}

export default AppMenu
