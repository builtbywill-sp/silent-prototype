import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route('/', 'routes/Boot.tsx'),
  route('home', 'routes/home.tsx'),
  route('morpheus', 'routes/morpheus.tsx'),
  route('violet', 'routes/violet.tsx'),
  route('tools', 'routes/tools.tsx'),
  route('services', 'routes/Services.tsx'),
  route('docs', 'routes/docs.tsx'),
  route('login', 'routes/login.tsx'),
  route('theories', 'routes/theories.tsx'),
  route('notes', 'routes/notes.tsx'),
  route('extraction', 'routes/Extraction.tsx'),
  route('hardware', 'routes/Hardware.tsx'),
  route('about', 'routes/About.tsx'),
] satisfies RouteConfig;
