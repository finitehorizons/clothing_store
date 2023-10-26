import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from "../src/utils/firebase/firebase.utils";

//Routes
import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import Authentication from "./routes/authentication/Authentication";
import About from "./routes/about/About";
import Footer from "./components/footer/Footer";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
        return unsubscribe;
    }, []);


    // export const CategoriesProvider = ({ children }) => {
    //     const [categoriesMap, setCategoriesMap] = useState({});
    
    //     useEffect(() => {
    //         const getCategoriesMap = async () => {
    //             const categoryMap = await getCategoriesAndDocuments("categories");
    //             setCategoriesMap(categoryM```ap);
    //         };
    //         getCategoriesMap();
    //     }, []);
    
    //     const value = { categoriesMap };

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
