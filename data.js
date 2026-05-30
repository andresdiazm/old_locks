/* =============================================
   OLD LOCKS — Archivo de datos
   Edita solo este archivo para actualizar
   el sitio web. No toques index.html ni styles.css.
   ============================================= */

/* ---------- NOTICIAS / RESULTADOS ----------
   type: "resultado" | "noticia" | "evento"
   badge: texto de la etiqueta (ej: "Resultado", "Inscripciones", "Evento")
   badgeColor: "gold" | "teal" | "blue"
   featured: true = tarjeta grande (solo la primera en true cuenta)
   Para resultados: usa golesL y golesR en vez de excerpt
*/
const NOTICIAS = [
  {
    featured: true,
    type: "resultado",
    badge: "Resultado",
    badgeColor: "gold",
    categoria: "Sub 10 · Amistoso formativo",
    titulo: "Primer triunfo de la temporada ante Andes",
    golesL: 3,
    golesR: 2,
    equipoL: "Old Locks",
    equipoR: "Andes HC",
    excerpt: "Partido vibrante con dos goles en el último cuarto. El equipo Sub 10 demostró la madurez táctica trabajada en los últimos entrenamientos.",
    fecha: "2026-05-25",
    fechaTexto: "25 Mayo 2026",
  },
  {
    featured: false,
    type: "noticia",
    badge: "Inscripciones",
    badgeColor: "gold",
    categoria: "Club",
    titulo: "Inscripciones abiertas temporada 2026",
    excerpt: "Todas las categorías tienen cupos disponibles. Escríbenos para agendar una clase de prueba.",
    fecha: "2026-05-20",
    fechaTexto: "20 Mayo 2026",
  },
  {
    featured: false,
    type: "resultado",
    badge: "Resultado",
    badgeColor: "teal",
    categoria: "Sub 12 · Regional",
    titulo: "Old Locks empata en duelo regional Sub 12",
    golesL: 1,
    golesR: 1,
    equipoL: "Old Locks",
    equipoR: "Estadio",
    excerpt: "Buen desempeño colectivo ante Estadio en el encuentro regional del mes de mayo.",
    fecha: "2026-05-18",
    fechaTexto: "18 Mayo 2026",
  },
];

/* ---------- PRÓXIMOS PARTIDOS ----------
   tag: "local" | "visita" | "abierto" | "tbd"
   tagTexto: texto que aparece en la etiqueta
*/
const PARTIDOS = [
  {
    dia: "08",
    mes: "JUN",
    competencia: "Encuentro Formativo · Sub 10",
    local: "Old Locks",
    visita: "Los Leones",
    lugar: "Canchas del club",
    hora: "10:00 hrs",
    tag: "local",
    tagTexto: "Local",
  },
  {
    dia: "15",
    mes: "JUN",
    competencia: "Festival Infantil · Sub 12",
    local: "Old Locks",
    visita: "Club Manquehue",
    lugar: "Estadio Municipal",
    hora: "11:30 hrs",
    tag: "visita",
    tagTexto: "Visita",
  },
  {
    dia: "22",
    mes: "JUN",
    competencia: "Jornada Abierta · Todas las categorías",
    local: "Entrenamiento abierto Old Locks",
    visita: null,
    lugar: "Canchas del club",
    hora: "Horario por confirmar",
    tag: "abierto",
    tagTexto: "Abierto",
  },
  {
    dia: "06",
    mes: "JUL",
    competencia: "Torneo de Invierno · Sub 8",
    local: "Old Locks",
    visita: "Por confirmar",
    lugar: "Sede por confirmar",
    hora: "09:00 hrs",
    tag: "tbd",
    tagTexto: "Por confirmar",
  },
];

/* ---------- TICKER (barra de noticias arriba) ----------
   Mensajes cortos que se muestran en la barra animada.
   Usa **texto** para poner en negrita/dorado.
*/
const TICKER = [
  "**Old Locks 3 – 2 Andes** · Sub 10 · Amistoso",
  "Inscripciones abiertas temporada 2026",
  "**Old Locks 1 – 1 Estadio** · Sub 12 · Encuentro regional",
  "Entrenamiento abierto — 22 Jun · ¡Trae a tu hija!",
];

/* ---------- ESTADÍSTICAS DEL CLUB (Hero) ---------- */
const STATS = [
  { valor: 3,   label: "Categorías" },
  { valor: 2,   label: "Entrenamientos semanales" },
  { valor: 100, label: "% Pasión" },
];
