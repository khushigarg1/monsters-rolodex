import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();

        this.state = {
            // name : {
            //     firstName: 'YIHUA',
            //     lastName : 'Zhang'
            // },
            monsters:[
             {
                name: 'linda'
            },
            
            {
                name: 'frank'
            },
            {
                name: 'jacky'
            }  ,
            {
                name: 'andrel'
            }
        ]

            // company: 'AIM'
        }
    }
    render() {
        return (
            <div className="App">
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

                {
                    this.state.monsters.map((monster) => {
                        return <h1>{monster.name}</h1>;
                    })
                }
            </div>
        );
    }
}

export default App;
