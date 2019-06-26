import React,{ Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '이강인',
    'gender': '남자'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '박지성',
    'gender': '남자'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이승우',
    'gender': '남자'
  }
]


class App extends Component{
  render(){
    return (
      <div>
        {
          customers.map(temp => {
            return (
              <Customer key={temp.id} id={temp.id} image={temp.image} name={temp.name} gender={temp.gender} />
            )
          })
        }
      </div>
    );
  }
}

export default App;
