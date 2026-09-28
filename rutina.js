// Rutina de 3 días. Vídeos de MuscleWiki (https://musclewiki.com/es-es).
// Cada ejercicio usa el identificador del vídeo en media.musclewiki.com.
const RUTINA = [
  {
    nombre: "Pecho y tríceps",
    grupos: [
      {
        musculo: "Pecho",
        ejercicios: [
          {
            nombre: "Press en suelo con mancuernas",
            video: "Dumbbells-dumbbell-floor-press",
            pasos: [
              "Túmbate boca arriba en el suelo con las rodillas flexionadas y una mancuerna en cada mano.",
              "Apoya la parte trasera de los brazos en el suelo, con los codos a unos 45° del cuerpo.",
              "Empuja las mancuernas hacia arriba hasta estirar los brazos sobre el pecho.",
              "Baja despacio hasta que los tríceps toquen suavemente el suelo y repite."
            ]
          },
          {
            nombre: "Aperturas en suelo con mancuernas",
            video: "Dumbbells-dumbbell-floor-fly",
            pasos: [
              "Túmbate boca arriba con las mancuernas sobre el pecho y las palmas enfrentadas.",
              "Mantén los codos ligeramente flexionados durante todo el movimiento.",
              "Abre los brazos hacia los lados en arco hasta que los codos rocen el suelo.",
              "Junta de nuevo las mancuernas sobre el pecho apretando los pectorales."
            ]
          },
          {
            nombre: "Press en suelo con barra",
            video: "Barbell-barbell-floor-press",
            pasos: [
              "Túmbate bajo la barra con las rodillas flexionadas y agárrala algo más ancho que los hombros.",
              "Saca la barra y sujétala con los brazos estirados sobre el pecho.",
              "Bájala de forma controlada hasta que los codos toquen el suelo.",
              "Empuja la barra hacia arriba hasta estirar los brazos."
            ]
          }
        ]
      },
      {
        musculo: "Tríceps",
        ejercicios: [
          {
            nombre: "Extensión de tríceps sobre la cabeza",
            video: "Dumbbells-dumbbell-overhead-tricep-extension",
            pasos: [
              "De pie, sujeta una mancuerna con ambas manos por encima de la cabeza.",
              "Mantén los codos cerca de la cabeza y apuntando hacia delante.",
              "Baja la mancuerna por detrás de la cabeza flexionando solo los codos.",
              "Estira los brazos para volver arriba sin mover los hombros."
            ]
          },
          {
            nombre: "Rompecráneos con mancuernas",
            video: "Dumbbells-dumbbell-skullcrusher",
            pasos: [
              "Túmbate en el suelo con las mancuernas sobre el pecho y las palmas enfrentadas.",
              "Deja los brazos quietos y flexiona los codos bajando las mancuernas junto a la cabeza.",
              "Mantén los codos apuntando al techo, sin abrirlos.",
              "Estira los brazos para subir las mancuernas y repite."
            ]
          },
          {
            nombre: "Rompecráneos con barra",
            video: "Barbell-barbell-skullcrusher",
            pasos: [
              "Túmbate en el suelo con la barra sobre el pecho y un agarre a la anchura de los hombros.",
              "Flexiona los codos y baja la barra hacia la frente de forma controlada.",
              "Los brazos no se mueven: solo trabaja la articulación del codo.",
              "Estira los brazos para volver a la posición inicial."
            ]
          }
        ]
      }
    ]
  },
  {
    nombre: "Espalda y bíceps",
    grupos: [
      {
        musculo: "Espalda",
        ejercicios: [
          {
            nombre: "Remo inclinado con mancuernas",
            video: "Dumbbells-dumbbell-row-bilateral",
            pasos: [
              "De pie, con una mancuerna en cada mano, flexiona ligeramente las rodillas.",
              "Inclina el tronco hacia delante con la espalda recta hasta casi quedar paralelo al suelo.",
              "Tira de las mancuernas hacia la cadera llevando los codos hacia atrás.",
              "Aprieta la espalda arriba y baja despacio."
            ]
          },
          {
            nombre: "Remo a una mano con mancuerna",
            video: "Dumbbells-dumbbell-row-unilateral",
            pasos: [
              "Inclínate hacia delante apoyando una mano en la rodilla o en una silla.",
              "Deja colgar la mancuerna con el brazo estirado y la espalda recta.",
              "Tira de la mancuerna hacia la cadera, pegando el codo al cuerpo.",
              "Baja de forma controlada. Haz todas las repeticiones y cambia de lado."
            ]
          },
          {
            nombre: "Pullover con mancuerna",
            video: "Dumbbells-dumbbell-pullover",
            pasos: [
              "Túmbate en el suelo y sujeta una mancuerna con ambas manos sobre el pecho.",
              "Con los codos un poco flexionados, lleva la mancuerna hacia atrás por encima de la cabeza.",
              "Baja hasta notar el estiramiento en la espalda, sin arquear la zona lumbar.",
              "Vuelve a llevar la mancuerna sobre el pecho usando la espalda."
            ]
          }
        ]
      },
      {
        musculo: "Bíceps",
        ejercicios: [
          {
            nombre: "Curl de bíceps con mancuernas",
            video: "Dumbbells-dumbbell-curl",
            pasos: [
              "De pie, con una mancuerna en cada mano y las palmas hacia delante.",
              "Pega los codos al cuerpo.",
              "Sube las mancuernas hacia los hombros flexionando los codos.",
              "Baja despacio hasta estirar los brazos por completo."
            ]
          },
          {
            nombre: "Curl martillo",
            video: "Dumbbells-dumbbell-hammer-curl",
            pasos: [
              "De pie, sujeta las mancuernas con las palmas mirando hacia el cuerpo.",
              "Mantén los codos pegados al tronco.",
              "Sube las mancuernas sin girar las muñecas.",
              "Baja de forma controlada y repite."
            ]
          },
          {
            nombre: "Curl de bíceps con barra",
            video: "Barbell-barbell-curl",
            pasos: [
              "De pie, sujeta la barra con las palmas hacia delante y a la anchura de los hombros.",
              "Mantén los codos pegados al cuerpo y el tronco quieto.",
              "Sube la barra hacia los hombros flexionando los codos.",
              "Baja despacio sin balancearte."
            ]
          }
        ]
      }
    ]
  },
  {
    nombre: "Hombros y espalda",
    grupos: [
      {
        musculo: "Hombros",
        ejercicios: [
          {
            nombre: "Press de hombros con mancuernas",
            video: "Dumbbells-dumbbell-overhead-press",
            pasos: [
              "De pie, sube las mancuernas a la altura de los hombros con las palmas hacia delante.",
              "Aprieta el abdomen y mantén la espalda recta.",
              "Empuja las mancuernas hacia arriba hasta estirar los brazos.",
              "Baja de forma controlada hasta la altura de los hombros."
            ]
          },
          {
            nombre: "Elevaciones laterales",
            video: "Dumbbells-dumbbell-lateral-raise",
            pasos: [
              "De pie, con las mancuernas a los lados y los codos ligeramente flexionados.",
              "Eleva los brazos hacia los lados hasta la altura de los hombros.",
              "No subas los hombros hacia las orejas.",
              "Baja despacio y repite."
            ]
          },
          {
            nombre: "Elevaciones frontales",
            video: "Dumbbells-dumbbell-front-raise",
            pasos: [
              "De pie, con las mancuernas delante de los muslos.",
              "Eleva los brazos hacia delante, casi estirados, hasta la altura de los hombros.",
              "Evita balancear el cuerpo.",
              "Baja de forma controlada."
            ]
          }
        ]
      },
      {
        musculo: "Espalda",
        ejercicios: [
          {
            nombre: "Pájaros (aperturas posteriores)",
            video: "Dumbbells-dumbbell-rear-delt-fly",
            pasos: [
              "Inclina el tronco hacia delante con la espalda recta y las mancuernas colgando.",
              "Con los codos un poco flexionados, abre los brazos hacia los lados.",
              "Junta los omóplatos arriba.",
              "Baja despacio y repite."
            ]
          },
          {
            nombre: "Remo para deltoides posterior",
            video: "Dumbbells-dumbbell-rear-delt-row",
            pasos: [
              "Inclínate hacia delante con la espalda recta y las mancuernas colgando.",
              "Tira de las mancuernas hacia el pecho con los codos abiertos hacia fuera.",
              "Aprieta la parte alta de la espalda arriba.",
              "Baja de forma controlada."
            ]
          },
          {
            nombre: "Encogimientos con mancuernas",
            video: "Dumbbells-dumbbell-shrug",
            pasos: [
              "De pie, con una mancuerna en cada mano a los lados del cuerpo.",
              "Sube los hombros hacia las orejas lo más alto posible.",
              "Mantén un segundo arriba sin flexionar los codos.",
              "Baja despacio y repite."
            ]
          }
        ]
      }
    ]
  }
];
