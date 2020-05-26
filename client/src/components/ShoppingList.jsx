import React, { Component } from 'react'
import {
   
    Box,
    List,
    ListItem,
    IconButton,
    
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {withStyles} from '@material-ui/core/styles'
import {CSSTransition, TransitionGroup} from 'react-transition-group';

// import {v4 as uuid} from 'uuid';


import { connect } from 'react-redux';
import {getItems, deleteItem} from '../actions/ItemActions'
import PropTypes from 'prop-types'

const useStyles = theme => ({
    button: {
        background: "#000000",
        color: "white",
        width: "100px",
        marginBotton: "2rem",
        "&:hover":{
            background: "#352F44"
        }
    },
    container:{
       marginTop: "10px",
       marginLeft: "5%",
       marginRight: "5%"
    }
})



class ShoppingList extends Component {
    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick =(id) => {
        this.props.deleteItem(id)
    }

    render() {
        const {classes} = this.props;
        const {items} = this.props.item;
        return (
            <Box className={classes.container} >
                {/*  */}
                <List component="menu">
                    <TransitionGroup >
                        {items.map(({_id, name})=>(
                            <CSSTransition classNames="fade" key={_id} timeout={500}>
                                <>
                            
                              <ListItem divider={true}>
                              <IconButton
                               onClick={this.onDeleteClick.bind(this,_id)} >
                                  <CloseIcon style={{color:"red"}}/>
                              </IconButton>
                               {name}
                               </ListItem>
                               </>
                            </CSSTransition>
                         ))}
                    </TransitionGroup>
                   
                </List>
                
            </Box>
        )
    }
}


ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})


export default connect(mapStateToProps, { getItems,deleteItem })(withStyles(useStyles)(ShoppingList));

