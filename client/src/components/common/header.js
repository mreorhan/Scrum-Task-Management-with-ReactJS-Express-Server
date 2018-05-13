import React,{Component} from 'react'
import {Link} from 'react-router'
import AddUser from '../forms/addUser'

class Header extends Component{
    render(){
        return(
                <header>
                  <div className="container containerDashboard">
                    <div className="mainMenu">
                      <ul>
                      <Link to="/story/1"><li><i class="fas fa-folder-open"></i> Projects</li></Link>
                      <Link to="/about"><li><i class="fas fa-thumbs-up"/> About</li></Link>
                      <a target="_blank" href="https://github.com/mreorhan/Scrum-Task-Management-with-ReactJS-Express-Server"><li><i class="fas fa-code-branch"/> Fork Me on Github</li></a>
                      </ul>
                    </div>
                    <div className="profilewidget">
                      <AddUser/>
                    </div>
                  </div>
                </header>
        )
    }
}
export default Header