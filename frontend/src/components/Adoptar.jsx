import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import adoptar from "../img/adoptar.jpg"

const Adoptar = () => {

  const data = [
    {name: "Ulises",
     age: 10, 
     size: "Mediano",
     img: "https://imagenes.milenio.com/ha4qDmHv_VcqdeLI8JLe2KFhLe0=/958x596/https://www.milenio.com/uploads/media/2020/09/09/volverse-viral-vicente-consiguio-familia_0_0_1200_747.jpg"
    },
     {name: "Tyson",
     age: 5, 
     size: "Chico",
     img: "https://imagenes.milenio.com/ha4qDmHv_VcqdeLI8JLe2KFhLe0=/958x596/https://www.milenio.com/uploads/media/2020/09/09/volverse-viral-vicente-consiguio-familia_0_0_1200_747.jpg"
    },
     {name: "Juan Carlos",
     age: 3, 
     size: "Grande",
     img: "https://imagenes.milenio.com/ha4qDmHv_VcqdeLI8JLe2KFhLe0=/958x596/https://www.milenio.com/uploads/media/2020/09/09/volverse-viral-vicente-consiguio-familia_0_0_1200_747.jpg"
    },
    {name: "Gregorio",
     age: 4, 
     size: "Grande",
     img: "https://imagenes.milenio.com/ha4qDmHv_VcqdeLI8JLe2KFhLe0=/958x596/https://www.milenio.com/uploads/media/2020/09/09/volverse-viral-vicente-consiguio-familia_0_0_1200_747.jpg"
    },
    {name: "Simon",
     age: 8, 
     size: "Mediano",
     img: "https://imagenes.milenio.com/ha4qDmHv_VcqdeLI8JLe2KFhLe0=/958x596/https://www.milenio.com/uploads/media/2020/09/09/volverse-viral-vicente-consiguio-familia_0_0_1200_747.jpg"
    },
    {name: "Doncella",
    age: 11, 
    size: "Chico",
    img: "https://imagenes.milenio.com/ha4qDmHv_VcqdeLI8JLe2KFhLe0=/958x596/https://www.milenio.com/uploads/media/2020/09/09/volverse-viral-vicente-consiguio-familia_0_0_1200_747.jpg"
   }
]


  return (
    <Fragment>
      <div className="adoptar-container">
        <div className="adoptar-up">
          <h2>ADOPTAR</h2>
        </div>
        <div className="adoptar-card-container">
          {data.map((dog) => {
            return <div key={dog.id} className="adoptar-single-card">
              <div>
                <h3 className="adoptar-single-card-title">{dog.name}</h3>
                <img className="adoptar-img" src="https://cf.ltkcdn.net/dogs/images/orig/227324-2120x1414-Golden-Retriever-lying-on-floor.jpg" alt=""/>
                <div className="adoptar-description">
                <p><strong>Edad:</strong> {dog.age}</p>
                <p><strong>Tamaño:</strong> {dog.size}</p>
                <p><strong>Descripcion:</strong> Un perrito muy lindo que quiere tener hogar.</p>
                </div>
              </div>
              <button className="adoptar-btn">Quiero Adoptarlo</button>
            </div>
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Adoptar;