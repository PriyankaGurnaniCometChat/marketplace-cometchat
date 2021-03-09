import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const withLayout = (BaseComponent, { bgWhite = false } = {}) => (props) => {
  return (
    <>
      <Navbar />
      <main className={`px-4 bg-${bgWhite ? "white" : "gray-200"}  pb-4 `}>
        <BaseComponent {...props} />
      </main>
      <Footer />
    </>
  );
};

export { withLayout };
