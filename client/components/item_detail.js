import React from 'react';

import ItemScore from './item_score';

const ItemDetail = (props) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.item.link} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {props.item.title}
        </h4>
      <p>{props.item.description}</p>
      <ItemScore ups={props.item.ups} downs={props.item.downs}/>
      </div>
    </li>
  )
};

export default ItemDetail;
