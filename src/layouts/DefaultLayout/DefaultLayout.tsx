import { useLocation } from "react-router-dom";
import backgroundUrl from "../../config/backgroundUrl";
import Header from "../Header";
import "./DefaultLayout.scss";

function DefaultLayout({ children }: any) {
  const location = useLocation();
  const pathname: string = location.pathname;

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundUrl[pathname as keyof typeof backgroundUrl]})  `,
        backgroundSize: "cover",
        transition: "background-image 1s",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <div className="DefaultLayout">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
