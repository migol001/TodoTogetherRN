import React, { Component } from 'react'
import { ListGroupItem, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import './todoItem.css'
import { startLearning } from '../../../actions'
import { connect } from 'react-redux'

export class TodoItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          actionsOpen: false
        };
      }
    
      toggle() {

        this.setState({
            actionsOpen: !this.state.actionsOpen
        });
      }
    
    select(event) {
        // TODO: Bitte verbessern...
        if(event.target.innerText == "Start Learning") {
            this.props.startLearning(this.props.id)
        }
    }
    
    render() {
        return (
            <ListGroupItem className="TodoItem">
                <div className="TodoItem__title">
                    {this.props.title}
                </div>
                <div className="TodoItem__action">
                    <ButtonDropdown isOpen={this.state.actionsOpen} toggle={this.toggle.bind(this)}>
                        <DropdownToggle caret>
                            Actions
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={this.select.bind(this)}>Start Learning</DropdownItem>
                            <DropdownItem>Mark as finished</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
            </ListGroupItem>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        startLearning: id => {
            dispatch(startLearning(id));
        }
    }
}

export default connect(undefined, mapDispatchToProps)(TodoItem);