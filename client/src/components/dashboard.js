import React,{Component} from 'react'
import axios from 'axios'
import Task from './task'
import Tooltips from './tooltip'
import AddUser from './forms/addUser'

class Dashboard extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      show: true,
      tasks:[],
      err:'',
      loading:true
    };
    
    this.getData = this.getData.bind(this)
  }
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  componentDidMount = ()=>{
    this.getData();
    setInterval(() => {
      this.getData();
  }, 5000);

  }
  getData = () => {
    axios.get('/tasks')
    .then((r)=> {
        this.setState({
            tasks: r.data,
            err:''
        })
    })
    .then(()=>{
      this.setState({
        loading:false
    })
    })
    .catch((e)=>{
        this.setState({
            err: e
        })
    })
   
    
}
    render(){
        return(
            <div>
                  <side>
                      <span className="logo">EMRE</span>
                      <ul className="side-menu">
                        <li>
                          <a href="/">
                            <i className="fas fa-list-alt"></i>
                            <span className="menu-text">Manage</span>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fas fa-list-alt"></i>
                            <span className="menu-text">Masnage</span>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fas fa-list-alt"></i>
                            <span className="menu-text">Manage</span>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fas fa-list-alt"></i>
                            <span className="menu-text">Manage</span>
                          </a>
                        </li>
                      </ul>
                    </side>
                    <div className="con">
                <header>
                  <div className="container">
                    <div className="searchbar">
                      <input type="text" className="search" placeholder="Ara..."/>
                    </div>
                    <div className="profilewidget"><AddUser/></div>
                  </div>
                </header>
              
                <aside>
                    <div className="container">
                      <div className="space">
                          <h2 className="story">Story</h2>
                      </div>
                        <div className="row">
                          <div className="col-sm mcell mcolor1">
                          <ul>
                            <div className="mcell-title story">
                                Backlog
                                <Tooltips id="1" content="You can do what you want to do with this column" placement="top" />                            </div>
                            <Task tasks={this.state.tasks} loading={this.state.loading} filter="1"/>
                            <li className="mcell-task">test</li>
                              </ul>
                          </div>
                          <div className="col-sm mcell mcolor2">
                              <ul id="inprogress">
                              <div className="mcell-title story">
                                TODO
                                <Tooltips id="2" content="You can do what you want to do with this column" placement="top" />
                              </div>
                              <Task tasks={this.state.tasks} loading={this.state.loading} filter="2"/>
                              </ul>
                          </div>
                          
                          <div className="col-sm mcell mcolor3">
                              <ul>
                              <div className="mcell-title story">
                                In Progress
                                <Tooltips id="3" content="You can do what you want to do with this column" placement="top" />                              </div>
                              <Task tasks={this.state.tasks} loading={this.state.loading} filter="3"/>
                          </ul>
                          </div>
                          <div className="col-sm mcell mcolor4">
                          <ul id="done2">
                              <div className="mcell-title story">
                                Done
                                <Tooltips id="4" content="You can do what you want to do with this column" placement="top" />                              </div>
                              <Task tasks={this.state.tasks} loading={this.state.loading} filter="4"/>
                              </ul>
                            </div>
                        </div>
                      </div>
                </aside>
       

        
                </div>
                </div>
        )
    }
}
export default Dashboard