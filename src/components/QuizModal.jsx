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
  const [userAnswers, setUserAnswers] = useState([]);
  const [showAnswersList, setShowAnswersList] = useState(false);
  const [reviewingQuestionIdx, setReviewingQuestionIdx] = useState(null);

  const question = quizData[currentIndex];

  const handleOptionSelect = (option) => {
    if (showAnswer) return; // Prevent changing selection after showing answer
    setSelectedOption(option);
  };


  const recordResult = (overrideOption = null) => {
    const optionToEval = overrideOption || selectedOption || 'BLANK';
    
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = optionToEval;
      return newAnswers;
    });

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

  if (reviewingQuestionIdx !== null) {
    const revQuestion = quizData[reviewingQuestionIdx];
    const uAnswer = userAnswers[reviewingQuestionIdx];

    return (
      <div className="quiz-overlay">
        <motion.div 
          className="quiz-modal glass-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <button className="quiz-close" onClick={() => setReviewingQuestionIdx(null)}><X size={24} /></button>
          
          <div className="quiz-header">
            <span className="question-counter">Soru {reviewingQuestionIdx + 1} İncelemesi</span>
          </div>

          <div className="quiz-body">
            <p className="question-text">{revQuestion.text}</p>
            
            {revQuestion.image && (
              <div className="question-image-container">
                <img src={revQuestion.image} alt="Soru Görseli" className="question-image" />
              </div>
            )}
            
            {revQuestion.images && (
              <div className="question-images-grid">
                {revQuestion.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`Görsel ${idx+1}`} className="question-image" />
                ))}
              </div>
            )}

            <div className="options-container">
              {Object.entries(revQuestion.options).map(([key, value]) => {
                let btnClass = 'option-btn';
                if (key === revQuestion.answer) {
                  btnClass += ' correct';
                } else if (uAnswer === key) {
                  btnClass += ' incorrect';
                }

                return (
                  <button 
                    key={key} 
                    className={btnClass}
                    disabled={true}
                  >
                    <span className="option-key">{key}</span>
                    <span className="option-text">{value}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="quiz-footer">
            <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center' }}>
              <button className="btn btn-primary" onClick={() => setReviewingQuestionIdx(null)}>
                Geri Dön
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (isFinished) {
    if (showAnswersList) {
      return (
        <div className="quiz-overlay">
          <motion.div 
            className="quiz-modal glass-card"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ maxWidth: '800px', width: '95%' }}
          >
            <button className="quiz-close" onClick={onClose}><X size={24} /></button>
            <div className="quiz-result-container">
              <h2>Cevaplar</h2>
              <div style={{ marginTop: '1rem', maxHeight: '55vh', overflowY: 'auto', padding: '0 1rem' }}>
                <table style={{ width: '100%', textAlign: 'center', borderCollapse: 'collapse' }}>
                  <thead style={{ position: 'sticky', top: 0, background: 'rgba(255, 255, 255, 0.95)', zIndex: 1 }}>
                    <tr>
                      <th style={{ padding: '0.8rem', borderBottom: '2px solid #e2e8f0', color: '#1e293b', fontSize: '1.1rem', textAlign: 'left' }}>Soru No</th>
                      <th style={{ padding: '0.8rem', borderBottom: '2px solid #e2e8f0', color: '#1e293b', fontSize: '1.1rem', textAlign: 'center' }}>Doğru Cevap</th>
                      <th style={{ padding: '0.8rem', borderBottom: '2px solid #e2e8f0', color: '#1e293b', fontSize: '1.1rem', textAlign: 'center' }}>Sizin Cevabınız</th>
                      <th style={{ padding: '0.8rem', borderBottom: '2px solid #e2e8f0', color: '#1e293b', fontSize: '1.1rem', textAlign: 'right' }}>İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quizData.map((q, idx) => {
                      const uAnswer = userAnswers[idx];
                      const isCorrect = uAnswer === q.answer;
                      const isBlank = !uAnswer || uAnswer === 'BLANK';
                      const color = isCorrect ? '#16a34a' : (isBlank ? '#94a3b8' : '#ef4444');
                      const displayAnswer = isBlank ? 'Boş' : uAnswer;
                      return (
                        <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '0.8rem', fontWeight: 'bold', color: '#334155', textAlign: 'left' }}>Soru {idx + 1}</td>
                          <td style={{ padding: '0.8rem', fontWeight: 'bold', color: '#16a34a', textAlign: 'center' }}>{q.answer}</td>
                          <td style={{ padding: '0.8rem', fontWeight: 'bold', color: color, textAlign: 'center' }}>{displayAnswer}</td>
                          <td style={{ padding: '0.8rem', textAlign: 'right', minWidth: '80px' }}>
                            {!isCorrect && !isBlank && (
                              <button 
                                onClick={() => setReviewingQuestionIdx(idx)}
                                style={{ padding: '0.2rem 0.6rem', fontSize: '0.8rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'normal' }}
                              >
                                İncele
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn btn-secondary" onClick={() => setShowAnswersList(false)}>Geri Dön</button>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

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
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              <button className="btn btn-secondary" onClick={() => setShowAnswersList(true)}>Cevapları Gör</button>
            </div>
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
