import {Fragment} from 'react';
import Header from './components/Layout/Header';
import NewTask from './components/List/NewTask';
import Task from './components/List/Task';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Task/>
        <NewTask/>
      </main>
    </Fragment>
  );
}

export default App;
