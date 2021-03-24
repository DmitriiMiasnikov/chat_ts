import styled from "styled-components";

const StyledList = styled.div<{ listDirection?: string }>`
display: flex;
flex-direction: ${({listDirection}) => listDirection || 'column'};
overflow: auto;
`;

type Props = {
  listDirection?: string;
  children?: any;
};

export const List = (props: Props) => {
  return <StyledList {...props}>{props.children}</StyledList>;
};
