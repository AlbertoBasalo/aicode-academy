---
title: "Ingeniería Inteligente"
subtitle: "Build the system that builds the product: del humano en el bucle a los sistemas autónomos"
slug: "ingenieria_inteligente"
description: "No construyas el producto: construye el sistema que lo construye. Dirige agentes, grafos y loops autónomos que desarrollan software con tu calidad mientras tú te alejas del teclado"
category: "Programación"
level: "Avanzado"
duration: "video 8h - directo 24h"
instructor: "Alberto Basalo"
tags: ["Agents", "Skills", "Specs", "Context", "Harness", "Orchestration", "Loops", "Graphs"]
featured: true
order: 1
---

## ¿Y si tu proyecto pudiera avanzar sin ti?

Ya sabes programar con IA. Dominas los `prompts`, las `skills`, los `commands`... y sin embargo sigues ahí: aprobando cada paso, revisando cada _diff_, atado al teclado. El cuello de botella ya no es la herramienta, eres tú dentro del bucle.

Este curso va de retirarte del bucle sin soltar el control, en tres etapas: **Human-In-The-Loop**, **Human-On-The-Loop** y **Away-From-Keyboard**. En cada una construyes menos producto y más sistema: _specs_ que verifican, arneses que vigilan, agentes que aprenden, grafos y loops que trabajan mientras tú no estás.

El secreto está en **adelantar el control**: cargar tu conocimiento en specs, tests y arneses _antes_ de irte, para que el agente entregue con la calidad que tú habrías exigido. **No construyas el producto: construye el sistema que lo construye.** Eso es **AI-Driven Development**.

---

## AI tooling y development stacks

Este curso está pensado para ser impartido y usado con cualquier herramienta de desarrollo con IA integrada. En concreto se ha probado con los IDEs `Antigravity`, `Cursor` y `VSCode` y con los arneses `ClaudeCode`, `Codex` y `Copilot`.

Las demos y prácticas pueden adaptarse y desarrollarse para cualquier stack sobre los siguientes lenguajes : `C#`, `Java`, `JavaScript`, `TypeScript`.

---

## Objetivos del curso

Al finalizar la formación, el alumno será capaz de:

- Retirarse del bucle por etapas, sin perder el control ni la calidad.
- Adelantar el control: specs, tests y quality gates que verifican sin ti.
- Domar código _legacy_ con agentes y la red de seguridad de los tests.
- Construir el _harness_ del proyecto: hooks, custom-tools, MCPs y límites de autonomía.
- Crear agentes de dominio que aprenden de cada tarea.
- Orquestar agentes y componer grafos de trabajo determinista y agéntico.
- **Construir el sistema que construye el producto, cada vez más lejos del teclado.**

## A quién va dirigido

Este curso está orientado a **desarrolladores senior** que:

- Ya usan IA a diario y dominan las primitivas básicas: prompts, rules y specs.
- Necesitan aumentar la productividad sin sacrificar calidad ni control.
- Quieren entender *cómo* y *cuándo* delegar en agentes, no solo *qué* teclas tocar.
- Aspiran a diseñar **sistemas autónomos fiables para desarrollar código real** en producción.

Dirigir agentes con criterio será la habilidad que distinga a los ingenieros más valiosos en los próximos años; este curso te posiciona en ese nuevo rol.

