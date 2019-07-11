import React, { Component } from "react";
import "./App.css";
import ToDoListItem from "./ToDoListItem";

interface FormData {
  todoList: { title: string; description: string }[]
  title: string
  description: string
}

class App extends Component {
  //ToDoListをstateに定義、初期値は[]
  state: FormData = {
    todoList: [], title: '', description: ''
  };

  onChangeText(e: React.FormEvent<any>) {
    this.setState({...this.state, title: e.currentTarget.value})
  }

  onChangeDescription(e: React.FormEvent<any>) {
    this.setState({...this.state, description: e.currentTarget.value})
  }

  render() {
    return (
      <div className="App">
        <form
          className="App-form"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            //formのでデフォルトのイベントをキャンセル
            e.preventDefault();

            //todoList stateに追加
            this.setState(
              (oldState: FormData) => {
                return {
                  ...oldState,
                  todoList: [
                    ...oldState.todoList,
                    {
                      title: oldState.title,
                      description: oldState.description
                    }
                  ]
                };
              },
              //stateの変更後に入力した値を空にする
              () => {
                this.setState((oldState: FormData) => {
                  return {
                    ...oldState,
                    title: '',
                    description: ''
                  };
                })
              }
            );
          }}
        >
          <div>
            <input id="title" placeholder="title" value={this.state.title} onChange={(e) => this.onChangeText(e)}/>
            <textarea id="description" placeholder="description" value={this.state.description} onChange={(e) => this.onChangeDescription(e)}/>
          </div>
          <div>
            <button type="submit">登録</button>
            
          </div>
        </form>
        <div>
          {/* todoList配列の要素数分ToDoListItemコンポーネントを展開 */}
          {this.state.todoList.map((todo, index) => (
            <ToDoListItem
              key={index}
              title={todo.title}
              description={todo.description}
              //クリックされたItemをtodoList stateから削除
              onClick={() => {
                this.setState({
                  todoList: this.state.todoList.filter(x => x !== todo)
                })
              }}
            />
            
          ))
          
          }
          
        </div>
      </div>
    );
  }
}

export default App;
