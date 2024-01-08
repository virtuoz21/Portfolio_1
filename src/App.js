import Arrivals from "./components/Arrivals/Arrivals";
import Banner from "./components/Banner/Banner";
import Brands from "./components/Brands/Brands";
import Favorite from "./components/Favorite/Favorite";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Vouchers from "./components/Vouchers/Vouchers";

function App() {

  return (
		<div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
      <Favorite />
      <Vouchers />
		</div>
  );
}

export default App;
