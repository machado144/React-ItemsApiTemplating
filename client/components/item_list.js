import React from 'react';

import ItemDetail from './item_detail'

const ItemList = (props) => {
  const validItems = props.items.filter(item => !item.is_album);

  const RenderedItems = validItems.map(item =>
    <ItemDetail key={item.id} item={item} />
  );

  return (
    <ul className="media-list list-group">
      {RenderedItems}
    </ul>
  );
};

export default ItemList;
