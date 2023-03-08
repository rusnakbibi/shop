declare module "*.module.css";
declare module "*.module.scss";
declare module "*.module.jsx";
declare module "*.style.jsx";
declare module "*.styles.tsx" {
  const content: Record<string, string>;
  export default content;
}
declare module "*.svg" {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}