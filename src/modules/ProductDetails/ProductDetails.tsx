import React from "react";
import { Card, Col, Row } from "antd";
import { RightOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import "./ProductDetails.less";
import { useState } from "react";
import RightIconControl from "component/CardControls/RightIconControl/RightIconControl";
import { Input } from "antd";
const ProductDetails = (props: any) => {
  console.log(props);
  const [microService, setMicroService] = useState<any>();
  const [assign, setAssign] = useState<any>();
  const mockMicroservices = [
    {
      key: "1",
      name: "card-adapter-service-1",
      assigns: [
        {
          name: "togoldor",
          phone: "89889",
          email: "ochkiwork@gmail.com",
        },
      ],
    },
    {
      key: "1",
      name: "card-adapter-service-1",
      assigns: [
        {
          name: "togoldor",
          phone: "89889",
          email: "ochkiwork@gmail.com",
        },
      ],
    },
    {
      key: "1",
      name: "card-adapter-service-1",
      assigns: [
        {
          name: "togoldor",
          phone: "89889",
          email: "ochkiwork@gmail.com",
          image:
            "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000",
        },
      ],
    },
  ];
  const onSearch = () => {};
  return (
    <Row justify="space-around">
      <Col xs={22} sm={16} md={6} lg={6}>
        <Card className="radius8 shadow micro-services marginBottom12">
          <div className="f18TextCenter">Card microservices</div>
          <Row justify="center">
            <Input.Search
              placeholder="microservice search name"
              allowClear
              onSearch={onSearch}
              style={{ width: "80%", margin: "12px 0px" }}
            />
          </Row>
          {mockMicroservices?.map((e) => {
            return (
              <div className="row" onClick={() => setMicroService(e)}>
                <div>{e?.name}</div>
                <RightOutlined />
              </div>
            );
          })}
        </Card>
      </Col>
      {microService && (
        <Col xs={22} sm={16} md={6} lg={6}>
          <Card className="radius8 shadow micro-profile marginBottom12">
            <div className="f18TextCenter">Service details</div>
            <Card className="info-card">
              <Row justify="space-between">
                <div className="f14bold">{microService?.name}</div>
                <div className="flexColumn twoColumnItem">
                  <span>Хариуцдаг хүний тоо</span>
                  <span className="alignRight">{4}</span>
                </div>
              </Row>
              <div className="flexColumn twoColumnItem">
                <span>Main branch</span>
                <span>master</span>
              </div>
            </Card>
            <div className="f14Bold">Хариуцдаг хүмүүс</div>
            {microService?.assigns?.map((e: any) => {
              return (
                <Row
                  style={{ marginTop: "12px" }}
                  justify="space-between"
                  onClick={() => setAssign(e)}
                >
                  <div className="flexRow">
                    <img
                      src={e?.image}
                      width="50px"
                      height={"50px"}
                      className="borderImage"
                    />
                    <div className="flexColumn twoColumnItem assignInfo">
                      <span>{e?.name}</span>
                      <span>{e?.phone}</span>
                    </div>
                  </div>
                  <div className="flexRow">
                    <RightOutlined />
                  </div>
                </Row>
              );
            })}
          </Card>
        </Col>
      )}
      {assign && (
        <Col xs={22} sm={16} md={6} lg={6}>
          <Card className="radius8 shadow employee-profile">
            <div className="f18TextCenter">Ажилтаны мэдээлэл</div>
            <div className="flexColumnCenter" style={{ margin: "12px 0px" }}>
              <img
                src={assign?.image}
                width="80px"
                height={"80px"}
                className="borderImage"
              />
              <Col className="flexColumnCenter twoColumnItem">
                <span>{assign?.name}</span>
                <span>{assign?.email}</span>
              </Col>
            </div>
            <RightIconControl
              icon={<PhoneOutlined style={{ color: "white" }} />}
              itemName={assign?.phone}
            />
            <RightIconControl
              icon={<MailOutlined style={{ color: "white" }} />}
              itemName={assign?.email}
            />
            <RightIconControl
              icon={<PhoneOutlined style={{ color: "white" }} />}
              itemName={"yriltsah"}
            />
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default ProductDetails;
