import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router'
import Story from './story'
import AddStory from './forms/addStory';
import Loader from './loader'
import Header from './common/header'

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
          loadingStory:false,
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
    })
    .catch((e)=>{
      if (!e.response){
      this.setState({
        loading:true,
        err: e
    })
  }
      else
        this.setState({
            loading:false,
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
          <li key={index}>
            <Link to={`/story/${story.storyId}`} activeClassName="active">
              <i className="fas fa-list-alt"></i>
              <span className="menu-text">{story.title}</span>
            </Link>
          </li>
        )
      })
      else
      storyTable = <li>
        <div className="loader">
         <Loader/>
          </div>
      </li>
        return(
            <div>
              <div className="side">
                <span className="logo">Scrum Beta</span>
                <ul className="side-menu">
                  {storyTable}
                </ul>
                <div className="otherMenu">
                  <AddStory/>
                </div>
              </div>
              <div className="con">
                <Header/>
                  <aside>
                      <Story storyName={this.state.stories.filter(i=>i.storyId===parseInt(this.props.router.params.id))} storyType={this.props.params.id} tasks={this.state.tasks} loading={this.state.loading}/>
                  </aside>

              </div>
            </div>
        )
    }
}
export default Dashboard