import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import DetailedTaskView from './components/DetailedTaskView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/:id" element={<DetailedTaskView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
