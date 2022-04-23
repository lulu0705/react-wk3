import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

function Home(){
    return(
        <div class="bg-color">
            <div class="container">
                <Header />
                <ProductList />
                <Footer />
            </div>
        </div>
    );
}

export default Home;