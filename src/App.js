import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";



//Routes
import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import Authentication from "./routes/authentication/Authentication";
import About from "./routes/about/About";
import Footer from "./components/footer/Footer";
import { checkUserSession } from "./store/user/user.action";
// import { setCurrentUser } from "./store/user/user.reducer";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    });

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="shop/*" element={<Shop />} />
                    <Route path="auth" element={<Authentication />} />
                    <Route path="about" element={<About />}></Route>
                    <Route path="checkout" element={<Checkout />}></Route>
                </Route>
            </Routes>
            <Footer />
        </>
    );
};

export default App;
