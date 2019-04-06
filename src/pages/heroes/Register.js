import React from 'react';

export class Register extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            sex: {
                male: false,
                female: false
            },
            country: '',
            address: '',
            power: {
                flying: false,
                penetration: false,
                hacking: false,
                strength: false
            }
        }
    }

    handleText = (event, key) => {
        // computed property???
        this.setState({[key]: event.target.value})
    }

    handleSex = (e) => {
        console.log(e.target.value, e.target.checked);
        const sex = {
            male: false,
            female: false
        }
        sex[e.target.value] = e.target.checked;

        this.setState({sex})
    }

    handlePower = (e) => {
        console.log(e.target.value, e.target.checked);
        const power = {...this.state.power};
        power[e.target.value] = e.target.checked;

        this.setState({power})
    }

    render() {

        return (
            <div>
                <h3>Hero Registration</h3>

                <form>
                    <div className="form-group mt-1">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name" id="name"
                            onChange={(e) => this.handleText(e, 'name')}
                            value={this.state.name}/>
                    </div>

                    <div className="form-group mt-1">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" placeholder="Enter Email" id="email"
                           onChange={(e) => this.handleText(e, 'email')}
                            value={this.state.email}
                        />
                    </div>

                    <div className="d-flex flex-column mt-1">
                        <div>성별</div>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="sex"
                                       value="male" id="male"
                                       checked={this.state.sex.male}
                                       onChange={(e) => this.handleSex(e)}/>
                                <label className="form-check-label" htmlFor="male">남자</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="sex"
                                       value="female" id="female"
                                       checked={this.state.sex.female}
                                       onChange={(e) => this.handleSex(e)}/>
                                <label className="form-check-label" htmlFor="female">여자</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-1">
                        <label htmlFor="country">country</label>
                        <select className="form-control" id="country"
                                value={this.state.country}
                                onChange={(e) => this.handleText(e, 'country')}>
                            <option value="Japan">Japan</option>
                            <option value="American">American</option>
                            <option value="Korean">Korean</option>
                        </select>
                    </div>

                    <div className="form-group mt-1">
                        <label htmlFor="address">Address</label>
                        <textarea className="form-control" placeholder="Enter address" id="address" rows="3"
                            value={this.state.address}
                            onChange={(e) => this.handleText(e, 'address')}></textarea>
                    </div>

                    <div className="d-flex flex-column mt-1">
                        <div>power</div>
                        <div>
                            <div className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" id="flying"
                                       value="flying"
                                       checked={this.state.power.flying}
                                       onChange={(e) => this.handlePower(e)}/>
                                <label className="form-check-label" htmlFor="flying">flying</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" id="penetration"
                                       value="penetration"
                                       checked={this.state.power.penetration}
                                       onChange={(e) => this.handlePower(e)}/>
                                <label className="form-check-label" htmlFor="penetration">penetration</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" id="hacking"
                                       value="hacking"
                                       checked={this.state.power.hacking}
                                       onChange={(e) => this.handlePower(e)}/>
                                <label className="form-check-label" htmlFor="hacking">hacking</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" id="strength"
                                       value="strength"
                                       checked={this.state.power.strength}
                                       onChange={(e) => this.handlePower(e)}/>
                                <label className="form-check-label" htmlFor="strength">strength</label>
                            </div>
                        </div>
                    </div>

                    <div className="m-3 d-flex justify-content-center">
                        <button type="submit" className="btn btn-outline-primary">등록</button>
                    </div>

                </form>
            </div>


        )
    }


}
