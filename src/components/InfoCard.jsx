import React from 'react';


const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{textAlign: 'center', padding: '0 10%'}}>
      try saying: <br />
      Add {isIncome ? 'Income ':'Expense '} 
      for {isIncome ? '$100 ':'$50 '} 
      in category {isIncome ? 'Business ':'Travel '} 
      for {isIncome ? 'Monday ':'Thursday '}
    </div>
  )
}


export default InfoCard;
