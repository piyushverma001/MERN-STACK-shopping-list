import React, {Component} from 'react';

import {
Dialog,
Button,
DialogActions,
DialogContent,
Typography,
DialogContentText,
TextField,
DialogTitle
} from '@material-ui/core' 
import {withStyles} from '@material-ui/core/styles'
import { connect } from 'react-redux';
import { addItem } from '../actions/ItemActions';
const useStyles = theme => ({
    button: {
        background: "#000000",
        color: "white",
        width: "100px",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "100px",
        marginBotton: "2rem",
        "&:hover":{
            background: "#352F44"
        },
        [theme.breakpoints.down("sm")]:{
            marginTop: "1.5rem"
        }
    },
    // 
})


class ItemModel extends Component{
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    onSubmit = e => {
        e.preventDefault();

        const newItem = {
 
            name: this.state.name
        }
    this.props.addItem(newItem)

    this.toggle();
    }

    render(){
        const {classes} = this.props;

        return(
            <>
            <Button className={classes.button}
            onClick={this.toggle}>
                <Typography>
                    ADD ITEM
                </Typography>
            </Button>

            <Dialog
             open={this.state.modal}
             onClose={this.toggle}
             maxWidth="sm"
             fullWidth={true}
             >  
             <DialogTitle>
                 Add to Shopping List
             </DialogTitle>


             <form onSubmit={this.onSubmit}>

                 <DialogContent>                    
                     <DialogContentText>
                         Enter the item you want to add
                     </DialogContentText>
                     <TextField
                     fullWidth={true}
                     name="name"
                     id="item"
                     onChange= {this.onChange}
                      />

                 </DialogContent>
                 <DialogActions>
                    <Button onClick={this.toggle} color="primary">
                          Cancel
                     </Button>
                      <Button color="primary"
                       type="submit">
                        ADD
                       </Button>
                  </DialogActions>
                      
                  </form>
             </Dialog>
             </>

        )

    }
}

const mapStatetoProps = state => ({
    item: state.item
})

export default connect(mapStatetoProps, {addItem })(withStyles(useStyles)(ItemModel));