import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEdit ,faTrash} from '@fortawesome/free-solid-svg-icons'
import { faEdit ,faTrashCan} from '@fortawesome/free-regular-svg-icons'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todolist:[],
      activeItem:{
        id:null,
        title:'',
        completed:false,
      },
      editing:false
    }
    this.fetchTasks=this.fetchTasks.bind(this)
    this.handlechange=this.handlechange.bind(this)
    this.handlesubmit=this.handlesubmit.bind(this)
    this.getCookie=this.getCookie.bind(this)
    this.startEdit=this.startEdit.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    this.Strike=this.Strike.bind(this)
  };

    getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
    }

  componentDidMount(){
       this.fetchTasks()
  }
  fetchTasks(){
    console.log('fetching... ')
    // fetch('http://localhost:8000/api/task-list/')
    fetch('http://43.204.233.102/api/task-list/')
       .then(response=>response.json())
       .then(data=>
           this.setState({
            todolist:data
           })
        )
  }
  handlechange(e){
    // var name=e.target.name
    var value=e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        title:value
      }
    })
  }

  handlesubmit(e){
    e.preventDefault()
    console.log('item',this.state.activeItem)
    var csrftoken=this.getCookie('csrftoken')

    // var url='http://localhost:8000/api/task-create/'
    var url='http://43.204.233.102/api/task-create/'

    if(this.state.editing===true){
      // url=`http://localhost:8000/api/task-update/${this.state.activeItem.id}`
      url=`http://43.204.233.102/api/task-update/${this.state.activeItem.id}`
      this.setState({
        editing:false
      })
    }
    fetch(url,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'x-CSRFToken':csrftoken,
      },
      body:JSON.stringify(this.state.activeItem)
    }).then((response)=>{
       this.fetchTasks()
       this.setState({
        activeItem:{
          id:null,
          title:'',
          completed:false,
        }
       })
    }).catch(function(error){
      console.log('ERROR:',error)
    })
  }
  startEdit(task){
    this.setState({
      activeItem:task,
      editing:true,
    })
  }

  deleteItem(task){
    var csrftoken=this.getCookie('csrftoken')
    fetch(`http://43.204.233.102/api/task-delete/${task.id}`,{
      method:'DELETE',
      headers:{
        'Content-type':'application/json',
        'x-CSRFToken':csrftoken,
      },
    }).then((response)=>{
       this.fetchTasks()
    })
  }
  Strike(task){
    task.completed=!task.completed
    console.log('task:' ,task)
    var csrftoken=this.getCookie('csrftoken')
    var url=`http://43.204.233.102/api/task-update/${task.id}`
    fetch(url,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'x-CSRFToken':csrftoken,
      },
      // body:JSON.stringify({'completed':task.completed,'title':task.title})
      body:JSON.stringify(task)
    }).then(()=>{
      this.fetchTasks()
    })
  }

  render(){
    var tasks=this.state.todolist
    var self=this
  return (
    <div className="App px-3 py-8 bg-gray-900 h-screen flex items-start justify-center">
       <div className="flex flex-col items-center justify-center w-full md:w-6/12 "> 
        <div className="header w-full">
          <form onSubmit={this.handlesubmit}>
          <input onChange={this.handlechange} type="text" name="name" value={this.state.activeItem.title} placeholder="Add Task" className="p-2 rounded w-auto md:w-8/12 lg:w-8/12"/>
          <input type="submit" placeholder="Add" className=" rounded text-yellow-400 font-semibold border border-yellow-400 ml-1 px-2 py-2 hover:bg-yellow-400 hover:text-gray-800 delay-3 cursor-pointer"/>
          </form>
        </div>
        <div className="w-full list pt-4 "> 
             {tasks.map((task,index)=>{
              return(
                <div className="w-full bg-gray-400 text-black flex justify-between mb-1 p-1 md:p-2 lg:p-3 cursor-pointer border rounded" key={index}>
                  <div onClick={()=>self.Strike(task)}>
                  {task.completed === false?(
                     <span className="font-semibold text-lg">{task.title}</span>
                  ):(
                    <strike className="font-semibold text-md">{task.title}</strike>
                  )}
                  </div>
                  <div>
                    <button onClick={()=>self.startEdit(task)} className="p-0 px-1 mx-2 hover:bg-yellow-400 border rounded"><i><FontAwesomeIcon icon={faEdit} /></i></button>
                    <button onClick={()=>self.deleteItem(task)} className="p-0 px-1 mx-1 hover:bg-red-600 border rounded"><i><FontAwesomeIcon icon={faTrashCan} /></i></button>
                  </div>
                  
                </div>
              )
             })}
        </div>
        </div>
    </div>
  );
}
}

export default App;
