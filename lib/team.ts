export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

// TODO: reemplazar nombres, roles y retratos reales del equipo.
// Los retratos van en /public/images/equipo/ (proporción 3:4, mínimo 1200px de ancho).
export const team: TeamMember[] = [
  { name: "Nombre Apellido", role: "Arquitectura", image: "/images/equipo/retrato-01.jpg" }, // TODO
  { name: "Nombre Apellido", role: "Finanzas e inversión", image: "/images/equipo/retrato-02.jpg" }, // TODO
  { name: "Nombre Apellido", role: "Iluminación", image: "/images/equipo/retrato-03.jpg" }, // TODO
  { name: "Nombre Apellido", role: "Interiores", image: "/images/equipo/retrato-04.jpg" }, // TODO
  { name: "Nombre Apellido", role: "Identidad y marca", image: "/images/equipo/retrato-05.jpg" }, // TODO
  { name: "Nombre Apellido", role: "Comunicación", image: "/images/equipo/retrato-06.jpg" }, // TODO
];
