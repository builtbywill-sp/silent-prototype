import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route('/', 'routes/Boot.tsx'),
  route('home', 'routes/home.tsx'),
  route('morpheus', 'routes/morpheus.tsx'),
  route('violet', 'routes/violet.tsx'),
  route('tools', 'routes/tools.tsx'),
  route('services', 'routes/services.tsx'),
  route('docs', 'routes/docs.tsx'),
  route('login', 'routes/login.tsx'),
  route('theories', 'routes/theories.tsx'),
  route('notes', 'routes/notes.tsx'),
] satisfies RouteConfig;
