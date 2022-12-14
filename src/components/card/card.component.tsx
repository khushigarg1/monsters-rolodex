// import { Component } from "react";
import { Monster } from '../../App';
import './card.styles.css';

// class Card extends Component {
//     render() {
//         const {id, name, email} = this.props.monster;

//         return (
//             <div className="card-container" key={id}>
//                 <img className="card-img"
//                     alt={`monster ${name}`}
//                     src={`https://robohash.org/${id}?set=set2`}
//                 />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     } 
// }

// const Card = ({ monster:{id,name, email} }) => {
//     // const { id, name, email } = monster;

type CardProps = {
    monster: Monster;
};

const Card = ({ monster }: CardProps) => {
    const { id, name, email } = monster;

    return (
        <div className="card-container" key={id}>
            <img className="card-img"
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};
export default Card;
