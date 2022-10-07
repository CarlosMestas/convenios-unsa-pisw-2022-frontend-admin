// aquí se importan todos los effect, y este los exporta todos hacia el módulo principal

import { AdminEffect } from "./admin/admin.effects";
import { AuthEffect } from "./auth/auth.effects";
import { RoleEffect } from "./role/role.effects";

// para que funcione dentro del entorno de la aplicación
export const effectsOF = [
  AuthEffect,
  AdminEffect,
  RoleEffect
]
