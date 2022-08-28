import { Navbar } from "./components/molecules/Navbar";
import { AppRoutes } from "./routes/app.routes";
import "react-modern-drawer/dist/index.css";

function App() {
  return (
    <div>
      <AppRoutes />
      <Navbar />
    </div>
  );
}

export default App;
