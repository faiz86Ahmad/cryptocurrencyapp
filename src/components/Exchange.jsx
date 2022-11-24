import React from "react";
import { Row, Typography } from "antd";

import BgImage from "../images/coming-soon.png";

// Exchanges (Commin Soon)
const Exchanges = () => {
  return (
    <Row gutter={[32, 32]} className="exchanges-card-container">
      <img src={BgImage} alt="Coming Soon" className="exchanges-image" width="700px" height="500px"/>
      <Typography.Title level={1} className="exchanges-heading">
        Coming Soon
      </Typography.Title>
    </Row>
  );
};

export default Exchanges;