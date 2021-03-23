import styled, { css } from "styled-components";

const StyledButtonInput = styled.button<{
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  disabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "110px"};
  height: ${(props) => props.height || "40px"};
  margin: ${(props) => props.margin || "0px"};
  background-color: #828282;
  border-radius: ${(props) => props.borderRadius || "8px"};
  border: 0px;
  transition: 0.2s background-color, 0.2s color;
  color: white;
  font-size: 17px;
  pointer-events: auto;

  &:hover {
    cursor: pointer;
    background-color: #7a7a7a;
  }

  &:focus {
    outline: none;
    background-color: var(--block);
  }

  &.submit {
    width: 100%;
    height: 100%;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #5d5d5d;
      color: #757575;
      pointer-events: none;
    `}
`;

const StyledButton = styled.div<{
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  buttonType?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "110px"};
  height: ${(props) => props.height || "40px"};
  margin: ${(props) => props.margin || "0px"};
  background-color: #5d5d5d;
  border-radius: ${(props) => props.borderRadius || "8px"};
  border: 0px;
  transition: 0.2s background-color, 0.2s color;
  color: "white";
  font-size: 17px;
  &:hover {
    cursor: pointer;
    background-color: var(--block-hover);
  }
  ${({ buttonType }) =>
    buttonType === "error" &&
    css`
      background-color: #882a2a;
      color: #cccccc;
      &:hover {
        cursor: pointer;
        background-color: #b73535;
      }
    `}
`;

type Props = {
  disabled?: boolean;
  children?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  inputButton?: boolean;
  onClick?: () => void;
  buttonType?: string;
};

export const Button = (props: Props) => {
  if (props.inputButton) {
    return (
      <StyledButtonInput {...props} type={"submit"}>
        {props.children}
      </StyledButtonInput>
    );
  } else {
    return <StyledButton {...props}>{props.children}</StyledButton>;
  }
};
