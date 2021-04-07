import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Container } from '../../globalStyles';
import { PostBody, 
        PostSection, 
        Title,
        Description, 
        ButtonGroup,
        CustomLink,
        ResourceSection,
        Label,
        ButtonSection} from './PostComponent.element';

const PostComponent = () => {
    const [posts, setPosts] = useState();
    const { courseId } = useParams();

    useEffect(() => {
        getPosts(courseId);
    }, [courseId]);

    const getPosts = async (courseId) => {
        await axios({
            method: 'GET',
            url: `http://localhost:8080/user/${courseId}/getPost`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((response) => {
            if (response.data) {
                setPosts(response.data);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <PostSection>
                <Container>
                    {posts && posts.map((post) =>
                    <PostBody key={post.id}>
                        <Title>
                           {post.title}
                        </Title>
                        <Description>
                            {post.desc}
                        </Description>
                        <ButtonGroup>
                            <ResourceSection>
                                <Label>
                                    Resource Material:
                                </Label>
                                <CustomLink href={post.resourcesLink} download={post.resource}>{post.resource}</CustomLink>
                            </ResourceSection>
                            <ButtonSection>
                                <Button type="button" fullWidth primary="primary">
                                    Join Class
                                </Button>
                            </ButtonSection>
                        </ButtonGroup>
                    </PostBody>)}
                </Container>
            </PostSection> 
        </>
    )
}

export default PostComponent;
