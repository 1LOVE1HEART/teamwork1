import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import React from 'react';

import ScrollToTop from './Component/ScrollToTop';

// 版面頁面元件
import Layout from './layout/Layout';
// 以下為各頁面元件
import Home from './pages/Home/Home';
import HomeJie from './pages/HomeJie/HomeJie';
import BannerEffect from './pages/HomeEffect/bannerEffect';
import ProductList from './pages/product/ProductList';
import Itinerary from './pages/product/itinerary/Itinerary';
import Site from './pages/product/itinerary/Site';
import SiteDetail from './pages/product/itinerary/Site-detail';
import Food from './pages/product/food/Food';
import FoodDetail from './pages/product/food/FoodDetail';
import Stays from './pages/product/stays/Stays';
import StaysDetail from './pages/product/stays/StaysDetail';
import Ticket from './pages/product/ticket/Ticket';
import TicketDetail from './pages/product/ticket/TicketDetail';
import LogIn from './pages/member/LogIn';
import Profile from './pages/member/Profile';
import SignIn from './pages/member/SignIn';
import ForgetPassword from './pages/member/ForgetPassword';
import ResetPassword from './pages/member/ResetPassword';
import TicketQRcode from './pages/member/TicketQRcode';
import Comment from './pages/member/Comment';
import Collect from './pages/member/Collect';
import Cart from './pages/cart/Cart';
import ItineraryDetail from './pages/product/itinerary/Itinerary-detail';
import Orders from './pages/cart/order/Orders';
import OrderSuccess from './pages/cart/OrderSuccess';
import OrderFail from './pages/cart/OrderFail';
//context
import { FoodContextProvider } from './pages/product/food/FoodContext/FoodContext';
import { HotelContextProvider } from './pages/product/stays/Context/HotelContext';
import { TicketContextProvider } from './pages/product/ticket/Context/TicketContext';
import { AuthContextProvider } from './pages/member/context/AuthContext';
import { CommentContextProvider } from './pages/member/context/CommentContext';
import { AllContextProvider } from './pages/AllContext/AllContext';
import {
  HotelCartProvider,
  FoodCartProvider,
  TicketCartProvider,
  CartProvider,
} from './pages/cart/utils/useCart';
import { ItineraryContextProvider } from './pages/product/itinerary/ItineraryContext';

function App() {
  return (
    <HotelCartProvider localStorageKey="hotelcart">
      <FoodCartProvider localStorageKey="foodcart">
        <TicketCartProvider localStorageKey="ticketcart">
          <HashRouter>
            {/* 路由表 */}
            <AllContextProvider>
              <ItineraryContextProvider>
                <CommentContextProvider>
                  <CartProvider>
                    <FoodContextProvider>
                      <HotelContextProvider>
                        <TicketContextProvider>
                          <AuthContextProvider>
                            <ScrollToTop>
                              <Routes>
                                <Route path="/" element={<Layout />}>
                                  {/* index代表此路由中的預設子頁 */}
                                  <Route index element={<Home />} />
                                </Route>
                                <Route
                                  path="productList"
                                  element={<ProductList />}
                                />
                                <Route
                                  path="itinerary"
                                  element={<Itinerary />}
                                />
                                <Route
                                  path="itinerary/:sid"
                                  element={<ItineraryDetail />}
                                />
                                <Route path="site" element={<Site />} />
                                <Route
                                  path="site/:sid"
                                  element={<SiteDetail />}
                                />
                                <Route path="food" element={<Food />} />
                                <Route
                                  path="food/detail"
                                  element={<FoodDetail />}
                                />
                                <Route path="stays" element={<Stays />} />
                                <Route
                                  path="stays/detail/:sid"
                                  element={<StaysDetail />}
                                />
                                <Route path="ticket" element={<Ticket />} />
                                <Route
                                  path="ticket/detail/:sid"
                                  element={<TicketDetail />}
                                />
                                <Route path="logIn" element={<LogIn />} />
                                <Route
                                  path="forget_password"
                                  element={<ForgetPassword />}
                                />
                                <Route path="profile" element={<Profile />} />
                                <Route
                                  path="reset_password"
                                  element={<ResetPassword />}
                                />
                                <Route
                                  path="ticket_qrcode"
                                  element={<TicketQRcode />}
                                />
                                <Route path="comment" element={<Comment />} />
                                <Route path="collect" element={<Collect />} />
                                <Route path="signIn" element={<SignIn />} />
                                <Route
                                  path="cart/success"
                                  element={<OrderSuccess />}
                                />
                                <Route
                                  path="cart/fail"
                                  element={<OrderFail />}
                                />
                                <Route path="cart" element={<Cart />} />
                                <Route path="orders" element={<Orders />} />
                              </Routes>
                            </ScrollToTop>
                          </AuthContextProvider>
                        </TicketContextProvider>
                      </HotelContextProvider>
                    </FoodContextProvider>
                  </CartProvider>
                  </CommentContextProvider>
              </ItineraryContextProvider>
            </AllContextProvider>
          </HashRouter>
        </TicketCartProvider>
      </FoodCartProvider>
    </HotelCartProvider>
  );
}

export default App;
