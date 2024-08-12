import React from 'react';

const Box = props => {
   let result;
   if (
      // 카드가 computer카드인가 && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
      props.title === 'Computer' &&
      props.result !== 'tie' &&
      props.result !== ''
   ) {
      result = props.result === 'win' ? 'lose' : 'win';
   } else {
      // 위의 경우가 아니라면 props로 전달된 결과를 그대로 쓴다.
      result = props.result;
   }

   if (props.title === 'Computer') {
      console.log('computer', result);
   }

   return (
      <div className={`box ${result}`}>
         <h1>{props.title}</h1>
         <h2 className='select' data-testid='item-name'>
            {props.item && props.item.name}
         </h2>
         {/* 3번 */}
         <img className='item-img' src={props.item && props.item.img} alt={props.item && props.item.name} />
         {/* 5번 */}
         <h2 className='result'>{result}</h2>
      </div>
   );
};

export default Box;
