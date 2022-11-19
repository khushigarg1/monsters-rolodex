import { Component } from 'react';
// import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import Searchbox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
    constructor(){
        super();

        this.state = {
            // name : { 
            //     firstName: 'YIHUA',
            //     lastName : 'Zhang'
            // },
             monsters:[],
            searchField: '',
            //  {
            //     name: 'linda'
            // },
            
            // {
            //     name: 'frank'
            // },
            // {
            //     name: 'jacky'
            // }  ,
            // {
            //     name: 'andrel'
            // }
            // ],

            // company: 'AIM'
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            // .then((users) => console.log(users));
            .then((users) => 
                this.setState(
                    () => {
                    return {monsters: users};
                    }
                )
            );
    }
    
    onSearchchange = (event) => {
                        
        // console.log(event.target.value);
        // console.log({startingArray: this.state.monsters});
        const searchField = event.target.value.toLocaleLowerCase();

        this.setState(
            () => {
            return { searchField };
            }
        );
    };

    render() {
        console.log('render from app.js');
        const {monsters, searchField } = this.state;
        const {onSearchchange} = this;

        const filtermonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        return (
            <div className="App">
                <h1 className='app-title'>Monsters Rolodex</h1>
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>heyy {this.state.name.firstName} {this.state.name.lastName}, works at {this.state.company}</p>
                    <button onClick={() => {
                        this.setState(() => { 
                            return {
                                name : { firstName: 'aksldad',lastName : 'aidj ng'}
                        }; },
                        () => {
                        } );
                    }}>Change Name</button>
                </header> */}
                {/* <h1>{this.state.monster1.name}</h1>
                <h1>{this.state.monster2.name}</h1>
                <h1>{this.state.monster3.name}</h1> */}

                {/* <input 
                    className='search-box' 
                    type='search' 
                    placeholder='Search Monsters'
                    onChange={onSearchchange}
                /> */}

                <Searchbox 
                    className='monsters-search-box'
                onChangeHandler={onSearchchange}
                placeholder='search Monsters' 
                />
                
                <CardList monsters={filtermonsters}  />
            </div>
        );
    }
}

export default App;
