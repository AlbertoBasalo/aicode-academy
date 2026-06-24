# Curso: Programación con agentes IA — v3

> **Formato:** 24 horas · 3 etapas · 8 módulos · 3 lecciones/módulo · intensivo práctico
> **Estado:** beta v3 · estructura cerrada · pendiente objetivos finos y copy de marketing

**Hilo conductor:** el bucle se alarga y el humano se aleja en el tiempo. Las tres etapas *son* ese deslizador: Human *in* the loop → Human *on* the loop → *Away from Keyboard*. Solo es posible porque adelantas tu criterio a specs, tests, hooks y registro *antes* de irte.

**Tres capas de naming (personalidad del curso):**
- *Filosofía* — el título de cada etapa: in / on / away.
- *Disciplina* — un "-Engineering" troncal por etapa: Context / Harness / Loop.
- *Modelos mentales* — títulos que el comprador reconoce: Trust but Verify, Legacy Refactoring, Agent Orchestration.

**Demo:** una app que nace de cero y evoluciona hasta volverse legacy de sí misma. El dominio vive solo en la línea de demo, así que es intercambiable en sesión en vivo.

**Curva de la app:** nace (1) → crece (2) → gana chicha con specs (3) → se blinda con tests (4) → se refactoriza como legacy propio (5) → se equipa con arnés a medida (6) → escala con agentes (7) → se mantiene sola (8).

---

# I — Human in the Loop

## 1 · Vibe Coding to AI-DD
- **1.1 From Coding to Vibe Coding** — del flujo determinista a colaborar con agentes.
- **1.2 The AI-DD Primitives** — prompts, rules y skills: los bloques base.
- **1.3 From Vibe to Structure** — dónde se rompe el vibe y por qué gradúas.

```text
Demo: bootstrap de la app + primera feature end-to-end
```

## 2 · Context Engineering
- **2.1 The Context Window** — qué entra, qué sobra, qué cuesta tokens.
- **2.2 Context Selection** — priorizar lo relevante en bases grandes.
- **2.3 Dynamic AGENTS.md** — destilar el propio código joven en reglas vivas.

```text
Demo: crecimiento de la app con múltiples features y AGENTS.md dinámico
```

---

# II — Human on the Loop

## 3 · Spec-Driven Development
- **3.1 Specs as Source of Truth** — EARS y criterios: el contrato único.
- **3.2 From Spec to Code** — generar la implementación desde la spec.
- **3.3 Spec Validation Loops** — detectar desviaciones spec ↔ código.

```text
Demo: feature compleja generada íntegramente desde specs
```

## 4 · Trust but Verify
- **4.1 From Criteria to Tests** — cuando el criterio se vuelve prueba (TDD con agentes).
- **4.2 Regression & CI Gates** — proteger lo que ya funciona; cerrojos automáticos.
- **4.3 E2E Behavior Validation** — validar comportamiento de punta a punta.

```text
Demo: generación de suites de tests y quality gates automatizados
```

## 5 · Legacy Refactoring
- **5.1 Reading the Legacy** — radiografiar lo ya crecido y extraer su lógica.
- **5.2 Change Triage** — clasificar: defecto / cambio de spec / refactor.
- **5.3 Structural Refactoring** — cambiar las tripas sin tocar comportamiento, tests como red.

```text
Demo: refactor profundo con red de seguridad basada en tests
```

---

# III — Away from Keyboard

## 6 · Harness Engineering
- **6.1 Hooks & Control Points** — acciones deterministas en el ciclo; aquí vive el hook del changelog.
- **6.2 Custom-Tools** — un script (bash o lo que sea) que el agente invoca: determinismo y ahorro de tokens.
- **6.3 MCP Integration** — conectar el agente al entorno real del proyecto; puente a los subagentes del 7.

```text
Demo: hooks + custom-tools + MCP
```

## 7 · Agent Orchestration
- **7.1 The Session Window Problem** — por qué repartir antes de ahogar el contexto.
- **7.2 Sequential vs Parallel** — modelos de coordinación y reparto.
- **7.3 Context Isolation** — evitar contaminación de contexto entre agentes.

```text
Demo: pipeline multiagente para implementación distribuida
```

## 8 · Loop Engineering
- **8.1 From Pipelines to Loops** — del workflow estático al bucle que itera solo.
- **8.2 Stop Conditions & Convergence** — cuándo ha terminado bien: criterio, límites, presupuesto.
- **8.3 Observability & AfK** — el rastro que hace fiable lo que ya no ves en vivo: supervisar por objetivo y auditar después.

```text
Demo: loop autónomo end-to-end: recibe un ticket, pica, testea, se corrige y entrega, dejando rastro auditable
```

---

## Notas de diseño

- **Determinismo y tokens (M6):** la columna del módulo es sacar trabajo del modelo (estocástico, caro) al código (determinista, barato). Custom-tools es el corazón; MCP el puente al Acto III.
- **Observability (M8):** vive donde de verdad hace falta —cuando ya no miras en vivo—. En el M6 el tracing es solo depuración, una mención.
- **Legacy tardío:** la app no toca legacy "de fuera"; se vuelve legacy de sí misma en el M5, tras 4 módulos creciendo. El M2 solo hace higiene de contexto sobre código joven.
- **Nombres de skill Craftsman** (`/modify`, `/review`, `/release`) fuera de los títulos: rellenables en vivo cuando el catálogo asiente.
- **Nomenclatura:** Etapa > Módulo > Lección. (Cambiable a "Bloque" si se prefiere tono neutro.)
- **Tesis de portada (candidata):** cuanto más largo el bucle, más temprano tienes que cargar tu criterio en artefactos.
- **Pendiente:** objetivos por módulo, viñetas de contenido por lección, copy de marketing.