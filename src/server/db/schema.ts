import { int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

export const createTable = sqliteTableCreator((name) => `matt-mccoy_${name}`);

export const work_experience = createTable("experience", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title", { length: 256 }),
  startDate: text("startDate", { length: 256 }),
  endDate: text("endDate", { length: 256 }),
  image: text("image", { length: 256 }),
});

export const project_experience = createTable("projects", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title", { length: 256 }),
  position: text("position", { length: 256 }),
  organization: text("organization", { length: 256 }),
  startDate: text("startDate", { length: 256 }),
  endDate: text("endDate", { length: 256 }),
  image: text("image", { length: 256 }),
  githuburl: text("github", { length: 256 }),
  description: text("description", { length: 256 }),
});

export const skills = createTable("skills", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title", { length: 256 }),
  project_id: int("project_id", { mode: "number" }).references(
    () => project_experience.id,
  ),
  image: text("image", { length: 256 }),
});

export const education = createTable("education", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  school: text("school", { length: 256 }),
  degree: text("degree", { length: 256 }),
  gpa: int("gpa", { mode: "number" }),
  endDate: text("endDate", { length: 256 }),
  image: text("image", { length: 256 }),
});
