export const Layout = ({ children }) => {
  return (
    <div style={{ flex: 1, display: "flex", width: "80vw", height: "100%", justifyContent: 'space-around' }}>
      {children}
    </div>
  );
};
