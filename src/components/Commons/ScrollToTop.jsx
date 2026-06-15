import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // useLocation listens for any URL changes across your routing lifecycle
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly snap the document scroll state back to coordinates (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Re-runs every single time a new page route is active

  return null; // This is a logic-only shell wrapper; it renders nothing visually
};

export default ScrollToTop;