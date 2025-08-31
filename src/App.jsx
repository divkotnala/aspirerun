import React, { useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
import logo from "./assets/logoshort.png";
import img1 from "./assets/img1bg.png";

// Icons
import { FaUserGraduate, FaComments, FaDesktop, FaBookOpen, FaChartLine, FaQuestionCircle, FaChevronDown, FaChevronUp, FaTwitter, FaLinkedin, FaFacebook, FaUsers, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// Accordion Item Component for the FAQ
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900 rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 font-bold text-lg"
      >
        <span>{question}</span>
        {isOpen ? <FaChevronUp className="text-[#D4AF37]" /> : <FaChevronDown className="text-[#D4AF37]" />}
      </button>
      {isOpen && <div className="p-4 pt-0 text-gray-400">{answer}</div>}
    </div>
  );
};


function App() {
  const faqData = [
    {
      question: "What subjects do you cover?",
      answer: "We provide comprehensive tutoring for all subjects from Class 1 to Class 12, across all major boards (CBSE, ICSE, etc.). This includes core subjects like Mathematics, Science (Physics, Chemistry, Biology), Social Studies, English, and Hindi. Additionally, we offer specialized coaching for competitive exams such as JEE, NEET, and Olympiads."
    },
    {
      question: "Are the classes online or offline?",
      answer: "We offer both high-quality online classes and expert home tutors in the Delhi region, providing you with flexible learning options."
    },
    {
      question: "How do you track student performance?",
      answer: "Each student gets access to a personal dashboard with a performance tracker. It monitors test scores, completed assignments, and areas of improvement, which is regularly discussed in parent-tutor meetings."
    }
  ];

  return (
    <>
      <title>Personalised Home Tuitions & 24/7 Online Doubt Support | AspireSetGo</title>
      <meta
        name="description"
        content="Struggling with studies? Get expert home tutors and instant 24/7 doubt support with AspireSetGo. We offer personalised learning, study material, and stress-free exam prep. Start learning with confidence today!"
      />
      <link rel="canonical" href="https://aspiresetgo.com/" />

      <div className="bg-black/93 min-h-screen w-full text-white font-sans">
        {/* === HEADER: FIXED === */}
        <header className="p-3 px-6 text-[#D4AF37] flex justify-between items-center bg-black/96 shadow-md text-sm sticky top-0 z-50">
          <div className="flex items-center gap-6">
            <img src={logo} alt="Logo" width="60" />
            <div className="hidden md:flex flex-col text-white">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#D4AF37]" />
                <span>+91 96250 60017</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#D4AF37]" />
                <span>aspiresetgo@gmail.com</span>
              </div>
            </div>
          </div>
          <a href="#demo-booking-section" className="bg-[#D4AF37] text-black font-bold py-2 px-5 rounded-lg transition-transform duration-300 hover:scale-105 text-center">
            Book Free Demo
          </a>
        </header>

        {/* === HERO SECTION: FIXED === */}
        <section className="m-0 p-8 w-full h-auto lg:h-[calc(100vh-85px)] flex flex-col lg:flex-row items-center justify-center">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 mt-10 lg:mt-0">
            <h1 className="text-[#D4AF37] text-4xl lg:text-5xl font-bold min-h-[120px] md:min-h-[150px]">
              AspireSetGO Provides:{" "}
              <span className="text-gray-200">
                <Typewriter
                  words={[
                    'Expert Home Tutors In Delhi.',
                    '1 On 1 Doubt Solving.',
                    'Real Feel Of Jeetu Bhaiya.',
                    'Study Material & Resources.',
                    'Expert Guidance at Every Step.'
                  ]}
                  loop
                  cursor
                  cursorStyle='_'
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={800}
                />
              </span>
            </h1>
            <p className="text-gray-400 max-w-lg">
              Unlock your potential with expert guidance from IITians & NITians, 24/7 doubt solving, and a learning experience designed for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#demo-booking-section" className="bg-[#D4AF37] text-black font-bold py-3 px-6 sm:px-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-yellow-500">
                Book Free Home Tuitions Demo
              </a>
              <a
                href="#doubt-section"
                className="bg-transparent border-2 border-gray-400 text-gray-300 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-gray-300 hover:text-black hover:border-gray-300 text-center"
              >
                Get a Free Videocall Solution
              </a>
            </div>
          </div>
          <div className="flex-1 mt-10 lg:mt-0 flex justify-center">
            <img src={img1} alt="Student Learning" width="350" className="rounded-lg shadow-2xl shadow-yellow-500/20" />
          </div>
        </section>

        {/* "Why Choose Us?" Section */}
        <section className="py-20 px-4 bg-black">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#D4AF37]">Why AspireSetGO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <FaUserGraduate className="text-5xl text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Professional Home Tutors</h3>
              <p className="text-gray-400">Experience dedicated learning with our highly professional and verified home tutors.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <FaComments className="text-5xl text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">1-on-1 Doubt Solving on Videocall</h3>
              <p className="text-gray-400">Get instant, face-to-face solutions for your doubts 24/7 with our expert tutors.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <FaChartLine className="text-5xl text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Personalized Attention & Tracking</h3>
              <p className="text-gray-400">We create custom learning plans and track your performance for guaranteed improvement.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 md:col-span-2 lg:col-span-1">
              <FaUsers className="text-5xl text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Small Group Online Classes</h3>
              <p className="text-gray-400">Join our focused online batches with a maximum of 5-8 students for better interaction.</p>
            </div>
          </div>
        </section>

        {/* "Our Core Features" Section */}
        <section className="py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#D4AF37]">Our Core Features</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#D4AF37] p-3 rounded-full mt-1"><FaDesktop className="text-xl text-black" /></div>
              <div>
                <h3 className="text-xl font-bold">High-Quality Live Classes</h3>
                <p className="text-gray-400">Engage in interactive online classes that are as effective as offline learning.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#D4AF37] p-3 rounded-full mt-1"><FaUserGraduate className="text-xl text-black" /></div>
              <div>
                <h3 className="text-xl font-bold">Personalised Learning & Home Tutors</h3>
                <p className="text-gray-400">Benefit from tailored study plans and the expertise of our dedicated in-home tutors.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#D4AF37] p-3 rounded-full mt-1"><FaBookOpen className="text-xl text-black" /></div>
              <div>
                <h3 className="text-xl font-bold">Free Study Materials</h3>
                <p className="text-gray-400">Access a comprehensive library of notes, practice questions, and mock tests.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#D4AF37] p-3 rounded-full mt-1"><FaQuestionCircle className="text-xl text-black" /></div>
              <div>
                <h3 className="text-xl font-bold">No-Judgment Doubt Solving</h3>
                <p className="text-gray-400">Ask any doubt, anytime. We don't judge your questions, we just solve them.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Ask a Doubt Section */}
        <section id="doubt-section" className="py-20 px-4 bg-black">
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#D4AF37]">
              Have a Question? Get it Solved in Minutes on Videocall.
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Our 24/7 doubt-solving service is now on Telegram for instant access. <strong className="text-white">Try it completely free for 2 days!</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 text-left mb-12">
              <div className="bg-gray-900 p-6 rounded-lg border-t-4 border-[#D4AF37]">
                <div className="flex items-center gap-4 mb-3"><span className="bg-[#D4AF37] text-black text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center">1</span><h3 className="text-xl font-bold">Find Us</h3></div>
                <p className="text-gray-400">Open Telegram & search for our bot: <strong className="text-white">@Studentdoubt_bot</strong></p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border-t-4 border-[#D4AF37]">
                <div className="flex items-center gap-4 mb-3"><span className="bg-[#D4AF37] text-black text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center">2</span><h3 className="text-xl font-bold">Register</h3></div>
                <p className="text-gray-400">Start the bot and register your mobile number to create an account.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border-t-4 border-[#D4AF37]">
                <div className="flex items-center gap-4 mb-3"><span className="bg-[#D4AF37] text-black text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center">3</span><h3 className="text-xl font-bold">Start Trial</h3></div>
                <p className="text-gray-400">Activate your <strong className="text-white">free 2-day trial</strong> and ask your first doubt instantly.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border-t-4 border-[#D4AF37]">
                <div className="flex items-center gap-4 mb-3"><span className="bg-[#D4AF37] text-black text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center">4</span><h3 className="text-xl font-bold">Get Expert Help</h3></div>
                <p className="text-gray-400">An expert tutor will connect via <strong className="text-white">WhatsApp video call</strong> to solve your doubt. You can rate the tutor or raise a complaint if needed.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border-t-4 border-[#D4AF37]">
                <div className="flex items-center gap-4 mb-3"><span className="bg-[#D4AF37] text-black text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center">5</span><h3 className="text-xl font-bold">Continue Learning</h3></div>
                <p className="text-gray-400">After your trial, continue with our service by paying a minimal fee.</p>
              </div>
            </div>
            <a href="https://t.me/Studentdoubt_bot" className="bg-[#D4AF37] text-black font-bold py-3 px-10 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 text-lg inline-block">
              Ask Your First Doubt Now
            </a>
          </div>
        </section>

        {/* Demo Booking Section */}
        <section id="demo-booking-section" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">How to Book Your Free Demo Class</h2>
            <p className="text-gray-400 mb-6">Booking your free Home or Online Tuition demo is simple. Follow the steps below or call us directly if you need any help.</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-3 mb-8 inline-block text-left">
              <li>Click on your desired demo class button below to open the scheduling form.</li>
              <li>Fill in your details, preferred subject, and convenient time slots.</li>
              <li>Our team will call you to confirm your booking within a few hours.</li>
              <li className="font-bold">For any issues, call our helpline: <span className="text-white">+91 96250 60017</span></li>
            </ol>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe0cB6B8HOaIZWMeNG2cdoe8e_xgxlCHMSohDqHnZAjrqnhFQ/viewform?usp=header" className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 flex-1">Book Home Tuitions Demo</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe0cB6B8HOaIZWMeNG2cdoe8e_xgxlCHMSohDqHnZAjrqnhFQ/viewform?usp=header" className="border-2 border-yellow-500 text-yellow-500 font-bold py-3 px-6 rounded-lg text-center transition-all hover:bg-yellow-500 hover:text-black flex-1">Book Online Class Demo</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe0cB6B8HOaIZWMeNG2cdoe8e_xgxlCHMSohDqHnZAjrqnhFQ/viewform?usp=header" className="border-2 border-yellow-500 text-yellow-500 font-bold py-3 px-6 rounded-lg text-center transition-all hover:bg-yellow-500 hover:text-black flex-1">Book Group Class Demo</a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-black">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#D4AF37]">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 italic">"Seriously, 24/7 doubt support life-changing hai. Raat ko 2 baje bhi question bheja toh 10 min mein videocall pe teacher ne pura concept clear kar diya. Koi tension hi nahi rehti ab."</p>
              <p className="text-right mt-4 font-bold text-[#D4AF37]">- Shivam Srivastava</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 italic">"My tutor is more like an elder sister. Main unse koi bhi silly se silly doubt pooch sakti hoon without hesitation. Padhai fun lagne lagi hai for the first time!"</p>
              <p className="text-right mt-4 font-bold text-[#D4AF37]">- Priya Kandwal</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 italic">"As a parent, I was worried about my son's progress. The personalized attention and detailed performance reports from AspireSetGO have been exceptional. I can see a clear improvement in his confidence and grades."</p>
              <p className="text-right mt-4 font-bold text-[#D4AF37]">- Anjali's Parent</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#D4AF37]">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* === FINAL CTA SECTION: FIXED === */}
        <section className="py-20 px-4 text-center bg-black">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">Join hundreds of students who are achieving their academic goals with AspireSetGO. Your free home tuition demo class is just one click away.</p>
          <a href="#demo-booking-section" className="bg-[#D4AF37] text-black font-bold py-4 px-6 sm:px-10 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 text-lg">
            Book Free Home Tuitions Demo
          </a>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-400 py-10 px-4 text-center">
          <img src={logo} alt="Logo" width="70" className="mx-auto mb-4" />
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-2xl hover:text-[#D4AF37] transition-colors"><FaTwitter /></a>
            <a href="#" className="text-2xl hover:text-[#D4AF37] transition-colors"><FaLinkedin /></a>
            <a href="#" className="text-2xl hover:text-[#D4AF37] transition-colors"><FaFacebook /></a>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
            <p>Helpline: <a href="tel:+919625060017" className="text-white hover:underline">+91 96250 60017</a></p>
            <p>Contact us: <a href="mailto:aspiresetgo@gmail.com" className="text-white hover:underline">aspiresetgo@gmail.com</a></p>
          </div>
          <p className="mt-6">&copy; {new Date().getFullYear()} AspireSetGO. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;