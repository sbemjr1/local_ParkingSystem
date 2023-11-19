import styled from "@emotion/styled";

export const Wrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: radial-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.2)
      ),
      url("images/bg.jpg");
  }
  @media screen and (min-width: 601px) {
    width: 1920px;
    height: 940px;
    padding: 0 550px;
    display: flex;
    align-items: center;
    background-image: radial-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.2)
      ),
      url("images/bg.jpg");
  }
`;

export const InnerWrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 95vw;
    height: 65vh;
    background-color: black;
    /* opacity: 0.8; */
    border-radius: 10px;
    padding: 25px;
  }
  @media only screen and (min-width: 601px) {
    width: 900px;
    height: 700px;
    background-color: black;
    /* opacity: 0.8; */
    border-radius: 20px;
    padding: 50px;
  }
`;

export const ContentsWrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media only screen and (min-width: 601px) {
    width: 100%;
    height: 520px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const HeadWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 601px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  @media screen and (max-width: 600px) {
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 601px) {
    color: white;
    margin-bottom: 30px;
  }
`;

export const GoToMainBtn = styled.button`
  @media screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
    font-size: 15px;
    background-color: inherit;
    color: white;
    border: none;
    cursor: pointer;
  }
  @media only screen and (min-width: 601px) {
    width: 30px;
    height: 30px;
    font-size: 20px;
    background-color: inherit;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export const ListWrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 601px) {
    width: 100%;
    height: 200px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

export const InputWrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 601px) {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ContentsInput = styled.textarea`
  @media screen and (max-width: 600px) {
    height: 150px;
    padding: 7px;
    border-radius: 5px;
    background-color: inherit;
    border: 1px solid gray;
    color: white;
    margin-bottom: 5px;
  }
  @media only screen and (min-width: 601px) {
    height: 150px;
    padding: 7px;
    border-radius: 5px;
    background-color: inherit;
    border: 1px solid gray;
    color: white;
  }
`;

export const PhoneInput = styled.input`
  @media screen and (max-width: 600px) {
    width: 200px;
    height: 30px;
    padding-left: 7px;
    border-radius: 5px;
    background-color: inherit;
    border: 1px solid gray;
    color: white;
    margin-bottom: 5px;
  }
  @media only screen and (min-width: 601px) {
    width: 200px;
    height: 30px;
    padding-left: 7px;
    border-radius: 5px;
    background-color: inherit;
    border: 1px solid gray;
    color: white;
  }
`;

export const SubmitBtn = styled.button`
  @media screen and (max-width: 600px) {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    font-weight: bold;
    background-color: gray;
    color: white;
    border: 1px solid gray;
  }
  @media only screen and (min-width: 601px) {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    font-weight: bold;
    background-color: gray;
    color: white;
    border: 1px solid gray;
  }
`;
