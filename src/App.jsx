El error en el código es un problema de sintaxis en la línea 173. El problema está en el uso de un carácter especial en un comentario que está causando conflictos con el parser de JavaScript. Aquí está el código corregido:

```jsx
import React, { useState, useEffect, useRef } from 'react';
import { Play, Send, Award, Camera, Film, Zap, Video, Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Palette, PenTool, Camera as CameraIcon, Monitor, Menu, X, Home, User, Briefcase, BookOpen, MessageCircle, ChevronUp, Sun, Moon, ChevronLeft, ChevronRight, Globe, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const translations = {
  es: {
    heroGreeting: "Hola, soy",
    heroName: "Santiago Maya Tobar",
    heroText: "Colorista y Editor especializado en DaVinci Resolve, Director de Fotografía y Motion Graphics Artist en formación. Transformando visiones en realidades audiovisuales.",
    heroScroll: "👉 Baja con el scroll",
    projectsTitle: "Proyectos",
    projectsFeatured: "Destacados",
    projectsDescription: "Una selección de trabajos que representan mi enfoque cinematográfico y pasión por contar historias visuales.",
    modalClose: "Cerrar",
    languageToggle: "EN",
    aboutTitle: "Acerca de",
    aboutMe: "Mí",
    myStory: "Mi Historia",
    story1: "Desde pequeño, he estado fascinado por el poder de las imágenes y cómo pueden contar historias sin necesidad de palabras. Mi viaje comenzó con una cámara digital básica y ha evolucionado hasta convertirme en un profesional dedicado a la creación audiovisual.",
    story2: "Con 8 años de experiencia en la industria, he trabajado en una variedad de proyectos que van desde comerciales corporativos hasta documentales y videos musicales. Cada proyecto es una oportunidad para aprender, crecer y llevar mi arte al siguiente nivel.",
    story3: "Mi enfoque se basa en la colaboración creativa y la atención meticulosa a los detalles técnicos. Creo que cada frame cuenta una historia y cada decisión creativa debe ser intencional y significativa.",
    contactReady: "¿Listo para",
    contactStart: "empezar?",
    contactFormTitle: "Cuéntame sobre tu proyecto",
    contactName: "Nombre *",
    contactEmail: "Email *",
    contactMessage: "Mensaje *",
    contactNamePlaceholder: "Tu nombre completo",
    contactEmailPlaceholder: "tu@email.com",
    contactMessagePlaceholder: "Describe tu visión, objetivos y cualquier detalle importante...",
    contactSend: "Enviar mensaje",
    contactInfo: "Información de contacto",
    contactSocial: "Sígueme en redes",
    footerName: "Santiago Maya Tobar",
    footerRights: "© 2024 Santiago Maya Tobar. Todos los derechos reservados.",
    sendMessage: "Enviar mensaje",
    sending: "Enviando...",
    successMessage: "¡Mensaje enviado con éxito! Te contactaré pronto.",
    errorMessage: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
    close: "Cerrar",
    emailLabel: "Email",
    phoneLabel: "Teléfono",
    locationLabel: "Ubicación",
    videoError: "No se pudo cargar el video.",
    seeOnYouTube: "Ver en YouTube",
    invalidEmail: "Por favor ingresa un email válido.",
    minLengthMessage: "El mensaje debe tener al menos 10 caracteres.",
    socialInstagram: "Instagram",
    socialLinkedin: "LinkedIn",
    socialYoutube: "YouTube"
  },
  en: {
    heroGreeting: "Hi, I'm",
    heroName: "Santiago Maya Tobar",
    heroText: "Colorista and Editor specialized in DaVinci Resolve, Director of Photography and Motion Graphics Artist in training. Transforming visions into audiovisual realities.",
    heroScroll: "👉 Scroll down",
    projectsTitle: "Projects",
    projectsFeatured: "Featured",
    projectsDescription: "A selection of works that represent my cinematic approach and passion for telling visual stories.",
    modalClose: "Close",
    languageToggle: "ES",
    aboutTitle: "About",
    aboutMe: "Me",
    myStory: "My Story",
    story1: "Since I was little, I have been fascinated by the power of images and how they can tell stories without words. My journey began with a basic digital camera and has evolved until I became a professional dedicated to audiovisual creation.",
    story2: "With 8 years of experience in the industry, I have worked on a variety of projects ranging from corporate commercials to documentaries and music videos. Each project is an opportunity to learn, grow and take my art to the next level.",
    story3: "My approach is based on creative collaboration and meticulous attention to technical details. I believe that each frame tells a story and each creative decision must be intentional and meaningful.",
    contactReady: "Ready to",
    contactStart: "start?",
    contactFormTitle: "Tell me about your project",
    contactName: "Name *",
    contactEmail: "Email *",
    contactMessage: "Message *",
    contactNamePlaceholder: "Your full name",
    contactEmailPlaceholder: "your@email.com",
    contactMessagePlaceholder: "Describe your vision, goals and any important details...",
    contactSend: "Send message",
    contactInfo: "Contact Information",
    contactSocial: "Follow me on social media",
    footerName: "Santiago Maya Tobar",
    footerRights: "© 2024 Santiago Maya Tobar. All rights reserved.",
    sendMessage: "Send message",
    sending: "Sending...",
    successMessage: "Message sent successfully! I'll contact you soon.",
    errorMessage: "There was an error sending the message. Please try again.",
    close: "Close",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    videoError: "Could not load video.",
    seeOnYouTube: "Watch on YouTube",
    invalidEmail: "Please enter a valid email address.",
    minLengthMessage: "Message must be at least 10 characters long.",
    socialInstagram: "Instagram",
    socialLinkedin: "LinkedIn",
    socialYoutube: "YouTube"
  }
};

// Datos de los proyectos con URLs corregidas
const projectsVideo = [
  {
    id: 1,
    title: "Juan Carlos Ensamble & Califlow Latino - Bailando Apretao (pimpom) Remix",
    thumbnail: "https://img.youtube.com/vi/YADCgwLZx3s/maxresdefault.jpg",
    videoId: "YADCgwLZx3s",
    url: "https://www.youtube.com/watch?v=YADCgwLZx3s"
  },
  {
    id: 2,
    title: "Tomas ft Buxxi - Perfecta Pa Mí",
    thumbnail: "https://img.youtube.com/vi/Wkm10c1BKkQ/maxresdefault.jpg",
    videoId: "Wkm10c1BKkQ",
    url: "https://www.youtube.com/watch?v=Wkm10c1BKkQ"
  },
  {
    id: 3,
    title: "LMPT - XANDERR (video oficial)",
    thumbnail: "https://img.youtube.com/vi/2C8FNbAh0qk/maxresdefault.jpg",
    videoId: "2C8FNbAh0qk",
    url: "https://www.youtube.com/watch?v=2C8FNbAh0qk"
  },
  {
    id: 4,
    title: "Fostter ❌@Alcapone777 - Las 12",
    thumbnail: "https://img.youtube.com/vi/53IWepJnypE/maxresdefault.jpg",
    videoId: "53IWepJnypE",
    url: "https://www.youtube.com/watch?v=53IWepJnypE"
  },
  {
    id: 5,
    title: "Kim De Los Santos - Hace Un Mes (Salsa Romántica)",
    thumbnail: "https://img.youtube.com/vi/N3d2gY7msxo/maxresdefault.jpg",
    videoId: "N3d2gY7msxo",
    url: "https://www.youtube.com/watch?v=N3d2gY7msxo"
  },
  {
    id: 6,
    title: "Kenny Garcés - Codiciada",
    thumbnail: "https://img.youtube.com/vi/5LsyhlRS5VQ/maxresdefault.jpg",
    videoId: "5LsyhlRS5VQ",
    url: "https://www.youtube.com/watch?v=5LsyhlRS5VQ"
  },
];

const Hero = ({ language, onWorkClick, theme }) => { // Recibe theme como prop
  const t = translations[language];
  
  // texto según idioma
  const fullText = t.heroText;

  // typing animation
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    let i = 0;
    setTypedText("");
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [fullText, language]);

  return (
    <motion.section
      key="hero"
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 80 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`h-screen flex items-center justify-center ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-yellow-500 to-yellow-700 text-white' // Fondo amarillo en modo oscuro
          : 'bg-white text-black' // Fondo blanco en modo claro
      }`}
    >
      <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className={`${theme === 'dark' ? 'text-yellow-200' : 'text-gray-600'} text-lg sm:text-xl mb-2 italic`}>
          {t.heroGreeting}
        </p>
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {t.heroName}
        </h1>
        <p className={`text-base sm:text-lg md:text-xl mb-6 min-h-[120px] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {typedText}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            onClick={onWorkClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl ${
              theme === 'dark' 
                ? 'bg-black text-white' // Botón negro en modo oscuro
                : 'bg-yellow-400 text-black' // Botón amarillo en modo claro
            } font-bold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2`}
          >
            <Play className="mr-2 h-5 w-5 inline" />
            {language === 'es' ? 'Ver mi trabajo' : 'See my work'}
          </motion.button>
        </div>
        <p className={`text-sm mt-6 ${theme === 'dark' ? 'opacity-80' : 'text-gray-500'}`}>{t.heroScroll}</p>
      </div>
    </motion.section>
  );
};

const WorksGallery = ({ language, theme = 'dark' }) => { // Recibe theme como prop
  const [selected, setSelected] = useState(null);
  const t = translations[language];

  return (
    <section className={`py-12 sm:py-16 px-4 sm:px-6 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {language === "es" ? "Proyectos" : "Works"}
        </h2>

        {/* GRID DE VIDEOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {projectsVideo.map((proj) => (
            <motion.div
              key={proj.id}
              className="cursor-pointer group overflow-hidden rounded-lg relative shadow-lg"
              onClick={() => setSelected(proj)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={proj.thumbnail}
                alt={proj.title}
                className="w-full h-32 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = `https://placehold.co/480x270?text=${encodeURIComponent(proj.title)}`;
                }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 bg-yellow-400/80 rounded">
                  {proj.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DE VIDEO */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden"
              style={{ aspectRatio: "16/9" }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Contenido del video o fallback */}
              <div className="w-full h-full flex items-center justify-center">
                <iframe
                  key={selected.videoId} // ✅ fuerza recarga
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selected.videoId}?autoplay=1&rel=0`}
                  title={selected.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                  onError={(e) => {
                    // Si hay error, mostrar el fallback
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex'; // Mostrar el fallback
                  }}
                ></iframe>
                
                {/* Fallback para video */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 p-4 hidden">
                  <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
                  <p className="text-white text-center mb-4">{t.videoError}</p>
                  <a
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500"
                  >
                    {t.seeOnYouTube}
                  </a>
                </div>
              </div>

              {/* BOTÓN CERRAR */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 p-2 bg-black/70 text-white rounded-full hover:bg-black/90"
                aria-label={t.modalClose}
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const AboutSection = ({ language, theme = 'dark' }) => { // Recibe theme como prop
  const t = translations[language];
  
  return (
    <motion.section
      key="about"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`py-12 sm:py-16 px-4 sm:px-6 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`} // Fondo cambia con el tema
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-3xl sm:text-4xl font-bold mb-6 text-center italic ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        >
          <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.aboutTitle}</span><br />
          <span className="text-yellow-400">{t.aboutMe}</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`p-6 sm:p-8 rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} mb-8 shadow-lg ${theme === 'dark' ? 'bg-black/50' : 'bg-white/50'}`}
          >
            <h3 className={`text-xl sm:text-2xl font-bold mb-4 italic ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.myStory}</h3>
            <p className={`mb-4 italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {t.story1}
            </p>
            <p className={`mb-4 italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {t.story2}
            </p>
            <p className={`italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {t.story3}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const ContactSection = ({ language, theme = 'dark' }) => { // Recibe theme como prop
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = t.contactEmail;
    else if (!validateEmail(formData.email)) newErrors.email = t.invalidEmail;
    if (!formData.message.trim()) newErrors.message = t.contactMessage;
    else if (formData.message.length < 10) newErrors.message = t.minLengthMessage;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando se empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulación de envío de correo electrónico
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage(language === 'es' ? t.successMessage : t.successMessage);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage(language === 'es' ? t.errorMessage : t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: t.emailLabel,
      value: "Santiagomayat95@gmail.com",
      href: "mailto:Santiagomayat95@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: t.phoneLabel,
      value: "+57 314 7950570",
      href: "tel:+573147950570"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t.locationLabel,
      value: "Cali, Colombia",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: t.socialInstagram },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: t.socialLinkedin },
    { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com", label: t.socialYoutube }
  ];

  return (
    <motion.section
      key="contact"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`py-12 sm:py-16 px-4 sm:px-6 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`} // Fondo cambia con el tema
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-3xl sm:text-4xl font-bold mb-6 text-center italic ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        >
          <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.contactReady}</span><br />
          <span className="text-yellow-400">{t.contactStart}</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`p-6 sm:p-8 rounded-2xl border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} shadow-lg ${theme === 'dark' ? 'bg-black/50' : 'bg-white/50'}`}
          >
            <h3 className={`text-xl sm:text-2xl font-semibold mb-6 italic ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.contactFormTitle}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={`block text-sm sm:text-base font-medium mb-2 italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t.contactName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.contactNamePlaceholder}
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'} rounded-md focus:border-yellow-400 focus:outline-none italic ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="mt-1 text-red-500 text-sm italic">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm sm:text-base font-medium mb-2 italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t.contactEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.contactEmailPlaceholder}
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'} rounded-md focus:border-yellow-400 focus:outline-none italic ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-sm italic">{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-sm sm:text-base font-medium mb-2 italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t.contactMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.contactMessagePlaceholder}
                  rows={5}
                  required
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'} rounded-md focus:border-yellow-400 focus:outline-none resize-none italic ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <p className="mt-1 text-red-500 text-sm italic">{errors.message}</p>}
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2 italic">{t.sending}</span>
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5 inline" />
                    {t.contactSend}
                  </>
                )}
              </motion.button>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-md text-center ${submitMessage.includes('éxito') || submitMessage.includes('successfully') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'} italic`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className={`text-xl sm:text-2xl font-semibold mb-6 italic ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.contactInfo}</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} flex items-center gap-4 ${theme === 'dark' ? 'bg-black/50' : 'bg-white/50'}`}
                  >
                    <div className="text-yellow-400">
                      {item.icon}
                    </div>
                    <div>
                      <div className={`text-sm sm:text-base italic ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}</div>
                      <a 
                        href={item.href}
                        className={`hover:text-yellow-400 transition-colors italic ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className={`text-lg sm:text-xl font-semibold mb-4 italic ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.contactSocial}</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-black/5 border-black/10 text-gray-600'} hover:text-yellow-400 hover:border-yellow-400 rounded-lg transition-all duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default function App() {
  const [active, setActive] = useState(0);
  const [language, setLanguage] = useState("es");
  const [theme, setTheme] = useState('dark'); // Estado del tema
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = [
    { id: "hero", component: Hero },
    { id: "about", component: AboutSection },
    { id: "projects", component: WorksGallery },
    { id: "contact", component: ContactSection }
  ];

  // Manejar scroll con el mouse
  useEffect(() => {
    let timeout = null;
    const handleWheel = (e) => {
      if (isScrolling || timeout) return;
      
      setIsScrolling(true);
      
      if (e.deltaY > 0) {
        setActive((prev) => Math.min(prev + 1, sections.length - 1));
      } else if (e.deltaY < 0) {
        setActive((prev) => Math.max(prev - 1, 0));
      }
      
      timeout = setTimeout(() => {
        setIsScrolling(false);
        timeout = null;
      }, 1000);
    };
    
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isScrolling, sections.length]);

  // Manejar swipe en dispositivos móviles
  useEffect(() => {
    let startY = 0;
    let endY = 0;
    let timeout = null;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (timeout) return; // evita cambios muy rápidos
      endY = e.changedTouches[0].clientY;
      const diff = startY - endY;

      if (Math.abs(diff) > 50) { // umbral para detectar swipe
        if (diff > 0) {
          // swipe arriba → siguiente sección
          setActive((prev) => Math.min(prev + 1, sections.length - 1));
        } else {
          // swipe abajo → sección anterior
          setActive((prev) => Math.max(prev - 1, 0));
        }

        timeout = setTimeout(() => {
          timeout = null;
        }, 800); // evita doble swipe instantáneo
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [sections.length]);

  const handleWorkClick = () => {
    setActive(2); // Ir a la sección de proyectos
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (index) => {
    setActive(index);
    setIsMenuOpen(false);
  };

  // Obtener el componente actual pasándole las props necesarias
  const CurrentComponent = sections[active].component;
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      {/* Barra de navegación fija */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-xl border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} px-4 sm:px-6 py-3 sm:py-4 transition-colors duration-300`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className={`${theme === 'dark' ? 'text-yellow-400' : 'text-black'} font-bold text-lg sm:text-xl italic`}>Santiago Maya Tobar</div>
          
          {/* Menú desktop */}
          <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
            <button 
              onClick={() => scrollToSection(0)} 
              className={`font-medium ${active === 0 ? (theme === 'dark' ? 'text-yellow-400' : 'text-black') : (theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-black/70 hover:text-black')} transition-colors`}
            >
              {language === 'es' ? 'Inicio' : 'Home'}
            </button>
            <button 
              onClick={() => scrollToSection(1)} 
              className={`font-medium ${active === 1 ? (theme === 'dark' ? 'text-yellow-400' : 'text-black') : (theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-black/70 hover:text-black')} transition-colors`}
            >
              {language === 'es' ? 'Sobre mí' : 'About'}
            </button>
            <button 
              onClick={() => scrollToSection(2)} 
              className={`font-medium ${active === 2 ? (theme === 'dark' ? 'text-yellow-400' : 'text-black') : (theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-black/70 hover:text-black')} transition-colors`}
            >
              {language === 'es' ? 'Proyectos' : 'Projects'}
            </button>
            <button 
              onClick={() => scrollToSection(3)} 
              className={`font-medium ${active === 3 ? (theme === 'dark' ? 'text-yellow-400' : 'text-black') : (theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-black/70 hover:text-black')} transition-colors`}
            >
              {language === 'es' ? 'Contacto' : 'Contact'}
            </button>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Toggle de tema */}
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-yellow-400' : 'bg-black text-yellow-400'} transition-colors duration-300`}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
              
              {/* Botón idioma */}
              <button
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className={`px-2 py-1 sm:px-3 sm:py-2 rounded-lg font-bold ${theme === 'dark' ? 'bg-yellow-400 text-black' : 'bg-black text-yellow-400'} hover:opacity-90 text-sm sm:text-base`}
                aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                {language === "es" ? "EN" : "ES"}
              </button>
            </div>
          </nav>

          {/* Menú mobile */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Toggle de tema */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-yellow-400' : 'bg-black text-yellow-400'} transition-colors duration-300`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            
            {/* Botón idioma */}
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className={`px-2 py-1 rounded-lg font-bold ${theme === 'dark' ? 'bg-yellow-400 text-black' : 'bg-black text-yellow-400'} hover:opacity-90 text-sm`}
              aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              {language === "es" ? "EN" : "ES"}
            </button>
            
            {/* Botón menú hamburguesa */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menú mobile desplegable */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden mt-3 pb-3 ${theme === 'dark' ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-xl rounded-lg border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} px-4 py-3`}
          >
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection(0)} 
                className={`font-medium text-left py-2 ${active === 0 ? (theme === 'dark' ? 'text-yellow-400' : 'text-black') : (theme === 'dark' ? 'text-gray-300' : 'text-black/70')} transition-colors`}
              >
                {language === 'es' ? 'Inicio' : 'Home'}
              </button>
              <button 
                onClick={() => scrollToSection(1)} 
                className={`font-medium text-left py-2 ${active === 1 ? (theme === 'dark' ? 'text-yellow-400' : 'text-black') : (theme === 'dark' ? 'text-gray-300' : 'text-black/70')} transition-colors`}
              >
                {language === 'es' ? 'Sobre mí' : 'About'}
              </button>
              <button 
                onClick={() => scrollToSection(2)} 
                className={`font-medium text-left py-2 ${active === 2 ? (theme === 'dark' ? 'text-yellow-400' : 'text-black') : (theme === 'dark' ? 'text-gray-300' : 'text-black/70')} transition-colors`}
              >
                {language === 'es' ? 'Proyectos' : 'Projects'}
              </button>
              <button 
                onClick={() => scrollToSection(3)} 
                className={`font-medium text-left py-2 ${active === 3 ? (theme === 'dark' ? 'text-yellow-400' : 'text-black') : (theme === 'dark' ? 'text-gray-300' : 'text-black/70')} transition-colors`}
              >
                {language === 'es' ? 'Contacto' : 'Contact'}
              </button>
            </nav>
          </motion.div>
        )}
      </header>

      <div className="pt-16 sm:pt-20">
        <AnimatePresence mode="wait">
          <CurrentComponent 
            key={sections[active].id} 
            language={language} 
            onWorkClick={handleWorkClick}
            theme={theme} // Pasar theme a las secciones
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
```
