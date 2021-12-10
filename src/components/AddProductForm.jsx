import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const AddProductForm = ({showModal}) => {
  const submitForm = (event) => {
    let pizza = {}
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
        if (key === 'image_url'){
          pizza[key] = value.name;
        }
        else{
          pizza[key] = value;
        }
    }
    showModal(false)
  };
  return (
    <div>
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name"required type="text" placeholder="Name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" type="text" placeholder="Price" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Width</Form.Label>
          <Form.Control name="width" type="text" placeholder="width" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Height</Form.Label>
          <Form.Control name="height" type="text" placeholder="height" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Count</Form.Label>
          <Form.Control name="count" type="text" placeholder="count" />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Image</Form.Label>
        </Form.Group>
        <Form.Control name="image_url" type="file" multiple size="sm" />

        <Button type="Submit" >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
