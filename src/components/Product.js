// Code Product Component Here
// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
    render(){
        return(
            <div id="product">
            <ul>
                <li>Name: {this.props.name}</li>
                <li>Producer: {this.props.producer}</li>
                <li>Watermark: {this.props.hasWatermark ? "Yes" : "No"}</li>
                <li>Color: {this.props.color}</li>
                <li>Weight: {this.props.weith}</li>
            </ul>
            </div>
        )
    }
}

Product.defaultProps = {
    hasWatermark: false,
    color: oneOf['white', 'eggshell-white', 'salmon']

}
Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']),
    weight: PropTypes.range(80, 300)
}
