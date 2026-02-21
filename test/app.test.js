const request = require("supertest");
const app = require("../app");

describe("Manga API", () => {
  it("returns health status", async () => {
    const response = await request(app).get("/api/health");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ ok: true });
  });

  it("returns manga list", async () => {
    const response = await request(app).get("/api/manga");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("returns 404 for unknown manga", async () => {
    const response = await request(app).get("/api/manga/999");

    expect(response.statusCode).toBe(404);
  });
});
