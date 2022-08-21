import React from "react";

export default function Error({ children, style, ...props }) {
  const styles = { error: { color: "#fa7c92" } };

  return (
    <div style={{ ...styles.error, ...style }} {...props}>
      {children}
    </div>
  );
}
