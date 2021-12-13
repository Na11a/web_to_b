import React from "react";
import { List } from "antd";
const Size = ({ size }) => {
  let values = Object.keys(size);
  const columns = values.length;
  return (
    <div>
      <List
        grid={{ gutter: 16, column: columns  }}
        dataSource={values}
        renderItem={(item) => (
          <List.Item.Meta title={item} description={size[`${item}`]} />
        )}
      />
      ,
    </div>
  );
};

export default Size;
