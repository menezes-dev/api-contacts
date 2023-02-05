import express from "express";
import "reflect-metadata";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";
import contactRoutes from "./routes/contact.routes";

const app = express();
app.use(express.json());

app.use("/login", sessionRoutes);
app.use("/users", userRoutes);
app.use("/contacts", contactRoutes);

app.use(handleErrorMiddleware);

export default app;
