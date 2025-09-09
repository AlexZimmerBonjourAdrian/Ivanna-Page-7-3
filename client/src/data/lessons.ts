export interface LessonTechnique {
  title: string;
  description: string;
}

export const terrorTechniques: LessonTechnique[] = [
  {
    title: "Revelación de identidad",
    description: "El narrador no es quien parece"
  },
  {
    title: "Cambio temporal", 
    description: "La historia ocurre en otro tiempo"
  },
  {
    title: "Inversión de realidad",
    description: "Lo que creías real es falso"
  }
];

export const terrorExample = {
  author: "Estudiante María G.",
  text: "El espejo del baño se empañó solo. Escribí 'AYUDA' con el dedo. Cuando volví, alguien había añadido: 'NO PUEDO SALIR'.",
  likes: 24,
  comments: 8
};

export const terrorExample2 = {
  author: "Estudiante Carlos R.", 
  text: "Siempre duermo boca arriba. Esta mañana desperté boca abajo. Vivo solo en un quinto piso.",
  likes: 31,
  comments: 12
};

export const dailyTip = "En el terror psicológico, lo que no dices es tan importante como lo que sí dices. Deja que la imaginación del lector complete los espacios en blanco.";
