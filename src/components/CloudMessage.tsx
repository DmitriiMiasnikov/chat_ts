import styled from "styled-components";

const StyledCloudMessage = styled.div`
  position: relative;
  background-color: #b1b1b1;
  height: fit-content;
  padding: 10px;
  border-radius: 8px;
  margin-left: 20px;
  max-width: inherit;
  &::after {
    content: "";
    position: absolute;
    left: -12px;
    bottom: 50%;
    transform: translateY(50%);
    border: 6px solid transparent;
    border-right: 6px solid #b1b1b1;
    border-top: 6px solid #b1b1b1;
  }
`;
const StyledText = styled.div`
  .text {
    word-wrap: break-word;
    overflow: auto;
  }
`;

type Props = {
  text: string;
};

export const CloudMessage = (props: Props) => {
  return (
    <StyledCloudMessage>
      <StyledText>{props.text}</StyledText>
    </StyledCloudMessage>
  );
};
