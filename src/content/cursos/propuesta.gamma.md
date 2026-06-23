# Curso: Programación con agentes IA — v2 

## 1. From Vibe to AI-DD Primitives
Aprende a colaborar con agentes para pasar de la intuición a las piezas reutilizables del AI-Driven Development.

### 1.1 From Coding to Vibe Coding
Del desarrollo determinista a la colaboración con agentes: mindset agent-first y HitL. *(inicio del deslizador)*

### 1.2 Prompts, Rules & Skills
Los tres bloques base del AI-DD y cuándo usar cada uno.

### 1.3 From Vibe to Structure
Dónde se rompe el vibe y por qué gradúas de la intuición a piezas reutilizables.

```text
Demo: bootstrap de una app base (setup + primera feature) y reescritura del flujo con rules + skills para estandarizar
```

## 2. Communicating Intent: Prompt + Context
Comunica intención al agente con precisión: el mensaje (prompt) y la información que lo rodea (context), incluido el código heredado.

### 2.1 Prompt Structure & Output Control
Estructurar intención, contexto y salida; reducir ambigüedad y aumentar fiabilidad.

### 2.2 The Context Window
Qué entra, qué sobra y cómo priorizar información en bases de código complejas.

### 2.3 Context from Legacy Code
Convertir sistemas existentes en conocimiento operativo (AGENTS.md).

```text
Demo: añadir una feature interactiva prompt a prompt + radiografiar legacy para extraer reglas a un AGENTS.md
```

## 3. Spec-Driven Development
Convierte requisitos ambiguos en especificaciones ejecutables que actúan como fuente de verdad del sistema.

### 3.1 Specs as Source of Truth
EARS y criterios de aceptación: la especificación como contrato único.

### 3.2 From Spec to Implementation
Traducción de specs a código.

### 3.3 Spec Validation Loops
Detectar desviaciones entre implementación y especificación. *(pivote: revisas contra artefactos, no líneas)*

```text
Demo: escribir la spec de una feature compleja y, desde ella, generar y validar el código
```

## 4. Code Craftsmanship
*(nuevo — mantenimiento + refactoring)* Mantén y mejora código existente con criterio: clasifica cambios, revisa calidad y seguridad, y refactoriza sin romper.

### 4.1 Change Triage
Clasificar antes de tocar: defecto / cambio menor sobre la spec / refactor. La spec es el árbitro del comportamiento.

### 4.2 Quality & Security Reviews
Revisión de clean-code y seguridad (injection, secretos, permisos) como gate, no como buenas intenciones.

### 4.3 Structural Refactoring
Cambiar la estructura sin tocar funcionalidad, con los tests como red. *Make the change easy, then make the easy change.*

```text
Demo: tomar una feature liberada, clasificar un cambio y refactorizar su estructura con los E2E como red
```

## 5. Testing with Agents
Convierte criterios de aceptación en pruebas y deja que el agente sostenga la calidad: del criterio al test, regresión y cobertura.

### 5.1 From Acceptance Criteria to Tests
Cuando el criterio de aceptación se vuelve prueba: TDD con agentes.

### 5.2 Regression & Coverage Gates
Proteger lo que ya funciona; la cobertura como gate, no como vanidad.

### 5.3 E2E & Behavior Validation
Validar comportamiento de punta a punta.

```text
Demo: generar la suite de tests de una feature desde su spec y dejarla como gate de CI
```

## 6. Harness Engineering
Diseña el entorno operativo del agente —hooks, herramientas (MCP), observabilidad— y fórjate las tuyas a medida del proyecto.

### 6.1 Execution Hooks & Control Points
Puntos de intervención en el flujo del agente, incluido el hook que estampa el changelog (control de lo hecho).

### 6.2 Tooling & Custom Capabilities
Integrar MCP y tools externas, y construir las tuyas: skills, slash commands y servidores MCP ad-hoc para el proyecto.

