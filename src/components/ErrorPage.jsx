import React from "react";
import { useRouteError } from "react-router-dom";
import { ERROR_IMG } from "../utils/constants";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <div className="error-wrapper">
        <img src={ERROR_IMG} height={200} width={200} alt="page-not-found"/>
        <h1>
          {err.status}: {err.statusText}
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
