import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component;
          let Layout = route.layout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
