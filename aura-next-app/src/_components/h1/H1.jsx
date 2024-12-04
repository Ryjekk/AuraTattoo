export default function H1({ children, white }) {
  const classes = white ? "headline headline--white" : "headline";
  return <h1 className={classes}>{children}</h1>;
}
