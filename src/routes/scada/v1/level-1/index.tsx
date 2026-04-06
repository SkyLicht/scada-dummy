import Level1Layout from "#/features/scada/layout/level-1-view";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/scada/v1/level-1/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Level1Layout />;
}
