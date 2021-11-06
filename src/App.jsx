import './App.css';
import { Form } from './components/Form';
import { Table } from './components/Table';
import { StockProvider } from './context/StockProvider';

function App() {
  return (
    <div className="App">
      <StockProvider>
        <Form />
        <Table />
      </StockProvider>
    </div>
  );
}

export default App;
