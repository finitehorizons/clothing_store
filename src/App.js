import { Routes, Route } from "react-router-dom";
//Routes
import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import Authentication from "./routes/authentication/Authentication";
import Contact from "./routes/contact/Contact";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop/*" element={<Shop />} />
                <Route path="auth" element={<Authentication />} />
                <Route path="checkout" element={<Checkout />}></Route>
                <Route path="contact" element={<Contact />}></Route>
                <Route path="checkout" element={<Checkout />}></Route>
            </Route>
        </Routes>
    );
};

export default App;
