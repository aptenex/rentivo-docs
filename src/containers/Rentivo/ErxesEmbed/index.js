import {useEffect, useState} from "react";
import React from "react";
import styled from "styled-components"

export const ErxesEmbed = ({embed}) => {
  const Erxes = styled('div') `
      margin-bottom: 50px;
  `;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    if(!mounted) {
      (function () {

        window.erxesSettings = {
          ...window.erxesSettings,
          forms: [embed],
        };
        let script = document.createElement('script');
        script.src = "https://rentivo.app.erxes.io/widgets/build/formWidget.bundle.js";
        script.async = true;
        let entry = document.getElementsByTagName('script')[0];
        entry.parentNode.insertBefore(script, entry);
        setMounted(true);

      })();
    }

    // return () => {
    //   // setMounted(false);
    // }

  });

  return (
      <Erxes data-erxes-embed={embed.form_id} style={{background: 'none', width: "100%", marginBottom: "50px"}}/>
  );
};