import { api } from "./utils/constant";

const config = {
  client_id: "cec0eb45c92ed8f83f30",
  scope: "repo:status",
  redirect_uri: `${api.baseUrl}/loginGithub`,
  client_secret: "",
};

export default config;
