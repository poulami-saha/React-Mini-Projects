import { ApplicationList } from "./Application";
import { BrowserRouter, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>React Mini Challenges</header>
        <ul>
          {
          ApplicationList.map((application) => {
            return (
              <li key={application.name}>
                <Link
                  to={application.githubLink}
                  target="_blank"
                  className="linkStyles"
                >
                  {application.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </BrowserRouter>
  );
}

export default App;
