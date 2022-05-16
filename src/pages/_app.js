import { RecoilRoot } from "recoil";
import "../../styles/globals.css";
import CartContextProvider from "../contexts/cartContext";
import CartContextTwoProvider from "../contexts/cartContextTwo";
import WishlistContextProvider from "../contexts/wishlistContext";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <CartContextProvider>
        <CartContextTwoProvider>
          <WishlistContextProvider>
            <Component {...pageProps} />
          </WishlistContextProvider>
        </CartContextTwoProvider>
      </CartContextProvider>
    </RecoilRoot>
  );
}

export default MyApp;
