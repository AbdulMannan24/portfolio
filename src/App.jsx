import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import Project from './components/Project'
import ScrollToTopButton from './components/ScrollToTop'
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'

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
                   <p>I love solving real-world problems with code, learning new technologies and <span className="font-bold">building products.</span></p>
              </div>
              <div class="col-span-2 md:col-span-1 md:row-start-1 md:row-end-2 p-4 ">
                  <h1 className="font-bold text-xl">Education</h1> 
                  <br />
                   <h1> Computer Science and Engineering</h1>
                   <h2>Bachelors of Engineering - Osmania University</h2>
                   <p><code>Batch : 2019-2023 &nbsp;&nbsp;&nbsp;&nbsp; Certificate: <a href="https://google.com"><span class="underline text-blue-500">link</span>
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
                  <code>javaScript, React.js, Node.js, Express.js, MongoDb, MySql, PostgreSQL, Mongoose, Prisma, C, Cpp, Java, Python</code> 

              </div>
            </div>

          </section>
          <br />
          <section id="projects">
            <h1 className="text-white ml-5 text-2xl font-bold">Projects</h1>
            <br />
            <div className="flex flex-wrap justify-center text-white ">
                <Project 
                  image = ""
                  title={"Real-Time Chat App (coming soon..)"}
                  stack={"MERN, Socket.io, tailwind Css"}
                  about = {""}
                />
                <Project 
                  image = "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
                  title={"Ecommerce App"}
                  stack={"MERN"}
                  about = {""} 
                />
                <Project 
                  image = "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
                  title={"Paytm Clone App"}
                  stack={"MERN"}
                  about = {""} 
                /> 
            </div>
          </section>
          <br />
          <section id = "internships" className = "ml-8">
              <h1 className = "font-bold text-2xl text-white">Internships</h1>
              <div className = "flex text-white">

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
              </div>
          </section>
        </div>
        <ScrollToTopButton />
    </> 
  )
}

export default App
