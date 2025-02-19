import './App.css'
import TaskList from './Components/TaskList';
import Tasks from './Components/Tasks';
import Header from './Header';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Tasks />
      <div className="p-6">
        <TaskList />
      </div>
    </>
  );
}

export default App;