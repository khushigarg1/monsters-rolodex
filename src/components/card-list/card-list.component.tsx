// import { Component } from "react";
import { Monster } from "../../App";
import Card from "../card/card.component";
import './card-list.styles.css';

// class CardList extends Component{
//     render() {
//         // console.log('render from cardlist'); 
//         const { monsters } = this.props;

//         // console.log(this.props);
//         return (
//             <div className="Card-List">
//                 {monsters.map((monster) => {
//                     // const {name, email, id} = monster;
//                     // <h1 key={monster.id}>{monster.name}</h1>
//                     return <Card monster = {monster} />;
//                 })}
//             </div>
//         );
//     }
// }

type CardListProps = {
    monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
    <div className="Card-List">
        {monsters.map((monster) => {
            return <Card monster={monster} />;
        })}
    </div>
);

export default CardList;