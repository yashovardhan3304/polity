import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Award, Bookmark, Home } from 'lucide-react';

// Import educational components
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Cockpit } from './components/Cockpit';
import { ChapterList } from './components/ChapterList';
import { LessonModal } from './components/LessonModal';
import { ArticleFinder } from './components/ArticleFinder';
import { ConnectionMap } from './components/ConnectionMap';
import { ConfusionBuster } from './components/ConfusionBuster';
import { MCQEngine } from './components/MCQEngine';
import { PYQArena } from './components/PYQArena';
import { TrapVault } from './components/TrapVault';
import { MemoryLab } from './components/MemoryLab';
import { SavedRevision } from './components/SavedRevision';
import { CurrentPolity } from './components/CurrentPolity';
import { JudgmentVault } from './components/JudgmentVault';
import { SourceLibrary } from './components/SourceLibrary';

// Import data references
import { chaptersData, lessonsData } from './data/chaptersData';

// Chalk Dust canvas particle effect for the blackboard theme
const ChalkDustCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      fadeSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.15 - 0.075;
        this.speedY = Math.random() * -0.15 - 0.05;
        this.alpha = Math.random() * 0.4 + 0.1;
        this.fadeSpeed = Math.random() * 0.002 + 0.001;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) {
          this.y = height;
          this.alpha = Math.random() * 0.4 + 0.1;
        }

        this.alpha -= this.fadeSpeed;
        if (this.alpha <= 0) {
          this.alpha = Math.random() * 0.4 + 0.1;
          this.x = Math.random() * width;
          this.y = height;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.globalAlpha = this.alpha;
        c.fillStyle = '#f4f5ef';
        c.shadowBlur = 3;
        c.shadowColor = '#f4f5ef';
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    const particles: Particle[] = Array.from({ length: 45 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="chalk-dust-canvas" />;
};

export const App: React.FC = () => {
  // Navigation Routing
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  
  // Lesson Modal State
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  // Centralized State with localStorage Persistence
  const [completedTopics, setCompletedTopics] = useState<string[]>(() => {
    const saved = localStorage.getItem('polity_completed_topics');
    return saved ? JSON.parse(saved) : [];
  });

  const [savedLessons, setSavedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('polity_saved_lessons');
    return saved ? JSON.parse(saved) : [];
  });

  const [savedArticles, setSavedArticles] = useState<string[]>(() => {
    const saved = localStorage.getItem('polity_saved_articles');
    return saved ? JSON.parse(saved) : [];
  });

  const [savedTraps, setSavedTraps] = useState<string[]>(() => {
    const saved = localStorage.getItem('polity_saved_traps');
    return saved ? JSON.parse(saved) : [];
  });

  const [savedCards, setSavedCards] = useState<string[]>(() => {
    const saved = localStorage.getItem('polity_saved_cards');
    return saved ? JSON.parse(saved) : [];
  });

  const [masteredCards, setMasteredCards] = useState<string[]>(() => {
    const saved = localStorage.getItem('polity_mastered_cards');
    return saved ? JSON.parse(saved) : [];
  });

  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem('polity_streak');
    return saved ? parseInt(saved, 10) : 3; // Default starting streak for demo
  });

  const [quizPoints, setQuizPoints] = useState<number>(() => {
    const saved = localStorage.getItem('polity_quiz_points');
    return saved ? parseInt(saved, 10) : 40; // Default starting points for demo
  });

  const [weakTopics, setWeakTopics] = useState<string[]>(() => {
    const saved = localStorage.getItem('polity_weak_topics');
    return saved ? JSON.parse(saved) : ["Fundamental Rights", "Emergency"]; // Default starting weak topics
  });

  // Calculate total topic count
  const totalTopicsCount = chaptersData.reduce((acc, chap) => acc + chap.topics.length, 0);
  const progressPercent = totalTopicsCount > 0 
    ? Math.round((completedTopics.length / totalTopicsCount) * 100) 
    : 0;

  // Sync state to localStorage on changes
  useEffect(() => {
    localStorage.setItem('polity_completed_topics', JSON.stringify(completedTopics));
  }, [completedTopics]);

  useEffect(() => {
    localStorage.setItem('polity_saved_lessons', JSON.stringify(savedLessons));
  }, [savedLessons]);

  useEffect(() => {
    localStorage.setItem('polity_saved_articles', JSON.stringify(savedArticles));
  }, [savedArticles]);

  useEffect(() => {
    localStorage.setItem('polity_saved_traps', JSON.stringify(savedTraps));
  }, [savedTraps]);

  useEffect(() => {
    localStorage.setItem('polity_saved_cards', JSON.stringify(savedCards));
  }, [savedCards]);

  useEffect(() => {
    localStorage.setItem('polity_mastered_cards', JSON.stringify(masteredCards));
  }, [masteredCards]);

  useEffect(() => {
    localStorage.setItem('polity_streak', streak.toString());
  }, [streak]);

  useEffect(() => {
    localStorage.setItem('polity_quiz_points', quizPoints.toString());
  }, [quizPoints]);

  useEffect(() => {
    localStorage.setItem('polity_weak_topics', JSON.stringify(weakTopics));
  }, [weakTopics]);

  // Quiz Score Handler: Updates points and tracks weak topics
  const handleScoreUpdate = (points: number, isCorrect: boolean, topic: string) => {
    setQuizPoints(prev => Math.max(0, prev + points));

    if (!isCorrect) {
      setWeakTopics(prev => {
        if (!prev.includes(topic)) return [...prev, topic];
        return prev;
      });
    } else {
      // If they get it correct, occasionally clear from weak topics
      setWeakTopics(prev => prev.filter(t => t !== topic));
    }
  };

  // Toggle checklist states
  const toggleTopicCompletion = (topicName: string) => {
    setCompletedTopics(prev => {
      if (prev.includes(topicName)) {
        return prev.filter(t => t !== topicName);
      } else {
        return [...prev, topicName];
      }
    });
  };

  const toggleSaveLesson = (topicName: string) => {
    setSavedLessons(prev => {
      if (prev.includes(topicName)) {
        return prev.filter(t => t !== topicName);
      } else {
        return [...prev, topicName];
      }
    });
  };

  const toggleSaveArticle = (artNumber: string) => {
    setSavedArticles(prev => {
      if (prev.includes(artNumber)) {
        return prev.filter(a => a !== artNumber);
      } else {
        return [...prev, artNumber];
      }
    });
  };

  const toggleSaveTrap = (trapId: string) => {
    setSavedTraps(prev => {
      if (prev.includes(trapId)) {
        return prev.filter(t => t !== trapId);
      } else {
        return [...prev, trapId];
      }
    });
  };

  const toggleSaveCard = (cardNum: string) => {
    setSavedCards(prev => {
      if (prev.includes(cardNum)) {
        return prev.filter(c => c !== cardNum);
      } else {
        return [...prev, cardNum];
      }
    });
  };

  // Reset progress handler
  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all your study progress?")) {
      setCompletedTopics([]);
      setSavedLessons([]);
      setSavedArticles([]);
      setSavedTraps([]);
      setSavedCards([]);
      setMasteredCards([]);
      setStreak(1);
      setQuizPoints(0);
      setWeakTopics([]);
      
      localStorage.clear();
      alert("Study cockpit reset completed successfully.");
    }
  };

  // Render view router
  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <Cockpit
            completedTopicsCount={completedTopics.length}
            totalTopicsCount={totalTopicsCount}
            savedCount={savedLessons.length + savedArticles.length + savedTraps.length + savedCards.length}
            quizPoints={quizPoints}
            streak={streak}
            weakTopics={weakTopics}
            resetProgress={resetProgress}
            setActiveTab={setActiveTab}
          />
        );
      case 'chapters':
        return (
          <ChapterList
            completedTopics={completedTopics}
            toggleTopicCompletion={toggleTopicCompletion}
            openLesson={setActiveLesson}
          />
        );
      case 'articles':
        return (
          <ArticleFinder
            savedArticles={savedArticles}
            toggleSaveArticle={toggleSaveArticle}
            setActiveTab={setActiveTab}
          />
        );
      case 'map':
        return <ConnectionMap />;
      case 'buster':
        return <ConfusionBuster />;
      case 'practice':
        return (
          <div className="practice-arena-shell" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <MCQEngine 
              onScoreUpdate={handleScoreUpdate}
              quizPoints={quizPoints}
            />
            <hr style={{ borderColor: 'var(--line-color)', borderStyle: 'dashed' }} />
            <PYQArena />
            <hr style={{ borderColor: 'var(--line-color)', borderStyle: 'dashed' }} />
            <JudgmentVault setActiveTab={setActiveTab} />
          </div>
        );
      case 'traps':
        return (
          <TrapVault
            savedTraps={savedTraps}
            toggleSaveTrap={toggleSaveTrap}
            setActiveTab={setActiveTab}
          />
        );
      case 'memory':
        return (
          <MemoryLab
            savedCards={savedCards}
            toggleSaveCard={toggleSaveCard}
            masteredCards={masteredCards}
            setMasteredCards={setMasteredCards}
          />
        );
      case 'revision':
        return (
          <SavedRevision
            savedLessons={savedLessons}
            savedArticles={savedArticles}
            savedTraps={savedTraps}
            savedCards={savedCards}
            toggleSaveLesson={toggleSaveLesson}
            toggleSaveArticle={toggleSaveArticle}
            toggleSaveTrap={toggleSaveTrap}
            toggleSaveCard={toggleSaveCard}
            openLesson={setActiveLesson}
            setActiveTab={setActiveTab}
          />
        );
      case 'current':
        return <CurrentPolity />;
      case 'sources':
        return <SourceLibrary />;
      default:
        return <div style={{ padding: '40px' }}>Select a study tab from the navigation pane.</div>;
    }
  };

  return (
    <div className="app-container">
      <ChalkDustCanvas />
      {/* Navbar header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        streak={streak}
        progressPercent={progressPercent}
        openLesson={setActiveLesson}
      />

      <div className="main-layout">
        {/* Sidebar Left navigation */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content main frame */}
        <main className="content-area">
          {/* Renders Landing Hero ONLY on dashboard landing tab */}
          {activeTab === 'dashboard' && (
            <section className="premium-hero-section glass-card glow-purple">
              <span className="hero-eyebrow">FINAL BUILD · COMPLETE INDIAN POLITY</span>
              <h1 className="hero-title">MASTER INDIAN POLITY.</h1>
              <p className="hero-subtitle">
                A study-first Polity hub combining source-backed constitutional notes, searchable Articles, connected concepts, MCQs, PYQ resources, exam traps, memory tools, saved cards and browser-based progress.
              </p>
              <div className="hero-buttons-row">
                <button className="btn-primary" onClick={() => setActiveTab('chapters')}>
                  Start Learning →
                </button>
                <button className="btn-secondary" onClick={() => setActiveTab('articles')}>
                  Find an Article
                </button>
                <button className="btn-secondary" onClick={() => setActiveTab('practice')}>
                  Take a Quiz
                </button>
              </div>
            </section>
          )}

          {/* Renders active page view */}
          {renderActiveView()}
        </main>
      </div>

      {/* Sticky Bottom Navigation for Mobile App-like Experience */}
      <nav className="mobile-nav-bar">
        <button 
          className={`mobile-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <Home size={20} />
          <span>Home</span>
        </button>
        <button 
          className={`mobile-nav-item ${activeTab === 'chapters' ? 'active' : ''}`}
          onClick={() => setActiveTab('chapters')}
        >
          <BookOpen size={20} />
          <span>Learn</span>
        </button>
        <button 
          className={`mobile-nav-item ${activeTab === 'practice' ? 'active' : ''}`}
          onClick={() => setActiveTab('practice')}
        >
          <Award size={20} />
          <span>Quiz</span>
        </button>
        <button 
          className={`mobile-nav-item ${activeTab === 'revision' ? 'active' : ''}`}
          onClick={() => setActiveTab('revision')}
        >
          <Bookmark size={20} />
          <span>Saved</span>
        </button>
      </nav>

      {/* Fullscreen detailed study Modal */}
      {activeLesson && (
        <LessonModal
          topic={activeLesson}
          lesson={lessonsData[activeLesson]}
          onClose={() => setActiveLesson(null)}
          isCompleted={completedTopics.includes(activeLesson)}
          isSaved={savedLessons.includes(activeLesson)}
          onToggleComplete={() => toggleTopicCompletion(activeLesson)}
          onToggleSave={() => toggleSaveLesson(activeLesson)}
          setActiveTab={setActiveTab}
        />
      )}

      {/* Interactive Global Style tweaks */}
      <style>{`
        .premium-hero-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 40px;
          margin-bottom: 30px;
          background: linear-gradient(135deg, rgba(12,15,18,0.9), rgba(5,6,7,0.95));
          border-color: rgba(170, 140, 255, 0.25);
        }

        .hero-eyebrow {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--purple-neon);
          letter-spacing: 0.1em;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-color);
          text-shadow: 0 0 15px rgba(244, 245, 239, 0.05);
        }

        @media (max-width: 600px) {
          .hero-title {
            font-size: 2rem;
          }
          .premium-hero-section {
            padding: 24px;
          }
        }

        .hero-subtitle {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 800px;
        }

        .hero-buttons-row {
          display: flex;
          gap: 14px;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        @media (max-width: 480px) {
          .hero-buttons-row button {
            width: 100%;
          }
        }

        .practice-arena-shell {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

    </div>
  );
};
