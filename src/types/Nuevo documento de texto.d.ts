declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

declare module '*.css' {
  const content: string;
  export default content;
}