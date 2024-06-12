import React from "react";

const product = ({ params }: { params: { productId: string } }) => {
  return <div>product {params.productId}</div>;
};

export default product;
