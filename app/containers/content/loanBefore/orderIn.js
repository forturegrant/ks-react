import React, {Component} from 'react'
import {connect} from 'react-redux'

class orderIn extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <div>{this.props.location.state.type}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(orderIn)