import React from "react";

export async function getServerSideProps() {
    const proxyUrl = 'http://localhost:3000/api/drives/auth';
    const checkToken = await fetch(proxyUrl);
    const checkTokenJson = checkToken.json();

    return {
        props: {

        }
    }

}

export default function Auth(props) {

}