import {useState} from 'react'
import './App.css';

function App() {
  const [isToggle, setToggle] = useState(false) 
  const onClickBtn=()=>{
    setToggle(!isToggle)
  }

  const circleLeft=()=>(
    <>
    <div className='circle-left'></div>
    <h1 className='on'>ON</h1>
    </>
  )

  const circleRight = () =>
    (
      <>
      <div className='circle-right'></div> 
      <h1 className='off'>OFF</h1>
      </>
)
  


  let bgColor = isToggle?'bg-white bg-container':'bg-Black bg-container' 
  let toggleBtnClr = isToggle ? 'toggle-button bg-blue':"toggle-button"
  return (
    <div className={bgColor}>
        <div onClick={onClickBtn} className={toggleBtnClr}>
            {isToggle? circleLeft(): circleRight()}
        </div>
    </div>
  );
}

export default App;
