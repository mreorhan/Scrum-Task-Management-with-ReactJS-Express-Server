import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router'
import AddUser from './forms/addUser'
import Story from './story'
import AddStory from './forms/addStory';
import Loader from './loader'
class Dashboard extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      show: true,
      tasks:[],
      stories:[],
      err:'',
      err2:'',
      loading:true,
      loadingStory:true
    };
    
    this.getData = this.getData.bind(this)
  }
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  componentDidMount = ()=>{
    this.getStoryDetails();
    this.getData();
    setInterval(() => {
      this.getData();
  }, 2000);

  }
  getStoryDetails = () => {
    axios.get(`/story`)
    .then((r)=> {
        this.setState({
            stories: r.data,
            err2:''
        })
    })
    .then(()=>{
      this.setState({
        loadingStory:false
    })
  })
    .catch((e)=>{
        this.setState({
            err2: e
        })
    })
   
  }
  getData = () => {
    axios.get(`/tasks/${this.props.params.id}`)
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
    console.log(this.props.params.id)
    })
    .catch((e)=>{
        this.setState({
            err: e
        })
    })
   
    
}
    render(){
      let {stories,loadingStory} = this.state;
      let storyTable;
      if(!loadingStory)
      storyTable = stories.map((story,index)=>{
        return(
          <li>
            <Link to={`/story/${story.storyId}`} activeClassName="active">
              <i className="fas fa-list-alt"></i>
              <span className="menu-text">{story.title}</span>
            </Link>
          </li>
        )
      })
      else

      storyTable= <li>
        <div className="loader">
         <Loader/>
          </div>
      </li>
        return(
            <div>
                  <side>
                      <span className="logo">EMRE</span>
                      <ul className="side-menu">
                       {storyTable}
                      </ul>
                    </side>
                    <div className="con">
                <header>
                  <div className="container">
                    <div className="searchbar">
                      <input type="text" className="search" placeholder="Ara..."/>
                    </div>
                    <div className="profilewidget"><AddUser/><AddStory/></div>
                  </div>
                </header>
              
                <aside>
                    <Story storyType={this.props.params.id} tasks={this.state.tasks} loading={this.state.loading}/>
                </aside>
                </div>
                </div>
        )
    }
}
export default Dashboard