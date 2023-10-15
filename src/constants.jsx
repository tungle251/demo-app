import App from "./App"
import { ClassComponent } from "./components/ClassComponent"
import Example10 from "./effect-demo/Example10"
import Example9 from "./effect-demo/Example9"
import Example1 from "./state-demo/Example1"
import Example2 from "./state-demo/Example2"
import Example3 from "./state-demo/Example3"
import Example4 from "./state-demo/Example4"
import Example5 from "./state-demo/Example5"
import Example6 from "./state-demo/Example6"
import Example7 from "./state-demo/Example7"
import Example8 from "./state-demo/Example8"

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
  {
    path: "/example5",
    element: <Example5 />,
    name: "Example 5",
  },
  {
    path: "/example6",
    element: <Example6 />,
    name: "Example 6",
  },
  {
    path: "/example7",
    element: <Example7 />,
    name: "Example 7",
  },
  {
    path: "/example8",
    element: <Example8 />,
    name: "Example 8",
  },
  // Effect example
  {
    path: "/example9",
    element: <Example9 />,
    name: "Example 9",
  },
  {
    path: "/example10",
    element: <Example10 />,
    name: "Example 10",
  },
]
