import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개(타이틀, 사진, 결과값)
// 2. 가위,바위,보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임 = state(UI를 바뀌게 하고싶을 때 사용하는 것)
// 4. 컴퓨터는 랜덤하게 아이템을 선택한다.
// 5. 3번 4번의 결과를 가지고 누가 이겼는지 결과를 보여준다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다.(승:초록 / 패:빨강 / 비김:검정)

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
function App() {
   // 3번
   const [userSelect, setUserSelect] = useState(null);
   // 4번
   const [computerSelect, setComputerSelect] = useState(null);
   // 5번
   const [result, setResult] = useState('');

   const play = userChoice => {
      console.log('선택됨!', userChoice);
      // user
      setUserSelect(choice[userChoice]);
      // computer
      let computerChoice = randomChoice();
      setComputerSelect(computerChoice);
      // result -> String 값을 리턴
      setResult(judgement(choice[userChoice], computerChoice));
   };

   const randomChoice = () => {
      let itemArray = Object.keys(choice);
      console.log('item array', itemArray);

      let randomItem = Math.floor(Math.random() * itemArray.length); // 0~1사이 값을 반환
      console.log('random value', randomItem);

      let final = itemArray[randomItem];
      console.log('final item', final);
      return choice[final];
   };

   const judgement = (user, computer) => {
      console.log('user', user, 'computer', computer);

      if (user.name === computer.name) {
         return 'tie';
      } else if (user.name === 'Rock') return computer.name === 'Scissors' ? 'win' : 'lose';
      else if (user.name === 'Scissors') return computer.name === 'Paper' ? 'win' : 'lose';
      else if (user.name === 'Paper') return computer.name === 'Rock' ? 'win' : 'lose';
   };

   return (
      <div className='main'>
         <div className='game'>
            <Box title='You' item={userSelect} result={result} />
            <Box title='Computer' item={computerSelect} result={result} />
         </div>

         <div className='btn'>
            <button onClick={() => play('scissors')}>
               <img src={choice.scissors.img} alt='Scissors' className='button-img' />
            </button>
            <button onClick={() => play('rock')}>
               <img src={choice.rock.img} alt='Rock' className='button-img' />
            </button>
            <button onClick={() => play('paper')}>
               <img src={choice.paper.img} alt='Paper' className='button-img' />
            </button>
         </div>
      </div>
   );
}

export default App;
