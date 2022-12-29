// import { useState } from 'react';
import { useState, useEffect, ChangeEvent } from 'react';
import { Component } from 'react';
// import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import Searchbox from './components/search-box/search-box.component';
import './App.css';
import { getData } from './utils/data.utils';

export type Monster = {
    id: string;
    name: string;
    email: string;
}

const App = () => {
    const [searchField, setSearchField] = useState(' ');  //[value(we want to store ), setValue function]
    const [title, setTitle] = useState('');
    const [monsters, setMonsters] = useState<Monster[]>([]);
    // const [monsters, setMonsters] = useState([]);
    const [filterdMonsters, setFilterMonsters] = useState(monsters);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then((response) => response.json())
        // .then((users) => console.log(users));
        // .then((users) => setMonsters(users));

    //---------------------------------------------typescript
        const fetchUSers = async ()=>{
            const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
            setMonsters(users);
        };
        fetchUSers();
    }, []);

    useEffect(() =>{
        const newfiltermonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        setFilterMonsters(newfiltermonsters);
    }, [monsters, searchField]);

    // const onSearchchange = (event) => {
    //     const searchFieldstring = event.target.value.toLocaleLowerCase();
    //     setSearchField(searchFieldstring);
    // };
    
    // const onTitleChange = (event) => {
    //     const searchFieldstring = event.target.value.toLocaleLowerCase();
    //     setTitle(searchFieldstring);
    // };

    //---------------------------------------------typescript
    const onSearchchange = (event: ChangeEvent<HTMLInputElement>) => {
        const searchFieldstring = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldstring);
    };
    
    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const searchFieldstring = event.target.value.toLocaleLowerCase();
        setTitle(searchFieldstring);
    };

    return ( 
        /*-----------------functional component------------ */
        <div className="App">
            <h1 className='app-title'>{title}</h1>
            {/* <h1 className='app-title'>Monsters Rolodex</h1> */}

            <Searchbox
                className='monsters-search-box'
                onChangeHandler={onSearchchange}
                placeholder='search Monsters'
            />
            <br/>
            <Searchbox
                className='title-search-box'
                onChangeHandler={onTitleChange}
                placeholder='set title'
            />
            <CardList monsters={filterdMonsters} />
        </div>
    )
}

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             // name : { 
//             //     firstName: 'YIHUA',
//             //     lastName : 'Zhang'
//             // },
//             monsters: [],
//             searchField: '',
//             //  {
//             //     name: 'linda'
//             // },

//             // {
//             //     name: 'frank'
//             // },
//             // {
//             //     name: 'jacky'
//             // }  ,
//             // {
//             //     name: 'andrel'
//             // }
//             // ],

//             // company: 'AIM'
//         };
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             // .then((users) => console.log(users));
//             .then((users) =>
//                 this.setState(
//                     () => {
//                         return { monsters: users };
//                     }
//                 )
//             );
//     }

//     onSearchchange = (event) => {

//         console.log(event.target.value);
//         // console.log({startingArray: this.state.monsters});
//         const searchField = event.target.value.toLocaleLowerCase();

//         this.setState(
//             () => {
//                 return { searchField };
//             }
//         );
//     };

//     render() {
//         console.log('render from app.js');
//         const { monsters, searchField } = this.state;
//         const { onSearchchange } = this;

//         const filtermonsters = monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(searchField);
//         });
//         return (
//             <div className="App">
//                 <h1 className='app-title'>Monsters Rolodex</h1>
//                 {/* <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <p>heyy {this.state.name.firstName} {this.state.name.lastName}, works at {this.state.company}</p>
//                     <button onClick={() => {
//                         this.setState(() => { 
//                             return {
//                                 name : { firstName: 'aksldad',lastName : 'aidj ng'}
//                         }; },
//                         () => {
//                         } );
//                     }}>Change Name</button>
//                 </header> */}
//                 {/* <h1>{this.state.monster1.name}</h1>
//                 <h1>{this.state.monster2.name}</h1>
//                 <h1>{this.state.monster3.name}</h1> */}

//                 {/* <input 
//                     className='search-box' 
//                     type='search' 
//                     placeholder='Search Monsters'
//                     onChange={onSearchchange}
//                 /> */}

//                 <Searchbox
//                     className='monsters-search-box'
//                     onChangeHandler={onSearchchange}
//                     placeholder='search Monsters'
//                 />

//                 <CardList monsters={filtermonsters} />
//             </div>
//         );
//     }
// }

export default App;