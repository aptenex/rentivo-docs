import styles from './flex.module.scss';

export default function getClass(className) {

  className = className.replace(/-([a-z0-9])/g, function (g) { return g[1].toUpperCase(); });
  // console.log("Lookign for", className, styles);
  return (styles && styles[className]) ? styles[className] : className;
}