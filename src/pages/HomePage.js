import React from "react"
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="public\images\alfajores.jpg" alt="alfajores" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Cocó es una empresa familiar dedicada a la producción de tortas personalizadas, chocolatería y demás comestibles dulces. Nos dedicamos a esto desde 2015, llegando con amor a los hogares de nuestros clientes para cada gran evento. </p>

                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <span className="cita">Excelente atención ..muy rico todo!!</span>
                    <span className="autor">Juli C</span>

                </div>

            </div>
        </main>
    )
}

export default HomePage