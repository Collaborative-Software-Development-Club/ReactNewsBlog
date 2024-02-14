import './App.css';
import MainPage from './layouts/MainPage'
import Post from './postComp';
import CreateBlogPost from './layouts/MainPage/CreatePost'

//Create an array that can be manipulated later for adding additional posts
function App() {
  const postStream = [
    {title: "Bee Movie Smashes Box Office Expectations", content: "Jerry Seinfeld"},
    {title: "title 2", content: "Content 2"},
    {title: "title 3", content: "Content 3"}
  ];
  
  //map post data in the postStream array to a series of CreateBlogPost components
  return (
    <div>
      {postStream.map((post, index) => (
        <CreateBlogPost key = {index} title = {post.title} content = {post.content} />
      ))}
    </div>

  );
}

export default App;
