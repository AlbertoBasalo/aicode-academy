## 1. Vibe coding
Programar con IA por pura intuición: engancha y deja ver sus costuras.
> `App v0`: arrancar de cero y tener el primer listado funcionando en una tarde.
- **1.1** Del prompt al primer deploy
- **1.2** Generar una primera feature casi sin tocar código
- **1.3** Dónde se rompe el vibe: los límites del *Human in the Loop*

## 2. AI-DD primitives
Los bloques del desarrollo con IA y cuándo usar cada uno.
> Rehacer una misma feature con cada primitivo y comparar los tres caminos.
- **2.1** Prompts: la instrucción de un solo uso
- **2.2** Rules: el contexto que no quieres repetir
- **2.3** Skills: el procedimiento reutilizable

## 3. Prompt engineering
Comunicar la intención al modelo con precisión, turno a turno.
> Añadir una feature interactiva guiando al agente prompt a prompt.
- **3.1** Anatomía de un prompt que el agente no malinterpreta
- **3.2** Ejemplos, restricciones y formato de salida
- **3.3** Iterar una feature, prompt a prompt

## 4. Context engineering
Domar el legacy: controlar qué información ve el agente, cuándo y de dónde.
> Radiografiar el código ya existente y extraer las reglas del proyecto a un `AGENTS.md`.
- **4.1** La ventana de contexto: qué entra, qué sobra
- **4.2** Una skill para radiografiar código legacy
- **4.3** De código a reglas: extraer el AGENTS.md

## 5. Spec-Driven Development
Convertir la intención en la única fuente de verdad.
> Escribir la spec de una feature compleja y, desde ella, generar código, tests y clasificar cambios.
- **5.1** La spec como fuente de verdad: EARS y criterios
- **5.2** De la spec a código y tests: cuando el criterio de aceptación se vuelve prueba
- **5.3** La spec como oráculo: validar lo hecho y clasificar el cambio (defecto / requisito / refactor)

## 6. Harness engineering
Sacar partido al arnés moderno y empezar a verificar solo.
> Integrar un servicio externo vía MCP, blindarlo con hooks que verifican y registran, y refactorizar con los tests como red.
- **6.1** Herramientas MCP: enchufar servicios externos
- **6.2** Verificar y registrar: hooks que validan calidad y estampan el changelog solo
- **6.3** Refactor seguro: cambiar las tripas con los tests como red

## 7. Agent orchestration
Repartir el trabajo entre agentes con contexto propio.
> Montar una feature multi-paso con el pipeline Architect → Builder → Craftsman, paralelizando donde se pueda.
- **7.1** No ahogar la ventana: agentes que eligen su modelo, tool y skill
- **7.2** Pipeline Architect → Builder → Craftsman en secuencia
- **7.3** Paralelizar agentes con contexto propio

## 8. Loop engineering
El bucle que decide cuándo iterar y cuándo parar.
> Apuntar el loop al backlog y dejar que mantenga una feature ya liberada de punta a punta *Away from Keyboard*.
- **8.1** Del bucle manual al bucle autónomo
- **8.2** El criterio de parada: condición de éxito y límites
- **8.3** *Away from Keyboard*: el loop reabre, mantiene y deja rastro
