import React from "react";
import { CircularProgress } from '@material-ui/core';

// core components

export default function PageChange(props) {
  return (
    <div>
      <div className="page-transition-wrapper-div">
        <div className="page-transition-icon-wrapper mb-3">
          <CircularProgress disableShrink />
        </div>
        <h4 className="title text-white">
          Carregando página: {props.path}
        </h4>
      </div>
    </div>
  );
}
