import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { ErrorMessage } from "./ErrorMessage";

export const Box = ({ error, isLoading, isOpen, setIsOpen, children }) => {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isLoading && error === "" && (
        <div className="loader-container">
          <CircularProgress color="inherit" />
        </div>
      )}
      {isOpen && !isLoading && children}
      {error !== "" && !isLoading && <ErrorMessage error={error} />}
    </div>
  );
};
