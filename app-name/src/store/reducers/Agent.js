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
        descripcion: "Criado en la ciudad de Kioto, Azami desdibuja las líneas entre lo ultramoderno y lo tradicional. Encerrada por las rígidas reglas de su hogar, encontró salidas para expresarse a través de la moda y el combate físico. Su enfoque y determinación le permitieron a Azami progresar rápidamente en las filas de Aikido. Esta aptitud, así como su dedicado estudio de idiomas, le fueron muy útiles cuando se mudó a Tokio para estudiar en la Academia de Policía Metropolitana."
    },
    {
        id: 10,
        name: 'THORN',
        image: "/agents/agent10.jpg",
        descripcion: "Thorn creció en una granja en una parte de Irlanda conocida por dos cosas: las carreras de caballos y el entrenamiento militar. Durante varias generaciones, su familia estuvo muy involucrada con ambos. Cuando no estaba superando a uno de sus cinco hermanos mayores, ayudaba a sus padres a criar pura sangre para las pistas y para la división montada de la policía nacional de Irlanda. Es una tradición de la familia Hawthorn abandonar eventualmente la vida agrícola por el ejército, ya que se considera 'más fácil'. Sin embargo, Thorn optó por seguir a los caballos y se unió a la Garda Síochána."
    },
    {
        id: 11,
        name: 'THUNDERBIRD',
        image: "/agents/agent11.jpg",
        descripcion: "Nacida en los Territorios Nakoda de Saskatchewan, la primera lección de Thunderbird de su madre fue la importancia de la comunidad. Su primera introducción a los motores fue en las rodillas de su padre, él le enseñó a entender los helicópteros antes de aprender a volar uno.\
        Siempre ansiosa por nuevas experiencias, se inscribió en el Programa Bold Eagle a los diecisiete años, donde se destacó en el entrenamiento militar básico. Mientras se beneficiaba de la guía de los ancianos de la comunidad y de los instructores indígenas, este programa despertó su interés en preservar y proteger lo que más amaba, el estilo de vida Nakoda."
    },
    {
        id: 12,
        name: 'ARUNI',
        image: "/agents/agent12.jpg",
        descripcion: "As a private detective, her discovery of a bomb plot in Bangkok brought Aruni to the attention of the Royal Thai Police (RTP). Her knack for connecting the dots between seemingly-unrelated incidents earned her grudging respect from Thailand’s male-dominated law enforcement agencies, as well as hostility from numerous criminal syndicates.\
        The RTP offered Aruni a Detective position with the Crime Suppression Division, where she dismantled a human trafficking ring and foiled no fewer than four bomb plots. Her ability to track and connect diverse shipments of explosive materials was lauded by her superiors. Unfortunately, Aruni’s police career ended when she was nearly killed during an operation in Bangkok."
    },
    {
        id: 13,
        name: 'MELUSI',
        image: "/agents/agent13.jpg",
        descripcion: "Nacida en la pequeña ciudad de Louwsburg, cerca de la reserva de caza de Ithala, Ndlovu pasó muchos años explorando con su amiga, Elna Gardiner. A medida que crecían, también lo hacía su aprecio y sentido de responsabilidad por los animales de la reserva. La amenaza de los cazadores furtivos alimentó su determinación y, aunque estaban obsesionados, se concentraron en las vidas que podían salvar, en lugar de las bajas pasadas.\
        Ndlovu se inscribió en la Fuerza de Defensa Nacional de Sudáfrica para ampliar su conjunto de habilidades y financiar su capacitación como guardabosques de campo. Su persistencia y dedicación llamaron la atención del 1 Batallón de Paracaidistas, hasta que una emboscada en la República Centroafricana la dejó gravemente herida."
    },
    {
        id: 14,
        name: 'ORYX',
        image: "/agents/agent14.jpg",
        descripcion: "Poco se sabe sobre la vida de Al Hadid. Creció en un pequeño pueblo adyacente a una base de la fuerza aérea y, según todos los informes, tuvo una infancia normal hasta que desapareció de los registros internacionales durante más de quince años. Eventualmente reapareció en Jordania, pero se quedó solo el tiempo suficiente para obtener un nuevo pasaporte. Aprendió lucha libre en Estambul, muay thai en Bangkok, conducción táctica en Berlín y puntería de precisión en Damasco, probablemente trabajando para un patrocinador paramilitar. Luego desapareció de nuevo."
    },
    {
        id: 15,
        name: 'WAMAI',
        image: "/agents/agent15.jpg",
        descripcion: "Nacido en una familia de pescadores en la costa de Kenia, Furaha pasó su infancia cazando tiburones y recolectando tesoros perdidos del fondo del océano del archipiélago de Lamu. Pronto se hizo evidente que podía permanecer bajo el agua mucho más tiempo que sus compañeros, y la exploración médica reveló una fisiología anormal que contribuyó a la creencia de larga data de Furaha de que 'no era de aquí'. Cuando surgió la oportunidad de unirse a la Armada de Kenia, y más tarde a la Unidad de Embarcaciones Especiales de Kenia, hizo un buen uso de sus habilidades. Rápidamente llamó la atención de los generales dentro de la marina, así como de la comunidad científica mundial por sus prolíficas y frecuentes inmersiones en apnea sin precedentes. Más tarde hizo la transición a NIGHTHAVEN, atraído por la promesa de más tiempo de inactividad y un bote privado que lo llevaría a donde podría ser su próximo sitio de buceo."
    },
    {
        id: 16,
        name: 'GOYO',
        image: "/agents/agent16.jpg",
        descripcion: "César Ruiz Hernández tenía once años cuando una bomba destruyó su casa, matando a su padre ya su hermana e hiriendo gravemente a su madre. Con la ayuda de la especialista Azucena Rocío “Amaru” Quispe, la madre de César, Sofía, le enseñó a observar su entorno y evitar a los otros niños de su edad que se habían visto envueltos en asuntos relacionados con pandillas. Ella lo animó a matricularse en la Heroica Escuela Naval Militar, donde se graduó como teniente de corbeta. Se unió a la Infantería Naval, luego al Batallón de Comando Anfibio, participando extensamente en operaciones contra el contrabando y varios arrestos de alto perfil. Convertirse en miembro de las Fuerzas Especiales lo introdujo a la realidad de que las drogas ya no eran la principal fuente de ingresos de los cárteles. Comenzó a trabajar con la UNESCO e INTERPOL para combatir el tráfico de antigüedades, donde captó la atención de Rainbow como una mente con un agudo sentido táctico y una excepcional visión de futuro."
    }]
};

const agentReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default agentReducer;