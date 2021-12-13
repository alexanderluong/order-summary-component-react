import './App.css';

import { ReactComponent as DesktopBackgroundSvg } from './assets/svg/pattern-background-desktop.svg';
import { ReactComponent as MobileBackgroundSvg } from './assets/svg/pattern-background-mobile.svg';
import OrderSummaryCard from './components/OrderSummaryCard/OrderSummaryCard';

function App() {
  return (
    <div className='App'>
      <div>
        <DesktopBackgroundSvg
          className='desktopBackgroundSvg'
          viewBox='0 0 1440 600'
          height='100%'
          width='100%'
        />
      </div>
      <OrderSummaryCard />
      {/* <MobileBackgroundSvg className='mobileBackgroundSvg' /> */}

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
