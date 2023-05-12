import { Helmet } from "react-helmet";

import './singleCharacter.scss';

const SingleCharacter = ({data}) => {
    const {name, description, thumbnail} = data;

    return (
        <div className="single-comic">
            <Helmet>
                <meta 
                    name="description"
                    content={`${name} character`}/>
                <title>{`Character page: ${name}`}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__char-img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-colmic__descr">{description}</p>
            </div>
        </div>
    )
}

export default SingleCharacter;