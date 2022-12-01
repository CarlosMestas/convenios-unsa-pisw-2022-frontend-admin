import { ConvocationCoevanEffect } from './convocation/convocation-coevan.effect';
// aquí se importan todos los effect, y este los exporta todos hacia el módulo principal

import { AdminEffect } from "./admin/admin.effects";
import { AuthEffect } from "./auth/auth.effects";
import { RequirementEffect } from "./convocation/requirement.effect";
import { RoleEffect } from "./role/role.effects";
import { UniversityEffect } from './convocation/universities.effect';
import { AcademicNetworkEffect } from './convocation/academic-network.effect';

// para que funcione dentro del entorno de la aplicación
export const effectsOF = [
  AuthEffect,
  AdminEffect,
  RoleEffect,
  RequirementEffect,
  ConvocationCoevanEffect,
  UniversityEffect,
  AcademicNetworkEffect
]
