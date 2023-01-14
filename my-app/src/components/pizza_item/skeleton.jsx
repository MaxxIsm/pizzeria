import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="281" rx="10" ry="10" width="280" height="19" />
    <circle cx="133" cy="141" r="125" />
    <circle cx="200" cy="156" r="9" />
    <rect x="0" y="315" rx="10" ry="10" width="280" height="88" />
    <rect x="104" y="380" rx="0" ry="0" width="13" height="1" />
    <rect x="0" y="421" rx="10" ry="10" width="95" height="30" />
    <rect x="128" y="421" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
