require("dotenv").config();
const request = require("supertest");
const { noteModel, userModel } = require("../models");
const { connectDB, disconnectDB } = require("../database/dbConfig");
const app = require("../app");
const AppRoutes = require("../constants/AppRoutes");
const { SuccessMessages } = require("../constants/SuccessMessages");

describe("User API testing", () => {
  beforeAll(async () => {
    await connectDB(process.env.TEST_MONGO_URI);
    
  });

  afterEach(async () => {
    await userModel.deleteMany();
  });

  afterAll(async () => {
    await disconnectDB();
  });

  //   fetch all users test
  it("Should fetch all users", async () => {
    const res1 = await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_REGISTER)
      .send({
        name: "Test Name 1",
        username: "Test username 1",
        password: "123456",
      });
    const res2 = await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_REGISTER)
      .send({
        name: "Test Name 2",
        username: "Test username 2",
        password: "123456",
      });
    const loginRes = await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_LOGIN)
      .send({
        username: "Test username 1",
        password: "123456",
      });
    let token = loginRes.body.data.token;

    const res = await request(app)
      .get(AppRoutes.USER)
      .set("authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(
      SuccessMessages.USER.FETCH_ALL_SUCCESS.statusCode
    );
    expect(res.body.message).toBe(
      SuccessMessages.USER.FETCH_ALL_SUCCESS.responseMessage
    );
    expect(res.body.data.length).toBe(2);
  });

  // fetch single user test
  it("Should fetch single user", async () => {
    await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_REGISTER)
      .send({
        name: "Testing Name",
        username: "Testing username single",
        password: "123456",
      });
    const loginRes = await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_LOGIN)
      .send({
        username: "Testing username single",
        password: "123456",
      });
    const id = loginRes.body.data.id;
    let token = loginRes.body.data.token;

    const res = await request(app)
      .get(AppRoutes.USER + `/${id}`)
      .set("authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(SuccessMessages.USER.FETCH_SUCCESS.statusCode);
    expect(res.body.message).toBe(
      SuccessMessages.USER.FETCH_SUCCESS.responseMessage
    );
    expect(res.body.success).toBe(true);
  });

  // update user test
  it("Should update user", async () => {
    await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_REGISTER)
      .send({
        name: "Testing Name",
        username: "Testing username update",
        password: "123456",
      });
    const loginRes = await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_LOGIN)
      .send({
        username: "Testing username update",
        password: "123456",
      });
    const id = loginRes.body.data.id;
    let token = loginRes.body.data.token;

    const updateRes = await request(app)
      .put(AppRoutes.USER)
      .set("authorization", `Bearer ${token}`)
      .send({
        _id: id,
        username: "Test username updated",
        name: "Test Name Update",
      });

    expect(updateRes.statusCode).toBe(
      SuccessMessages.USER.UPDATE_SUCCESS.statusCode
    );
    expect(updateRes.body.message).toBe(
      SuccessMessages.USER.UPDATE_SUCCESS.responseMessage
    );
    expect(updateRes.body.success).toBe(true);
  });

  // user delete test
  it("Should delete the user", async () => {
    await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_REGISTER)
      .send({
        name: "Testing Name",
        username: "Testing username delete",
        password: "123456",
      });
    const loginRes = await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_LOGIN)
      .send({
        username: "Testing username delete",
        password: "123456",
      });
    const id = loginRes.body.data.id;
    let token = loginRes.body.data.token;

    const deleteRes = await request(app)
      .delete(AppRoutes.USER + `/${id}`)
      .set("authorization", `Bearer ${token}`);

    expect(deleteRes.statusCode).toBe(
      SuccessMessages.USER.DELETE_SUCCESS.statusCode
    );
    expect(deleteRes.body.message).toBe(
      SuccessMessages.USER.DELETE_SUCCESS.responseMessage
    );
    expect(deleteRes.body.success).toBe(true);
  });
});
