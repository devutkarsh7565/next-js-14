import React from "react";

const docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug.length === 2) {
    return (
      <h1>
        docs for feature {params.slug[0]} and learn concept from{" "}
        {params.slug[1]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>docs for feature {params.slug[0]}</h1>;
  }
  return <div>docs</div>;
};

export default docs;

//this concept is called "catch all segment" for example => docs/feature/example or docs/feature => output => docs
