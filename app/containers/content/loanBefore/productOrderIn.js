import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Tabs} from 'antd';
import './product_orderIn.css'
import {fetchGetProductList} from "../../../actions/common";

class productOrderIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null,
            id: null
        }
        //this.changeBgColor = this.changeBgColor.bind(this);
    }

    handleActive(index, e) {
        this.setState({
            selected: index,
            id: e.currentTarget.getAttribute('data-id'),
        })
    }


    render() {
        const {productList} = this.props;
        return (
            <div className="bgSortScroll">
                <div className="public-bgContent">
                    <div className="img" style={{marginTop: '50px', marginLeft: '100px'}}>
                        <img src={require('../../../images/tinified-3/copy.png')}/>
                        <img src={require('../../../images/tinified-3/arrow.png')}/>
                        <img src={require('../../../images/tinified-3/2.png')}/>
                        <img src={require('../../../images/tinified-3/arrowCopy.png')}/>
                        <img src={require('../../../images/tinified-3/3.png')}/>
                    </div>
                </div>
                <div>
                    {
                        productList.map((item, index) => (
                            <div data-id={item.id}
                                 className={`quare ${this.state.selected === index ? "selected" : ""}`}
                                 key={index} onClick={this.handleActive.bind(this, index)}>
                                <img style={{width: '100px', height: '56px'}} src={item.path_img}
                                     className="product_img"/>
                                <img src="" className="hidden selected_img"/>
                                <div className="product_name">{item.product_name}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="next"><Link to={{pathname: `orderIn`, state: {product_id: this.state.id}}}
                                            className="D-a">下一步</Link></div>
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchGetProductList());
    }

}

const mapStateToProps = (state) => ({
    //isFetching: state.globalState.isFetching
    productList: state.LoanBefore.getProductList.productList
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(productOrderIn)