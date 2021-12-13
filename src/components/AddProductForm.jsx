import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const AddProductForm = ({ showModal }) => {
  const submitForm = (event) => {
    let pizza = {};
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      pizza[key] = value;
    }

    console.log(pizza);
    showModal(false);
  };
  const closeForm = () => {
    showModal(false);
  };
  return (
    <div>
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required type="text" placeholder="Name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" required type="text" placeholder="Price" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Width</Form.Label>
          <Form.Control name="width" required type="text" placeholder="width" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Height</Form.Label>
          <Form.Control
            name="height"
            required
            type="text"
            placeholder="height"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Count</Form.Label>
          <Form.Control name="count" required type="text" placeholder="count" />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="image_url"
            required
            type="text"
            multiple
            size="sm"
          />
        </Form.Group>

        <Button
          style={{
            display: "inline",
          }}
          type="Submit"
        >
          Submit
        </Button>
        <Button
          style={{
            display: "inline",
            marginLeft: "59%",
            background: "red",
          }}
          onClick={() => closeForm()}
        >
          Return back
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
