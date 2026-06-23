# Curso: Programación con agentes IA

> **Formato:** 24 horas · 8 módulos · 3 lecciones/módulo · intensivo práctico
> **Estado:** beta (best-of-both) · pendiente objetivos finos y ángulos de marketing

**Hilo conductor:** el bucle se alarga y el humano se aleja en el tiempo —de aprobar cada prompt (módulo 1) → revisar contra artefactos (módulo 5) → levantarse de la silla (módulo 8)— y eso solo es posible porque adelantas tu criterio a specs, tests, hooks y registro *antes* de irte.

**Deslizador HitL → AfK:** Human *in* the loop (1.2) → Human *on* the loop (5.3, dejas de leer cada línea y revisas contra la spec) → Human *out* / AfK (8.3).

**Demo:** una app que crece feature a feature al ritmo de la técnica. El dominio vive solo en la línea de demo, así que es intercambiable en sesión en vivo.

---

## 1. Vibe Coding
Aprende a colaborar con agentes de IA para transformar ideas en software funcional con alta velocidad de entrega y baja fricción.

### 1.1 From Coding to Vibe Coding
Cambio de paradigma: del desarrollo determinista a la colaboración con agentes.

### 1.2 Human-in-the-Loop (HitL) Basics
Cómo el desarrollador guía cada iteración en ciclos cortos de feedback. *(inicio del deslizador)*

### 1.3 Agent-First Mindset
Pensar tareas como objetivos para sistemas generativos —y ver dónde el vibe se rompe.

```text
Demo: bootstrap de una app base desde cero (setup + primera feature funcional)
```

## 2. AI-DD Primitives
Domina los bloques fundamentales del AI-Driven Development: prompts, rules y skills como unidades base del trabajo con agentes.

### 2.1 Prompts as Execution Contracts
Los prompts como especificaciones operativas de comportamiento.

### 2.2 Rules as System Constraints
Definición de reglas como mecanismo de control y consistencia.

### 2.3 Skills as Reusable Capabilities
Encapsulación de comportamiento experto reutilizable en distintos contextos.

```text
Demo: refactor del flujo base introduciendo rules + skills para estandarizar comportamiento del agente
```

## 3. Prompt Engineering
Aprende a diseñar prompts robustos que controlan generación, transformación y análisis de software con precisión.

### 3.1 Prompt Structure and Intent
Cómo estructurar intención, contexto y salida esperada.

### 3.2 Controlling Output Quality
Estrategias para reducir ambigüedad y aumentar fiabilidad.

### 3.3 Prompt Patterns for Development
Patrones reutilizables para refactoring, debugging y generación de tests.

```text
Demo: implementación guiada de feature + generación de tests unitarios con prompts estructurados
```

## 4. Context Engineering
Domar el legacy: diseña, selecciona y optimiza contexto para mejorar la precisión en proyectos reales, incluidos sistemas heredados.

### 4.1 The Context Window Problem
Limitaciones estructurales de memoria en agentes y su impacto.

### 4.2 Context Selection Strategies
Cómo priorizar información relevante en bases de código complejas.

### 4.3 Context Extraction from Legacy Code
Cómo convertir sistemas existentes en conocimiento operativo (AGENTS.md).

```text
Demo: análisis de proyecto legacy para extraer reglas de negocio y restricciones técnicas
```

## 5. Spec-Driven Development
Convierte requisitos ambiguos en especificaciones ejecutables que actúan como fuente de verdad del sistema.

### 5.1 Specs as Source of Truth
La especificación como contrato único del sistema.

### 5.2 From Spec to Implementation
Traducción de specs a código y tests: cuando el criterio de aceptación se vuelve prueba.

### 5.3 Spec Validation & Change Triage
Detectar desviaciones y clasificar el cambio: defecto / requisito / refactor. *(pivote: human on the loop)*

```text
Demo: refactoring dirigido por specs con validación E2E de comportamiento
```

## 6. Harness Engineering
Diseña el entorno operativo de agentes mediante hooks, herramientas, MCP y sistemas de control y observación.

### 6.1 Execution Hooks and Control Points
Puntos de intervención en el flujo del agente —incluido el hook que estampa el changelog (control de lo hecho).

### 6.2 Tooling and MCP Integration
Extensión del agente mediante herramientas externas y conectores.

### 6.3 Observability and Debugging
Visibilidad del comportamiento del sistema en tiempo real: lo que te deja supervisar de lejos.

```text
Demo: setup de harness con hooks (+ changelog automático) + integración de tools + tracing de ejecución
```

## 7. Agent Orchestration
Optimiza la ejecución distribuyendo trabajo entre agentes con contextos independientes para escalar complejidad.

### 7.1 The Session Window Problem
Limitaciones de contexto en tareas complejas.

### 7.2 Sequential vs Parallel Agents
Modelos de coordinación y reparto de trabajo (Architect → Builder → Craftsman).

### 7.3 Context Isolation Strategies
Cómo evitar contaminación de contexto entre agentes.

```text
Demo: pipeline multiagente para refactor + testing + validación de módulo legacy
```

## 8. Loop Engineering
Diseña sistemas iterativos donde los agentes ejecutan ciclos autónomos de mejora con criterios de parada definidos.

### 8.1 From Pipelines to Loops
Transición de workflows estáticos a sistemas iterativos.

### 8.2 Stop Conditions and Convergence
Cómo definir cuándo un sistema ha "terminado correctamente".

### 8.3 Human-in-the-Loop to AfK Systems
De supervisión continua a ejecución autónoma supervisada por objetivos: el loop reabre, mantiene y deja rastro. *(AfK)*

```text
Demo: loop autónomo de refactoring + testing + auto-corrección hasta pasar E2E tests, dejando registro
```

