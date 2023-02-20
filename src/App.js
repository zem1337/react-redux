import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
function App() {
  return (
    <div>
      <ListTask/>
      <br/>
      <AddTask/>
    </div>
  );
}

export default App;