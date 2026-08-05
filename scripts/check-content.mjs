import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { courses, retreats } from "../src/data/coursesData.js";
import { facilities, galleryItems } from "../src/data/siteData.js";

const expectedRetreats = [3, 5, 7];
const course = courses.find(
  ({ slug }) => slug === "100-hour-yoga-teacher-training-goa",
);

assert.equal(
  course?.name,
  "100-Hour Yoga Teacher Training in Goa",
);
assert.equal(course.curriculum.length, 10);
assert.equal(course.faq.length, 7);
assert.deepEqual(
  retreats.map(({ days }) => days),
  expectedRetreats,
);

for (const retreat of retreats) {
  assert.equal(retreat.itinerary.length, retreat.days);
  assert.equal(retreat.slug, `${retreat.days}-day-yoga-retreat-goa`);
}

const imagePaths = new Set([
  ...courses.map(({ image }) => image),
  ...retreats.flatMap(({ image, gallery }) => [
    image,
    ...gallery.map(({ src }) => src),
  ]),
  ...facilities.map(({ image }) => image),
  ...galleryItems.map(({ src }) => src),
]);

await Promise.all(
  [...imagePaths].map((path) => access(`public${path}`)),
);

console.log(
  `Content check passed: ${courses.length} courses, ${retreats.length} retreats, ${imagePaths.size} images.`,
);
