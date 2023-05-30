// creacion de un array con la respuesta, la respuesta y sus opciones...
let questions = 
[
  {
    question: '¿Cuál es el resultado de la siguiente operación? 5 + 3 * 2.',
    answer: '11',
    options: [ '11', '3', '3', '9' ]
  },
  {
    question: '¿Cuál es el valor de "x"" en la ecuación 3x + 5 = 17?"',
    answer: '4',
    options: [ '4', '16', '11', '25' ]
  },
  {
    question: ' ¿Cuál es el área de un triángulo con base 6 cm y altura 8 cm?',
    answer: '24',
    options: [ '3', '5', '16', '24' ]
  },
  {
    question: '¿Cuál es el resultado de la siguiente operación? (2 + 3)².',
    answer: '25',
    options: [ '11', '10', '25', '5' ]
  },
  {
    question: '¿Cuál es el resultado de la siguiente operación? 4!/8',
    answer: '3',
    options: [ '24', '25', '4', '3' ]
  },
  {
    question: '¿Cuál es el resultado de la siguiente operación? 2⁴.',
    answer: '16',
    options: [ '16', '24', '5', '18' ]
  },
  {
    question: ' ¿Cuánto es el valor de "y"" en la ecuación 2y - 3 = 7?"',
    answer: '5',
    options: [ '5', '10', '18', '7' ]
  },
  {
    question: ' ¿Cuánto es el perímetro de un cuadrado con lado de longitud 10 cm?',
    answer: '40',
    options: [ '3', '40', '11', '3' ]
  },
  {
    question: '¿Cuál es el resultado de la siguiente operación? (9 - 4) x 3.',
    answer: '15',
    options: [ '24', '15', '16', '11' ]
  },
  {
    question: ' ¿Cuál es el resultado de la siguiente operación? √25 + √16.',
    answer: '9',
    options: [ '11', '15', '9', '3' ]
  },
  {
    question: ' ¿Cuánto es el perímetro de un triángulo equilátero con lado de longitud 6 cm?',
    answer: '18',
    options: [ '40', '4', '3', '18' ]
  },
  {
    question: '¿Cuál es el resultado de la siguiente operación? 3/5 + 2/5.',
    answer: '1',
    options: [ '9', '3', '1', '10' ]
  },
  {
    question: '¿Cuál es el resultado de la siguiente operación? 2⁵ x 2³.',
    answer: '256',
    options: [ '40', '3', '4', '256' ]
  },
  {
    question: '¿Cuánto es el valor de "y"" en la ecuación 5y + 8 = 23?"',
    answer: '3',
    options: [ '4', '5', '3', '24' ]
  },
  {
    question: '¿Cuál es el resultado de la siguiente operación? 2 + 3² - 4.',
    answer: '7',
    options: [ '7', '3', '3', '5' ]
  },
  {
    question: '¿Cuál es el valor de "y"" en la ecuación 3y - 3 = 7 + 2y?"',
    answer: '10',
    options: [ '7', '40', '15', '10' ]
  },
  {
    question: ' ¿En qué año tuvo lugar la Revolución Francesa?',
    answer: '1789',
    options: [ '1776', '1789', '1810', 'Adolf Hitler' ]
  },
  {
    question: '¿Quién fue el líder político y militar de la Alemania nazi durante la Segunda Guerra Mundial?',
    answer: 'Adolf Hitler',
    options: [ '1810', 'Adolf Hitler', '1910', '1989' ]
  },
  {
    question: ' ¿En qué año se llevó a cabo la independencia de los Estados Unidos?',
    answer: '1776',
    options: [ '1810', 'Movimiento estudiantil de 1968', '1910', '1776' ]
  },
  {
    question: ' ¿Quién fue el líder principal de la Revolución Rusa de 1917?',
    answer: 'Vladimir Lenin',
    options: [
      'Martin Luther King Jr',
      'Movimiento estudiantil de 1968',
      'Vladimir Lenin',
      '1789'
    ]
  },
  {
    question: '¿Cuál fue la causa principal de la Primera Guerra Mundial?',
    answer: 'El asesinato del archiduque Francisco Fernando de Austria en 1914',
    options: [
      '1938',
      '1810',
      'El asesinato del archiduque Francisco Fernando de Austria en 1914',
      'Movimiento estudiantil de 1968'
    ]
  },
  {
    question: '¿Quién fue el líder político y activista que luchó por los derechos civiles de los afroamericanos en Estados Unidos?',
    answer: 'Martin Luther King Jr',
    options: [
      '1810',
      'El asesinato del archiduque Francisco Fernando de Austria en 1914',
      'Martin Luther King Jr',
      '1810'
    ]
  },
  {
    question: ' ¿En qué año se produjo la caída del Muro de Berlín?',
    answer: '1989',
    options: [
      '1989',
      'Mahatma Gandhi',
      'Martin Luther King Jr',
      'El asesinato del archiduque Francisco Fernando de Austria en 1914'
    ]
  },
  {
    question: ' ¿Quién fue el líder histórico de la lucha por la independencia de la India?',
    answer: 'Mahatma Gandhi',
    options: [ 'Martin Luther King Jr', 'Mahatma Gandhi', '1776', '1789' ]
  },
  {
    question: '¿En qué año comenzó la guerra de Independencia de México?',
    answer: '1810',
    options: [ '1989', 'Mahatma Gandhi', '1810', '1910' ]
  },
  {
    question: '¿Cuándo se firmó el Tratado de Guadalupe Hidalgo, que puso fin a la guerra entre México y Estados Unidos?',
    answer: '1848',
    options: [ '1848', '1910', 'Mahatma Gandhi', 'Martin Luther King Jr' ]
  },
  {
    question: '¿Cuál fue la fecha de inicio de la Revolución Mexicana?',
    answer: '1910',
    options: [ '1848', '1910', 'Mahatma Gandhi', '1789' ]
  },
  {
    question: '¿Cuál fue el año de la expropiación petrolera en México?',
    answer: '1938',
    options: [ '1789', '1938', '1848', '1789' ]
  },
  {
    question: '¿Que movimiento social se llevo a cabo en el mismo año que los juegos Olimpicos celebrados en México?',
    answer: 'Movimiento estudiantil de 1968',
    options: [
      'Movimiento estudiantil de 1968',
      'El asesinato del archiduque Francisco Fernando de Austria en 1914',
      '1776',
      '1910'
    ]
  },
  {
    question: '¿Quién pintó la famosa obra "La Mona Lisa""?"',
    answer: 'Leonardo da Vinci',
    options: [
      ' Homero',
      'Leonardo da Vinci',
      ' Vincent van Gogh',
      'Don Quijote de la Mancha'
    ]
  },
  {
    question: ' ¿Cuál es la obra más conocida del escritor español Miguel de Cervantes Saavedra?',
    answer: 'Don Quijote de la Mancha',
    options: [
      'Guernica',
      'romanticismo',
      'Don Quijote de la Mancha',
      'surrealismo'
    ]
  },
  {
    question: '¿Quién es el autor de la pintura "La Noche Estrellada""?"',
    answer: ' Vincent van Gogh',
    options: [
      'Leonardo da Vinci',
      ' Vincent van Gogh',
      'William Shakespeare',
      'William Shakespeare'
    ]
  },
  {
    question: '¿Quién escribió la famosa obra de teatro "Romeo y Julieta""?"',
    answer: 'William Shakespeare',
    options: [
      ' Homero',
      'William Shakespeare',
      'Gabriel García Márquez',
      'Don Quijote de la Mancha'
    ]
  },
  {
    question: '¿Cuál es el movimiento artístico caracterizado por la representación de imágenes distorsionadas y surrealistas?',
    answer: 'surrealismo',
    options: [
      'Don Quijote de la Mancha',
      'surrealismo',
      'romanticismo',
      'Guernica'
    ]
  },
  {
    question: '¿Quién es el autor del libro "Cien años de soledad""?"',
    answer: 'Gabriel García Márquez',
    options: [
      ' Homero',
      ' Homero',
      'William Shakespeare',
      'Gabriel García Márquez'
    ]
  },
  {
    question: '¿Cuál es la pintura más famosa de Pablo Picasso?',
    answer: 'Guernica',
    options: [
      'Guernica',
      'romanticismo',
      ' Salvador Dalí',
      ' Vincent van Gogh'
    ]
  },
  {
    question: '¿Quién es el autor de la pintura "La persistencia de la memoria""?"',
    answer: ' Salvador Dalí',
    options: [
      'Don Quijote de la Mancha',
      'Gabriel García Márquez',
      ' Salvador Dalí',
      'surrealismo'
    ]
  },
  {
    question: '¿Cuál es el estilo artístico caracterizado por la representación de paisajes naturales y escenas pastorales?',
    answer: 'romanticismo',
    options: [
      ' Salvador Dalí',
      'Leonardo da Vinci',
      'romanticismo',
      'Gabriel García Márquez'
    ]
  },
  {
    question: '¿Quién es el autor del poema épico "La Odisea""?"',
    answer: ' Homero',
    options: [
      'surrealismo',
      'surrealismo',
      'Don Quijote de la Mancha',
      ' Homero'
    ]
  },
  {
    question: '¿El sustantivo "mesa"" es masculino o femenino en español?"',
    answer: 'Femenino',
    options: [ 'Tú', 'Femenino', 'Masculino', 'Tú' ]
  },
  {
    question: '¿Cuál es la forma correcta del verbo "ser"" en la tercera persona del plural del presente de indicativo?"',
    answer: 'Son',
    options: [
      'Describir o calificar al sustantivo',
      'Son',
      'Femenino',
      'Unas'
    ]
  },
  {
    question: '¿Cuál es el pronombre personal de segunda persona del singular en español?',
    answer: 'Tú',
    options: [ 'Masculino', 'Unas', 'Futuro', 'Tú' ]
  },
  {
    question: '¿Cuál es la función del adjetivo en una oración?',
    answer: 'Describir o calificar al sustantivo',
    options: [
      'Describir o calificar al sustantivo',
      'Femenino',
      'Son',
      'Unas'
    ]
  },
  {
    question: '¿Cuál es el tiempo verbal que expresa acciones futuras en español?',
    answer: 'Futuro',
    options: [ 'Futuro', 'Unas', 'Tú', 'Describir o calificar al sustantivo' ]
  },
  {
    question: '¿Cuál es el género del sustantivo "libro"" en español?"',
    answer: 'Masculino',
    options: [ 'Describir o calificar al sustantivo', 'Son', 'Tú', 'Masculino' ]
  },
  {
    question: '¿Cuál es el artículo indeterminado femenino plural en español?',
    answer: 'Unas',
    options: [ 'Son', 'Son', 'Unas', 'Describir o calificar al sustantivo' ]
  },
  {
    question: '¿Cuál es el océano más grande del mundo?',
    answer: 'Océano Pacífico',
    options: [ 'París', 'Nueva Delhi', ' Groenlandia', 'Océano Pacífico' ]
  },
  {
    question: '¿Cuál es el continente más pequeño del mundo?',
    answer: 'Oceanía',
    options: [ 'Buenos Aires', 'El del Sahara', 'Oceanía', 'Buenos Aires' ]
  },
  {
    question: '¿Cuál es la capital de Australia?',
    answer: 'Canberra',
    options: [ 'Oceanía', 'París', 'Oceanía', 'Canberra' ]
  },
  {
    question: ' ¿Cuál es el país más poblado de Europa?',
    answer: 'Rusia',
    options: [ ' Groenlandia', 'Oceanía', 'El del Sahara', 'Rusia' ]
  },
  {
    question: ' ¿Cuál es el desierto más grande del mundo?',
    answer: 'El del Sahara',
    options: [ 'Ottawa', 'El del Sahara', 'Oceanía', 'Océano Pacífico' ]
  },
  {
    question: '¿Cuál es la isla más grande del mundo?',
    answer: ' Groenlandia',
    options: [ ' Groenlandia', 'Buenos Aires', 'París', 'Canberra' ]
  },
  {
    question: '¿Cuál es la capital de Canadá?',
    answer: 'Ottawa',
    options: [ 'Himalaya', 'Oceanía', 'Ottawa', 'Rusia' ]
  },
  {
    question: ' ¿Cuál es la capital de India?',
    answer: 'Nueva Delhi',
    options: [ 'El del Sahara', 'Océano Pacífico', 'Nueva Delhi', 'París' ]
  },
  {
    question: '¿Cuál es la capital de Argentina?',
    answer: 'Buenos Aires',
    options: [ 'Buenos Aires', 'Nueva Delhi', 'Ottawa', 'Canberra' ]
  },
  {
    question: '¿Cuál es la capital de Francia?',
    answer: 'París',
    options: [ 'Ottawa', 'París', 'Himalaya', 'Barsilia' ]
  },
  {
    question: '¿Cuál es la cadena montañosa más alta del mundo?',
    answer: 'Himalaya',
    options: [ 'El del Sahara', 'Nueva Delhi', 'Oceanía', 'Himalaya' ]
  },
  {
    question: '¿Cuál es la capital de Brasil?',
    answer: 'Barsilia',
    options: [ 'Buenos Aires', ' Groenlandia', 'Barsilia', 'Canberra' ]
  },
  {
    question: '¿Cuál es la función principal del sistema respiratorio?',
    answer: 'Transportar oxígeno por todo el cuerpo',
    options: [
      'Fotosíntesis',
      'Piel',
      'Fotosíntesis',
      'Transportar oxígeno por todo el cuerpo'
    ]
  },
  {
    question: 'Cuál es el órgano responsable de la producción de la insulina?',
    answer: 'Páncreas',
    options: [ 'Fotosíntesis', 'Páncreas', 'Fotosíntesis', '206' ]
  },
  {
    question: '¿Cuál es la función principal de los riñones?',
    answer: 'Filtrar la sangre y eliminar desechos',
    options: [ '206', '206', 'Hígado', 'Filtrar la sangre y eliminar desechos' ]
  },
  {
    question: '¿Cuál es el órgano más grande del cuerpo humano?',
    answer: 'Piel',
    options: [
      'Piel',
      'Filtrar la sangre y eliminar desechos',
      'Hígado',
      'Riñón'
    ]
  },
  {
    question: '¿Cuál es el proceso mediante el cual las plantas producen su alimento?',
    answer: 'Fotosíntesis',
    options: [ 'Fotosíntesis', 'Piel', 'Médula ósea', 'Páncreas' ]
  },
  {
    question: ' ¿Cuál es el proceso mediante el cual las células se dividen para reproducirse?',
    answer: 'Mitosis',
    options: [
      'Riñón',
      'Fotosíntesis',
      'Filtrar la sangre y eliminar desechos',
      'Mitosis'
    ]
  },
  {
    question: '¿Cuál es el órgano responsable de la producción de la bilis?',
    answer: 'Hígado',
    options: [ 'Fotosíntesis', 'Piel', 'Mitosis', 'Hígado' ]
  },
  {
    question: '¿Cuál es el órgano responsable de la producción de glóbulos rojos?',
    answer: 'Médula ósea',
    options: [
      'Transportar oxígeno por todo el cuerpo',
      '206',
      'Médula ósea',
      'Fotosíntesis'
    ]
  },
  {
    question: '¿Cuál es el órgano responsable de la filtración y eliminación de productos de desecho en forma de orina?',
    answer: 'Riñón',
    options: [
      'Hígado',
      'Filtrar la sangre y eliminar desechos',
      'Mitosis',
      'Riñón'
    ]
  },
  {
    question: '¿Cuántos huesos tiene el ser humano aduto en promedio?',
    answer: '206',
    options: [
      '206',
      'Transportar oxígeno por todo el cuerpo',
      'Mitosis',
      'Médula ósea'
    ]
  }
]
