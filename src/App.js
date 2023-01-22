import React, {useState, useCallback, useMemo} from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';
import DemoList from './components/UI/Button/Demo/DemoList'

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState('My List')

  const changeTitleHandler = useCallback(()=> {
    setListTitle('New Title')
  },[])

const toggleParagraphHandler = useCallback(() => {
  if (allowToggle) {
    setShowPara((prevStateParagraph)=> !prevStateParagraph)
  }
}, [allowToggle]);

const allowToggleHandler = ()=> {
  setAllowToggle(true);
}

console.log('APP RUNNING!')
  return (
    <div className="app">
      <DemoList title={listTitle} items={useMemo(()=>[5,3,1,10,9],[])} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
