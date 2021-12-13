import React from "react";
import { List } from "antd";
const ProductComments = ({ comments }) => {
  return (
    <div>
      <h3> Comments </h3>
      {comments && (
        <List
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.date}
                description={item.description}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default ProductComments;
