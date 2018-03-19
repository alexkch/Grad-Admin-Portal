import React, {Component} from 'react';

import style from '../../css/bootstrap.min.css';

class UserInfo extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    };

    render () {
        return (
            <div className={style.card + " " + style["text-white"] + " " + style["bg-info"] + " " + style["mb-3"]}>
                <div className={style["card-header"]}>Add a Issue</div>
                <div className={style["card-body"]}>
                    <div className={style["form-group"]}>
                        <label className={style["col-form-label"] + " " + style["col-form-label-sm"]}>Issue</label>
                        <input className={style["form-control"] + " " + style["form-control-sm"]} type="text"
                               value={this.state.title}
                               onChange={(event) => this.setState({title: event.target.value})}/>
                        <label>Description</label>
                        <textarea className={style["form-control"]} rows="4" value={this.state.content}
                                  onChange={(event) => this.setState({content: event.target.value})}/>
                        <label>Author</label>
                        <select className={style["form-control"]} value={this.state.author}
                                onChange={(event) => this.setState({author: event.target.value})}>
                            <option value="Max">Max</option>
                            <option value="Manu">Manu</option>
                        </select>

                    </div>
                    <button className={style.btn + " " + style["btn-secondary"]}>Add Issue</button>
                </div>
            </div>
        );
    }
}

export default UserInfo;
