import Hero from "../hero/Hero";
import Category from "../category/Category";
import Popular from "../popular/Popular";

const Dashboard = ({ addToCart }) => {
  return (
    <>
      <Hero />
      <Category />
      <Popular addToCart={addToCart} />
    </>
  );
};

export default Dashboard;
