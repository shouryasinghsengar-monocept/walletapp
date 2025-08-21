import { logger } from "react-native-logs";

const log = logger.createLogger({
  levels: {
    info: 0,
    warn: 1,
    error: 2,
    debug: 3,
  },
  severity: "debug", // set the minimum log level to print
  transportOptions: {
    colors: {
      info: "blue",
      warn: "yellow",
      error: "red",
      debug: "cyan",
    },
  },
});

export default log;
