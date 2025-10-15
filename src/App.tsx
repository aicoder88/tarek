import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import routes from "tempo-routes";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LocaleProvider } from "./providers/LocaleProvider";

function App() {
  const tempoRoutes = useRoutes(routes);
  const isTempoEnabled = import.meta.env.VITE_TEMPO === "true";

  return (
    <ThemeProvider defaultTheme="dark">
      <LocaleProvider defaultLocale="en">
        <Suspense fallback={<p>Loading...</p>}>
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            {isTempoEnabled && tempoRoutes}
          </>
        </Suspense>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;