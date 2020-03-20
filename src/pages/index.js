import React from 'react';
import {Helmet} from "react-helmet";

const IndexPage = () =>
  <div>
    <Helmet>
      <script>
        window.location.href = '/de';
      </script>
    </Helmet>
    Read at <a href="/de">Solidaric (DE)</a>
  </div>

export default IndexPage;
