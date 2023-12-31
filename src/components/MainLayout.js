import { Link } from "react-router-dom"
import { APP_ROUTES } from "../constants"
import "./MainLayout.scss"

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header>
        <ul className="main-ul">
          {APP_ROUTES.map((app) => (
            <li className="main-li" key={app.name}>
              <Link to={app.path}>{app.name}</Link>
            </li>
          ))}
        </ul>
      </header>

      <div>{children}</div>
    </div>
  )
}

export default MainLayout
