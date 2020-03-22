import React from 'react';

import Capability from './Capability';

const CapabilityList = (capabilities) => {
  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;
