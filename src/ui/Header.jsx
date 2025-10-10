import { Link } from "react-router-dom";
import SearchOrder from "../features/cart/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Jonathan</p>
    </header>
  );
}

export default Header;
