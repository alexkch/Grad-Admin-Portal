import React, {Component} from 'react';

import style from '../../css/bootstrap.min.css';

class User extends Component {
    render () {

        return (
            <div className={style.card + " " + style["text-white"] + " " + style["bg-primary"] + " " + style["mb-3"]}>
                <div className={style["card-header"]}>About...</div>
                <div className={style["card-body"]}>
                    <button type="button" className={style.btn + " " + style["btn-danger"]}>Delete</button>
                </div>
            </div>


        );
    }
}

export default User;
