import Joke from './Joke';
import './App.css';

function App() {
  return (
    <div className="App">

      <div>
            <Joke 
                setup="I got my daughter a fridge for her birthday." 
                punchline="I can't wait to see her face light up when she opens it." 
                isPun={false}
            />
            <Joke 
                setup="How did the hacker escape the police?" 
                punchline="He just ransomware!"
                isPun={true}
            />
            <Joke 
                setup="Why don't pirates travel on mountain roads?" 
                punchline="Scurvy." 
                isPun={true}
            />
            <Joke 
                setup="Why do bees stay in the hive in the winter?" 
                punchline="Swarm." 
                isPun={true}
            />
            <Joke 
                setup="What's the best thing about Switzerland?" 
                punchline="I don't know, but the flag is a big plus!" 
                isPun={false}
            />
      </div>

    </div>
  );
}

export default App;
