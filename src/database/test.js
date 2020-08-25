const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Kainan Salles",
        avatar:"https://avatars1.githubusercontent.com/u/20048854?s=400&u=dcdfe3ec568bd4c10b8de74799d89733da4c140b&v=4",
        whatsapp:"11 981588552",
        bio:"Meu nome é Kainan tenho 23 anos, nao tenho sexo indefinido porem sou feliz, e posso te ajudar.",
    }

    classValue = {
        subject: 1,
        cost:"20",
        // o proffy id vira pelo banco de dados
    }

     classScheduleValues = [
         //class_id vira pelo banco de dados
         {
             weekday: 1,
             time_from: 720,
             time_to: 1220
         },
         {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
     ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues}) 

    // Consultar os dados inseridos

     // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
     //console.log(selectedProffys)

     // Consultar as classes de um determinado professor
     // e trazer junto os dados do professor
     const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
     `)
    // console.log(selectClassesAndProffys)

     // o horario que a pessoa trabalha, por exemplo, é das 8 as 18
     // o horario do time_from = 8h precisa ser menor ou igual ao horario solicitado
     // o time_to precisa ser acima
     const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
     `)

    // console.log(selectClassesSchedule)

})