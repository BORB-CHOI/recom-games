import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Recom Games";
  res.locals.routes = routes;
  next();
};