import './App.css';
import MainHeader from './Components/Header/MainHeader';
import OfferHeader from './Components/Header/OfferHeader';
import { SearchContextProvider } from './Context/SearchContextProvider';
import MainFooter from './Components/Footer/MainFooter.js'
import RestaurantNavigation  from './Components/MainBody/RestaurantNavigation';
import {AllRestaurantsContainer} from './Components/MainBody/AllRestaurantsContainer';

function App() {
  return (
  <>
    <SearchContextProvider>
      <MainHeader/>
      <OfferHeader />
    </SearchContextProvider>
    <RestaurantNavigation />
    <AllRestaurantsContainer />
    <MainFooter />
  </>
  );
}

export default App;
