import React from 'react';

import sty from '../../css/bootstrap.min.css';

const box = (props) => (
  <div className={sty.card + " " + sty["text-white"] + " " + sty["bg-dark"] + " " + sty["mb-3"]}>
      <div className={sty["card-header"]}>{props.title}</div>
      <div className={sty["card-body"]}>
        {props.body}
      </div>
  </div>
);

export default box;
