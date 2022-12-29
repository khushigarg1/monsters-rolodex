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



// interface ISearchboxProps extends IchangeHanlderProps{
//     className: string;
//     placeholder?: string;
// }
// interface IchangeHanlderProps {
//     onChangeHandler: (a: string) => void;
// }

//if we have two interfaces with asme name then they combine each other objects 

import { ChangeEvent, ChangeEventHandler } from 'react';
interface ISearchboxProps {
    className:string;
        placeholder?: string;
}

interface ISearchboxProps {
    onChangeHandler: (a: string) => void;
}
type SearchboxProps = {
    className: string; 
    placeholder?: string;
    // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    // onChangeHandler: (a: string) => void;
};

const Searchbox = ({className, placeholder, onChangeHandler }: SearchboxProps ) => (
        <input
            className={`search-box ${className} `}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
);
export default Searchbox;


/*
// const name: string = 1421321;
// const func: (a: string, b: number, c: boolean) => Boolean = (a, b, c) => {
//     return true;
// }


type

interface ISearchboxProps{
    className: string;
    placeholder?: string | null;
}

*/