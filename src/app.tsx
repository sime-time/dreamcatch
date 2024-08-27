import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>DreamCatch</Title>
          <nav class="inline-flex gap-4">
            <a href="/" class="border p-3 text-blue-500 underline">Index</a>
            <a href="/about" class="border p-3 text-blue-500 underline">About</a>
            <a href="/register" class="border p-3 text-blue-500 underline">Register</a>
          </nav>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
