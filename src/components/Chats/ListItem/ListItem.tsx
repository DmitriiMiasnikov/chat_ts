import React from 'react';
import { connect } from 'react-redux';
import { ListItemDom } from './ListItemDom';

type Props = {
  item: any
}

const ListItem = (props: Props) => {
  return (
    <ListItemDom {...props} />
  )
}

const mapStatesToProps = (state: any) => {
  return {

  }
}

export default connect(mapStatesToProps, {})(ListItem)