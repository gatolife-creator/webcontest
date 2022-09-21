import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    document.querySelector("#scroll-target")?.scrollIntoView({behavior: "smooth"});
  }, [pathname, search]);

  return null;
};
