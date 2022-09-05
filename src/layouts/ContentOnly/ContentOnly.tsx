import "./ContentOnly.scss";
function ContentOnly({ children }: any) {
  return (
    <div className="ContentOnly">
      <nav className="nav"></nav>
      {children}
    </div>
  );
}
export default ContentOnly;
