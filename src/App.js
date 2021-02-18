import React, {useState} from "react";
import { Container, Form, Button } from "react-bootstrap";

function App() {
  const [number, setNumber] = useState("");
  const [body, setBody] = useState("");
  
  return (
    <div className="App">
		<Container>
			<h2>Send SMS</h2>
			<Form>
				<Form.Group>
					<Form.Label htmlFor="message">Body</Form.Label>
						<Form.Control
							as="textarea"
							rows="3"
							value={body}
							onChange={(e) => setBody(e.target.value)}
						/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="message">Body</Form.Label>
					<Form.Control as="textarea" rows="3" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Send
				</Button>
			</Form>
		</Container>
		{console.log(`Number is ${number} and the Message is ${body}`)}
    </div>
  );
}

export default App;
