
import { useState } from 'react';
import './App.css';
import Article from './components/article';
import Header from './components/header';
import Nav from './components/nav';
import Create from './components/create';

function App() {

  const [Topics, setTopics] = useState([{
    id: 1, title: 'html', body: 'html is..'
  },
  {
    id: 2, title: 'css', body: 'css is..'
  },
  {
    id: 3, title: 'react', body: 'react is..'
  },
  ])

  const [SelcetId, setSelectId] = useState();
  const [isChangeCreateMode, setChangeCreateMode] = useState(false);

  const openCreatemode = () => {
    setChangeCreateMode(true);
  }

  return (
    <div className="App">
      <Header title="React"></Header>
      <Nav Topics={Topics} setSelectId={setSelectId}></Nav>
      {SelcetId && < Article Topics={Topics} SelcetId={SelcetId} setSelectId={setSelectId}></Article>}
      <hr></hr>
      <button onClick={openCreatemode}>Create</button>
      {isChangeCreateMode && <Create Topics={Topics} setTopics={setTopics} setChangeCreateMode={setChangeCreateMode} setSelectId={setSelectId} />}
    </div >

  );
}

export default App;
