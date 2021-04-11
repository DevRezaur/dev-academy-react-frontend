import styled from 'styled-components';

export const CourseSection = styled.section`
    padding-bottom: 80px;
`;

export const BannerWrapper = styled.div`
    background-color: #101522;
    padding: 80px 0px;
`;

export const BannerSection = styled.div`
    background-color: #101522;
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'ImageSection InfoSection';
    box-shadow: 5px 5px 5px 5px rgba(0,0,0,1);
    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas: 'ImageSection' 
                            'InfoSection';
    }
`;

export const ImageSection = styled.div`
    grid-area: ImageSection;
    max-height: 350px;
`;

export const HeroImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const InfoSection = styled.div`
    grid-area: InfoSection;
    padding: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 42px;
    line-height: 1.1;
    color: #1c2237;
    text-align: center;

    @media screen and (max-width: 900px) {
        font-size: 36px;
    }
`;

export const CourseTitle = styled.h1`
    margin-bottom: 24px;
    font-size: 36px;
    line-height: 1.1;
    color: #fff;

    @media screen and (max-width: 900px) {
        font-size: 28px;
    }
`;

export const CourseDesc = styled.p`
    color: #a9b3c1;
    font-size: 16px;
    line-height: 1.5;
    word-spacing: 3px;
    margin-bottom: 24px;
`;

export const PostWrapper = styled.div`
    background-color: #f5f5f5;
    padding: 80px 0px;
`;

export const AddPostSection = styled.form`
    margin-top: 50px;
    background-color: #101522;
    color: #fff;
    padding: 50px 30px;
    border-radius: 4px;
`;

export const Label = styled.label`
    display: block;
    size: 18px;
`;

export const Input = styled.input`
    height: 35px;
    width: 100%;
    padding: 5px 10px;
    margin: 8px 0 20px 0;
    font-size: 16px;  
`;

export const FileInput = styled.input`
    width: 100%;
    max-width: 250px;
    height: 35px;
    padding: 5px 10px;
    margin: 8px 0 20px -10px;  
`;

export const TextBox = styled.textarea`
    resize: none;
    height: 100px;
    width: 100%;
    padding: 10px;
    margin: 8px 0 20px 0;
    font-size: 16px;  

    @media screen and (max-width: 1000px) {
        height: 150px;
    }
`;

export const Warning = styled.p`
    font-size: 1rem;
    color: red;
    margin-bottom: 15px;
`;

export const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'LeftSection RightSection';
    margin-top: 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas: 'LeftSection' 
                            'RightSection';
    }
`;

export const FileUploadSec = styled.div`
    grid-area: LeftSection;
`;

export const ButtonSec = styled.div`
    grid-area: RightSection;
    display: flex;
    align-items: flex-end;
`;