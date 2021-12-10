import { ReactComponent as HeroImage } from '../../assets/svg/illustration-hero.svg';

const OrderSummaryCard = () => {
  return (
    <div className='border border-indigo-600'>
      <HeroImage />
      Order Summary You can now listen to millions of songs, audiobooks, and
      podcasts on any device anywhere you like! Annual Plan $59.99/year Change
      Proceed to Payment Cancel Order
    </div>
  );
};

export default OrderSummaryCard;
