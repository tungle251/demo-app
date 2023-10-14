import App from "./App"
import { ClassComponent } from "./components/ClassComponent"
import Example1 from "./state-demo/Example1"
import Example2 from "./state-demo/Example2"
import Example3 from "./state-demo/Example3"
import Example4 from "./state-demo/Example4"

export const APP_ROUTES = [
  {
    path: "/",
    element: <App />,
    name: "Home",
  },
  {
    path: "/class-ex",
    element: <ClassComponent />,
    name: "Class Example",
  },
  {
    path: "/example1",
    element: <Example1 />,
    name: "Example 1",
  },
  {
    path: "/example2",
    element: <Example2 />,
    name: "Example 2",
  },
  {
    path: "/example3",
    element: <Example3 />,
    name: "Example 3",
  },
  {
    path: "/example4",
    element: <Example4 />,
    name: "Example 4",
  },
]
