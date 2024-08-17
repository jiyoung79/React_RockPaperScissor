import React, { Component } from 'react';

class Box extends Component {
   render() {
      let result;
      if (
         // 카드가 computer카드인가 && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
         this.props.title === 'Computer' &&
         this.props.result !== 'tie' &&
         this.props.result !== ''
      ) {
         result = this.props.result === 'win' ? 'lose' : 'win';
      } else {
         // 위의 경우가 아니라면 props로 전달된 결과를 그대로 쓴다.
         result = this.props.result;
      }

      if (this.props.title === 'Computer') {
         console.log('computer', result);
      }

      return (
         <div className={`box ${result}`}>
            <h1>{this.props.title}</h1>
            <h2 className='select' data-testid='item-name'>
               {this.props.item && this.props.item.name}
            </h2>
            {/* 3번 */}
            <img
               className='item-img'
               src={this.props.item && this.props.item.img}
               alt={this.props.item && this.props.item.name}
            />
            {/* 5번 */}
            <h2 className='result'>{result}</h2>
         </div>
      );
   }
}

export default Box;
