import axiosInstance from "./axiosInstance";

var MockAdapter = require("axios-mock-adapter");

var mock = new MockAdapter(axiosInstance)

mock.onGet("/product").reply(200, {
  products: [{ id:1, name: "John Smith"}],
});
