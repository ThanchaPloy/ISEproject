import PocketBase from "pocketbase";

const PB_URL = process.env.REACT_APP_PB_URL || "http://localhost:8090";
const pb = new PocketBase(PB_URL);

// pb.authStore will persist session in localStorage (SDK behavior)
export default pb;