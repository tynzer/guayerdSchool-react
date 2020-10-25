import React from 'react';
import Form from './Components/Form';
import ItemList from './Components/ItemList';
import alumnos from './db/alumnos.json';
import materias from './db/materias.json';


/* Estructura de datosm, array listado de notas:
  ListaodoNotas=  [
        {
            nombre:"", 
            materias:[
                {
                    nombre:"", 
                    nota
                },
                {
                    nombre:"",
                    nota
                },{
                    nombre:"", 
                    nota
                }]
        },
    ]
*/

class App extends React.Component {
  constructor(props) {
    super(props)
    // No hagas esto!
    this.state = {

      listadoNotas: []
    }
  }

  AlumnosImput = (nota, nombre, materia) => {
    //poner un callback como segundo parametro para asincronismo
    this.setState({ nota, nombre, materia }, () => console.log(nota, this.state.nota))
    const newArrayListadoNotas = [...this.state.listadoNotas] // se clona porque nose pude interiactuar con el estado
    const indexNombre = newArrayListadoNotas.findIndex(e => e.nombre === nombre)
    if (newArrayListadoNotas[indexNombre] >= 0) { //si ya tenia el nombre actualizar el array
      newArrayListadoNotas[indexNombre].materias.push({ materia, nota })
    } else {
      newArrayListadoNotas.push({ nombre, materias: [{ materia, nota }] })
    }
    this.setState({ listadoNotas: newArrayListadoNotas })
    console.log("STATE", newArrayListadoNotas);

  }


  render() {
    console.log("STATE", this.state.listadoNotas);
    return (
      <> <h1 style={{ marginLeft: '1rem' }}>Guayerd High School</h1>
        <Form alumnos={alumnos}
          materias={materias}
          notaImput={this.AlumnosImput}
        />
        <ItemList notasList={this.state.listadoNotas} />
        </>
    );
  }
}

export default App;

