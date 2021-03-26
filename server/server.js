import app from "./app";
import config from "./config";

const { PORT } = config;

app.listen("7000", () => {
  console.log(`Server stared on Port ${PORT}`);
});
