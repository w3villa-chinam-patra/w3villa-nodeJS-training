require("dotenv").config();
const request = require("supertest");
const { connectDB, disconnectDB } = require("../database/dbConfig");
const { userModel } = require("../models");
const AppRoutes = require("../constants/AppRoutes");
const app = require("../app");
const { SuccessMessages } = require("../constants/SuccessMessages");

describe("Auth API Unit Testing", () => {
  beforeAll(async () => {
    await connectDB(process.env.TEST_MONGO_URI);
    await userModel.deleteMany();
  });

  afterEach(async () => {
    await userModel.deleteMany();
  });

  afterAll(async () => {
    await disconnectDB();
  });

  it("It should register the user", async () => {
    const res = await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_REGISTER)
      .send({
        name: "Testing Name",
        username: "Testing username",
        password: "123456",
      });
    expect(res.statusCode).toBe(
      SuccessMessages.USER.REGISTER_SUCCESS.statusCode
    );
    expect(res.body).toEqual({
      message: SuccessMessages.USER.REGISTER_SUCCESS.responseMessage,
      success: true,
      data: [],
    });
  });

  it("It should login the user", async () => {
    // first register the test user
    await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_REGISTER)
      .send({
        name: "Testing Name",
        username: "Testing username",
        password: "123456",
      });

    // then login the user
    const res = await request(app)
      .post(AppRoutes.AUTH + AppRoutes.AUTH_LOGIN)
      .send({
        username: "Testing username",
        password: "123456",
      });

    expect(res.statusCode).toBe(SuccessMessages.AUTH.LOGIN_SUCCESS.statusCode);
    expect(res.body.message).toBe(
      SuccessMessages.AUTH.LOGIN_SUCCESS.responseMessage
    );
    expect(res.body.success).toBe(true);
    expect(res.body.data.token).toBeDefined();
  });
});
