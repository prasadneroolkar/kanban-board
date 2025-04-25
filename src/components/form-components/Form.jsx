import React from "react";

const Form = ({ children, onSubmit, className }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default React.memo(Form);
