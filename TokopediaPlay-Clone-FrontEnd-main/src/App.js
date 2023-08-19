import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <div className="apps">
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Card backgroundImage="https://images.pexels.com/photos/8131586/pexels-photo-8131586.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          <Card backgroundImage="https://images.pexels.com/photos/8140903/pexels-photo-8140903.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          <Card backgroundImage="https://images.pexels.com/photos/5999364/pexels-photo-5999364.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          <Card backgroundImage="https://images.pexels.com/photos/6210801/pexels-photo-6210801.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          <Card backgroundImage="https://images.pexels.com/photos/7035511/pexels-photo-7035511.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          <Card backgroundImage="https://images.pexels.com/photos/7290110/pexels-photo-7290110.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          <Card backgroundImage="https://images.pexels.com/photos/7319115/pexels-photo-7319115.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          <Card backgroundImage="https://images.pexels.com/photos/3657928/pexels-photo-3657928.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          <Card backgroundImage="https://images.pexels.com/photos/5529948/pexels-photo-5529948.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          <Card backgroundImage="https://images.pexels.com/photos/6210811/pexels-photo-6210811.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        </div>
      </div>
    </>
  );
}

export default App;
