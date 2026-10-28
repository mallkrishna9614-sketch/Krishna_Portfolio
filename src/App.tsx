import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import SummaiyaPortfolio from "./pages/SummaiyaPortfolio";

export default function App() {
  return (
    <>
      <SummaiyaPortfolio />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
