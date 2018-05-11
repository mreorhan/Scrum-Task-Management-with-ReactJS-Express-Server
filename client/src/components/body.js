import React,{Component} from 'react'
import axios from 'axios'
import moment from 'moment'
import Task from './task'
import Tooltips from './tooltip';
import $ from 'jquery'; 
class Body extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      show: true,
      tasks:[],
      err:'',
      loading:true
    };
    
    this.getPopularData= this.getPopularData.bind(this)
  }
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  componentDidMount = ()=>{
    setInterval(() => {
      this.getPopularData();
  }, 2000);
    
    
$('li').bind('drag', function(event) {
  event.dataTransfer.or.setData("text/plain",  event.target.getAttribute('id'));
});

$('ul').bind('dragover', function(event) {
  event.preventDefault();
});
$('li').bind('drop', function(event) {
  return false;
});

$('ul').bind('drop', function(event) {
  event.preventDefault();
  var listitem = event.dataTransfer.getData("text/plain");
  event.target.appendChild(document.getElementById(listitem));

});
  }
  getPopularData = () => {
    axios.get('http://localhost:3000/tasks')
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
                    <div className="profilewidget"></div>
                  </div>
                </header>
              
                <aside>
                    <div className="container">
                      <div className="space">
                          <h2 className="story">Story</h2>
                      </div>
                        <div className="row">
                          <div className="col-sm mcell mcolor1">
                          <ul id="todo">
                            <div className="mcell-title story">
                                Backlog
                                <Tooltips id="1" content="You can do what you want to do with this column" placement="top" />                            </div>
                            <Task tasks={this.state.tasks} loading={this.state.loading} filter="1"/>
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
                              <ul id="done">
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
export default Body