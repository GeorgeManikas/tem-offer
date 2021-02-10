import { createMuiTheme  } from '@material-ui/core'
import { amber, grey} from '@material-ui/core/colors'
const theme = createMuiTheme({
    palette:{
        primary:{
            main: amber[500]
        },
        
    },
    overrides:{
        
        MuiToolbar:{
            root:{ 
                color: grey[200]
            },

        }
    }
})

export default theme