import React,{Component} from 'react'
import Task from './task'
import Tooltips from './tooltip'
export default class Story extends Component{
    render(){
        return(
            <div className="container">
                      <div className="space">
                          <h2 className="story">Story</h2>
                      </div>
                        <div className="row">
                          <div className="col-sm mcell mcolor1">
                          <ul>
                            <div className="mcell-title story">
                                Backlog
                                <Tooltips id="1" content="You can do what you want to do with this column" placement="top" storyType={this.props.storyType}/>                            </div>
                            <Task tasks={this.props.tasks} loading={this.props.loading} filter="1"/>
                              </ul>
                          </div>
                          <div className="col-sm mcell mcolor2">
                              <ul id="inprogress">
                              <div className="mcell-title story">
                                TODO
                                <Tooltips id="2" content="You can do what you want to do with this column" placement="top" storyType={this.props.storyType}/>
                              </div>
                              <Task  tasks={this.props.tasks} loading={this.props.loading} filter="2"/>
                              </ul>
                          </div>
                          
                          <div className="col-sm mcell mcolor3">
                              <ul>
                              <div className="mcell-title story">
                                In Progress
                                <Tooltips id="3" content="You can do what you want to do with this column" placement="top" storyType={this.props.storyType}/>                              </div>
                              <Task tasks={this.props.tasks} loading={this.props.loading} filter="3"/>
                          </ul>
                          </div>
                          <div className="col-sm mcell mcolor4">
                          <ul id="done2">
                              <div className="mcell-title story">
                                Done
                                <Tooltips id="4" content="You can do what you want to do with this column" placement="top" storyType={this.props.storyType}/>                              </div>
                              <Task tasks={this.props.tasks} loading={this.props.loading} filter="4"/>
                              </ul>
                            </div>
                        </div>
                      </div>
        )
    }
}