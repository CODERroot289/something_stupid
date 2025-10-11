import Header from "../Header/Header.jsx"
import Footer from "../Footer/footer.jsx"
import "./css/Home.css"
export default function Home() {
const getSystemTheme = () =>  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  // console.log(getSystemTheme())
  document.documentElement.setAttribute('data-theme', getSystemTheme());

  return(
    <>
      <div className="bgi"></div>
    <Header/>

    <div className="home">
      <section className="hero">
        <h1>Welcome</h1>
        <p>GIVE UPON YOUR DREAMS AND DIE</p>
      </section>

      <section className="projects">
        <h2></h2>
        <p>NOTHING HERE STOP SCROLLING.</p>
      </section>

{/*        <h2>Study Materials</h2>
        <p>Question papers</p>*/}
{/*
      <section className="resources">
          <div className="mcode"  >
      <span style={{ color: "blue" }}>class</span> Life:
      {"\n"}    <span style={{ color: "blue" }}>def</span>{" "}
      <span style={{ fontWeight: "bold" }}>__init__</span>(self):
      {"\n"}        self.depression ={" "}
      <span style={{ color: "purple" }}>True</span>
      {"\n"}        self.motivation ={" "}
      <span style={{ color: "black" }}>0</span>
      {"\n"}        self.is_alive ={" "}
      <span style={{ color: "purple" }}>True</span>
      {"\n\n"}    <span style={{ color: "blue" }}>def</span>{" "}
      <span style={{ fontWeight: "bold" }}>run</span>(self):
      {"\n"}        <span style={{ color: "blue" }}>print</span>(
      <span style={{ color: "green" }}>"System Booting..."</span>)
      {"\n"}        <span style={{ color: "blue" }}>if</span>{" "}
      self.depression:
      {"\n"}            self.suicide()
      {"\n"}        <span style={{ color: "blue" }}>else</span>:
      {"\n"}            <span style={{ color: "blue" }}>print</span>(
      <span style={{ color: "green" }}>"Survival Mode: ON"</span>)
      {"\n\n"}    <span style={{ color: "blue" }}>def</span>{" "}
      <span style={{ fontWeight: "bold" }}>suicide</span>(self):
      {"\n"}        self.is_alive ={" "}
      <span style={{ color: "purple" }}>False</span>
      {"\n"}        <span style={{ color: "blue" }}>print</span>(
      <span style={{ color: "green" }}>"fatal error: EmotionDamgeOverflowException"</span>)
      {"\n"}        <span style={{ color: "blue" }}>print</span>(
      <span style={{ color: "green" }}>"Terminating process: life()"</span>)
      {"\n"}        <span style={{ color: "blue" }}>print</span>(
      <span style={{ color: "green" }}>"Suicide() executed."</span>)
      {"\n"}        <span style={{ color: "blue" }}>print</span>(
      <span style={{ color: "green" }}>"Goodbye, world."</span>)
      {"\n\n"}me = Life()
      {"\n"}me.run()
    </div>



      </section>*/}

      <section className="about">
        <h2>About US</h2>
        <p>IDKNOTME</p>
        <p>IDKABOUTME</p>
        <p>IDKABOUTUS</p>
      </section>
    </div>


    <Footer/>
    </>
    )

}
