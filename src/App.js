import React, { Component } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
   rock: {
      name: 'Rock',
      img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png',
   },
   scissors: {
      name: 'Scissors',
      img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png',
   },
   paper: {
      name: 'Paper',
      img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png',
   },
};

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         userSelect: null,
         computerSelect: null,
         result: '',
      };
   }

   play = userChoice => {
      console.log('선택됨!', userChoice);
      // user
      this.setState({ userSelect: choice[userChoice] });
      // computer
      const computerChoice = this.randomChoice();
      this.setState({ computerSelect: computerChoice });
      // result -> String 값을 리턴
      this.setState({ result: this.judgement(choice[userChoice], computerChoice) });
   };

   randomChoice = () => {
      const itemArray = Object.keys(choice);
      console.log('item array', itemArray);

      const randomItem = Math.floor(Math.random() * itemArray.length); // 0~1사이 값을 반환
      console.log('random value', randomItem);

      const final = itemArray[randomItem];
      console.log('final item', final);
      return choice[final];
   };

   judgement = (user, computer) => {
      console.log('user', user, 'computer', computer);

      if (user.name === computer.name) {
         return 'tie';
      } else if (user.name === 'Rock') return computer.name === 'Scissors' ? 'win' : 'lose';
      else if (user.name === 'Scissors') return computer.name === 'Paper' ? 'win' : 'lose';
      else if (user.name === 'Paper') return computer.name === 'Rock' ? 'win' : 'lose';
   };

   render() {
      return (
         <div className='main'>
            <div className='game'>
               <Box title='You' item={this.state.userSelect} result={this.state.result} />
               <Box title='Computer' item={this.state.computerSelect} result={this.state.result} />
            </div>

            <div className='btn'>
               <button onClick={() => this.play('scissors')}>
                  <img src={choice.scissors.img} alt='Scissors' className='button-img' />
               </button>
               <button onClick={() => this.play('rock')}>
                  <img src={choice.rock.img} alt='Rock' className='button-img' />
               </button>
               <button onClick={() => this.play('paper')}>
                  <img src={choice.paper.img} alt='Paper' className='button-img' />
               </button>
            </div>
         </div>
      );
   }
}

export default App;
