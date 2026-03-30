// src/App.jsx
// 1. IMPORT REACT & HOOKS (DIPERBAIKI: Menambahkan useEffect agar tidak blank)
import React, { useState, useEffect } from 'react';

// 2. IMPORT CSS (Bootstrap & Icons)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

// 3. IMPORT BOOTSTRAP COMPONENTS
import { Modal, Accordion, Carousel } from 'react-bootstrap';

// 4. IMPORT ASSETS (Logo & Layanan)
import logoVion from './assets/logo-vion.png'; 
import imgLayanan1 from './assets/layan-1.png';
import imgLayanan2 from './assets/layan-2.png';
import imgLayanan3 from './assets/layan-3.png';
import imgLayanan4 from './assets/layan-4.png';
import imgLayanan5 from './assets/layan-5.png';
import imgLayanan6 from './assets/layan-6.png';
import imgLayanan7 from './assets/layan-7.png';
import imgLayanan8 from './assets/layan-8.png';
import imgLayanan9 from './assets/layan-9.png';
import imgLayanan10 from './assets/layan-10.png';

const App = () => {
  // --- SEMUA STATE & HANDLER ---
  const [show, setShow] = useState(false);
  const [selectedParent, setSelectedParent] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // LOGIKA DARK MODE (Mengubah atribut di tag HTML)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }, [isDarkMode]);

  const handleClose = () => setShow(false);
  const handleShow = (parent) => {
    setSelectedParent(parent);
    setShow(true);
  };

  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
    setShowArticle(true);
  };

  // Struktur Data Layanan
  const serviceGroups = [
    {
      id: 1,
      title: "Perawatan Ortodontil",
      icon: "bi-braces",
      children: [
        { name: "Behel Gigi", img: imgLayanan1, desc: "Raih senyum sempurna dengan layanan behel gigi Mataram di Klinik Vion. Tim profesional kami siap memberikan perawatan ortodonti yang aman, rapi, dan sesuai kebutuhan Anda." }
      ]
    },
    {
      id: 2,
      title: "Perawatan Gigi Anak",
      icon: "bi-emoji-smile",
      children: [
        { name: "Gigi Anak", img: imgLayanan2, desc: "Klinik Vion menawarkan perawatan gigi khusus anak dengan dokter ramah dan sabar. Anak Anda akan merasa nyaman saat mendapatkan perawatan optimal di dental clinic kami." }
      ]
    },
    {
      id: 3,
      title: "Perawatan Basic",
      icon: "bi-shield-plus",
      children: [
        { name: "Tambal Gigi", img: imgLayanan3, desc: "Atasi gigi berlubang dengan layanan tambal gigi Mataram dari Klinik Vion. Prosedur cepat dan aman menjaga kesehatan mulut sekaligus mengembalikan fungsi gigi secara optimal." },
        { name: "Scaling Gigi", img: imgLayanan4, desc: "Jaga kebersihan gigi dan kesehatan mulut Anda dengan layanan scaling gigi Mataram dari Klinik Vion. Proses cepat, aman, dan dilakukan oleh tenaga profesional berpengalaman untuk senyum lebih sehat dan percaya diri." },
        { name: "Cabut Gigi", img: imgLayanan5, desc: "Butuh tindakan cabut gigi yang aman dan nyaman? Klinik Vion menghadirkan layanan cabut gigi Mataram dengan dokter gigi berpengalaman dan prosedur steril serta profesional untuk mencegah komplikasi." },
        { name: "Konsultasi Kesehatan Gigi & Mulut", img: imgLayanan6, desc: "Untuk konsultasi kesehatan gigi & mulut, percayakan pada Klinik Vion! Tim dokter gigi terdekat kami siap memberikan pemeriksaan menyeluruh, membantu Anda menjaga kesehatan gigi dan mulut dengan tepat." }
      ]
    },
    {
      id: 4,
      title: "Perawatan Prostodontic",
      icon: "bi-layers",
      children: [
        { name: "Dental Crown", img: imgLayanan7, desc: "Perbaiki tampilan dan fungsi gigi Anda dengan crown dental dari Klinik Vion. Klinik gigi Mataram kami siap melayani crown dengan aman, presisi, dan optimal untuk hasil tampak alami, kuat, dan nyaman digunakan setiap hari." },
        { name: "Gigi Palsu", img: imgLayanan8, desc: "Lengkapi senyum Anda dengan layanan gigi palsu dari Klinik Vion. Dengan tenaga ahli dan peralatan modern di klinik gigi Mataram kami, hasilnya presisi, nyaman, dan alami." },
        { name: "Dental Bridge", img: imgLayanan9, desc: "Klinik Vion menyediakan layanan dental bridge untuk menggantikan gigi yang hilang. Dengan peralatan modern dan dokter gigi terdekat kami yang berpengalaman, prosedur ini memberikan hasil rapi, tahan lama, dan nyaman." }
      ]
    },
    {
      id: 5,
      title: "Perawatan Konservasi",
      icon: "bi-activity",
      children: [
        { name: "Perawatan Saluran Akar", img: imgLayanan10, desc: "Atasi masalah radang saraf gigi dengan perawatan saluran akar di Klinik Vion. Prosedur steril dan aman dilakukan oleh dokter profesional di klinik gigi Mataram kami yang terpercaya dalam menjaga kenyamanan dan kesehatan gigi Anda." }
      ]
    }
  ];

  return (
    <div className="vion-wrapper">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg shadow-sm sticky-top bg-body">
        <div className="container">
          <a className="navbar-brand fw-bold text-vion-title" href="#">KLINIK VION</a>
          
          {/* Tombol Toggle Theme */}
          <div className="ms-auto d-flex align-items-center">
            <button 
              className="btn btn-link nav-link me-3 border-0 text-decoration-none" 
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <i className="bi bi-sun-fill text-warning fs-5"></i>
              ) : (
                <i className="bi bi-moon-stars-fill text-primary fs-5"></i>
              )}
            </button>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">Tentang Kami</a></li>
              <li className="nav-item"><a className="nav-link" href="#layanan">Layanan</a></li>
              <li className="nav-item"><a className="nav-link" href="#edukasi">Edukasi</a></li>
              <li className="nav-item"><a className="nav-link" href="#jadwal">Jadwal</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="vion-hero py-5 bg-vion-gradient" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              
              {/* KARTU GLASSMORPHISM */}
              <div className="vion-card p-5 shadow-lg border-0 bg-body bg-opacity-50" 
                  style={{ 
                    borderRadius: '2rem', 
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)', // Support untuk Safari
                    border: '1px solid rgba(255,255,255,0.1)' 
                  }}>
                
                <div className="mb-4">
                  <img 
                    src={logoVion} 
                    alt="Logo Klinik Vion" 
                    className="img-fluid" 
                    style={{ 
                      maxHeight: '180px', 
                      filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.1))' 
                    }} 
                  />
                </div>

                {/* PERBAIKAN: Tambahkan text-vion-title agar teks KLINIK VION adaptif */}
                <h1 className="display-4 fw-bold mb-1 text-vion-title" style={{ letterSpacing: '-1px' }}>
                  KLINIK VION
                </h1>
                
                <p className="lead fw-medium text-primary mb-4">
                  drg. Ovie — drg. Nova
                </p>
                
                <div className="mb-5">
                  {/* PERBAIKAN: bg-body-secondary dan text-body agar kontras di kedua mode */}
                  <span className="badge rounded-pill bg-body-secondary text-body px-3 py-2 border border-light-subtle">
                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                    Klinik Gigi Mataram
                  </span>
                </div>

                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <a 
                    href="https://wa.me/6281936780761" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-success btn-lg px-5 py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center border-0"
                    style={{ 
                      borderRadius: '50px',
                      backgroundColor: '#25D366' // Warna WhatsApp yang paten
                    }}
                  >
                    <i className="bi bi-whatsapp me-3 fs-4"></i>
                    Reservasi Sekarang
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION TENTANG KAMI */}
      <section id="about" className="py-5 bg-body"> {/* PERBAIKAN: bg-white jadi bg-body */}
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge vion-badge mb-2">ABOUT US</span>
            <h2 className="fw-bold text-vion-title">Mengenal Klinik Vion</h2>
          </div>

          <div className="row justify-content-center">
            {/* CAROUSEL FOTO */}
            <div className="col-lg-10 mb-5">
              <div className="shadow-sm rounded-5 overflow-hidden">
                <Carousel fade indicators={true} interval={3000}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070"
                      alt="Interior Klinik 1"
                      style={{ height: '450px', objectFit: 'cover' }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Interior Klinik 2"
                      style={{ height: '450px', objectFit: 'cover' }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Interior Klinik 3"
                      style={{ height: '450px', objectFit: 'cover' }}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            {/* TEKS DESKRIPSI */}
            <div className="col-lg-10">
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="fw-bold mb-3 text-vion-title">Klinik Gigi Profesional di Mataram</h4>
                  {/* PERBAIKAN: text-secondary terkadang terlalu gelap di dark mode, 
                      Bootstrap akan menyesuaikan otomatis jika kita biarkan atau pakai opacity */}
                  <p className="text-body-secondary" style={{ textAlign: 'justify' }}>
                    <strong>KLINIK VION drg. Ovie - drg. Nova</strong> melayani dengan sepenuh hati sebagai Klinik Gigi Mataram yang menghadirkan perawatan gigi profesional dengan teknologi modern dan tenaga medis berpengalaman. Sebagai pilihan tepat bagi Anda yang mencari Dokter Gigi terdekat.
                  </p>
                  <p className="text-body-secondary" style={{ textAlign: 'justify' }}>
                    Kami menyediakan layanan lengkap seperti tambal gigi, scaling, behel gigi, perawatan gigi berlubang, hingga perawatan estetika gigi untuk senyum yang lebih sehat dan percaya diri. Dental Clinic ini berkomitmen memberikan pelayanan terbaik dengan suasana nyaman, prosedur higienis, dan hasil memuaskan bagi setiap pasien. KLINIK VION drg. Ovie - drg. Nova siap menjadi solusi perawatan gigi terpercaya untuk Anda dan keluarga di Mataram.
                  </p>
                </div>
                <div className="col-md-4">
                  {/* PERBAIKAN: bg-light jadi bg-body-tertiary agar ikut gelap */}
                  <div className="p-4 bg-body-tertiary rounded-4 border border-light-subtle">
                    <h6 className="fw-bold mb-3 text-vion-title">Keunggulan</h6>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2 small"><i className="bi bi-check-circle-fill text-primary me-2"></i>Tenaga Medis Ahli</li>
                      <li className="mb-2 small"><i className="bi bi-check-circle-fill text-primary me-2"></i>Peralatan Modern</li>
                      <li className="mb-2 small"><i className="bi bi-check-circle-fill text-primary me-2"></i>Prosedur Higienis</li>
                      <li className="small"><i className="bi bi-check-circle-fill text-primary me-2"></i>Nyaman & Ramah</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARENT SERVICES SECTION */}
      <section id="layanan" className="container py-5">
        <div className="text-center mb-5">
          <span className="badge vion-badge mb-2">LAYANAN KAMI</span>
          <h2 className="fw-bold text-vion-title">Pilih Kategori Perawatan</h2>
        </div>

        <div className="row g-4 justify-content-center">
          {serviceGroups.map((group) => (
            <div className="col-md-4 col-lg-2" key={group.id} style={{minWidth: '200px'}}>
              
              {/* PERBAIKAN: Hapus style={{transition...}}, tambahkan class 'vion-service-card' */}
              <div 
                className="vion-card vion-service-card text-center p-4 h-100 bg-body-tertiary border border-light-subtle shadow-sm"
                onClick={() => handleShow(group)}
              >
                {/* Konten Utama (Icon & Judul) */}
                <div className="service-content">
                  <div className="icon-wrapper mb-3 mx-auto">
                    <i className={`bi ${group.icon} fs-1 text-primary`}></i>
                  </div>
                  <h6 className="fw-bold small mb-0 text-vion-title">{group.title}</h6>
                </div>

                {/* Overlay Muncul Saat Hover */}
                <div className="service-overlay">
                  <div className="overlay-text">
                    Lihat Layanan <i className="bi bi-arrow-right ms-1"></i>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* MODAL POP-UP */}
      <Modal show={show} onHide={handleClose} centered size="lg" scrollable>
        {selectedParent && (
          <>
            {/* PERBAIKAN: Modal Header & Body di Bootstrap 5 otomatis menyesuaikan bg-body */}
            <Modal.Header closeButton className="border-0 px-4 pt-4 bg-body">
              <Modal.Title className="fw-bold text-vion-title">
                <i className={`bi ${selectedParent.icon} me-2 text-primary`}></i>
                {selectedParent.title}
              </Modal.Title>
            </Modal.Header>
            
            <Modal.Body className="px-4 pb-5 bg-body">
              <p className="text-body-secondary mb-4 small">Berikut adalah rincian layanan dalam kategori ini:</p>
              
              <div className="row g-4">
                {selectedParent.children.map((child, index) => (
                  <div className="col-12" key={index}>
                    {/* PERBAIKAN: Mengganti bg-light menjadi bg-body-secondary dan border-light menjadi border-light-subtle */}
                    <div className="vion-card p-3 border border-light-subtle bg-body-secondary shadow-none">
                      <div className="row align-items-center">
                        <div className="col-md-4 mb-3 mb-md-0 text-center">
                          <img 
                            src={child.img} 
                            alt={child.name} 
                            className="img-fluid rounded-3 shadow-sm" 
                            style={{maxHeight: '250px', objectFit: 'cover'}}
                          />
                        </div>
                        <div className="col-md-8">
                          {/* text-vion-title agar warna judul tetap konsisten */}
                          <h5 className="fw-bold mb-2 text-vion-title">{child.name}</h5>
                          <p className="text-body-secondary small mb-0" style={{lineHeight: '1.6'}}>
                            {child.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-3 border-top text-center border-light-subtle">
                <a 
                  href="https://wa.me/6281936780761" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn w-100 py-3 rounded-4 shadow-sm text-white fw-bold d-flex align-items-center justify-content-center text-decoration-none"
                  style={{ 
                    backgroundColor: '#25D366', 
                    border: 'none'
                  }}
                >
                  <i className="bi bi-whatsapp me-2 fs-5"></i> 
                  Tanya Biaya & Jadwal via WhatsApp
                </a>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>

      {/* SECTION EDUKASI & UPDATE */}
      <section id="edukasi" className="py-5 bg-body-tertiary"> {/* PERBAIKAN: bg-light -> bg-body-tertiary */}
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge vion-badge mb-2">DENTAL TIPS</span>
            <h2 className="fw-bold text-vion-title">Edukasi & Update Klinik</h2>
          </div>

          <div className="row g-4">
            {[
              // ... data artikel tetap sama ...
              {
                id: 1,
                title: "Penyebab Gigi Sensitif Setelah Scaling",
                preview: "Banyak pasien bertanya, mengapa gigi terasa sensitif setelah scaling...",
                content: "Setelah melakukan scaling, sebagian orang mungkin merasakan gigi menjadi lebih sensitif. Hal ini terjadi karena lapisan plak dan karang gigi yang sebelumnya menutupi permukaan gigi telah dibersihkan, sehingga bagian gigi menjadi lebih terbuka terhadap rangsangan panas atau dingin. Kondisi ini umumnya bersifat sementara dan bisa diatasi dengan penggunaan pasta gigi khusus serta menghindari makanan ekstrem. Jika Anda mencari dokter gigi terdekat, penting untuk memilih layanan yang tepat agar perawatan dilakukan dengan aman dan nyaman. Klinik Vion sebagai dental clinic menyediakan layanan scaling gigi Mataram dengan penanganan yang tepat dan minim rasa tidak nyaman. Tim dokter kami siap membantu menjaga kesehatan gigi Anda secara optimal. Hubungi Klinik Vion sekarang untuk mendapatkan perawatan gigi yang nyaman!",
                image: "https://lh3.googleusercontent.com/geougc/AF1QipMORcsYKhjFFd6_f_7m_Q3hejI-xuO9TYcO9Fc=h305-no",
                date: "26 Maret 2026"
              },
              {
                id: 2,
                title: "Pentingnya Retainer Setelah Lepas Behel",
                preview: "Apa yang harus dilakukan setelah melepas behel? Perawatan terbaik setelah melepas behel...",
                content: "Anda sudah tahu kenapa retainer penting setelah lepas behel? Retainer memiliki peran penting untuk menjaga posisi gigi tetap stabil setelah perawatan ortodonti selesai. Tanpa penggunaan retainer secara rutin, gigi berisiko kembali bergeser ke posisi semula. Dengan pemakaian yang tepat sesuai anjuran dokter, retainer membantu mempertahankan hasil perawatan agar tetap rapi, nyaman, dan tahan lama, sehingga senyum Anda tetap percaya diri setiap saat bersama Klinik Vion. Percayakan perawatan Anda pada dokter gigi terdekat, layanan scaling gigi Mataram, dan rekomendasi dokter gigi Mataram yang siap membantu menjaga kesehatan gigi Anda. Yuk, kunjungi Klinik Vion, lakukan kontrol rutin, dan jangan ragu untuk menghubungi kami atau merekomendasikannya ke orang terdekat Anda.",
                image: "https://lh3.googleusercontent.com/geougc/AF1QipPzG6liPu_xVBPsJGw1YBvYUPlXnW6l5dUPv1k=h305-no",
                date: "23 Maret 2026"
              },
              {
                id: 3,
                title: "Libur Nasional dan Cuti Bersama",
                preview: "Layanan Klinik Vion saat Libur Nasinal dan Cuti Bersama...",
                content: "Sehubungan dengan libur nasional dan cuti bersama Hari Raya Nyepi serta Idulfitri 1447 H, Klinik Vion ingin menginformasikan jadwal operasional kami kepada Anda. Pelayanan kami akan tutup sementara mulai tanggal 19 hingga 23 Maret 2026 dan akan kembali beroperasi normal pada tanggal 24 Maret 2026 mendatang. Kami memahami pentingnya menjaga kesehatan gigi selama momen hari raya, sehingga kehadiran kami sebagai klinik gigi Mataram yang tepercaya berkomitmen untuk selalu memberikan pelayanan terbaik bagi keluarga Anda. Jika Anda mengalami kendala kesehatan mulut mendadak sebelum atau sesudah masa libur, jangan ragu untuk segera mengunjungi dokter gigi terdekat guna mendapatkan penanganan yang tepat dan profesional. Selain pemeriksaan umum, Klinik Vion juga menyediakan berbagai layanan estetik hingga pencabutan gigi yang ditangani oleh dokter gigi murah di Mataram dengan kualitas yang tetap terjaga. Segera hubungi tim administrasi Klinik Vion melalui WhatsApp untuk mengatur jadwal janji temu Anda setelah kami buka kembali atau untuk mendapatkan informasi mengenai layanan lainnya.",
                image: "https://lh3.googleusercontent.com/geougc/AF1QipNBGpHTuOb2j9nVkrbC0P8-DgK18614eA0FQRs=h305-no",
                date: "20 Maret 2026"
              }
            ].map((post) => (
              <div className="col-md-4" key={post.id}>
                {/* PERBAIKAN: bg-white -> bg-body */}
                <div className="vion-card h-100 shadow-sm border border-light-subtle bg-body overflow-hidden card-hover">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src={post.image} className="w-100 h-100 object-fit-cover" alt={post.title} />
                  </div>
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-2">
                      <small className="text-primary fw-bold">Klinik Vion</small>
                      <small className="text-body-secondary">{post.date}</small>
                    </div>
                    <h5 className="fw-bold mb-3 lh-base text-vion-title">{post.title}</h5>
                    <p className="text-body-secondary small mb-4">{post.preview}</p>
                    <button 
                      onClick={() => handleOpenArticle(post)}
                      className="btn btn-outline-primary btn-sm rounded-pill px-3"
                    >
                      Baca Selengkapnya
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL POP-UP ARTIKEL FULL */}
      <Modal show={showArticle} onHide={() => setShowArticle(false)} size="lg" centered scrollable>
        {selectedArticle && (
          <>
            {/* PERBAIKAN: Tambah bg-body agar header tidak putih */}
            <Modal.Header closeButton className="border-0 pb-0 bg-body"></Modal.Header>
            <Modal.Body className="px-4 pb-5 bg-body">
              <img 
                src={selectedArticle.image} 
                className="w-100 rounded-4 mb-4 shadow-sm" 
                style={{ height: '350px', objectFit: 'cover' }} 
                alt={selectedArticle.title}
              />
              <div className="px-md-3">
                <span className="badge bg-primary-subtle text-primary mb-2">Edukasi Gigi</span>
                <h3 className="fw-bold text-vion-title mb-3">{selectedArticle.title}</h3>
                <p className="text-body-secondary small mb-4 border-bottom pb-2 border-light-subtle">
                  <i className="bi bi-calendar-event me-2"></i>Diterbitkan pada {selectedArticle.date}
                </p>
                <div className="article-content text-body-secondary" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                  {selectedArticle.content}
                </div>
                
                {/* PERBAIKAN: bg-light -> bg-body-secondary & border */}
                <div className="mt-5 p-4 bg-body-secondary border border-light-subtle rounded-4 d-flex align-items-center justify-content-between">
                  <p className="mb-0 small fw-bold">Ingin konsultasi lebih lanjut?</p>
                  <a href="https://wa.me/6281936780761" target="_blank" className="btn btn-success btn-sm rounded-pill px-3">
                      <i className="bi bi-whatsapp me-2"></i>Tanya Dokter
                  </a>
                </div>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>

      {/* SECTION FAQ */}
      <section id="faq" className="bg-body-tertiary py-5"> {/* PERBAIKAN: bg-light -> bg-body-tertiary */}
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge vion-badge mb-2">TANYA JAWAB</span>
            <h2 className="fw-bold text-vion-title">Pertanyaan Umum (FAQ)</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Accordion defaultActiveKey="0" className="vion-accordion shadow-sm">
                
                <Accordion.Item eventKey="0" className="border-0 mb-3 rounded-4 overflow-hidden shadow-sm">
                  <Accordion.Header className="fw-bold">Apakah harus reservasi sebelum datang?</Accordion.Header>
                  {/* PERBAIKAN: text-secondary -> text-body-secondary */}
                  <Accordion.Body className="text-body-secondary bg-body">
                    Sangat disarankan untuk melakukan reservasi melalui WhatsApp minimal H-1 untuk memastikan kuota dokter tersedia dan meminimalisir waktu tunggu di klinik.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="border-0 mb-3 rounded-4 overflow-hidden shadow-sm">
                  <Accordion.Header className="fw-bold">Apakah Klinik Vion menerima pasien anak?</Accordion.Header>
                  <Accordion.Body className="text-body-secondary bg-body">
                    Ya, kami memiliki layanan Perawatan Gigi Anak dengan pendekatan yang ramah agar anak-anak merasa nyaman dan tidak takut saat diperiksa.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="border-0 mb-3 rounded-4 overflow-hidden shadow-sm">
                  <Accordion.Header className="fw-bold">Berapa biaya untuk Scaling atau Pasang Behel?</Accordion.Header>
                  <Accordion.Body className="text-body-secondary bg-body">
                    Biaya perawatan bervariasi tergantung kondisi gigi. Anda bisa berkonsultasi langsung dengan admin kami via WhatsApp untuk mendapatkan estimasi harga terbaru.
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ULASAN PELANGGAN */}
      <section id="ulasan" className="bg-body py-5"> {/* PERBAIKAN: bg-white -> bg-body */}
        <div className="container py-4">
          <div className="row align-items-center mb-5">
            <div className="col-md-6 text-center text-md-start">
              <span className="badge vion-badge mb-2">GOOGLE REVIEWS</span>
              <h2 className="fw-bold text-vion-title">Apa Kata Pasien Kami?</h2>
            </div>
            <div className="col-md-6 text-center text-md-end">
              {/* PERBAIKAN: bg-light -> bg-body-tertiary & border-light-subtle */}
              <div className="d-inline-block p-3 bg-body-tertiary rounded-4 border border-light-subtle shadow-sm">
                <div className="d-flex align-items-center justify-content-center">
                  <i className="bi bi-google text-primary me-2 fs-5"></i>
                  <span className="fw-bold me-2 fs-5">4.8</span>
                  <div className="text-warning me-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                  </div>
                  <span className="text-body-secondary small">(112 Ulasan)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {[
              { 
                name: "RestaJuni Artina", 
                role: "2 ulasan · 1 foto", 
                review: "pelayanannya oke bgt, dokter sm perawatnya baik dan ramah bgt🙌✨",
                time: "3 minggu yang lalu",
                color: "#8199C6"
              },
              { 
                name: "Nining Yusuf", 
                role: "1 ulasan", 
                review: "Pernah pasang gigi Palsu di sini .... pelayanan nya bagus....di layani oleh pasangan dokter gigi yg ramah ....Tujuan utama pasang gigi palsu....eh malah dapat bonus .... gigi yg bermasalah ikut di benahi juga",
                time: "3 bulan yang lalu",
                color: "#A3B5D1"
              },
              { 
                name: "Damar dan Luna", 
                role: "Local Guide · 8 ulasan · 14 foto", 
                review: "Pelayanan terbaik, menjadi dokter keluarga kami, anak2 saya mendapatkan perawatan gigi terbaik",
                time: "3 bulan yang lalu",
                color: "#6C757D"
              }
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                {/* PERBAIKAN: bg-white -> bg-body-tertiary & border-light-subtle */}
                <div className="vion-card p-4 border border-light-subtle shadow-sm h-100 bg-body-tertiary card-hover">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="rounded-circle me-3 d-flex align-items-center justify-content-center text-white fw-bold shadow-sm" 
                      style={{ width: '45px', height: '45px', backgroundColor: item.color }}
                    >
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0 text-vion-title">{item.name}</h6>
                      <small className="text-body-secondary" style={{fontSize: '11px'}}>{item.role}</small>
                    </div>
                  </div>
                  <div className="text-warning mb-2 small">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="small text-body-secondary mb-3" style={{lineHeight: '1.6', minHeight: '80px'}}>
                    "{item.review}"
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-auto border-top pt-3 border-light-subtle">
                    <span className="text-body-secondary" style={{fontSize: '10px'}}>{item.time}</span>
                    {/* PERBAIKAN: text-light diganti ke text-body-secondary agar logo google terlihat di mode gelap */}
                    <i className="bi bi-google text-body-secondary small opacity-50"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <a href="#" className="btn btn-outline-primary rounded-pill px-4 btn-sm">
              <i className="bi bi-arrow-up-right-circle me-2"></i>
              Baca Semua Ulasan di Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* SECTION JADWAL PRAKTIK */}
      <section id="jadwal" className="py-5 bg-body-tertiary"> {/* PERBAIKAN: bg-light -> bg-body-tertiary */}
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <span className="badge vion-badge mb-2">OPENING HOURS</span>
              <h2 className="fw-bold text-vion-title mb-4">Jadwal Dokter Kami</h2>
              <p className="text-body-secondary mb-4">
                Klik pada nama dokter untuk melihat jadwal praktik yang lebih spesifik. Kami memiliki tim dokter yang siap melayani Anda.
              </p>
              
              {/* PERBAIKAN: bg-white -> bg-body */}
              <div className="vion-card p-4 border border-light-subtle shadow-sm bg-body rounded-4 mb-4">
                <div className="d-flex align-items-center text-primary mb-2">
                  <i className="bi bi-info-circle-fill me-2"></i>
                  <span className="fw-bold small">Pendaftaran Pasien</span>
                </div>
                <p className="small text-body-secondary mb-0">
                  Sesi Pagi: 08.30 - 12.30 (Close regis 12.00)<br/>
                  Sesi Malam: 18.00 - 21.30 (Close regis 21.00)
                </p>
              </div>
            </div>
            
            <div className="col-lg-7">
              <Accordion defaultActiveKey="0" className="vion-accordion shadow-sm">
                {[
                  // ... data dokter tetap sama ...
                  {
                    id: "0",
                    name: "Drg. Ovie Lestya Nurdiana, M.Kes",
                    role: "Dokter Gigi",
                    icon: "bi-person-badge",
                    theme: "primary",
                    schedule: [
                      { hari: "Senin", pagi: "08.30 - 12.30", malam: "18.00 - 21.30" },
                      { hari: "Selasa", pagi: "08.30 - 12.30", malam: "18.00 - 21.30" },
                      { hari: "Rabu", pagi: "08.30 - 12.30", malam: "18.00 - 21.30" },
                      { hari: "Kamis", pagi: "08.30 - 12.30", malam: "18.00 - 21.30" },
                      { hari: "Jumat", pagi: "08.30 - 12.30", malam: "18.00 - 21.30" },
                      { hari: "Sabtu", pagi: "08.30 - 12.30", malam: "18.00 - 21.30" },
                    ]
                  },
                  {
                    id: "1",
                    name: "Drg. Nova Budiharjo, M.M, M.Kes",
                    role: "Dokter Gigi",
                    icon: "bi-person-badge-fill",
                    theme: "info",
                    schedule: [
                      { hari: "Senin", malam: "19.30 - 21.00" },
                      { hari: "Selasa", malam: "19.30 - 21.00" },
                      { hari: "Rabu", malam: "19.30 - 21.00" },
                      { hari: "Kamis", malam: "19.30 - 21.00" },
                      { hari: "Jumat", malam: "19.00 - 21.00" },
                      { hari: "Sabtu", malam: "19.00 - 21.00" },
                    ]
                  },
                ].map((doc) => (
                  <Accordion.Item eventKey={doc.id} key={doc.id} className="border-0 mb-3 rounded-4 overflow-hidden shadow-sm">
                    <Accordion.Header>
                      <div className="d-flex align-items-center">
                        <div className={`bg-${doc.theme}-subtle p-2 rounded-3 me-3`}>
                            <i className={`bi ${doc.icon} text-${doc.theme} fs-5`}></i>
                        </div>
                        <div>
                            <h6 className="fw-bold mb-0 text-vion-title">{doc.name}</h6>
                            <small className="text-body-secondary">{doc.role}</small>
                        </div>
                      </div>
                    </Accordion.Header>
                    {/* PERBAIKAN: bg-white -> bg-body */}
                    <Accordion.Body className="bg-body p-0">
                      <div className="table-responsive">
                        {/* PERBAIKAN: Gunakan table-hover tanpa bg statis agar adaptif */}
                        <table className="table table-hover mb-0">
                          {/* PERBAIKAN: table-light -> table-dark (opsional manual) atau biarkan Bootstrap 
                              menanganinya dengan bg-body-secondary pada thead */}
                          <thead className="bg-body-secondary">
                            <tr>
                              <th className="ps-4 py-3 small fw-bold">HARI</th>
                              <th className="py-3 small fw-bold text-center">SESI PAGI</th>
                              <th className="py-3 small fw-bold text-center">SESI MALAM</th>
                            </tr>
                          </thead>
                          <tbody className="border-top-0">
                            {doc.schedule.map((row, idx) => (
                              <tr key={idx} className="align-middle">
                                <td className="ps-4 py-3 fw-medium text-vion-title">{row.hari}</td>
                                <td className="py-3 text-center text-body-secondary small">{row.pagi || "-"}</td>
                                <td className={`py-3 text-center text-${doc.theme} small fw-semibold`}>{row.malam}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
              
              <div className="text-center mt-3">
                <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill small border border-danger-subtle">
                  <i className="bi bi-calendar-x me-2"></i>Minggu & Tgl Merah: Libur
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION KONTAK & LOKASI */}
      <section id="kontak" className="py-5 bg-body"> {/* PERBAIKAN: bg-white -> bg-body */}
        <div className="container">
          <div className="row g-4">
            {/* Info Kontak */}
            <div className="col-lg-4">
              <div className="h-100 d-flex flex-column justify-content-center">
                <span className="badge vion-badge mb-2 w-fit-content">GET IN TOUCH</span>
                <h2 className="fw-bold text-vion-title mb-4">Hubungi Kami</h2>
                
                <div className="d-flex mb-4">
                  {/* PERBAIKAN: bg-light -> bg-body-secondary */}
                  <div className="bg-body-secondary p-3 rounded-4 me-3 text-primary border border-light-subtle">
                    <i className="bi bi-geo-alt-fill fs-4"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-vion-title">Alamat Klinik</h6>
                    <p className="small text-body-secondary mb-0">Jl. Airlangga No. 12, Punia, Kec. Mataram, Kota Mataram, NTB.</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="bg-body-secondary p-3 rounded-4 me-3 text-primary border border-light-subtle">
                    <i className="bi bi-telephone fs-4"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-vion-title">Telepon</h6>
                    <p className="small text-body-secondary mb-0">(0370) 6570713</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="bg-body-secondary p-3 rounded-4 me-3 text-primary border border-light-subtle">
                    <i className="bi bi-instagram fs-4"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-vion-title">Instagram Official</h6>
                    <p className="small text-body-secondary mb-0">@klinikvion</p>
                  </div>
                </div>

                <a 
                  href="https://wa.me/6281936780761" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn py-3 rounded-4 shadow-sm mt-2 d-flex align-items-center justify-content-center text-white fw-bold"
                  style={{ 
                    backgroundColor: '#25D366', 
                    border: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#128C7E'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#25D366'}
                >
                  <i className="bi bi-whatsapp me-2 fs-5"></i> 
                  Chat Admin Sekarang
                </a>
              </div>
            </div>

            {/* Google Maps Terintegrasi */}
            <div className="col-lg-8">
              {/* PERBAIKAN: bg-light -> bg-body-tertiary & filter grayscale untuk mode gelap (opsional) */}
              <div className="vion-card p-2 border border-light-subtle shadow-sm rounded-5 overflow-hidden bg-body-tertiary" style={{ minHeight: '400px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.0434443905586!2d116.101732!3d-8.591823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzUnMzAuNiJTIDExNiwwNicwNi4yIkU!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                  width="100%" 
                  height="450" 
                  style={{ 
                      border: 0, 
                      borderRadius: '25px',
                      filter: 'var(--map-filter, none)' // Bisa ditambahkan CSS variable untuk meredupkan map di dark mode
                  }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Klinik Vion"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SEDERHANA */}
      <footer className="py-4 bg-body border-top border-light-subtle text-center"> 
        {/* PERBAIKAN: bg-white -> bg-body, tambahkan border-light-subtle agar garis pembatas tidak terlalu kontras */}
        <div className="container">
          {/* PERBAIKAN: text-muted -> text-body-secondary */}
          <p className="text-body-secondary small mb-0">
            &copy; 2026 Klinik Vion Mataram. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;