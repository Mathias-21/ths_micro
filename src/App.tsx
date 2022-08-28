import { Navbar } from "./components/molecules/Navbar";
import { AppRoutes } from "./routes/app.routes";

function App() {
  return (
    <div>
      <AppRoutes />
      <Navbar />
    </div>
  );
}

export default App;
