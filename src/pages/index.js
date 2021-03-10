import { FirestoreCollection } from '@react-firebase/firestore';
import React from 'react';
import CategoryCard from '../components/CategoryCard';
import ProductSlider from '../components/ProductSlider';
import { withLayout } from '../wrappers/layout';
const IndexPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/hero.jpg")`,
      }}
      className="w-full h-full pt-10 md:pt-32 bg-no-repeat bg-contain"
    >
      <div className="mx-4">
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 grid-flow-row auto-rows-max">
          <FirestoreCollection path="/categories">
            {({ isLoading, value }) => {
              return isLoading ? (
                <h3>Loading</h3>
              ) : (
                React.Children.toArray(
                  value.map((category) => <CategoryCard category={category} />)
                )
              );
            }}
          </FirestoreCollection>
        </section>
        <section className="mt-4">
          <FirestoreCollection path="/products" limit={12}>
            {({ isLoading, value }) => {
              return isLoading ? (
                <h3>Loading</h3>
              ) : (
                <ProductSlider products={value} title="Recent Products" />
              );
            }}
          </FirestoreCollection>
        </section>
      </div>
    </div>
  );
};

export default withLayout(IndexPage);
