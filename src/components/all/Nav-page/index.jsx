import Container from "../../shared/container";
import Page from "../../shared/page";
import Footer from "../footer";
import Header from "../header";

const NavPage = ({ children, current }) => {
  return (
    <Container className=''>
      <Page className='font-family text-[#7A767C] '>
        <Header current={current} />
        <Container className='mx-5 md:px-10'>{children}</Container>
      </Page>{" "}
      <Footer />
    </Container>
  );
};

export default NavPage;
