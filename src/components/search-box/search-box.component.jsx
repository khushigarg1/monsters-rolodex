// import { Component } from "react";
import './search-box.styles.css'

// class Searchbox extends Component {
//     render() {
//         return (
//             <input
//                 className= {`search-box ${this.props.className} `}
//                 type='search' 
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler}
//             />
//         );
//     }
// }

const Searchbox = ({className, placeholder, onChangeHandler}) => (
        <input
            className={`search-box ${className} `}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
);
export default Searchbox;