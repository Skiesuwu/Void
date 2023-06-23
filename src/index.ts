import express from "express";
import Server from "./http/Server";
const app = express();

(() => new Server(app).init())();
