import React from "react";
import { Avatar, Card, Col, Row } from "antd";
import {
  RightOutlined,
  PhoneOutlined,
  MailOutlined,
  UserOutlined,
  RadarChartOutlined,
  BankOutlined,
} from "@ant-design/icons";
import "./ProductDetails.less";
import { useState } from "react";
import RightIconControl from "component/CardControls/RightIconControl/RightIconControl";
import { Input } from "antd";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { api } from "services/api";
import useAuth from "reducers/authReducer";

const ProductDetails = () => {
  const location = useLocation();
  const access_token = useAuth((state) => state.access_token);
  const [microService, setMicroService] = useState<any>();
  const [assign, setAssign] = useState<any>();
  const [assigns, setAssigns] = useState<any>();
  const [repos, setRepos] = useState<any>();
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    api
      .get(`/systemexpo/devops/mock/repos/${location?.state}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => setRepos(response?.data));
  }, [location?.state]);

  useEffect(() => {
    api
      .get(`/systemexpo/assign/products/${microService?.name}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => setAssigns(response?.data));
  }, [microService]);

  function SearchCategroy(row: any) {
    if (search) {
      return row.filter(
        (item: any) =>
          item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
      );
    } else {
      return row;
    }
  }
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
              onChange={(e: any) => {
                setSearch(e?.target?.value);
              }}
              onSearch={onSearch}
              style={{ width: "80%", margin: "12px 0px" }}
            />
          </Row>
          <div style={{ maxHeight: "650px", overflowY: "scroll" }}>
            {SearchCategroy(repos)?.map((e: any) => {
              return (
                <div
                  className="row"
                  onClick={() => {
                    setMicroService(e);
                    setAssign(undefined);
                  }}
                >
                  <div style={{ cursor: "grab" }}>{e?.name}</div>
                  <RightOutlined />
                </div>
              );
            })}
          </div>
        </Card>
      </Col>
      {microService && (
        <Col xs={22} sm={16} md={8} lg={8}>
          <Card className="radius8 shadow micro-profile marginBottom12">
            <div className="f18TextCenter">Service details</div>
            <Card className="info-card">
              <Row justify="space-between">
                <div className="f14bold">{microService?.name}</div>
                <div className="flexColumn twoColumnItem">
                  <span>Хариуцдаг хүний тоо</span>
                  <span className="alignRight">{assigns?.length}</span>
                </div>
              </Row>
              <Row justify="space-between">
                <div className="flexColumn twoColumnItem">
                  <span>Main branch</span>
                  <span>master</span>
                </div>
                <div className="flexColumn twoColumnItem">
                  <span>Хэмжээ</span>
                  <span className="alignRight">
                    {Math.floor(parseInt(microService?.size) % 1024)}MB
                  </span>
                </div>
              </Row>
            </Card>
            <div className="f14Bold">Хариуцдаг хүмүүс</div>
            <div style={{ maxHeight: "500px", overflowY: "scroll" }}>
              {assigns?.map((e: any) => {
                return (
                  <Row
                    style={{ marginTop: "12px" }}
                    justify="space-between"
                    onClick={() => setAssign(e)}
                  >
                    <div className="flexRow">
                      <Avatar
                        shape="square"
                        size={48}
                        icon={<UserOutlined />}
                      />
                      <div className="flexColumn twoColumnItem assignInfo">
                        <span>
                          {e?.firstname} {e?.lastname}
                        </span>
                        <span>{e?.phone}</span>
                      </div>
                    </div>
                    <div className="flexRow">
                      <RightOutlined />
                    </div>
                  </Row>
                );
              })}
            </div>
          </Card>
        </Col>
      )}
      {assign && (
        <Col xs={22} sm={16} md={6} lg={6}>
          <Card className="radius8 shadow employee-profile">
            <div className="f18TextCenter">Ажилтаны мэдээлэл</div>
            <div className="flexColumnCenter" style={{ margin: "12px 0px" }}>
              <Avatar shape="square" size={64} icon={<UserOutlined />} />
              <Col className="flexColumnCenter twoColumnItem">
                <span>
                  {assign?.firstname} {assign?.lastname}
                </span>
                <span>{assign?.email}</span>
              </Col>
            </div>
            <RightIconControl
              icon={
                <BankOutlined style={{ color: "white", fontSize: "14px" }} />
              }
              itemName={assign?.department}
            />
            <RightIconControl
              icon={
                <RadarChartOutlined
                  style={{ color: "white", fontSize: "14px" }}
                />
              }
              itemName={assign?.position}
            />
            <RightIconControl
              icon={
                <PhoneOutlined style={{ color: "white", fontSize: "14px" }} />
              }
              itemName={assign?.phone}
            />
            <RightIconControl
              icon={
                <MailOutlined style={{ color: "white", fontSize: "14px" }} />
              }
              itemName={assign?.email}
            />
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default ProductDetails;
