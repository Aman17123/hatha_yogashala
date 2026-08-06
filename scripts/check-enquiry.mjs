import assert from "node:assert/strict";
import { isAllowedOrigin, validateEnquiry } from "../src/lib/enquiry.js";

const valid = validateEnquiry({
  name: "Asha Rao",
  email: "asha@example.com",
  phone: "+919876543210",
  country: "India",
  course: "General enquiry",
  consent: true,
});

assert.equal(valid.valid, true);
assert.equal(validateEnquiry({}).valid, false);
assert.equal(validateEnquiry({ ...valid.data, consent: true, name: "<b>Asha</b>" }).data.name, "Asha");
assert.equal(isAllowedOrigin("https://example.com", "example.com"), true);
assert.equal(isAllowedOrigin("not a URL", "example.com"), false);
