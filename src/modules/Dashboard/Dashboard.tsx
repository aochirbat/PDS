import React from "react";
import { Card, Col, Form, Row } from "antd";
import "./Dashboard.less";

const Dashboard = () => {
  return (
    <>
      <Row justify="space-around" gutter={[16, 16]}>
        <Col xs={22} sm={16} md={6} lg={6}>
          <Card className="radius8 shadow card-1">
            <div className="left">
              <div>
                <span>Нийт</span>
                <span>21,230</span>
              </div>
              <div>
                <span>CARD</span>
                <span>23</span>
              </div>
            </div>

            <div className="right"></div>
          </Card>
        </Col>
        <Col xs={22} sm={16} md={6} lg={6}>
          <Card className="radius8 shadow"></Card>
        </Col>
        <Col xs={22} sm={16} md={6} lg={6}>
          <Card className="radius8 shadow">3</Card>
        </Col>
      </Row>
      <Row
        justify="space-around"
        gutter={[16, 16]}
        style={{ marginTop: "12px" }}
      >
        <Col xs={22} sm={16} md={6} lg={6}>
          <Card className="radius8 shadow"></Card>
        </Col>
        <Col xs={22} sm={16} md={6} lg={6}>
          <Card className="radius8 shadow"></Card>
        </Col>
        <Col xs={22} sm={16} md={6} lg={6}>
          <Card className="radius8 shadow"></Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
