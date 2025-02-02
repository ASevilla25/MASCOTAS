import React from "react"
import "./inicio.css"
import logo from '../../Fotos/Favicon.png';
import img from '../../Fotos/Kiara.jpg';
import pet1 from '../../Fotos/Magnus.jpeg'
import pet2 from '../../Fotos/Max.png'

const Inicio = () => {
    return(
        
        <div className="containe-fluid div-inicio">
            <div className="row">
                <div className="col-3 div-izq">
                    <div className="text-center fondo-logo">
                <img src={logo} alt="Logo" className="logo-inicio"/>
                </div><br/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item lista-color row"><img src={img} alt="Usuario" className="logo-user"/> Juan</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-house-chimney font-icon"></i> Inicio </li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-hashtag font-icon"></i> Actividades</li>
                    <li class="list-group-item lista-color"><i class="fa-regular fa-user font-icon"></i>Perfil</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-paw font-icon"></i>Adopciones</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-question font-icon"></i>Preguntas</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-info font-icon"></i>Informacion</li>
                </ul>
                </div>
                <div className="col-6 div-center">
                    <div className="card mb-3 border-primary color-card">
                        <img src={pet1} className="card-img-top img-mascotas" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Cachorros</h5>
                            <p className="card-text">Este amigo fue encontrado a la altura de Col. Las Brisas, en una tarde lluviosa bajo el puente.</p>
                            <p className="card-text"><small className="text-muted">Lunes 25 de septiembre</small></p>
                        </div>
                    </div>

                    <div className="card mb-3 border-primary color-card">
                        <img src={pet2} className="card-img-top img-mascotas" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Feliciti</h5>
                            <p className="card-text">Esta amiga fue encontrado a la altura de Col. del Carrizal, por unos  jovenes estudiantes de colegio. La misma se encontraba mal alimentada</p>
                            <p className="card-text"><small className="text-muted">Lunes 25 de agosto</small></p>
                        </div>
                    </div>
                </div>

                
                <div className="col-3 div-der">
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Buscar</span>
                    <input type="text" className="form-control" placeholder="Actividades"/>
                </div><br/>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item lista-act">Entrenamiento 
                        <p className="card-text"><small className="text-muted">Que hacer con nuestro nuevo amigo.</small></p>
                    </li>
                    <li class="list-group-item lista-act">Alimentacion
                        <p className="card-text"><small className="text-muted">Alimentos recomendados</small></p>
                    </li>
                    <li class="list-group-item lista-act">Recoleccion
                        <p className="card-text"><small className="text-muted">Voluntario en actividad de recaudacion</small></p>
                    </li>
                    <li class="list-group-item lista-act">Adopciones
                        <p className="card-text"><small className="text-muted">Beneficios de adoptar</small></p>
                    </li>
                    <li class="list-group-item lista-act">Foto
                        <p className="card-text"><small className="text-muted">Ven y sumate a nuestro programa</small></p>
                    </li>
                    <li class="list-group-item lista-act">Veterinarios
                        <p className="card-text"><small className="text-muted">Ven a escuchar al Veterinario Garcia hablar...</small></p>
                    </li>
                    <li class="list-group-item lista-act">Infancia
                        <p className="card-text"><small className="text-muted">Dos mundos, un ambiente.</small></p>
                    </li>
                </ul>
                </div>
            </div>
            
        </div>
         
        
    )
}

export default Inicio