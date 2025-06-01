import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route('/', 'routes/home.tsx'),
  route('morpheus', 'routes/morpheus.tsx'),
  route('violet', 'routes/violet.tsx'),
  route('tools', 'routes/tools.tsx'),
  route('docs', 'routes/docs.tsx'),
  route('login', 'routes/login.tsx'),
  route('theories', 'routes/theories.tsx'),
] satisfies RouteConfig;
