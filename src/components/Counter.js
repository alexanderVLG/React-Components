import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function Counter () {
  
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState();

  const handlePlus = () => {
    if (count >= 0 && count < 10) {
      setCount(count + 1)
    } else if ( count === 10) {
      setShowMessage("Эй, я больше 10 не умею считать. Нажми на меня");
    } 
  }
  
  const handleMinus = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  }

  const hideMessage = () => {
      setShowMessage()
  }

  return (
    <div className="counter">
      <Link to="/modal"><div className='next__btn'>Следующий пример</div></Link>
      <div>
        <h2>Счетчик:</h2>
        <p onClick={hideMessage} className="message">{showMessage}</p>
        <h1>{count}</h1>
        <button onClick={handleMinus} className="minus">- Минус</button>
        <button onClick={handlePlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}