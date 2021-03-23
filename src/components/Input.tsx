import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 0px solid transparent;
  color: var(--font);
  background-color: var(--input);
  padding: 8px;
  transition: 0.1s background-color;

  &:focus {
    outline: none;
  }

  &:-internal-autofill-selected {
    appearance: menulist-button;
    background-color: var(--input) !important;
    background-image: none !important;
    color: var(--font) !important;
  }
`;

type Props = {
  input?: any;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
};

export const Input = (props: Props) => {
  return (
    <StyledInput
      {...props}
    />
  );
};
