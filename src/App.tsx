import { RouterProvider } from "react-router";
import router from "./core/routes/route";

function App() {
  return (
    <div className="mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
