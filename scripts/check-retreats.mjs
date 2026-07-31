import assert from "node:assert/strict";
import { retreats } from "../src/data/coursesData.js";

for (const retreat of retreats) {
  for (const field of ["whoFor", "itinerary", "dailySchedule", "gallery", "optionalGoaIdeas"]) {
    assert.ok(retreat[field]?.length, `${retreat.slug} is missing ${field}`);
  }
  assert.equal(retreat.itinerary.length, retreat.days);
}

console.log(`Retreat check passed: ${retreats.length} pages.`);
