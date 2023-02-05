import { Router } from "express";
import createContactController from "../controllers/contact/createContact.controller";
import listContactsController from "../controllers/contact/listContacts.controller";
import retrieveContactController from "../controllers/contact/retrieveContact.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import updateContactController from "../controllers/contact/updateContact.controller";
import deleteContactController from "../controllers/contact/deleteContact.controller";
import ensureOwnerContact from "../middlewares/ensureOwnerContact.middleware";

const contactRoutes = Router();

contactRoutes.post("", ensureAuthMiddleware, createContactController);
contactRoutes.get("", ensureAuthMiddleware, listContactsController);
contactRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureOwnerContact,
  retrieveContactController
);
contactRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureOwnerContact,
  updateContactController
);
contactRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureOwnerContact,
  deleteContactController
);

export default contactRoutes;
