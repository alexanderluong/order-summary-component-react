import './App.css';
import OrderSummaryCard from './components/OrderSummaryCard/OrderSummaryCard';

function App() {
  return (
    <div className='App'>
      <OrderSummaryCard />
      <div class='attribution'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by <a href='#'>Alexander Luong</a>.
      </div>
    </div>
  );
}

export default App;
