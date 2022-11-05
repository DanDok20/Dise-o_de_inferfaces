let initialState = {
    Atacantes: [{
        id: 1,
        name: 'GRIM',
        image: "/agents/agent1.jpg",
        descripcion: "Cuando crecía en Jurong Singapur, resultaba habitual encontrarse a Keng Boon en la selva, poniendo a prueba las habilidades de supervivencia que le enseñaba su padre. Con 18 años realizó su servicio militar, destacando en la NDU la unidad de élite de las fuerzas navales especiales de Singapur. Keng Boon fue un alumno excelente en la Escuela de Submarinistas FMS, y gracias a su concentración y resistencia completó el entrenamiento y pasó a formar parte del Grupo de Desminado Submarino CDG."
    },
    {
        id: 2,
        name: 'SENS',
        image: "/agents/agent2.jpg",
        descripcion: "Al crecer en una unidad familiar muy unida, Ngoma pudo perseguir sus intereses sin mucha resistencia. Aprendieron todo lo que pudieron sobre psicología y física, mientras recibían formación en música clásica con sus dos hermanos menores. Ngoma también aprendió los conceptos básicos de la mecánica en el garaje de su padre, completando efectivamente el conjunto de habilidades que luego aplicarían en su carrera."
    },
    {
        id: 3,
        name: 'OSA',
        image: "/agents/agent3.jpg",
        descripcion: "Nacida en la familia Janković, propietaria de jugueterías europeas, Anja viajaba constantemente con sus padres, por lo que nunca se sintió estable hasta que se mudó con su tía a Croacia a la edad de 6 años. Allí comenzó sus estudios y aprendió el oficio familiar de fabricación de juguetes, mientras desarrollaba una obsesión cercana por las películas de ciencia ficción de los años 60."
    },
    {
        id: 4,
        name: 'FLORES',
        image: "/agents/agent4.jpg",
        descripcion: "Manteniendo a su madre a medida que su salud empeoraba lentamente, Lucero no estaba satisfecho con el trabajo en el sector público y no estaba impresionado con la escuela militar. Esto lo llevó al robo como ocupación, y encontró un propósito en robar a criminales poderosos para retribuir a los pobres. Operando en el distrito de Flores de Buenos Aires, la notoriedad de Lucero creció y llegó a ser conocido como 'el hombre de Flores'."
    },
    {
        id: 5,
        name: 'ZERO',
        image: "/agents/agent5.jpg",
        descripcion: "Aunque la CIA y Third Echelon han clasificado la mayor parte de la infancia de Fisher, se sabe que nació en Towson, Maryland, un suburbio de Baltimore, donde fue criado por su abuela paterna, Sarah. Se matriculó en un internado militar donde aprendió a concentrar su energía, perfeccionar sus habilidades y seguir órdenes o asegurarse de ocultar la evidencia."
    },
    {
        id: 6,
        name: 'ACE',
        image: "/agents/agent6.jpg",
        descripcion: "Nacido en un pueblo tranquilo pero histórico, Haugland se benefició desde el principio de los grandes elogios y la falta de competencia. Siempre el mejor en todo lo que se proponía, fácilmente se imaginaba a sí mismo como un cirujano pediátrico admirado y se matriculó en la escuela de medicina. Sin embargo, pronto descubrió que memorizar la teoría no era de su agrado y, en cambio, optó por la formación de paramédicos para entrar en acción más rápidamente."
    },
    {
        id: 7,
        name: 'IANA',
        image: "/agents/agent7.jpg",
        descripcion: "La madre de Meijer fue ingeniera principal en el Instrumento de Estructura Atmosférica Huygens que aterrizó en Titán. Animada a alcanzar las estrellas desde temprana edad, estudió Ingeniería Aeroespacial con miras a convertirse en piloto de combate. Desafortunadamente, su albinismo significaba que tenía retina comprometida y su solicitud fue rechazada. Cambió su enfoque a la ingeniería de sistemas, desarrollando lentes de contacto que sobrecorregían su déficit genético mientras integraba una superposición AR de última generación."
    },
    {
        id: 8,
        name: 'KALI',
        image: "/agents/agent8.jpg",
        descripcion: "Nacida de padres adinerados, la capacidad de Shah para lograr sus objetivos estuvo asegurada desde una edad temprana. Esta seguridad en sí misma se topó con una pared de ladrillos cuando trató de unirse al ejército. Su interés por las artes marciales la llevó a alistarse, pero pronto descubrió que a las mujeres no se les permitía servir en unidades de combate. A pesar de todo su dinero y toda su influencia social, había encontrado un obstáculo entre ella y algo que quería, y no se movía. Al dejar el ejército, creó su propia Compañía de Seguridad Privada para operar dentro de las fronteras de la India, luego una Compañía Militar Privada, NIGHTHAVEN, para operar en el extranjero. Rutinariamente negocia contratos multimillonarios con términos increíblemente favorables. Su crueldad es legendaria, pero al convertirse en un recurso que el gobierno indio necesita desesperadamente, eludió las leyes que la alejaban de su objetivo y revalidó su autopercepción como una fuerza imparable en un mundo mayormente estático."
    }],
    Defensores: [{
        id: 9,
        name: 'AZAMI',
        image: "/agents/agent9.jpg",
        descripcion: "hhttps://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/operators/azami"
    },
    {
        id: 10,
        name: 'THORN',
        image: "/agents/agent10.jpg",
        descripcion: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 11,
        name: 'THUNDERBIRD',
        image: "/agents/agent11.jpg",
        descripcion: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 12,
        name: 'ARUNI',
        image: "/agents/agent12.jpg",
        descripcion: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 13,
        name: 'MELUSI',
        image: "/agents/agent13.jpg",
        descripcion: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 14,
        name: 'ORYX',
        image: "/agents/agent14.jpg",
        descripcion: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 15,
        name: 'WAMAI',
        image: "/agents/agent15.jpg",
        descripcion: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 16,
        name: 'GOYO',
        image: "/agents/agent16.jpg",
        descripcion: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    }]
};

const agentReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default agentReducer;