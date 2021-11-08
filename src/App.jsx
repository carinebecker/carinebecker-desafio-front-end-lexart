import './App.css';
import { Form } from './components/Form';
import { Table } from './components/Table';
import { StockProvider } from './context/StockProvider';

function App() {
  return (
    <div className="App">
      <header>
        <h1>ABM Stock</h1>
      </header>
      <StockProvider>
        <Form />
        <Table />
      </StockProvider>
    </div>
  );
}

export default App;
