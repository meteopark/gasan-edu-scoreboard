import React from 'react';
import axios from 'axios/index';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.css';

export class Heroes extends React.Component {

    handleChange = (current_page) => {

        this.setState({
            currentPage: current_page,
        });

        this.getHeroes();
    }

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1, // 현재 페이지 번호
            pageSize: 9, // 한 페이지에 보여주는 갯수
            totalCount: 115, // 전체 갯수
            heroes: []
        }

    }

    render() {

        return (
            <div>
                <div className="card-columns">
                    {this.state.heroes.map(hero => (
                        <div className="card" key={hero.hero_id}>
                            <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/default.svg'}
                                 className="card-img-top"
                                 style={{width: '100%'}} alt={hero.name}></img>
                            <div className="card-body">
                                <h5 className="card-title">{hero.name}</h5>
                                <p className="card-text">email: {hero.email}</p>
                                <p className="card-text">sex: {hero.sex}</p>
                            </div>
                        </div>
                    ))}
                </div>
            <Pagination
                className="d-flex justify-content-center"
                current={this.state.currentPage}
                pageSize={this.state.pageSize}
                total={this.state.totalCount}
                onChange={this.handleChange}
            />
            </div>


        )
    }

    componentDidMount() {
        this.getHeroes();
    }

    getHeroes = async () => {

        let start_index = (this.state.currentPage-1) * this.state.pageSize;

        const res = await axios.get(`http://eastflag.co.kr:8080/api/paged_heroes?start_index=${start_index}&page_size=${this.state.pageSize}`);

        this.setState({
            heroes: res.data.data,
            totalCount: res.data.total,
        });
    }

}
