import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import type Database from "better-sqlite3";
import { createDatabase } from "./database";

describe("SQLite persistence", () => {
  let database: Database.Database | undefined;

  afterEach(() => {
    database?.close();
    database = undefined;
  });

  it("creates catalog tables and persists related course data", () => {
    database = createDatabase(":memory:");

    database
      .prepare("INSERT INTO courses (id, name, slug) VALUES (?, ?, ?)")
      .run("course-1", "Desenvolvimento de Sistemas", "desenvolvimento-de-sistemas");
    database
      .prepare(
        "INSERT INTO curriculums (id, course_id, title) VALUES (?, ?, ?)",
      )
      .run("curriculum-1", "course-1", "Matriz 2026");
    database
      .prepare("INSERT INTO subjects (id, name, description) VALUES (?, ?, ?)")
      .run("subject-1", "Programacao Web", "Fundamentos de aplicacoes web");
    database
      .prepare(
        `INSERT INTO curriculum_subjects
          (curriculum_id, subject_id, semester, workload_hours)
         VALUES (?, ?, ?, ?)`,
      )
      .run("curriculum-1", "subject-1", 1, 80);

    const result = database
      .prepare(
        `SELECT courses.name AS course, subjects.name AS subject,
                curriculum_subjects.semester, curriculum_subjects.workload_hours
         FROM courses
         JOIN curriculums ON curriculums.course_id = courses.id
         JOIN curriculum_subjects
           ON curriculum_subjects.curriculum_id = curriculums.id
         JOIN subjects ON subjects.id = curriculum_subjects.subject_id`,
      )
      .get() as
      | {
          course: string;
          subject: string;
          semester: number;
          workload_hours: number;
        }
      | undefined;

    assert.deepEqual(result, {
      course: "Desenvolvimento de Sistemas",
      subject: "Programacao Web",
      semester: 1,
      workload_hours: 80,
    });
  });

  it("stores news drafts and requires a publication date for published news", () => {
    const db = createDatabase(":memory:");
    database = db;

    db
      .prepare("INSERT INTO news (id, title, slug, content) VALUES (?, ?, ?, ?)")
      .run("news-1", "Inscricoes abertas", "inscricoes-abertas", "Leia o aviso.");

    const draft = db
      .prepare("SELECT status FROM news WHERE id = ?")
      .get("news-1") as { status: string };
    assert.equal(draft.status, "draft");

    assert.throws(() =>
      db
        .prepare(
          `INSERT INTO news (id, title, slug, content, status)
           VALUES (?, ?, ?, ?, 'published')`,
        )
        .run("news-2", "Novo aviso", "novo-aviso", "Conteudo"),
    );
  });
});
