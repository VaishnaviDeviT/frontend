import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () =>{

    return(
        <>
        <Container>
            <hr />
            <Row className='mt-4 mb-5 justify-content-center'>
            <Col md={{span: 3, offset: 1}}>
            <h4>User</h4>
            <NavLink className='text-dark fw-bold' to='/create'>Create a user</NavLink>
            </Col>
            <Col md={{span: 3, offset: 1}} >
             <h4>Contact</h4>
              <NavLink className='text-muted' to='/contact'>Contact</NavLink>
            </Col>
            <Col md={{span: 3, offset: 1}}>
            <h4>About us</h4>
            <NavLink className='text-muted' to='/about'>About us</NavLink>
            </Col>
            </Row>
        </Container>
        </>
    )

}

export default Footer;