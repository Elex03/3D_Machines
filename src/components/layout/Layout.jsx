export const Layout = ({ children }) => {
  return (
    <div style={{ flex: 1, display: "flex", width: "100%", height: "100%" }}>
      {children}
    </div>
  );
};
