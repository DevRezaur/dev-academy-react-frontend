import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from '../../globalStyles';
import { Card, Heading, Image, ImageBox, Info, Paragraph, SubHeading, Wrapper } from './UserDataComponent.element';

const UserDataComponent = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        await axios({
            method: 'GET',
            url: `http://localhost:8080/admin/allUsers`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((response) => { 
            if (response.data) {
                setUsers(response.data)
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <Wrapper>
                <Heading>
                    All Users Info
                </Heading>
                <Container>
                    {users && users.map((usr) =>
                    <Card key={usr.id}>
                        <ImageBox>
                            <Image src={usr.imageUrl} alt="User Image" />
                        </ImageBox>
                        <Info>
                            <SubHeading>
                                {usr.fullname}
                            </SubHeading>
                            <Paragraph>
                                User Id: {usr.id}
                            </Paragraph>
                            <Paragraph>
                                Email: {usr.email}
                            </Paragraph>
                            <Paragraph>
                                Password: {usr.password}
                            </Paragraph>
                            <Paragraph>
                                Contact: {usr.contact}
                            </Paragraph>
                        </Info>
                    </Card>)}
                </Container>
            </Wrapper>  
        </>
    )
}

export default UserDataComponent
