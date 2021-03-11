import { FirestoreCollection } from '@react-firebase/firestore';
import React from 'react';
import { useParams } from 'react-router';
import ProductCard from '../components/ProductCard';
import SideFilter from '../components/SideFilter';
import { withLayout } from '../wrappers/layout';

const CategoryPage = () => {
  const { name } = useParams();
  return (
    <div className="grid grid-cols-3 md:grid-cols-9 py-4">
      <div className="col-span-1">
        <SideFilter />
      </div>
      <div className="flex-grow w-full ml-4 col-span-2 md:col-span-8">
        <div className="text-black border-b border-gray-300 pb-2">
          <h1 className="capitalize font-bold">{name}</h1>
          <h3 className="capitalize text-base">Shop {name}</h3>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
          <FirestoreCollection
            path="/products"
            limit={12}
            where={{
              field: 'category',
              operator: '==',
              value: name,
            }}
          >
            {({ isLoading, value }) => {
              return isLoading ? (
                <h3>Loading</h3>
              ) : (
                React.Children.toArray(
                  value.map((product, index) => (
                    <div className="border-b">
                      <ProductCard product={product} bestSeller={index === 0} />
                    </div>
                  ))
                )
              );
            }}
          </FirestoreCollection>
        </section>
      </div>
    </div>
  );
};

export default withLayout(CategoryPage, { bgWhite: true });
