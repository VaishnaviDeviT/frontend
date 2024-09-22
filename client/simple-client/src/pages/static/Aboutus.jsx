import { Col, Row } from "react-bootstrap";
import Layout from "../../components/layout/Layout";


const Aboutus = () =>{

    return(
        <Layout>
            <h3 className='text-center'>About Us</h3>
            <Row className="justify-content-center">
                <Col md={6}>About Us. At Vaish Tech, we are committed to delivering cutting-edge technology solutions that drive business growth and enhance everyday experiences. Our team of passionate experts brings a blend of creativity, innovation, and technical proficiency to every project we undertake.</Col>
            </Row>
        </Layout>
    )

}

export default Aboutus;