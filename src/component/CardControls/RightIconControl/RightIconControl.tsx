import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { Row } from "antd";

interface Props {
  containerClassName?: string;
  icon: any;
  itemName: string;
}

const RightIconControl = ({ containerClassName, icon, itemName }: Props) => {
  return (
    <Row
      style={{ marginTop: "12px" }}
      justify="space-between"
      className={containerClassName}
    >
      <div className="flexRow">
        <div className="icon-background">{icon}</div>
        <span style={{ marginLeft: "12px" }}>{itemName}</span>
      </div>
      <div className="flexRow">
        <RightOutlined />
      </div>
    </Row>
  );
};

export default RightIconControl;
