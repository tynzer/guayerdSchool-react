import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    // No hagas esto!
    this.state = {
      nota: 0,
      nombre: props.alumnos[0].nombre,
      materia: props.materias[0].materia,
    }
  }

  handleSubmit = () => {
    const {nombre, materia, nota} = this.state; //Destructurar
    /* alert('Your favorite flavor is: ' + this.state.nota) */
    this.props.notaImput(nota,nombre,materia);
 
/*     this.setState({nombre : this.state.nombre.concat(this.state.nombre)})
 */    

  }

  handleChangeAlu = event => {
    this.setState({ nombre: event.target.value });
    console.log(this.state.nombre)
  }
  handleChangeMat = event => {
    this.setState({ materia: event.target.value });
  }
  handleChangeNota = event => {
    this.setState({ nota: event.target.value });

  }



  render() {

    return (

      <div >
        <label htmlFor="alumno" style={{ marginLeft: '1rem' }}> Alumno:</label>
        <select id="alumno" name="alumno" onChange={this.handleChangeAlu} value={this.state.nombre} style={{ marginLeft: '1rem' }} >
          {this.props.alumnos.map((alumno, i) => {
            return (
              <option key={`alumno${i}`} value={alumno.nombre}>{alumno.nombre}</option>
            )
          })}
        </select>
        <label htmlFor="materia" style={{ marginLeft: '1rem' }}> Materia:</label>
        <select id="materia" name="materia" onChange={this.handleChangeMat} value={this.state.materia} style={{ marginLeft: '1rem' }}>
          {this.props.materias.map((materia, i) => {
            return (
              <option key={`materia${i}`} value={materia.materia}>{materia.materia}</option>
            )
          })}
        </select>
        <label htmlFor="nota" style={{ marginLeft: '1rem' }}>Nota:</label>
        <input type="number" id="nota" name="nota" min={1} max={10} value={this.state.nota} onChange={this.handleChangeNota}  style={{ marginLeft: '1rem' }}/>
        <button onClick={this.handleSubmit} type="button" className="btn btn-primary" style={{ marginLeft: '1rem' }} >Enviar</button>
      </div>

    );
  }
}

export default Form;
