//default imports
import React from "react";

import {
	AppBar,
	Toolbar,
	Typography,
} from "@material-ui/core/es/index";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

//imports Router and links from the react-router-dom library
import { BrowserRouter, Route, } from "react-router-dom";

//imports components
import Basic from "../Components/Basic";

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
  
class Navigator extends React.Component {


    //renders the component
  render() {

    

		//return the BrowserRouter and the AppBar
		return (
			<BrowserRouter>
				<div>
					{/* renders an AppBar from material-ui with some styles */}
					<AppBar  position="static" >
						<Toolbar>
							<span style={{ height: '40px', width: '40px', marginRight: '15px', backgroundColor: '#D02B27' }}></span>
							<Typography  variant="h5" color="inherit" noWrap>
								Daily Horoscope</Typography>

                          </Toolbar>

                     </AppBar>
	

                
                              {/* define all possible routes and which components should be rendered on the url here */}
          <Route exact path="/" component={Basic} />
         
               

        </div>
      </BrowserRouter>
    );
  }
}




Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
