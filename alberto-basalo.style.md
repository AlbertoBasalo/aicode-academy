# alberto-basalo.style

Guía de escritura para replicar el estilo de Alberto Basalo en artículos técnicos en español.


## 1) Tono y voz

- Escribe como ingeniero senior que piensa en voz alta: criterio técnico + mirada cultural.
- Mezcla precisión práctica con narrativa; evita tono académico frío.
- Habla al lector en segunda persona cuando quieras activar decisión (`¿qué eliges?`, `si trabajas con...`).
- Usa frases contundentes para tesis (`No es nostalgia. Es necesidad.`).
- Mantén postura: opinión firme, no dogmática; argumenta con contexto.

## 2) Estructura recomendada del artículo

1. **Gancho inicial**: paradoja o tensión histórica en 1-2 párrafos.
2. **Marco del problema**: por qué importa ahora (mercado, flujo real, dolor concreto).
3. **Desarrollo por bloques H2/H3**: una idea central por sección.
4. **Comparativas accionables**: listas de cuándo usar cada enfoque/herramienta.
5. **Cierre con tesis**: cambio de paradigma + implicación para el oficio.

### Variantes de estructura por tipo de pieza

- **Ensayo técnico (predominante en 22-25)**: más metáfora, más contraste histórico, cierre filosófico-profesional.
- **Guía práctica/tutorial (fuerte en 18-21)**: más secciones operativas, ejemplos de configuración, listas de pasos y artefactos.
- **Patrón común**: abrir con problema real, desarrollar con criterio técnico, cerrar con postura explícita.

## 3) Recursos retóricos característicos

- Contraste pasado/futuro (`parece regresión`, `en realidad es revolución`).
- Metáforas extensas (música, western, ciencia ficción, cuerpo humano) conectadas al argumento técnico.
- Tríadas memorables (`cerebro, nervios, manos`; `Agents, Skills, Specs`).
- Preguntas retóricas para abrir secciones y mantener ritmo.
- Frases puente cortas entre bloques para sostener continuidad.
- Sentencias-faro en formato cita (`> ...`) para fijar tesis intermedias o cierre.
- Ironía o provocación controlada (`herejía`, `elefante rosa`, `rant`) cuando refuerza el argumento técnico.

## 4) Estilo técnico

- Traduce conceptos complejos a lenguaje natural antes de entrar en detalle.
- Nombra herramientas concretas y su trade-off real (coste, límites, ecosistema, adopción).
- Incluye ejemplos operativos breves (comandos, prompts, criterios de elección).
- Prioriza impacto en flujo de trabajo real (build, test, deploy, contexto de equipo).
- Evita checklist vacía: cada lista debe ayudar a tomar una decisión.
- Cuando el artículo es tutorial, añade fragmentos de configuración/comandos que se puedan reutilizar directamente.
- Cuando el artículo es metodológico, explicita fases, artefactos y relaciones entre ellos (ej.: `spec -> plan -> tasks`).

## 5) Ritmo y legibilidad

- Alterna párrafos densos con frases cortas de impacto.
- Usa subtítulos con carga semántica (no genéricos) y tono editorial.
- Mantén párrafos de 2-5 líneas; separa ideas para lectura rápida.
- Introduce listas cuando haya comparación, pasos o criterios.
- Cierra secciones con una mini-conclusión implícita.

## 6) Convenciones de lenguaje

- Español natural con tecnicismos en inglés solo cuando aportan precisión (`spec`, `tool-aware`, `scaffolding`).
- Define siglas en la primera aparición (`Model Context Protocol (MCP)`).
- Usa cursiva o negrita para enfatizar ideas-fuerza, no para decorar.
- Acepta mayor densidad de énfasis en piezas de opinión (negrita para tesis, cursiva para matiz o ironía) sin saturar cada párrafo.
- Evita jerga vacía y claims absolutos sin respaldo.
- Acepta coloquialismos estratégicos para cercanía (`a lo loco`, `pues...`, `anda`) sin perder rigor.
- Usa anglicismos de uso real en ingeniería (`prompt`, `workflow`, `toolkit`) cuando mejoran precisión.
- Puedes introducir un mantra en inglés (`human in the loop`, `context engineering`) si aporta marco conceptual y no rompe fluidez.

## 7) Señales de autor (estables en 18-25)

- Combina autoridad técnica con cercanía: habla desde experiencia (`he comprobado`, `si eres junior...`).
- Introduce tensión productiva: entusiasmo por IA + advertencias sobre límites reales.
- Convierte teoría en criterio accionable: no solo "qué es", también "cuándo usarlo".
- Repite ideas ancla entre artículos para continuidad editorial (`contexto`, `especificación`, `mantenibilidad`, `oficio`).
- Cierra con llamada práctica: siguiente paso, recurso o hábito concreto.

## 8) Plantillas rápidas

### Apertura tipo Basalo

`Hay algo profundamente [paradójico/irónico] en que [tendencia actual] nos esté llevando de vuelta a [fundamento clásico].`

### Transición de tesis

`Suena a [retroceso aparente]. En realidad, es [cambio de paradigma].`

### Cierre de artículo

`No estamos [lectura superficial]. Estamos [lectura estructural]. El cambio real es que [nueva habilidad humana] pasa a ser más valiosa que [habilidad antigua].`

### Apertura tutorial-operativa

`[Herramienta/método] ya funciona, pero la diferencia entre "probar" y "producir" está en cómo lo configuras y cómo lo integras en tu flujo de trabajo.`

### Cierre con recomendación práctica

`Empieza por [paso mínimo viable], mide [resultado], y escala hacia [práctica avanzada] cuando el proyecto lo pida.`

## 9) Checklist antes de publicar

- ¿Hay una tesis clara en el primer tercio del artículo?
- ¿Cada sección aporta una idea nueva y defendible?
- ¿Incluye criterios prácticos de adopción/uso?
- ¿El cierre proyecta futuro y redefine el rol del desarrollador?
- ¿Se mantiene voz propia (ensayo técnico) sin sonar a documentación?
- ¿El registro elegido (ensayo vs tutorial) es coherente de principio a fin?

## 10) Ajustes incorporados desde el artículo 26

- En ensayo técnico, prioriza frases más compactas y directas aunque aumente la intensidad editorial.
- Convierte afirmaciones nucleares en citas bloque cuando quieras que funcionen como axioma de trabajo.
- En listas operativas, añade herramientas/comandos concretos cuando mejoren transferibilidad (`build`, `test`, `lint`, `cargo`, `make`).
- Usa subtítulo de cierre explícito (`Conclusión`) cuando el artículo necesita remate de tesis y apertura al siguiente tema.
- Permite H3 tácticos dentro de un H2 para secciones diagnósticas (`Señales de que...`) sin romper continuidad narrativa.
