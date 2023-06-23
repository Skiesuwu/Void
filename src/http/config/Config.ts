import express, { Application } from "express";
import cors from "cors";

export default function Config(app: Application): void {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
}
