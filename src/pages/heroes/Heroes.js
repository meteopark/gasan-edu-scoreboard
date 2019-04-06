import React from 'react';
import * as axios from 'axios/index';
import styles from './Heroes.module.scss';

export class Heroes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            heroes: []
        }
    }

    render() {

        return (
            <ul className={styles["img-box"]}>
                {this.state.heroes.map(hero => (
                    <li key={hero.hero_id}>

                        <img
                            src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/default.svg'}
                            alt={hero.name} className={styles.img}/>
                            <span>{hero.name}</span>
                    </li>
                ))}
            </ul>
        )
    }

    componentDidMount() {
        this.getHeroes();
    }

    getHeroes = async() => {

        const res = await axios.get('http://eastflag.co.kr:8080/api/heroes');
        this.setState({heroes: res.data});
        // let response = axios.get('http://eastflag.co.kr:8080/api/heroes').then(res => console.log(res.data));
    }

}
