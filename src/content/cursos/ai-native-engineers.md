---
title: "From Vibe Coders to AI-Native Engineers"
subtitle: "Un programa avanzado de AI-Driven Development: del vibe coding a los sistemas autónomos"
slug: "ai-native-engineers"
description: "Del vibe coding a los sistemas autónomos: aprende AI-Driven Development y dirige agentes IA alargando el bucle hasta entregar Away-from-Keyboard. (143)"
category: "Programación"
level: "Básico"
duration: "video 8h - directo 24h"
instructor: "Alberto Basalo"
tags: ["Agents", "Skills", "Specs", "Context", "Quality", "Harness", "Loop"]
featured: true
order: 1
---

## De programar con IA a dirigir agentes que programan

Cualquiera puede generar toneladas de código a golpe de impulso (_vibe coding_). Lo difícil es **alargar el bucle**: pasar de aprobar cada línea a delegar features completas sin perder el control ni la calidad.

Este curso recorre ese camino de principio a fin, siguiendo un único hilo conductor —**el bucle se alarga y tu intervención se distancia en el tiempo**— a través de tres etapas: **Human-in-the-Loop**, **Human-on-the-Loop** y **Away-from-Keyboard**. Por el camino dominarás las nuevas primitivas del oficio: `prompts`, `context`, `specs`, `tests`, `hooks`, `agents`, `MCPs` y `loops`.

El secreto no es soltar el control, sino **adelantarlo**: cargar tu criterio en specs, tests y arneses _antes_ de irte, para que el agente entregue con la calidad que tú habrías exigido. Eso es **AI-Driven Development**.

---

## Objetivos del curso

Al finalizar el curso, el alumno será capaz de:

- Pasar del vibe coding a un flujo de trabajo con agentes ordenado y reproducible.
- Escribir especificaciones que funcionen como fuente de verdad del sistema.
- Blindar la calidad con testing automatizado y quality gates que verifican sin ti.
- Refactorizar y mantener código legacy con la red de seguridad de los tests.
- Construir su propio harness: hooks, custom-tools y MCPs a medida del proyecto.
- Orquestar varios agentes con contextos independientes para escalar tareas complejas.
- Diseñar loops autónomos con criterio de parada y rastro auditable.
- **Mantener la calidad mientras delega cada vez más, alejándose del teclado.**

## A quién va dirigido

Este curso está orientado a **desarrolladores profesionales** que:

- Ya usan IA de forma informal y quieren convertir ese caos en método.
- Necesitan aumentar la productividad sin sacrificar calidad ni control.
- Quieren entender *cómo* y *cuándo* delegar en agentes, no solo *qué* teclas tocar.
- Aspiran a diseñar sistemas autónomos fiables, no a producir demos.

> Se asume experiencia previa en desarrollo de software.
> Los ejemplos y materiales se escribirán en inglés.

---

## Temario

### I - Human in the Loop

#### 1 · Vibe Coding to AI-DD
- **1.1 From Coding to Vibe Coding** — del flujo determinista a colaborar con agentes.
- **1.2 The AI-DD Primitives** — prompts, rules y skills: los bloques base.
- **1.3 From Vibe to Structure** — dónde se rompe el vibe y por qué gradúas.

```text
Demo: bootstrap de la app + primera feature end-to-end
```

#### 2 · Context Engineering
- **2.1 The Context Window** — qué entra, qué sobra, qué cuesta tokens.
- **2.2 Context Selection** — priorizar lo relevante en bases grandes.
- **2.3 Dynamic AGENTS.md** — destilar el propio código joven en reglas vivas.

```text
Demo: crecimiento de la app con múltiples features y AGENTS.md dinámico
```

---

### II - Human on the Loop

#### 3 · Spec-Driven Development
- **3.1 Specs as Source of Truth** — EARS y criterios: el contrato único.
- **3.2 From Spec to Code** — generar la implementación desde la spec.
- **3.3 Spec Validation Loops** — detectar desviaciones spec ↔ código.

```text
Demo: feature compleja generada íntegramente desde specs
```

#### 4 · Trust but Verify
- **4.1 From Criteria to Tests** — cuando el criterio se vuelve prueba (TDD con agentes).
- **4.2 Regression & CI Gates** — proteger lo que ya funciona; cerrojos automáticos.
- **4.3 E2E Behavior Validation** — validar comportamiento de punta a punta.

```text
Demo: generación de suites de tests y quality gates automatizados
```

#### 5 · Legacy Refactoring
- **5.1 Reading the Legacy** — radiografiar lo ya crecido y extraer su lógica.
- **5.2 Change Triage** — clasificar: defecto / cambio de spec / refactor.
- **5.3 Structural Refactoring** — cambiar las tripas sin tocar comportamiento, tests como red.

```text
Demo: refactor profundo con red de seguridad basada en tests
```

---

### III - Away from Keyboard

#### 6 · Harness Engineering
- **6.1 Hooks & Control Points** — acciones deterministas en el ciclo; aquí vive el hook del changelog.
- **6.2 Custom-Tools** — un script (bash o lo que sea) que el agente invoca: determinismo y ahorro de tokens.
- **6.3 MCP Integration** — conectar el agente al entorno real del proyecto; puente a los subagentes del 7.

```text
Demo: hooks + custom-tools + MCP
```

#### 7 · Agent Orchestration
- **7.1 The Session Window Problem** — por qué repartir antes de ahogar el contexto.
- **7.2 Sequential vs Parallel** — modelos de coordinación y reparto.
- **7.3 Context Isolation** — evitar contaminación de contexto entre agentes.

```text
Demo: pipeline multiagente para implementación distribuida
```

#### 8 · Loop Engineering
- **8.1 From Pipelines to Loops** — del workflow estático al bucle que itera solo.
- **8.2 Stop Conditions & Convergence** — cuándo ha terminado bien: criterio, límites, presupuesto.
- **8.3 Observability & AfK** — el rastro que hace fiable lo que ya no ves en vivo: supervisar por objetivo y auditar después.

```text
Demo: loop autónomo end-to-end: recibe un ticket, pica, testea, se corrige y entrega, dejando rastro auditable
```

---

Curso avanzado de desarrollo con IA para programadores profesionales que quieren evolucionar hacia un modelo AI-native de construcción de software. 

El programa sigue un único hilo conductor —alargar el bucle de desarrollo y distanciar la intervención humana en el tiempo— estructurado en tres etapas: Human-in-the-Loop, Human-on-the-Loop y Away-from-Keyboard. 

A lo largo del camino dominarás prompt y context engineering, spec-driven development, testing automatizado y quality gates, refactoring de legacy, harness engineering (hooks, custom-tools y MCP), orquestación multi-agente y loops autónomos. 

El objetivo es transformar cómo diseñas y construyes software: pasar de usar la IA como asistente a integrarla como núcleo del proceso de ingeniería.