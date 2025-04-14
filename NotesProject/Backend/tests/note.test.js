require("dotenv").config();
const request = require("supertest");
const { noteModel, userModel } = require("../models");
const { connectDB, disconnectDB } = require("../database/dbConfig");
const app = require("../app");
const AppRoutes = require("../constants/AppRoutes");
const { SuccessMessages } = require("../constants/SuccessMessages");

describe("Notes API testing", () => {
  let token = null;

  beforeAll(async () => {
    await connectDB(process.env.TEST_MONGO_URI);
    await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_REGISTER)
      .send({
        name: "Testing Name",
        username: "Testing username",
        password: "123456",
      });
    const loginRes = await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_LOGIN)
      .send({
        username: "Testing username",
        password: "123456",
      });
    token = loginRes.body.data.token;
  });

  afterEach(async () => {
    await noteModel.deleteMany();
  });

  afterAll(async () => {
    userModel.deleteMany();
    await disconnectDB();
  });

  // create note test
  it("Should create a new note", async () => {
    const res = await request(app)
      .post(AppRoutes.NOTE)
      .set("authorization", `Bearer ${token}`)
      .send({
        note: "Testing",
      });
    expect(res.statusCode).toBe(SuccessMessages.NOTE.CREATE_SUCCESS.statusCode);
    expect(res.body.message).toBe(
      SuccessMessages.NOTE.CREATE_SUCCESS.responseMessage
    );
    expect(res.body.data.note).toBe("Testing");
    expect(res.body.data.createdBy).toBeDefined();
  });

  // fetch all notes test
  it("Should read all notes", async () => {
    await request(app)
      .post(AppRoutes.NOTE)
      .set("authorization", `Bearer ${token}`)
      .send({
        note: "Testing 1",
      });
    await request(app)
      .post(AppRoutes.NOTE)
      .set("authorization", `Bearer ${token}`)
      .send({
        note: "Testing 2",
      });

    const res = await request(app)
      .get(AppRoutes.NOTE)
      .set("authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(
      SuccessMessages.NOTE.FETCH_ALL_SUCCESS.statusCode
    );
    expect(res.body.message).toBe(
      SuccessMessages.NOTE.FETCH_ALL_SUCCESS.responseMessage
    );
    expect(res.body.data.length).toBe(2);
  });

  // single note fetch test
  it("Should read single note", async () => {
    const res0 = await request(app)
      .post(AppRoutes.NOTE)
      .set("authorization", `Bearer ${token}`)
      .send({
        note: "Testing",
      });
    const id = res0.body.data._id;

    const res1 = await request(app)
      .get(AppRoutes.NOTE + `/${id}`)
      .set("authorization", `Bearer ${token}`);

    expect(res1.statusCode).toBe(SuccessMessages.NOTE.FETCH_SUCCESS.statusCode);
    expect(res1.body.message).toBe(
      SuccessMessages.NOTE.FETCH_SUCCESS.responseMessage
    );
    expect(res1.body.data).toBeDefined();
  });

  // note delete test
  it("Should delete the note", async () => {
    const res0 = await request(app)
      .post(AppRoutes.NOTE)
      .set("authorization", `Bearer ${token}`)
      .send({
        note: "Testing",
      });
    const id = res0.body.data._id;

    const res1 = await request(app)
      .delete(AppRoutes.NOTE + `/${id}`)
      .set("authorization", `Bearer ${token}`);

    expect(res1.statusCode).toBe(
      SuccessMessages.NOTE.DELETE_SUCCESS.statusCode
    );
    expect(res1.body.message).toBe(
      SuccessMessages.NOTE.DELETE_SUCCESS.responseMessage
    );
    expect(res1.body.data).toBeDefined();
  });

  // update note test
  it("Should update the note", async () => {
    const res0 = await request(app)
      .post(AppRoutes.NOTE)
      .set("authorization", `Bearer ${token}`)
      .send({
        note: "Testing",
      });
    const id = res0.body.data._id;

    const res1 = await request(app)
      .put(AppRoutes.NOTE)
      .set("authorization", `Bearer ${token}`)
      .send({
        _id: id,
        note: "This is updated test note",
      });

    expect(res1.statusCode).toBe(
      SuccessMessages.NOTE.UPDATE_SUCCESS.statusCode
    );
    expect(res1.body.message).toBe(
      SuccessMessages.NOTE.UPDATE_SUCCESS.responseMessage
    );
    expect(res1.body.data).toBeDefined();
  });
});
