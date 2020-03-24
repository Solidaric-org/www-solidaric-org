import React from 'react';

import Capability from './Capability';

const CapabilityList = (capabilities) =>
  capabilities.map((capability) =>
    <Capability
      key={capability.node ? capability.node.heading : capability.heading}
      {... capability.node ? capability.node : capability}
    />
  )

export default CapabilityList;
