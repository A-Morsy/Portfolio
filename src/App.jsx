import { BrowserRouter, Route} from "react-router-dom";
import { lazy, Suspense } from "react";
import { Navbar } from "./components";

const HomePage = lazy(() => import('./components'));
const AboutPage = lazy(() => import('./components'));
const ContactPage = lazy(() => import('./components'));
const ExperiencePage = lazy(() => import('./components'));
const TechPage = lazy(() => import('./components'));
const WorksPage = lazy(() => import('./components'));
const StarsCanvas = lazy(() => import('./components'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover-bg-no-repeat bg-center">
            <Navbar />
             
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/experience" component={ExperiencePage} />
                <Route path="/tech" component={TechPage} />
                <Route path="/works" component={WorksPage} />
              
            </div>
            <div className="relative z-0">
              <StarsCanvas />
            </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
