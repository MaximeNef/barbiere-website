import Container from "../../shared/container";
import Page from "../../shared/page";
import Footer from "../footer";
import Header from "../header";

const NavPage = ({ children, current }) => {
  return (
    <Container className=''>
      <Page className='font-family text-[#37474F] '>
        <Header current={current} />
        {children}
      </Page>{" "}
      <Footer />
    </Container>
  );
};

export default NavPage;
