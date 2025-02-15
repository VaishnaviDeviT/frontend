import React, { useState } from "react";
import * as userService from '../../services/user.service';
import { Row, Col, Form,Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import Layout from "../../components/layout/Layout"; 
import {firstUpperCase} from "../../helpers/string.helper";


const CreateUser = ()=>{
    

    const[ name, setName] = useState('');
    const[ email, setEmail] = useState('');
    const[ city, setCity] = useState('');
    const[ country, setCountry] = useState('');

    const submitForm = async(event)=>{
        event.preventDefault();

        const payload = {
            name,
            email,
            city,
            country
        };
    

    try{
        const response = await userService.createUser(payload);

        if(response?.status){
            const getUserId = response?.user?.id;
            
            toast.success(`User ${getUserId} Successfully Created.`)

            setName('');
            setEmail('');
            setCity('');
            setCountry('')

        }else{
            toast.warn('An error has Occurred.')

        }
    }catch (error){
        // const fixCaps = (message) =>
        //     message[0].toUpperCase() + message.substring(1);

        const getErrorMessage = () =>{
            const{
                data:{
                    errors: {body},
                },
            } = error.response;
            const message = body[0]?.message;

            return firstUpperCase(message);
        };
        toast.error(getErrorMessage());
    }
    } ;
        
    

return(
    <>
    <Layout>
        <Row className="justify-content-center">
            <Col lg={6}>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Name'
                    onChange={(fieldElement) => setName(fieldElement.target.value)}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type='email'
                    placeholder='Email'
                    onChange={(fieldElement) => setEmail(fieldElement.target.value)}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='City'
                    onChange={(fieldElement) => setCity(fieldElement.target.value)}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Country'
                    onChange={(fieldElement) => setCountry(fieldElement.target.value)}
                    />
                </Form.Group>

                <Button variant='primary' type='submit' onClick={submitForm}>Add User</Button>
            </Form>
            </Col>
        </Row>
    </Layout>
    </>
)
};

export default CreateUser;