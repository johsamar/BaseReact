import NavBar from "../components/navbar";
import Footer from "../components/footer";
import CarouselComponent from "../components/carousel";

const CartaPage = () => {
  return (
    <div className="container-fluid bg-dark">
      <NavBar />
      <CarouselComponent />
      <Footer />
    </div>
  );
};

export default CartaPage;
