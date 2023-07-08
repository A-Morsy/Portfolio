import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
// import StarsCanvas from "./components/StarsCanvas";

const LazyAbout = lazy(() => import("./components/About"));
const LazyContact = lazy(() => import("./components/Contact"));
const LazyExperience = lazy(() => import("./components/Experience"));
const LazyHero = lazy(() => import("./components/Hero"));
const LazyNavbar = lazy(() => import("./components/Navbar"));
const LazyTech = lazy(() => import("./components/Tech"));
const LazyWorks = lazy(() => import("./components/Works"));
const LazyStars = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover-bg-no-repeat bg-center">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyNavbar />
            <LazyHero />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyAbout />
          <LazyExperience />
          <LazyTech />
          <LazyWorks />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyContact />
            <LazyStars />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
