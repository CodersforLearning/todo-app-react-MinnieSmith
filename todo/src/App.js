import {Fragment} from 'react';
import Header from './components/Layout/Header';
import Task from './components/List/Task';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Task/>
      </main>
    </Fragment>
  );
}

export default App;
