import Layout from "../../components/layout/Layout";
import { Row, Col} from 'react-bootstrap';

const Contact = () =>{

    return(
        <Layout>
            <h3 className='text-center'>Contact Us</h3>
            <Row className='justify-content-center'>
                <Col md={4}>
                 Contact me at {" "}
                 <span className="fst-italic">My Email Address</span>
                </Col>
            </Row>
        </Layout>
    )

}

export default Contact;