
import { useState } from 'react';
import './App.css';
import Article from './components/article';
import Header from './components/header';
import Nav from './components/nav';

function App() {

  const [Topics, setTopics] = useState([{
    id: 1, title: 'html', body: 'html is..', subtitle: 'html이 무엇이냐', content: 'html 이란',
  },
  {
    id: 2, title: 'css', body: 'css is..', subtitle: 'css가 무엇이냐', content: 'css란',
  },
  {
    id: 3, title: 'react', body: 'react is..', subtitle: 'React가 무엇이냐', content: 'React란',
  },
  ])

  const [SelcetId, setSelectId] = useState();

  return (
    <div className="App">
      <Header title="React"></Header>
      <Nav Topics={Topics} setSelectId={setSelectId}></Nav>
      {SelcetId && < Article Topics={Topics} SelcetId={SelcetId}></Article>}
    </div >

  );
}

export default App;
