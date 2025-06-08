import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  layout("routes/auth-layout.tsx", [
    route("dashboard", "routes/dashboard.tsx"),
    // route("settings", "routes/settings.tsx"),
  ]),
] satisfies RouteConfig;
