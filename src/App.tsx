import { lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const Activities = lazy(() => import("./pages/Activities"));
const ActivityDetail = lazy(() =>
  import("./pages/Activities").then((m) => ({ default: m.ActivityDetail })),
);
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() =>
  import("./pages/Projects").then((m) => ({ default: m.ProjectDetail })),
);
const Membership = lazy(() => import("./pages/Membership"));
const Governance = lazy(() => import("./pages/Governance"));
const News = lazy(() => import("./pages/News"));
const ArticleDetail = lazy(() =>
  import("./pages/News").then((m) => ({ default: m.ArticleDetail })),
);
const Contact = lazy(() => import("./pages/Contact"));
const Legal = lazy(() => import("./pages/Legal"));
const NotFound = lazy(() => import("./pages/NotFound"));
function SiteRoutes() {
  const { pathname } = useLocation();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="activities" element={<Activities />} />
        <Route
          path="activities/:id"
          element={<ActivityDetail key={pathname} />}
        />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetail key={pathname} />} />
        <Route path="membership" element={<Membership />} />
        <Route path="governance" element={<Governance />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<ArticleDetail key={pathname} />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Legal key={pathname} />} />
        <Route path="legal" element={<Legal key={pathname} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <SiteRoutes />
    </BrowserRouter>
  );
}
