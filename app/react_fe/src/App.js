import React, {Component} from 'react';
import style from './css/bootstrap.min.css';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
        <div>
            <nav
                className={style.navbar + " " + style["navbar-expand-lg"] + " " + style["navbar-dark"] + " " + style["bg-primary"]}>
                <a className={style["navbar-brand"]} href="#">Ticket System</a>
                <div className={style.collapse + " " + style["navbar-collapse"]} id="navbarColor01">
                    <ul className={style["navbar-nav"] + " " + style["mr-auto"]}>
                        <li className={style["nav-item"] + " " + style.active}>
                            <a className={style["nav-link"]} href="#">Home <span
                                className={style["sr-only"]}>(current)</span></a>
                        </li>

                    </ul>
                </div>

            </nav>

        <Dashboard />
      </div>
    )
  }
}

export default App;
