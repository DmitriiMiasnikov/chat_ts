import React from 'react';
import { connect } from 'react-redux';
import { ListItemDom } from './ListItemDom';

type Props = {
  item: any
}

const ListItem = (props: Props) => {
  let date = new Date(props.item.date);
  return (
    <ListItemDom {...props} date={date}/>
  )
}

const mapStatesToProps = (state: any) => {
  return {

  }
}

export default connect(mapStatesToProps, {})(ListItem)