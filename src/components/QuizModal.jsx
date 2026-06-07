import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, XCircle, MinusCircle } from 'lucide-react';
import './QuizModal.css';

const QuizModal = ({ quizData, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [results, setResults] = useState({ correct: 0, incorrect: 0, blank: 0 });
  const [isFinished, setIsFinished] = useState(false);

  const question = quizData[currentIndex];

  const handleOptionSelect = (option) => {
    if (showAnswer) return; // Prevent changing selection after showing answer
    setSelectedOption(option);
  };


  const recordResult = (overrideOption = null) => {
    const optionToEval = overrideOption || selectedOption || 'BLANK';
    if (optionToEval === 'BLANK') {
      setResults(prev => ({ ...prev, blank: prev.blank + 1 }));
    } else if (optionToEval === question.answer) {
      setResults(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setResults(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
  };

  const handleShowAnswer = () => {
    if (showAnswer) return;
    if (!selectedOption) setSelectedOption('BLANK');
    
    setShowAnswer(true);
    recordResult(selectedOption || 'BLANK');
  };

  const handleNext = () => {
    if (!showAnswer) {
      recordResult(selectedOption || 'BLANK');
    }
    
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleFinish = () => {
    if (!showAnswer) {
      recordResult(selectedOption || 'BLANK');
    }
    setIsFinished(true);
  };

  if (isFinished) {
    return (
      <div className="quiz-overlay">
        <motion.div 
          className="quiz-modal glass-card"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <button className="quiz-close" onClick={onClose}><X size={24} /></button>
          <div className="quiz-result-container">
            <h2>Test Sonucu</h2>
            <div className="result-stats">
              <div className="stat-box correct">
                <CheckCircle size={40} />
                <span className="stat-value">{results.correct}</span>
                <span className="stat-label">Doğru</span>
              </div>
              <div className="stat-box incorrect">
                <XCircle size={40} />
                <span className="stat-value">{results.incorrect}</span>
                <span className="stat-label">Yanlış</span>
              </div>
              <div className="stat-box blank">
                <MinusCircle size={40} />
                <span className="stat-value">{results.blank}</span>
                <span className="stat-label">Boş</span>
              </div>
            </div>
            <button className="btn btn-primary mt-4" onClick={onClose}>Testi Kapat</button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="quiz-overlay">
      <motion.div 
        className="quiz-modal glass-card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <button className="quiz-close" onClick={onClose}><X size={24} /></button>
        
        <div className="quiz-header">
          <span className="question-counter">Soru {currentIndex + 1} / {quizData.length}</span>
        </div>

        <div className="quiz-body">
          <p className="question-text">{question.text}</p>
          
          {question.image && (
            <div className="question-image-container">
              <img src={question.image} alt="Soru Görseli" className="question-image" />
            </div>
          )}
          
          {question.images && (
            <div className="question-images-grid">
              {question.images.map((img, idx) => (
                <img key={idx} src={img} alt={`Görsel ${idx+1}`} className="question-image" />
              ))}
            </div>
          )}

          <div className="options-container">
            {Object.entries(question.options).map(([key, value]) => {
              let btnClass = 'option-btn';
              if (selectedOption === key) btnClass += ' selected';
              if (showAnswer) {
                if (key === question.answer) btnClass += ' correct';
                else if (selectedOption === key && key !== question.answer) btnClass += ' incorrect';
              }

              return (
                <button 
                  key={key} 
                  className={btnClass}
                  onClick={() => handleOptionSelect(key)}
                  disabled={showAnswer}
                >
                  <span className="option-key">{key}</span>
                  <span className="option-text">{value}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="quiz-footer">
          {!showAnswer ? (
            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-secondary" 
                style={{ flex: 1, minWidth: '80px', background: '#ef4444', color: 'white', borderColor: '#ef4444' }} 
                onClick={handleFinish}
              >
                Testi Bitir
              </button>
              <button 
                className="btn btn-primary"
                style={{ flex: 1, minWidth: '100px' }}
                onClick={handleShowAnswer}
              >
                Cevap Gör
              </button>
              <button 
                className="btn btn-primary"
                style={{ flex: 1, minWidth: '120px', background: '#3b82f6', borderColor: '#3b82f6' }}
                onClick={handleNext}
              >
                {currentIndex < quizData.length - 1 ? 'Sonraki Soru' : 'Sonucu Gör'}
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
              <button 
                className="btn btn-secondary" 
                style={{ flex: 1, background: '#ef4444', color: 'white', borderColor: '#ef4444' }} 
                onClick={handleFinish}
              >
                Testi Bitir
              </button>
              <button className="btn btn-primary" style={{ flex: 2 }} onClick={handleNext}>
                {currentIndex < quizData.length - 1 ? 'Sonraki Soru' : 'Sonucu Gör'}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizModal;
