import React from 'react';
import handsBackground from '../../assets/hands-bg.svg';

export default function Home() {
    return (
        <React.Fragment>
            <div className="col-sm-6 d-flex align-items-end pt-100">
                <div className="d-flex align-items-end flex-column">
                    <div className="d-flex flex-column w-50">
                        <p><strong>Opis strony dolor sit amet,
                            consectetur adipiscing elit!</strong> Sem
                            tristique odio rhoncus auctor urna
                            tincidunt nec.</p>
                        <div className="d-flex flex-column">
                            <button className="btn btn-secondary mb-2">Dodaj ogłoszenie</button>
                            <button className="btn btn-primary mb-2">Przeglądaj ogłoszenia</button>
                            <button className="btn btn-link">Jak to działa?</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 right-column">
                <div className="d-flex flex-column right-wrapper">
                    <img className="w-75" src={handsBackground} alt="Obraz przedstawiający ręce"/>
                    <div className="d-flex align-self-center flex-column w-50">
                        <p>Sem tristique odio rhoncus auctor
                            urna tincidunt nec.Interdum amet,
                            odio et sed id mi eget in. </p>
                        <button className="btn btn-light">Samouczek</button>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}
