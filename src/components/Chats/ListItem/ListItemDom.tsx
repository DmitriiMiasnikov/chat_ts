import { useRef, useEffect } from "react";
import edit from "./../../../assets/images/edit.svg";
import { NavLink } from "react-router-dom";
import EditBlock from "./EditBlock";
import styled from "styled-components";
import { FlexBlock } from "../../FlexBlock";
import { Button } from "../../Button";

const StyledListItemWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  margin: 10px 10px 0px 10px;
  transition: 0.2s border-color, 0.2s background-color;
  border: 1px solid #6e6e6e;
  box-shadow: 1px 1px 1px 0px #6e6e6e;
  &:hover {
    border-color: #b7b7b7;
    background-color: rgba(255, 255, 255, 0.055);
  }
`;

type Props = {
  item: { userName: string; title: string; date: string; id: string };
  date: Date;
  showEditBlock: boolean;
  showEditBlockHandler: (show: boolean) => void;
  isAuth: boolean;
  isMyChat: boolean;
  setShowEditBlock: (show: boolean) => void;
};

export const ListItemDom = (props: Props) => {
  const refListItem = useRef(null);
  const handleMouseClick = (e: any) => {
    function composedPath(el: any) {
      const path = [];
      while (el) {
        path.push(el);
        if (el.tagName === "HTML") {
          path.push(document);
          path.push(window);
          return path;
        }
        el = el.parentElement;
      }
    }
    const path =
      e.path || (e.composedPath && e.composedPath()) || composedPath(e.target);
    if (!path.includes(refListItem.current)) {
      props.showEditBlockHandler(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleMouseClick, true);
    return () => document.removeEventListener("click", handleMouseClick, true);
  });

  return (
    <StyledListItemWrapper ref={refListItem}>
      <FlexBlock direction={"row"} justifyContent={"space-between"}>
        <NavLink
          to={`/chat/${props.item.id}`}
          style={{ width: "100%", height: "100%", textDecoration: "none" }}
        >
          <FlexBlock justifyContent={"flex-start"}>
            {props.item.title}
          </FlexBlock>
        </NavLink>
        <FlexBlock justifyContent={"flex-end"}>
          <FlexBlock direction={"column"} justifyContent={"space-around"}>
            <FlexBlock justifyContent={"flex-end"} fontSize={"13px"}>
              Автор: {props.item.userName}
            </FlexBlock>
            <FlexBlock justifyContent={"flex-end"} fontSize={"12px"}>
              Дата создания: {props.date.toLocaleDateString()}
            </FlexBlock>
          </FlexBlock>
          {props.isAuth && props.isMyChat && (
            <Button
              width={"30px"}
              height={"40px"}
              borderRadius={"4px"}
              margin={"0px 5px"}
              onClick={(e: any) => {
                e.preventDefault();
                props.showEditBlockHandler(!props.showEditBlock);
              }}
            >
              <img src={edit} alt="" />
            </Button>
          )}
        </FlexBlock>
      </FlexBlock>
      <EditBlock
        id={props.item.id}
        setShowEditBlock={props.setShowEditBlock}
        show={props.showEditBlock}
      />
    </StyledListItemWrapper>
  );
};
