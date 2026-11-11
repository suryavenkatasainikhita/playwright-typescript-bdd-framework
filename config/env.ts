import qa from "./qa";
import uat from "./uat";
import prod from "./prod";

const selectedEnv = process.env.ENV || "qa";

const environment =
  selectedEnv === "uat"
    ? uat
    : selectedEnv === "prod"
    ? prod
    : qa;

export default environment;
