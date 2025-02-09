import Header from './components/Header';
import Wrapper from './Wrapper';
import Form from './components/Form';
import { TodoList } from './components/TodoList';

function App() {

  const DUMMY = [
    { title: 'Homework',
      Desc: 'Complete this before bed'
     },
     { title: 'Homework',
      Desc: 'Complete this before bed Complete this before bed Complete this before bed'
     },
     { title: 'Homework',
      Desc: 'Complete this before bed Complete this before bed'
     },
     { title: 'Homework',
      Desc: 'Complete this before bed Complete this before bed Complete this before bed Complete this before bed'
     },
     { title: 'Homework',
      Desc: 'Complete this before bed Complete this before bed'
     },
     { title: 'Homework',
      Desc: 'Complete this before bed Complete this before bed Complete this before bed Complete this before bed Complete this before bed Complete this before bed'
     },

  ]

  return (
    <Wrapper>
      <Header />
      <Form />
      <TodoList data={DUMMY}/>
    </Wrapper>
  )
}

export default App;