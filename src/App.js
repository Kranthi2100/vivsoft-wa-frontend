import { PageLayout } from "./layout";
import { WeatherService } from "./features";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PageLayout>
        <WeatherService />
      </PageLayout>
    </div>
  );
}
