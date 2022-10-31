const products = [
    {
        id: 0,
        name:"Green Dog",
        price: 6900,
        desciption: "Green Dog, alimento 100% Vegetal!",
        imgSrc: "./Images/GD.PNG",
        Type: "Perros",
    },
    {
        id: 1,
        name:"ProPlan",
        price: 7000,
        desciption: "Proplan un clasico en alimentos",
        imgSrc: "./Images/Proplan.png",
        Type: "Perros",
    },
    {
        id: 2,
        name:"Royal Canin",
        price: 12000,
        desciption: "Royal Canin, alimento de excelencia",
        imgSrc: "./Images/Royal.png",
        Type: "Perros",
    },
    {
        id: 3,
        name:"Eukanuba",
        price: 10000,
        desciption: "Eukanuba, un clasico en el mercado",
        imgSrc: "./Images/Eukanuba.webp",
        Type: "Perros",
    },
        
    {
        id: 4,
        name:"Agility",
        desciption: "Las fórmulas de Agility están especialmente diseñadas con nutrientes específicos para ayudar a tu gato a alcanzar su máxima expresión genética.",
        imgSrc: "./Images/Agility Gatos.png",
        Type: "Gatos",
    },
{
        id: 5,
        name:"Agility",
        desciption: "Las fórmulas de Agility están especialmente diseñadas con nutrientes específicos para ayudar a tu perro a alcanzar su máxima expresión genética.",
        imgSrc: "./Images/Agility Perros.png",
        Type: "Perros",
    },
{
        id: 6,
        name:"Biopet",
        imgSrc: "./Images/Biopet Perros.png",
        Type: "Perros",
    },
{
        id: 7,
        name:"Cat Chow",
        desciption: "Defense Plus, una combinación exclusiva de prebiótico natural, antioxidantes, vitaminas y minerales que ayudan a fortalecer las defensas naturales de tu gato. Esto ayudará a promover un sistema inmune fuerte para proteger su estilo de vida único.",
        imgSrc: "./Images/Cat Chow Gatos.png",
        Type: "Gatos",
    },



{
        id: 8,
        name:"Cat Selection",
        desciption: "CAT SELECTION está especialmente formulado para lograr niveles bajos de acidez en la orina y evitar la formación de cristales (urolitos) causantes de la Enfermedad de las Vías Urinarias Inferiores Felinas.",
        imgSrc: "./Images/Cat Selection Gatos.png",
        Type: "Gatos",
    },
{
        id: 9,
        name:"Dog Chow",
        desciption: "Nutrición específicamente diseñada para el óptimo desarrollo de tu perro adulto o cachorro que ayuda a mejorar su calidad de vida desde adentro hacia afuera de forma visible.",
        imgSrc: "./Images/Dog Chow Perros.png",
        Type: "Perros",
    },
{
        id: 10,
        name:"Dog Selection",
        desciption: "Las PROTEÍNAS de ALTA CALIDAD utilizadas en conjunto con vitaminas, minerales y ácidos grasos ricos en Omega 3 y 6 favorecen el mantenimiento de una PIEL SANA y un PELO FUERTE Y BRILLANTE.",
        imgSrc: "./Images/Dog Selection Perros.png",
        Type: "Perros",
    },
{
        id: 11,
        name:"Excellent",
        desciption: "La exclusiva combinación de ingredientes seleccionados le confiere a las fórmulas Excellent® la propiedad de generar cambios significativos en la calidad de vida de los gatos.",
        imgSrc: "./Images/Excellent Gatos.png",
        Type: "Gatos",
    },




{
        id: 12,
        name:"Excellent",
        desciption: "La exclusiva combinación de ingredientes seleccionados le confiere a las fórmulas Excellent® la propiedad de generar cambios significativos en la calidad de vida de los perros.",
        imgSrc: "./Images/Excellent Perros.png",
        Type: "Perros",
    },
{
        id: 13,
        name:"Otras marcas",
        desciption: "Alimentos secos.",
        imgSrc: "./Images/Gatos 1.png",
        Type: "Gatos",
    },
{
        id: 14,
        name:"Gatti",
        desciption: "contiene nutrientes de la carne, el pescado y el pollo, mezclados con cereales y vegetales, lo que hacen que esta novedosa combinación de sabores le recuerde a la comida de verdad.",
        imgSrc: "./Images/Gatti Gatos.png",
        Type: "Gatos",
    },
{
        id: 15,
        name:"Green Dog",
        desciption: "CONOCÉ UN ALIMENTO 100% PROTEÍNA VEGETAL, NATURALMENTE HIPOALERGENICO, BAJO EN SODIO Y LIBRE DE GLUTEN.",
        imgSrc: "./Images/Green Dog Perros.png",
        Type: "Perros",
    },

{
        id: 16,
        name:"Maintenance Criadores",
        desciption: "El nuevo Maintenance Criadores Gatos Salmón & Atún de 15kg es un alimento balanceado completo para gatos adultos. Ayuda a mantener el peso ideal de los gatos adultos complementado con altos niveles de proteína de alta calidad.",
        imgSrc: "./Images/Maintenance Criadores Gatos.png",
        Type: "Gatos",
    },
{
        id: 17,
        name:"Maintenance Criadores",
        desciption: "es un alimento pensado para perros adultos y cachorros de todas las razas y tamaños a partir de 12 meses de edad con actividad física moderada a alta.",
        imgSrc: "./Images/Maintenance Criadores Perros.png",
        Type: "Perros",
    },
{
        id: 18,
        name:"Master y Upper Crock",
        desciption: "Alimento completamente balanceado, cubre las necesidades energéticas, vitamínicas, minerales y proteicas de tu perro. Aporta a la longevidad de articulaciones y permite un balance perfecto para control de peso.",
        imgSrc: "./Images/Master y Upper Crock Perros.png",
        Type: "Perros",
    },
{
        id: 19,
        name:"Master y Upper Crock",
        desciption: "Alimento completamente balanceado, cubre las necesidades energéticas, vitamínicas, minerales y proteicas de tu gato. Aporta a la longevidad de articulaciones y permite un balance perfecto para control de peso.",
        imgSrc: "./Images/Master y Upper Crock Gatos.png",
        Type: "Gatos",
    },


{
        id: 20,
        name:"Nutribon",
        desciption: "Piel y pelaje mas saludables, músculos sanos, fuente de proteína de origen animal con un adecuado nivel de aminoácidos esenciales y mejora la digestión.",
        imgSrc: "./Images/Nutribon Gatos.png",
        Type: "Gatos",
    },
{
        id: 21,
        name:"Nutribon",
        desciption: "Alimento balanceado completo cocido por extrusión resultado de una mezcla equilibrada de macronutrientes, micronutrientes de alta calidad que cumplen con los requerimientos alimenticios de todas las etapas de la vida del perro.",
        imgSrc: "./Images/Nutribon Perros.png",
        Type: "Perros",
    },
{
        id: 22,
        name:"Old Prince Equilibrium",
        desciption: "Esta línea cuenta con una formulación que incorpora fuentes innovadoras de sales compuestas y fibras de baja fermentación que aportan propiedades beneficiosas para perros y gatos fomentando el estado saludable del organismo..",
        imgSrc: "./Images/Old Prince Equilibrium Gatos.png",
        Type: "Gatos",
    },
{
        id: 23,
        name:"Old Prince Equilibrium",
        desciption: "Esta línea cuenta con una formulación que incorpora fuentes innovadoras de sales compuestas y fibras de baja fermentación que aportan propiedades beneficiosas para perros y gatos fomentando el estado saludable del organismo..",
        imgSrc: "./Images/Old Prince Equilibrium Perros.png",
        Type: "Perros",
    },


{
        id: 24,
        name:"Old Prince Cordero",
        desciption: "es la línea Premium de alimento para perros y gatos. No contiene soja ni sus derivados y utiliza ingredientes superiores de origen natural para brindar la más alta calidad. Además, cuenta con fórmulas desarrolladas según las necesidades específicas cubriendo todos los requerimientos nutricionales.",
        imgSrc: "./Images/Old Prince linea Cordero y Cerdo Perros.png",
        Type: "Perros",
    },
{
        id: 25,
        name:"Pedigree",
        desciption: "Cuenta con Omega 6 y Zinc, para un pelaje más brilloso y sano. Facilita el proceso digestivo y permite una mejor absorción de los nutrientes. Además, contiene cereales que le aportan la energía necesaria para encarar el día.",
        imgSrc: "./Images/Pedigree Perros.png",
        Type: "Perros",
    },
{
        id: 26,
        name:"Otras marcas",
        desciption: "Alimentos secos.",
        imgSrc: "./Images/Perros 1.png",
        Type: "Perros",
    },
{
        id: 27,
        name:"Otras marcas",
        desciption: "Alimentos secos.",
        imgSrc: "./Images/Perros 2.png",
        Type: "Perros",
    },
{
        id: 28,
        name:"Otras marcas",
        desciption: "Alimentos secos.",
        imgSrc: "./Images/Perros 3.png",
        Type: "Perros",
    },
{
        id: 29,
        name:"Otras marcas",
        desciption: "Alimentos secos.",
        imgSrc: "./Images/Perros 4.png",
        Type: "Perros",
    },
{
        id: 30,
        name:"Pro Plan",
        desciption: "es una opción alimenticia de calidad Premiun para los gatos. Su alto contenido nutricional y la tecnología moderna con la que están elaborados sus productos lo mantienen entre los preferidos en el mercado.",
        imgSrc: "./Images/Pro Plan Gatos.png",
        Type: "Gatos",
    },
{
        id: 31,
        name:"Pro Plan",
        desciption: "es una opción alimenticia de calidad Premiun para los gatos. Su alto contenido nutricional y la tecnología moderna con la que están elaborados sus productos lo mantienen entre los preferidos en el mercado.",
        imgSrc: "./Images/Pro Plan Perros.png",
        Type: "Perros",
    },
{
        id: 32,
        name:"Pro Plan Veterinary",
        desciption: "Los productos de VETERINARY DIETS fueron formulados por científicos, nutricionistas y veterinarios para ayudar a tu perro o gato con necesidades nutricionales especiales. ",
        imgSrc: "./Images/Pro Plan Veterinary Diets Perros.png",
        Type: "Perros",
    },
{
        id: 33,
        name:"Pro Plan Veterinary",
        desciption: "Los productos de VETERINARY DIETS fueron formulados por científicos, nutricionistas y veterinarios para ayudar a tu perro o gato con necesidades nutricionales especiales. ",
        imgSrc: "./Images/Pro Plan Veterinary Diets Gatos.png",
        Type: "Gatos",
    },
{
        id: 34,
        name:"Royal Canin",
        desciption: "Esta gama completa de alimentos secos ofrece una nutrición específica para gatos de todas las edades, tamaños y razas.",
        imgSrc: "./Images/Royal Canin Gatos.png",
        Type: "Gatos",
    },
{
        id: 35,
        name:"Royal Canin",
        desciption: "Esta gama completa de alimentos secos ofrece una nutrición específica para gatos de todas las edades, tamaños y razas.",
        imgSrc: "./Images/Royal Canin Perros.png",
        Type: "Perros",
    },
{
        id: 36,
        name:"Royal Canin Veterinary",
        desciption: "Nutrición específica para satisfacer las necesidades terapéuticas de gatos.",
        imgSrc: "./Images/Royal Canin Veterinary Diet Care Gatos.png",
        Type: "Gatos",
    },
{
        id: 37,
        name:"Royal Canin Veterinary",
        desciption: "Nutrición específica para satisfacer las necesidades terapéuticas de perros.",
        imgSrc: "./Images/Royal Canin Veterinary Diet Care Perros.png",
        Type: "Perros",
    },
{
        id: 38,
        name:"Royal Performance",
        desciption: "es un alimento balanceado completo para gatos adultos. Brinda una optima digestibilidad, apetencia reforzada y vitaminas y minerales adaptados.",
        imgSrc: "./Images/Royal Performance Gatos.png",
        Type: "Gatos",
    },
{
        id: 39,
        name:"Royal Performance",
        desciption: "Alimento completo para perros adultos con actividad física normal, digestibilidad optima, enriquecido con vitaminas, alta palatabilidad y contenido de Omega 3 y 6",
        imgSrc: "./Images/Royal Performance Perros.png",
        Type: "Perros",
    },

{
        id: 40,
        name:"Vital Balance",
        desciption: "Un producto específico para cada etapa y condición de tu gato, cuidado celular, equilibrio intestinal y croqueta especial.",
        imgSrc: "./Images/Vital Balance Gatos.png",
        Type: "Gatos",
    },
{
        id: 41,
        name:"Vital Balance",
        desciption: "Un producto específico para cada etapa y condición de tu perro, cuidado celular, equilibrio intestinal y croqueta especial.",
        imgSrc: "./Images/Vital Balance Perros.png",
        Type: "Perros",
    },
{
        id: 42,
        name:"Vital Complete",
        desciption: "Fortalece el músculo cardíaco y previene problemas en la visión. Pelo sano y brillante: el aporte de aceites vegetales Omega 6, aceites de pescado Omega 3, vitamina A y zinc asegura una piel sana y un pelo fuerte, suave y brillante.",
        imgSrc: "./Images/Vital Complete Gatos.png",
        Type: "Gatos",
    },
{
        id: 43,
        name:"Vital Complete",
        desciption: "Fortalece el músculo cardíaco y previene problemas en la visión. Pelo sano y brillante: el aporte de aceites vegetales Omega 6, aceites de pescado Omega 3, vitamina A y zinc asegura una piel sana y un pelo fuerte, suave y brillante.",
        imgSrc: "./Images/Vital Complete Perros.png",
        Type: "Perros",
    },


{
        id: 44,
        name:"Whiskas",
        desciption: "ayuda a mantener su piel y pelo sanos. CON MINERALES CONTROLADOS que ayudan a mantener la salud de su tracto urinario. NUEVAS CROQUETAS con relleno húmedo y cremoso para satisfacer a su exigente paladar.",
        imgSrc: "./Images/Whiskas Gatos.png",
        Type: "Gatos",
    },
{
        id: 45,
        name:"Pouchs",
        desciption: "Alimentos humedos.",
        imgSrc: "./Images/Pouchs Gatos.png",
        Type: "Gatos",
    },
{
        id: 46,
        name:"Pouchs",
        desciption: "Alimentos humedos.",
        imgSrc: "./Images/Pouchs Perros.png",
        Type: "Perros",
    },

































]