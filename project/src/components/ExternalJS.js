import { useEffect } from "react";

const useScript = ({ url }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;

    const body = document.querySelector("body");
    body.style.backgroundColor = "#000";
  }, [url]);
};

export default useScript;
