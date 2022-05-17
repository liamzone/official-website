import NavbarComponent from "../global/Navbar";
import Spacer from "../global/Spacer";

export default function Layout({ children }) {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
    </>
  );
}