### 6.3 Observability & Debugging
Visibilidad del comportamiento en tiempo real: lo que te deja supervisar de lejos.

```text
Demo: montar el harness del proyecto con hooks (+ changelog automático), una skill/MCP propia y tracing de ejecución
```

## 7. Agent Orchestration
Distribuye trabajo entre agentes con contexto propio para escalar complejidad sin ahogar la sesión.

### 7.1 The Session Window Problem
Límites de contexto en tareas complejas: por qué repartir.

### 7.2 Sequential vs Parallel Agents
Modelos de coordinación y reparto de trabajo (Architect → Builder → Craftsman).

### 7.3 Context Isolation Strategies
Cómo evitar la contaminación de contexto entre agentes.

```text
Demo: pipeline multiagente que construye una feature multi-paso, paralelizando donde se pueda
```

## 8. Loop Engineering & AfK
Cierra el círculo: bucles autónomos con criterio de parada, que mantienen y dejan rastro mientras tú no miras.

### 8.1 From Pipelines to Loops
Transición de workflows estáticos a sistemas iterativos.

### 8.2 Stop Conditions & Convergence
Cuándo el sistema ha "terminado correctamente": condición de éxito, límites y presupuesto.

### 8.3 Human-in-the-Loop to AfK
Supervisión por objetivos: el loop reabre, mantiene y refactoriza solo —el módulo 4 puesto en bucle. *(AfK)*

```text
Demo: apuntar el loop al backlog y dejar que entregue y mantenga una feature de punta a punta, dejando registro
```

---

## Notas de diseño y decisiones abiertas

### Decisión 1 — Identidad del módulo 5 (el que dudas)
Ahora es **Testing with Agents** (produce tests desde el criterio). Línea limpia frente al M4: el **4 consume** tests como red de seguridad, el **5 los fabrica**.
- *Alternativa:* convertir el M5 en **Custom Capabilities / utilidades ad-hoc** (módulo propio) y reenhebrar el testing dentro del 3.2 (spec→código+tests) y el 4 (tests como red). Pierdes testing como bloque corporate visible, ganas el ángulo meta-desarrollo como protagonista.

### Decisión 2 — Dónde viven las utilidades ad-hoc
Ahora incrustadas en **6.2 (Tooling & Custom Capabilities)**. Movibles a M5 (ver Decisión 1) o a módulo propio si empujas testing fuera. Encaje natural: secuela de "usar el arnés" → "fabricarte el arnés".

### Solapamiento a vigilar (M4 ↔ M5)
La revisión de calidad (4.2) y el testing (M5) se rozan. Línea de clase: el **4 usa** tests para cambiar seguro; el **5 enseña** a producirlos desde el criterio.

### Reservorio avanzado aún sin slot propio (enhebrable)
Por gancho corporate: **evals** (medir si una skill/prompt mejoró), **security** (parcial en 4.2; ampliable a sandboxing/permisos), **cost & performance** (economía de tokens, routing de modelos, caching), **team/org workflows** (PR revisado por agentes, CI/CD, catálogo de skills compartido), **memory & retrieval** (RAG sobre el código, memoria persistente).

### Convenciones
- **Formato bilingüe:** título de lección en inglés (buzzword + SEO) + glosa de una línea en español.
- **Cluster corporate** sin módulos de relleno: *legacy* (extracción en M2.3, mantenimiento en M4), *testing* (M5), *refactor* (M4.3), *security* (M4.2).
- **Nombres de skill Craftsman** (`/modify`, `/review`, `/release`) fuera de los títulos: rellenables en vivo cuando el catálogo asiente.
- **Eje de decisión 6-7-8:** quién decide. El agente elige *tool* (6) → tú compones *el flujo* (7) → el agente decide *el flujo de control* (8).
- **Tesis de portada (candidata):** cuanto más largo el bucle, más temprano tienes que cargar tu criterio en artefactos.