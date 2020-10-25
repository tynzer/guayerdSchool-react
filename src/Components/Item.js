import React, { Component } from 'react';


class Item extends Component {
  render() {
    return (
      <>
        {this.props.notasList.map((notaList, i) => {
          return (
            <div key={`nota-div${i}`} className="card" style={{ width: '18rem' }} >
            <div key={`nota-di${i}`} className="card-header">
              {notaList.nombre}
            </div>
            <ul key={`materias-ul${i}`} className="list-group list-group-flush" >
              {notaList.materias.map((materia, i) => {
                return (
                  <div key={`usuario-li${i}`}>
                    <li key={`materia-li${i}`} className="list-group-item">{materia.materia}</li>
                    <li key={`nota-li${i}`} className="list-group-item">{materia.nota}</li>
                  </div>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </>

    );

  }
}

export default Item;


 
