import React from 'react';

import Feature from './Feature';

const FeatureList = (features) => {
  return (
    <>
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </>
  );
}

export default FeatureList;