> Se asume experiencia previa en desarrollo de software y en programación con IA.
> Si necesitas asentar las bases, empieza por [Programación Inteligente](https://aicode.academy/cursos/programacion_inteligente).
> Los ejemplos y materiales se escribirán en inglés.

---

# Temario

## I - Human In The Loop

> Aumenta tu productividad sin sacrificar calidad.

### 1 - AI-DD in a Nutshell
Repaso acelerado de AI-Driven Development, las nuevas primitivas de programación con IA.
- **1.1 From Vibe Coding to AI-DD** — rules, skills y specs: las primitivas básicas de IA-Driven Development.
- **1.2 Context Engineering** — la ventana de contexto, selección de lo relevante y documentación dinámica.
- **1.3 Agentic Prompt Engineering** — prompts que generan horas de trabajo, no solo respuestas.

---

## II - Human On The Loop

> Mantén tu IA controlada en todo momento.

### 2 - Spec & Verify
De la especificación al código verificado: un solo flujo supervisado.
- **2.1 Specs as Source of Truth** — problema, solución y verificación en un contrato único.
- **2.2 From Spec to Verified Code** — planificar, generar y validar el comportamiento E2E.
- **2.3 Fixing & Review Loops** — del fallo a la corrección; revisión y documentación como cierre.

### 3 - Legacy Refactoring
Comprensión, mantenimiento y evolución de sistemas legacy.
- **3.1 Exploring the Legacy** — recorrer el árbol para extraer conocimiento.
- **3.2 Change/Amend Triage** — controlar y facilitar el cambio funcional.
- **3.3 Structural Refactoring** — planificar y documentar cambios profundos.

### 4 - Harness Engineering
Conectar los agentes al entorno industrial del proyecto con puntos de control deterministas.
- **4.1 Hooks & Control Points** — acciones deterministas en el ciclo agente-modelo.
- **4.2 Custom Tools & MCP Integration** — scripts y herramientas deterministas generados por IA.
- **4.3 Sandboxing & Permissions** — límites de autonomía: qué puede tocar el agente y qué no.

---

## III - Away From Keyboard

> No construyas el producto: construye el sistema que construye el producto.

### 5 - Custom Agents
Agentes especializados que conocen tu dominio y aprenden de cada tarea.
- **5.1 Subagents & Roles** — roles, herramientas y configuración de agentes secundarios.
- **5.2 Domain-Specific Agents** — agentes a medida para tus problemas y tu negocio.
- **5.3 Learning Agents** — actuar, aprender, reutilizar: skills que se actualizan con la experiencia.

### 6 - Agent Orchestration
Orquestación de agentes con contextos independientes para escalar tareas complejas.
- **6.1 The Session Window Problem** — por qué repartir antes de agotar el contexto de la sesión.
- **6.2 Sequential vs Parallel** — modelos de coordinación y reparto de trabajos complejos.
- **6.3 Context Sharing** — enjambres de agentes con un objetivo común.

### 7 - Agent Graphs
Del pipeline lineal al grafo: componer pasos deterministas con pasos agénticos.
- **7.1 From Pipelines to Graphs** — ramas, decisiones y puntos de retorno en el flujo de trabajo.
- **7.2 Agentic Developer Workflows** — código determinista que invoca agentes para automatización compleja.
- **7.3 Checkpoints & Observability** — estado persistente, rastro auditable y reanudación tras fallo.

### 8 - Loop Engineering
Loops autónomos con criterio de parada, métricas y confianza ganada.
- **8.1 Autonomous Loops** — el bucle que se corrige y avanza solo, con control determinista de cada vuelta.
- **8.2 Stop Conditions & Metrics** — triage y métricas agénticas para saber cuándo parar y cuánto mejoras.
- **8.3 Away From Keyboard** — spec-chaining: confiar más en la IA requiere comprobar más.

---

## Summary

Curso avanzado de desarrollo con IA para programadores profesionales que quieren evolucionar hacia un modelo _AI-native_ de construcción de software. 

El programa sigue un único hilo conductor —alargar el bucle de desarrollo y distanciar la intervención humana en el tiempo— estructurado en tres etapas: **Human-In-The-Loop**, **Human-On-The-Loop** y **Away-From-Keyboard**. 

A lo largo del camino repasarás las primitivas de AI-DD y dominarás _spec-driven development_ con quality gates, _refactoring_ de código legacy, _harness engineering_ (hooks, custom-tools, MCP y sandboxing), agentes de dominio que aprenden, orquestación multi-agente, grafos de trabajo determinista + agéntico, _observability_ y loops autónomos con métricas.

El objetivo es un cambio de rol: dejar de escribir el software para dirigir el sistema que lo escribe, con métricas que demuestran que delegas más sin perder calidad. **No construyas el producto: construye el sistema que lo construye.**

 > _**Build the builder!**_