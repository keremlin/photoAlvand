import { Form, Col } from 'react-bootstrap';
export default function Selector(props) {
console.log(props);
    return (
        <Col md>
            <Form.Control as="select" aria-label="Floating label select example">
                <option value="0" >{props.title}</option>
                {props.datas.map((item,index)=>
                        <option selected={(props.configValue===item.id?'selected':'')} key={index} value={item.id}>{item.name}</option>
                )}
            </Form.Control>
        </Col>);
}