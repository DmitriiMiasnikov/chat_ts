import styled, { css } from "styled-components";

const StyledButton = styled.button<{width?: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '110px'};
  height: 40px;
  margin: 5px;
  background-color: "var(--block)";
  border-radius: 8px;
  border: 0px;
  transition: 0.2s background-color, 0.2s color;
  color: "white";
  font-size: 17px;
  pointer-events: auto;

  &:hover {
    cursor: pointer;
    background-color: var(--block-hover);
  }

  &:focus {
    outline: none;
    background-color: var(--block);
  }

  &.submit {
    width: 100%;
    height: 100%;
  }
  ${({disabled}) =>
    disabled &&
    css`
      background-color: #5d5d5d;
      color: #757575;
      pointer-events: none;
    `}
`;

type Props = {
  disabled?: boolean;
  children?: string;
  width?: string;
  height?: string;
};

export const Button = (props: Props) => {
  return (
    <StyledButton {...props} type={'submit'}>
      {props.children}
    </StyledButton>
  );
};
