import styled, { keyframes } from "styled-components";
import fetching from "./../assets/images/fetching.svg";

const rotation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;
const StyledFetching = styled.div<{
  blockHeight?: string;
  blockWidth?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ blockHeight }) => blockHeight || "60px"};
  width: ${({ blockWidth }) => blockWidth || "100%"};
`;
const StyledImage = styled.img<{ imageSize?: string }>`
  width: ${({ imageSize }) => imageSize || "35px"};
  height: ${({ imageSize }) => imageSize || "35px"};
  animation-name: ${rotation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

type Props = {
  blockWidth?: string;
  blockHeight?: string;
  imageSize?: string;
};

export const Fetching = (props: Props) => {
  return (
    <StyledFetching {...props}>
      <StyledImage src={fetching} alt="" {...props} />
    </StyledFetching>
  );
};
