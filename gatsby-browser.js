exports.onClientEntry = () => {
  (function () {
    const path = 'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css';
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', path);
    document.head.appendChild(link);
    // require('./src/scss/style-guide.scss');
  }());

  window.erxesSettings = {
    messenger: {
      brand_id: "mM6o5a",
    },
  };

  (function() {
    var script = document.createElement('script');
    script.src = "https://engage.rentivo.com/widgets/build/messengerWidget.bundle.js";
    script.async = true;
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);
  })();

};
