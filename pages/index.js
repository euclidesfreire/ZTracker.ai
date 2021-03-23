import React, { Component } from "react";
import Router from "next/router";
import {gdrive} from 'pinkybrain';

export default function Index(request, response) {
  if(request.query.code){
    const oAuth2Client =  gdrive.getAccessToken(request, response);
    
    React.useEffect(() => {
      Router.push("/files");
    });
  }

  React.useEffect(() => {
    Router.push("/dashboard");
  });

  return <div />;
}
