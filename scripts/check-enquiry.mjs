import assert from "node:assert/strict";
import { validateEnquiry } from "../src/lib/enquiry.js";

const valid = validateEnquiry({
  name: "Asha Rao",
  email: "asha@example.com",
  countryCode: "+91",
  phone: "98765 43210",
  country: "India",
  course: "General enquiry",
  consent: true,
});

assert.equal(valid.valid, true);
assert.equal(validateEnquiry({}).valid, false);
assert.equal(validateEnquiry({ ...valid.data, consent: true, name: "<b>Asha</b>" }).data.name, "Asha");
