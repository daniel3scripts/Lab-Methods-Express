//archivo que contenga logica de la app

//al creal la funcion se puede usar para
//importar en otro archivo
const data = []
export const index = (req, res) => {
    res.json({
        data: "test success",
    });
};

export const login = (req, res) => {
    const { email, password } = req.body;
    req.body.id = data.length + 1;
    data.push(req.body);

    res.json({
        data: {
            type: "login",
            email,
            password,
        },
    });
};

/* export const login = (req, res) => {
    res.json({
        data: req.body,
    });
}; */

/* export const login = (req, res) => {
    const { email, password } = req.body;
  
    res.json({
      data: {
        type: "login",
        email,
        password,
      },
    });
  };
  
  // destructuracion de objetos
  const obj = {
    name: "claudia",
    age: "23",
    lastname: "perez",
  };
  // si queremos accede a un element de un objeto ".name"
  const { name: nombre, age, lastname } = obj;
  console.log(nombre); // claudia
  console.log(age); // 23
  console.log(lastname); // perez */