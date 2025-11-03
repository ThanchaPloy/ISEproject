import PocketBase from "pocketbase";

const PB_URL = process.env.PB_URL || "http://127.0.0.1:8090";
const ADMIN_EMAIL = process.env.PB_ADMIN_EMAIL;
const ADMIN_PASS = process.env.PB_ADMIN_PASS;

const pbAdmin = new PocketBase(PB_URL);

async function initAdmin() {
  if (!ADMIN_EMAIL || !ADMIN_PASS) {
    throw new Error("PB admin credentials missing in env");
  }
  // logs in admin and keeps session in pbAdmin.authStore
  await pbAdmin.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASS);
  console.log("PocketBase admin authenticated");
}

export { pbAdmin, initAdmin };