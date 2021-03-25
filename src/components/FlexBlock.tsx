import styled from "styled-components";

const StyledFlexBlock = styled.div<{
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  color?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  overflow?: string;
  margin?: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  color: ${({ color }) => color || "#c7c7c7"};
  font-size: ${({ fontSize }) => fontSize || "15px"};
  width: ${({ width }) => width || "inherit"};
  height: ${({ height }) => height || "inherit"};
  overflow: ${({ overflow }) => overflow || "visible"};
  margin: ${({ margin }) => margin || "0px"};
`;

type Props = {
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  children?: any;
  color?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  overflow?: string;
  margin?: string;
};

export const FlexBlock = (props: Props) => {
  return <StyledFlexBlock {...props}>{props.children}</StyledFlexBlock>;
};
