---
title: "AIDDbot"
subtitle: "Agentes de IA para desarrollo corporativo"
description: "AIDDbot es un conjunto de herramientas (prompts, instrucciones, agentes, etc.) para que puedas usar fácilmente toda la potencia de la IA en tu día a día."
slug: "community/opensource/aiddbot"
date: "2025-08-05"
cta:
  link: "https://github.com/aiddbot/aiddbot"
  text: "Repositorio en GitHub"
---

## Tu ayudante para AI-Driven Development

**AIDDbot** es un asistente con IA para el trabajo diario de los ingenieros de software. Ayuda con documentación de producto, generación de código, pruebas de calidad y más.

Consiste en un **conjunto de prompts, instrucciones, reglas y herramientas** que permiten al agente ejecutar las tareas de forma eficaz.

Es útil para cualquier lenguaje o tipo de proyecto, pero es especialmente adecuado para desarrollos corporativos y de largo alcance.

Puede trabajar con varios editores habilitados con IA:

- **GitHub Copilot** 🟢 Listo [Ver implementación](https://github.com/AIDDbot/AIDDbot/tree/main/.github)
- _Cursor_, _ClaudeCode_, _GeminiCLI_ 🟡 Próximamente

## Instalación

`AIDDbot` es solo un conjunto de ficheros Markdown con instrucciones y configuraciones adaptadas a tu editor de código con IA. Instálalo clonando este repositorio y copiando la carpeta adecuada en la raíz de tu proyecto. O simplemente usa el prompt de instalación (para VS Code + GitHub Copilot).

### Para GitHub Copilot

> Lee más sobre [Personalización de GitHub Copilot](https://code.visualstudio.com/docs/copilot/copilot-customization)

1. Copia el contenido en bruto de [El Prompt de Instalación de AIDDbot](https://raw.githubusercontent.com/AIDDbot/AIDDbot/refs/heads/main/.github/prompts/Ab_install-for-copilot.prompt.md)
2. Pégalo en tu Chat de Copilot en `Modo Agente`.


## Uso (GitHub Copilot)

El chat de GitHub Copilot viene con tres modos nativos: `Ask`, `Edit` y `Agent`. Con `AIDDbot` agregas un nuevo modo orientado a AI Driven Development. 

> Más sobre [GitHub Copilot en VSCode](https://aicode.academy/blog/es/vscode-github-copilot/)

### Modo de Chat: AIDDbot

Tras la instalación tendrás un nuevo modo de chat: **AIDDbot**.

- **[Modo de Chat AIDDbot](https://github.com/AIDDbot/AIDDbot/blob/main/.github/chatmodes/AIDDbot.chatmode.md)**: Configurado para flujos de arquitectura, construcción e ingeniería de calidad empresarial.

> Más sobre [AIDDbot workflow](https://aicode.academy/blog/es/aiddbot-workflow/)

En Copilot, el modo de chat fija un contexto y otorga acceso a prompts y herramientas acordes a dicho contexto.

### Prompts según el rol

Hay tres prompts alineados con los roles de AI-Driven Development: Architect / Builder / Craftsman. Llamarlos hace que AIDDbot actúe según el rol elegido.

- **[Rol Arquitecto](https://github.com/AIDDbot/AIDDbot/tree/main/.github/prompts/Ab_Architect.prompt.md)** `/Ab_Architect` – Documentación general y descubrimiento.
- **[Rol Constructor](https://github.com/AIDDbot/AIDDbot/tree/main/.github/prompts/Ab_Builder.prompt.md)** `/Ab_Builder` – Diseño e implementación de funcionalidades.
- **[Rol Artesano](https://github.com/AIDDbot/AIDDbot/tree/main/.github/prompts/Ab_Craftsman.prompt.md)** `/Ab_Craftsman` – Validación, limpieza y documentación.

Estos prompts de rol orquestan otros prompts especializados cuando es necesario. Explora la [carpeta de prompts](https://github.com/AIDDbot/AIDDbot/tree/main/.github/prompts) para ver todas las opciones.

### Instrucciones

GitHub Copilot permite definir ficheros de instrucciones como contexto reutilizable. Funcionan como plantillas, guías o referencias de buenas prácticas — genéricas o muy específicas (librerías, herramientas, patrones).

**AIDDbot** inyecta automáticamente los ficheros adecuados por prompt. También puedes referenciarlos manualmente usando el prefijo `#file:`.

Visita la [carpeta de instrucciones](https://github.com/AIDDbot/AIDDbot/tree/main/.github/instructions) para explorarlas.

#### Agregar Instrucciones

Además del conjunto incorporado puedes crear otros personalizados para tu stack — automáticamente — usando el propio agente.

- 📋 **[Generación de Instrucciones](https://github.com/AIDDbot/AIDDbot/blob/main/.github/prompts/Ab_add-instructions.prompt.md)** `/Ab_add-instructions`: Genera ficheros de instrucciones específicos del stack.

Este prompt se invoca automáticamente desde el prompt del Arquitecto tras identificar dependencias del stack, pero también puedes llamarlo manualmente con un alcance.
  
```txt
/Ab_add-instructions java language
```

### En progreso

- Memoria del flujo de trabajo y características del proyecto.
- Diario / log para trazabilidad de decisiones.
- Inclusión automática de arquetipos según requisitos.
- Rutinas de auto-mejora para AIDDbot.

## Filosofía AIDD

AIDD (AI Driven Development) combina capacidades de IA con prácticas consolidadas de ingeniería de software para aumentar productividad, calidad de código y colaboración a lo largo de todo el ciclo de vida.

El agente `AIDDbot` se adhiere a los tres principios del [Manifiesto AIDD](https://aiddbot.com/aidd-manifesto):

- **🧑‍💻 Humano en el Bucle**: Tu trabajo se vuelve más estratégico, colaborativo y responsable.
- **🔧 Reglas sobre Herramientas**: Las herramientas son medios; las reglas y procesos aportan valor duradero.
- **✅ Calidad IA**: No solo más productividad, también software mantenible y de alta calidad.

> Work smarter, not harder, with _Ab_!

---

- **Autor**: [Alberto Basalo](https://albertobasalo.dev)
- **Redes sociales**:
  - [X](https://x.com/albertobasalo)
  - [LinkedIn](https://www.linkedin.com/in/albertobasalo/)
  - [GitHub](https://github.com/albertobasalo)
- **Cursos en Español**: [AI code Academy](https://aicode.academy)
- **Blog de AIDDbot.com**: [AIDDbot.com](https://aiddbot.com)
- **Organización AIDDbot en GitHub**: [GitHub/AIDDbot](https://github.com/AIDDbot)
- **El repositorio de AIDDbot**: [GitHub/AIDDbot/AIDDbot](https://github.com/AIDDbot/AIDDbot)
- **AIDDbot Workflow**: [Tu ayudante para una metodología de programación con IA](https://aicode.academy/blog/es/aiddbot-workflow/)
- **VsCode y GitHub Copilot**: [Configuración y uso del agente de IA de GitHub](https://aicode.academy/blog/es/vscode-github-copilot/)
- **Curso de formación**: [Aprende a usar GitHub Copilot profesionalmente](https://aicode.academy/cursos/vs-code-copilot/)