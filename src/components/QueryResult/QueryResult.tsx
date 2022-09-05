import "./QueryResult.scss";

const QueryResult = ({ loading, error, data, children }: any) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return <p>Loading</p>;
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};
export default QueryResult;
