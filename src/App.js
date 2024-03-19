
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Banner from './component/Banner/Banner';
import Delivery from './component/Delivery/Delivery';
import Founder from './component/FounderSection/Founder';
import Carousel from './component/carousel/Carousel';
import Category from './component/category/Category';
import { Find } from './component/find/Find';



function App() {
  return (
<>
<Navbar/>
<Banner/>
<Delivery/>
<Carousel/>
<Category/>
<Find/>
<Founder/>
<Footer/>

</>
  );
}

export default App;
