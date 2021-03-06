import React, {useState, useEffect} from 'react';
import TechItem from './TechItem';

export const TechListModal = () => {
    //create our state vars and functions
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    //will render upon loading component
    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);

    const getTechs = async () => {
        setLoading(true);
        //no need for localhost:5000/techs, due to proxy
        const res = await fetch('/techs');
        const data = await res.json();

        setTechs(data);
        setLoading(false);
    }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading &&
                        techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
                </ul>
            </div>
        </div>
    )
}

export default TechListModal;