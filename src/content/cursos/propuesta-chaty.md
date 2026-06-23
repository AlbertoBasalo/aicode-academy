# Curso: AI-Driven Development

Arquitectura, sistemas y automatización del desarrollo con IA

## 1. Vibe Coding & AI-DD Foundations

Fundamentos del desarrollo con agentes: interacción, control y primitivas del AI-driven development.

### 1.1 From Coding to Vibe Engineering

Evolución del desarrollo tradicional hacia la colaboración directa con agentes.

### 1.2 Human-in-the-Loop Foundations

Modelos de trabajo en ciclos cortos con feedback continuo del desarrollador.

### 1.3 AI-DD Primitives (Prompts, Rules, Skills)

Bloques fundamentales que definen el comportamiento de cualquier sistema basado en agentes.

```text
Demo: bootstrap de una aplicación funcional + configuración inicial de rules y skills del proyecto
```

## 2. Prompt & Context Engineering for Real Systems

Diseño de prompts y contexto como arquitectura central para construir sistemas fiables con agentes.

### 2.1 Prompting as System Design

Los prompts como contratos de comportamiento en sistemas de software.

### 2.2 Context Architecture

Diseño de contexto para precisión, consistencia y escalabilidad.

### 2.3 Context in Legacy Systems

Extracción de conocimiento estructurado desde sistemas existentes.

```text
Demo: análisis de proyecto legacy + prompts estructurados para refactor guiado
```

## 3. Spec-Driven Development & Quality Engineering

Uso de especificaciones y testing como fuente de verdad para guiar implementación y validación.

### 3.1 Specs as Executable Truth

La especificación como contrato único del sistema.

### 3.2 Spec-to-Code Workflow

Transformación de specs en implementación verificable.

### 3.3 Testing & E2E as Guardrails

Validación continua como mecanismo de control de calidad.

```text
Demo: refactor completo guiado por specs con validación E2E automatizada
```

## 4. Tools & Harness Engineering

Construcción de herramientas, hooks y extensiones para integrar agentes en entornos reales de desarrollo.

### 4.1 Developer Tooling for AI Systems

Diseño de herramientas internas para equipos de desarrollo.

### 4.2 Hooks, MCP & Extensibility

Integración con herramientas externas y sistemas de ejecución.

### 4.3 Observability & Debugging

Trazabilidad del comportamiento de agentes en entornos reales.

```text
Demo: creación de herramienta interna para refactor automático y validación de código
```

## 5. Legacy Systems & AI-Driven Refactoring

Comprensión, mantenimiento y evolución de sistemas legacy con soporte de agentes.

### 5.1 Understanding Legacy Codebases

Modelado de sistemas existentes como conocimiento estructurado.

### 5.2 AI-Assisted Refactoring Strategies

Estrategias de refactor seguro asistido por agentes.

### 5.3 Risk, Safety & Regression Control

Control de impacto mediante testing y validación continua.

```text
Demo: refactor progresivo de sistema legacy con cobertura de tests y control de regresión
```

## 6. Meta Engineering for Agent Systems

Diseño del comportamiento interno de los agentes mediante meta-prompting, skills, memoria y observabilidad.

### 6.1 Meta-Prompting & Self-Instruction

Construcción de prompts que generan comportamientos, reglas y otros prompts.

### 6.2 Skills, Memory & Behavioral Artifacts

Diseño de skills reutilizables y memoria persistente entre ejecuciones.

### 6.3 Observability of Agent Execution

Inspección, trazabilidad y análisis del comportamiento interno de los agentes.

```text
Demo: evolución del sistema con skills + memoria + logging de decisiones para refactor progresivo de una feature legacy
```

## 7. Agent Orchestration & Context Distribution

Escalado mediante múltiples agentes con contextos aislados y coordinación estructurada.

### 7.1 The Context Window Limitation

Limitaciones de contexto en tareas complejas.

### 7.2 Sequential & Parallel Agent Design

Modelos de coordinación y distribución de trabajo.

### 7.3 Context Isolation Patterns

Estrategias para evitar contaminación entre agentes.

```text
Demo: pipeline multiagente (análisis → refactor → tests → validación)
```

## 8. Loop Engineering & AfK Systems

Sistemas autónomos basados en iteración continua, criterios de parada y mínima intervención humana.

### 8.1 From Workflows to Loops

Transición de pipelines deterministas a sistemas iterativos.

### 8.2 Stop Conditions & Convergence

Definición de criterios de finalización y calidad.

### 8.3 Human-in-the-Loop to AfK Transition

Diseño de sistemas que reducen progresivamente intervención humana.

```text
Demo: loop autónomo de refactor + tests + auto-corrección hasta alcanzar calidad objetivo E2E
```