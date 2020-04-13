import * as React from "react"
import { useState, useEffect } from "react"

export function loadScript(src) {
  const [state, setState] = useState({
    loaded: false,
    error: false,
  })
  useEffect(() => {
      let script = document.createElement("script");
      script.src = src;
      script.async = true;

      // Script event listener callbacks for load and error
      const onScriptLoad = () => {
        setState({
          loaded: true,
          error: false,
        });
      };

      const onScriptError = () => {
        setState({
          loaded: true,
          error: true,
        });
      };

      script.addEventListener("load", onScriptLoad);
      script.addEventListener("error", onScriptError);

      // Add script to document body
      document.body.appendChild(script);

      // Remove event listeners on cleanup
      return () => {
        script.removeEventListener("load", onScriptLoad);
        script.removeEventListener("error", onScriptError);
      }
  }, [src]); // Only re-run effect if script src changes

  return [state.loaded, state.error];
}