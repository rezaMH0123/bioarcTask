import { createBrowserRouter, Navigate } from "react-router";
import Layout from "../../components/Layout";
import Dashboard from "../../pages/Dashboard";
import OutgoingCalls from "../../pages/OutgoingCalls";
import AddAppointment from "../../pages/AddAppointment";
import Tasks from "../../pages/Tasks";
import Patients from "../../pages/Patients";
import Employees from "../../pages/Employees";
import CallHistory from "../../pages/CallHistory";
import NotFound from "../../pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "outgoing-calls", element: <OutgoingCalls /> },
      { path: "add-appointment", element: <AddAppointment /> },
      { path: "tasks", element: <Tasks /> },
      { path: "patients", element: <Patients /> },
      { path: "employees", element: <Employees /> },
      { path: "call-history", element: <CallHistory /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
