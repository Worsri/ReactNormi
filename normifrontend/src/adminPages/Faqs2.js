import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react"; // Assuming you are using Semantic UI React components
import jsonfile from "jsonfile";


const file = "faqs40.json";
const obj = { name: "JP" };
function Faqs2() {


     const [formData, setFormData] = useState({
       name: "",
       email: "",
     });

     const handleChange = (e, { name, value }) => {
       setFormData((prevData) => ({ ...prevData, [name]: value }));
     };

     const sendDataSomewhere = () => {
       jsonfile.writeFile(file, obj, (err) => {
         if (err) {
           console.error(err);
         }
       });
     };
    return (
      <div>
        <Form onSubmit={sendDataSomewhere}>
          <Form.Field>
            <Form.Input
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
}

export default Faqs2;
