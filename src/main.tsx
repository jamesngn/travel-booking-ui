import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { buildProvidersTree } from "./shared/utils";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({});

const ProvidersTree = buildProvidersTree([
  [MantineProvider, { theme }],
  [QueryClientProvider, { client: queryClient }],
]);

root.render(
  <ProvidersTree>
    <App />
  </ProvidersTree>
);
