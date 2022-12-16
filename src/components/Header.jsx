import "./Header.css";
import {HomeModernIcon} from "@heroicons/react/24/solid/"


export default function Header() {
  return (
    <div className="header-body">
      <div className="header-left">
        <a className="header-link" href="/">
          <HomeModernIcon className="header-logo" />
          HouseGuessr
        </a>
      </div>

      <div className="header-right">
        <a href='https://ko-fi.com/I2I6H0QRQ' target='_blank'><img height='36' style={{border: "0px", height:"36px"}} src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
      </div>
    </div>
  );
}