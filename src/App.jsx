
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import Project from './components/Project'
import ScrollToTopButton from './components/ScrollToTop'
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
import  ecommerce from './assets/ecommerce.png'
import paytm from './assets/paytm.png'
import customGpt from './assets/customGpt.png'
import techno from './assets/techno.png'

function App() {


  return (
    <>  
        <div className="bg-slate-900 p-5">
          <Header></Header>
          <br />
          <section id = "intro">
            <div class="grid grid-cols-2 gap-4 text-white pl-10 m-4">
              <div class="col-span-2 md:col-span-1 md:row-start-1 md:row-end-2 p-4">
                  <h1 className="font-bold hidden">Introduction</h1>
                  <br /> 
                  <p>Hey there, I'm Abdul Mannan, a passionate <code>Software Engineer</code>.</p>
                   <p>I love solving real-world problems with code, learning new technologies, and <span className="font-bold">building products.</span></p>
              </div>
              <div class="col-span-2 md:col-span-1 md:row-start-1 md:row-end-2 p-4 ">
                  <h1 className="font-bold text-xl">Education</h1> 
                  <br />
                   <h1> Computer Science and Engineering</h1>
                   <h2>Bachelors of Engineering - Osmania University</h2>
                   <p><code>Batch : 2019-2023 &nbsp;&nbsp;&nbsp;&nbsp; Certificate: <a href="https://drive.google.com/file/d/11BzKEFRHIJP-2mKbP8q2_TLo7cZPQX_S/view"><span class="underline text-blue-500">link</span>
</a> </code></p>
                  <br />
                  <h2 className="font-bold "> Courses</h2>
                  <ul className="">
                    <li>- Full Stack Web Development </li>
                    <li>- Data Structures and Algorithms</li>
                    <li>- React: the complete guide 2024 </li>
                    <li>- Backend Developement and Apis Certification</li>
                  </ul>
              </div>
              <div className="col-span-2 md:col-span-2 md:row-start-2 md:row-end-3 border border-gray-100 p-4 mr-20">
                  <h1 className="font-bold text-xl">skills</h1>
                  <code>javaScript, React.js, Node.js, Express.js, MongoDb, MySql, PostgreSQL, Mongoose, Prisma, C, Cpp, Java, Python, TailwindCSS, HTML, Css</code> 

              </div>
            </div>

          </section>
          <br />
          <section id="projects">
            <h1 className="text-white ml-5 text-2xl font-bold">Projects</h1>
            <br />
            <div className="flex flex-wrap justify-center text-white ">
                <Project 
                  image = {ecommerce}
                  title={"Ecommerce App"}
                  stack={"MERN, TailwindCSS"}
                  about = {""} 
                  live={"https://ecommerce-five-orcin.vercel.app/"}
                  code={"https://github.com/abdulmannan24/ecommerce"}
                />
                <Project 
                  image = {customGpt}
                  title={"Custom Gpt"}
                  stack={"React.js, Node.js, Express.js, tailwindCSS"}
                  about = {""}
                  live={"https://custom-gpt-tau.vercel.app/"}
                  code = {"https://github.com/abdulmannan24/customgpt"}
                />
                
                <Project 
                  image = {paytm}
                  title={"Paytm Clone App"}
                  stack={"MERN, TailwindCSS"}
                  about = {""} 
                  live={"https://paytm-blush.vercel.app/"}
                  code={"https://github.com/abdulmannan24/paytm"}
                />
                
                {/* <Project 
                  image = "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
                  title={"Summer Internship Project"}
                  stack={"Html, Css, ejs, node.js, express.js, mySql"}
                  about = {"*live link expired due to heroku's policy change"} 
                />  */}
                <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden m-4">
                  <img className="w-full" src = {techno} alt="Project" />
                  <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 text-black">TechnoHvacr Solutions Website</h3>
                      <p className="text-gray-700 mb-4"> Technologies: Html, Css, js, Bootstrap </p>

                      <div className="flex justify-evenly">
                          <a href="https://technohvacr.in"><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Live</button></a>
                      </div>
                  </div>
                </div>
            </div>
          </section>
          <br />
          <section id = "internships" className = "ml-8">
              <h1 className = "font-bold text-2xl text-white">Internships</h1>
              <br />
              <div className = "text-white">
                <div>
                  <code>
                    <h3> Software Developer Intern - Backend</h3>
                    <i>Hashedbit Innovations</i>
                    &nbsp; &nbsp;
                    <span>Location: remote</span> &nbsp;&nbsp; <span>Duration: 1 sept 2023 - 29 Dec 2023</span>
                    <br />
                    <ul>
                      <li>Tools and Technologies: Node.js, Express.js, MySql, jira, git/github, postman</li>
                      <li>-&gt; responsible for designing, writing, testing Apis </li>
                      <li>-&gt; majorly contributed in Crud operations for Learning Management System, Sql Crud Automation projects</li>
                      <li>-&gt; worked with a team of 8 members, received mentorship from Sr Developers</li>
                      <li>-&gt; recieved LoA/experience letter post completion of internship <a href="https://drive.google.com/file/d/1k8XZHg1xqQXvCRAl8Y83JoCsSUEKRAHG/view?usp=sharing"><span className="underline text-blue-500">link</span></a> </li>
                    </ul>
                    </code>
                </div>
                <br />
                <div>
                  <code>
                    <h3> Web Developer - Summer Intern</h3>
                    <i>The Sparks Foundation</i>
                    &nbsp; &nbsp;
                    <span>Location: remote</span> &nbsp;&nbsp; <span>Duration: 1 june 2022 - 2 july 2022</span>
                    <br />
                    <ul>
                      <li>Tools and Technoloies: Html, Css, Ejs, Node.js, express.js, mySql, heroku, git/github</li>
                      <li>Developed a Dynamic Full Stack Application <a href="https://github.com/abdulmannan24/sparkbank"><span className='underline text-blue-500'>code</span></a></li>
                    </ul>

                    </code>
                </div>
              </div>
          </section>
          <br />
          <section id = "contact" className = "ml-8">
              <h1 className = "font-bold text-2xl text-white"> Contact me</h1>
              <div className = "text-white text-center ">
                  <br />
                  <h2 className = "font-semibold">Get in touch</h2>
                  <code>
                  <span>Phone :</span><a href="tel:+918882192787"> +91 888-529-1856</a> 
                  <br />
                  <span>Email :</span><a href="mailto:abdulmannan240402@gmail.com"> abdulmannan240402@gmail.com</a>
                  <br />
                  <span>Social Links :</span>&nbsp;<a href="https://www.linkedin.com/in/abdul-mannan-88b7081a3/"><button><FaLinkedin /></button> </a> &nbsp;<a href="https://github.com/abdulmannan24"><button><FaGithub /></button> </a> &nbsp;<a href="https://wa.me/+918885291856"><button><FaWhatsapp /></button> </a>
                  </code>
                  <br />
              </div>
          </section>
        </div>
        <ScrollToTopButton />
    </> 
  )
}

export default App
