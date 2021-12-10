import React from "react";
import { List, Card } from "antd";
const Size = ({ size }) => {
  let values = Object.keys(size);
  return (
    <div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={values}
        renderItem={(item) => (
          <List.Item.Meta
          title = {item}
          style ={{
            paddingTop:'20px',
            paddingLeft:'55px'
          }}
          description = {size[`${item}`]}
          />
        )}
      />
      ,
    </div>
  );
};

export default Size;
