// STG copy - uses the same logic as root script.js
class COCExamSimulator {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.examSettings = {
            questionCount: 20,
            selectedTopics: [],
            selectedDifficulties: ['Basic','Intermediate','Advanced'],
            timePerQuestion: 180,
            totalTime: 60,
            showAnswerAfter: 'end',
            passingMark: 70
        };
        this.examStartTime = null;
        this.questionStartTime = null;
        this.timers = { question: null, total: null };
        this.isExamActive = false;
        this.markedQuestionIds = new Set();

        this.init();
    }

    async init() {
        this.setupEventListeners();
        this.disableStartButton();
        this.loadQuestions();
        this.populateTopics();
        this.setupDifficultyFilters();
        this.updateWelcomeStats();
    }

    loadQuestions(retryCount = 0) {
        const raw = (typeof window !== 'undefined' && window.questionsData) ? window.questionsData : {};
        console.log('Raw:', raw);
        // Collect questions from multiple possible shapes
        var source = [];
        if (Array.isArray(raw.questions)) source = raw.questions;
        else if (Array.isArray(raw.stg_2021_questions)) source = raw.stg_2021_questions;
        else if (raw && typeof raw === 'object') {
            // Fallback: scan any array props that look like questions
            try {
                Object.keys(raw).forEach(function(k){
                    var v = raw[k];
                    if (Array.isArray(v) && v.length && typeof v[0] === 'object' && (v[0].question || v[0].choices)) {
                        source = v;
                    }
                });
            } catch (e) {}
        }
        console.log('Source:', source);

        // Normalize to expected structure; ensure chapter mirrors topic
        const normalized = (Array.isArray(source) ? source : []).map(q => {
            const topic = q && (q.topic || q.chapter) ? (q.topic || q.chapter) : 'General';
            // Compute difficulty from tags (default Basic)
            let difficulty = 'Basic';
            const tags = Array.isArray(q && q.tags) ? q.tags : [];
            const diffTag = tags.find(t => typeof t === 'string' && (t.toLowerCase() === 'basic' || t.toLowerCase() === 'intermediate' || t.toLowerCase() === 'advanced'));
            if (diffTag) difficulty = diffTag.charAt(0).toUpperCase() + diffTag.slice(1).toLowerCase();
            return {
                id: q && q.id != null ? q.id : undefined,
                question: q && q.question != null ? q.question : '',
                choices: q && Array.isArray(q.choices) ? q.choices : [],
                correctAnswer: q && typeof q.correctAnswer === 'number' ? q.correctAnswer : 0,
                explanation: q && q.explanation != null ? q.explanation : '',
                topic: topic,
                chapter: topic,
                tags: tags,
                difficulty: difficulty
            };
        });

        // Retry if still empty (to handle any late script load edge cases)
        if ((!normalized || normalized.length === 0) && retryCount < 10) {
            const delay = 100 * (retryCount + 1);
            setTimeout(() => this.loadQuestions(retryCount + 1), delay);
            return;
        }

        const topics = Array.isArray(raw.topics) && raw.topics.length > 0
            ? raw.topics
            : [...new Set(normalized.map(q => q.topic).filter(Boolean))];

        this.questions = normalized;
        this.availableTopics = topics;
        this.lastQuestionId = Array.isArray(this.questions) && this.questions.length > 0
            ? Math.max(...this.questions.map(q => {
                var n = Number(q.id);
                return isFinite(n) ? n : 0;
            }))
            : 0;
        if (!this.lastQuestionId && Array.isArray(this.questions)) {
            // Fallback to count when ids are missing or non-numeric
            this.lastQuestionId = this.questions.length;
        }

        if (!this.examSettings.selectedTopics || this.examSettings.selectedTopics.length === 0) {
            this.examSettings.selectedTopics = [...this.availableTopics];
        }

        this.populateTopics();
        this.setupDifficultyFilters();
        this.updateWelcomeStats();
        this.enableStartButton();
    }

    setupEventListeners() {
        document.getElementById('startExamBtn').addEventListener('click', () => this.startExam());
        document.getElementById('viewSettingsBtn').addEventListener('click', () => this.showSettings());

        document.getElementById('settingsBtn').addEventListener('click', () => this.showSettings());
        document.getElementById('saveSettingsBtn').addEventListener('click', () => this.saveSettings());
        document.getElementById('cancelSettingsBtn').addEventListener('click', () => this.hideSettings());

        document.getElementById('helpBtn').addEventListener('click', () => this.showHelp());
        document.querySelector('.modal-close').addEventListener('click', () => this.hideHelp());
        document.getElementById('helpModal').addEventListener('click', (e) => { if (e.target.id === 'helpModal') this.hideHelp(); });

        document.getElementById('nextQuestionBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prevQuestionBtn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('submitExamBtn').addEventListener('click', () => this.submitExam());
        document.getElementById('exitExamBtn').addEventListener('click', () => this.exitExam());

        const openSummaryBtn = document.getElementById('openSummaryBtn');
        if (openSummaryBtn) openSummaryBtn.addEventListener('click', () => this.showSummaryModal());
        const summaryCloseBtn = document.getElementById('summaryCloseBtn');
        if (summaryCloseBtn) summaryCloseBtn.addEventListener('click', () => this.hideSummaryModal());
        const summaryModal = document.getElementById('summaryModal');
        if (summaryModal) summaryModal.addEventListener('click', (e) => { if (e.target.id === 'summaryModal') this.hideSummaryModal(); });

        const markBtn = document.getElementById('markQuestionBtn');
        if (markBtn) markBtn.addEventListener('click', () => this.toggleMarkCurrent());

        document.getElementById('selectAllTopics').addEventListener('click', () => this.selectAllTopics());
        document.getElementById('deselectAllTopics').addEventListener('click', () => this.deselectAllTopics());

        document.getElementById('questionCount').addEventListener('change', () => this.updatePassingInfo());
        document.getElementById('passingMarkSetting').addEventListener('input', () => this.updatePassingInfo());

        document.getElementById('reviewAnswersBtn').addEventListener('click', () => this.showReview());
        document.getElementById('retakeExamBtn').addEventListener('click', () => this.retakeExam());
        document.getElementById('newExamBtn').addEventListener('click', () => this.newExam());

        document.getElementById('backToResultsBtn').addEventListener('click', () => this.showResults());

        document.getElementById('questionCount').addEventListener('change', () => this.updateWelcomeStats());
        document.getElementById('totalTimeSetting').addEventListener('change', () => this.updateWelcomeStats());
        document.getElementById('passingMarkSetting').addEventListener('change', () => this.updateWelcomeStats());
    }

    populateTopics() {
        const topicsGrid = document.getElementById('topicsGrid');
        topicsGrid.innerHTML = '';
        const topicsRaw = this.availableTopics && this.availableTopics.length > 0 ? this.availableTopics : [
            "Cardiology", "Neurology", "Endocrinology", "Obstetrics", "Surgery",
            "Pediatrics", "Gastroenterology", "Gynecology", "Urology", "Pulmonology", "Infectious Diseases", "Hematology"
        ];

        // Build a grouping: chapter -> [subtopics]
        const groups = {};
        topicsRaw.forEach(t => {
            if (typeof t === 'string' && t.includes('/')) {
                const parts = t.split('/');
                const chapter = parts[0].trim();
                const sub = parts.slice(1).join('/').trim();
                if (!groups[chapter]) groups[chapter] = new Set();
                groups[chapter].add(sub);
            } else {
                if (!groups[t]) groups[t] = new Set();
            }
        });

        // Render groups with subtopic checkboxes (collapsible by chapter)
        Object.entries(groups).forEach(([chapter, subsSet]) => {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'topic-group';
            const subs = Array.from(subsSet);
            const groupId = `chapter-${chapter}`;
            groupDiv.innerHTML = `
                <details class="topic-group-details">
                    <summary class="topic-group-title">${chapter}</summary>
                    <div class="topics-grid">
                        ${subs.length > 0 ? subs.map(sub => {
                            const full = `${chapter} / ${sub}`;
                            return `
                            <div class="topic-checkbox checked">
                                <input type="checkbox" id="topic-${full}" value="${full}" checked>
                                <label for="topic-${full}">${sub}</label>
                            </div>`;
                        }).join('') : `
                            <div class="topic-checkbox checked">
                                <input type="checkbox" id="topic-${chapter}" value="${chapter}" checked>
                                <label for="topic-${chapter}">${chapter}</label>
                            </div>
                        `}
                    </div>
                </details>
            `;
            topicsGrid.appendChild(groupDiv);

            // Wire up clicks for each checkbox in this group
            groupDiv.querySelectorAll('.topic-checkbox').forEach(topicDiv => {
                topicDiv.addEventListener('click', (e) => {
                    if (e.target.type !== 'checkbox') {
                        const checkbox = topicDiv.querySelector('input[type="checkbox"]');
                        checkbox.checked = !checkbox.checked;
                        topicDiv.classList.toggle('checked', checkbox.checked);
                    }
                });
                const checkbox = topicDiv.querySelector('input[type="checkbox"]');
                checkbox.addEventListener('change', () => {
                    topicDiv.classList.toggle('checked', checkbox.checked);
                });
            });
        });
    }

    setupDifficultyFilters() {
        const diffs = ['Basic','Intermediate','Advanced'];
        this.examSettings.selectedDifficulties = [];
        diffs.forEach(d => {
            const el = document.querySelector(`input[data-difficulty="${d}"]`);
            if (el) {
                if (el.checked) this.examSettings.selectedDifficulties.push(d);
                el.addEventListener('change', () => {
                    const idx = this.examSettings.selectedDifficulties.indexOf(d);
                    if (el.checked && idx === -1) this.examSettings.selectedDifficulties.push(d);
                    if (!el.checked && idx !== -1) this.examSettings.selectedDifficulties.splice(idx, 1);
                });
            }
        });
        // Default to all if none selected
        if (this.examSettings.selectedDifficulties.length === 0) this.examSettings.selectedDifficulties = diffs.slice();
    }

    updateWelcomeStats() {
        const questionCount = parseInt(document.getElementById('questionCount').value);
        const totalTime = parseInt(document.getElementById('totalTimeSetting').value);
        const passingMark = parseInt(document.getElementById('passingMarkSetting').value);

        const bankCount = (typeof this.lastQuestionId === 'number' && this.lastQuestionId > 0)
            ? this.lastQuestionId
            : (Array.isArray(this.questions) ? this.questions.length : 0);
        const bankEl = document.getElementById('questionBankCount');
        if (bankEl) bankEl.textContent = bankCount;

        document.getElementById('totalQuestions').textContent = questionCount;
        document.getElementById('totalTime').textContent = totalTime;
        document.getElementById('passingMark').textContent = passingMark;

        this.updatePassingInfo();
    }

    selectAllTopics() {
        const checkboxes = document.querySelectorAll('#topicsGrid input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
            checkbox.closest('.topic-checkbox').classList.add('checked');
        });
    }

    deselectAllTopics() {
        const checkboxes = document.querySelectorAll('#topicsGrid input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.closest('.topic-checkbox').classList.remove('checked');
        });
    }

    updatePassingInfo() {
        const questionCount = parseInt(document.getElementById('questionCount').value);
        const passingMark = parseInt(document.getElementById('passingMarkSetting').value);
        const requiredCorrect = Math.ceil((questionCount * passingMark) / 100);
        document.getElementById('requiredCorrect').textContent = requiredCorrect;
        document.getElementById('totalQuestionsDisplay').textContent = questionCount;
    }

    showSettings() {
        this.hideAllScreens();
        document.getElementById('settingsScreen').classList.add('active');
        this.populateTopics();
        document.getElementById('questionCount').value = this.examSettings.questionCount;
        document.getElementById('timePerQuestion').value = this.examSettings.timePerQuestion;
        document.getElementById('totalTimeSetting').value = this.examSettings.totalTime;
        document.getElementById('showAnswerAfter').value = this.examSettings.showAnswerAfter;
        document.getElementById('passingMarkSetting').value = this.examSettings.passingMark;
        setTimeout(() => {
            const topics = this.availableTopics && this.availableTopics.length > 0 ? this.availableTopics : [
                "Cardiology", "Neurology", "Endocrinology", "Obstetrics", "Surgery",
                "Pediatrics", "Gastroenterology", "Gynecology", "Urology", "Pulmonology", "Infectious Diseases", "Hematology"
            ];
            topics.forEach(topic => {
                const checkbox = document.getElementById(`topic-${topic}`);
                if (checkbox) {
                    const topicDiv = checkbox.closest('.topic-checkbox');
                    const isSelected = this.examSettings.selectedTopics.includes(topic) || this.examSettings.selectedTopics.length === 0;
                    checkbox.checked = isSelected;
                    topicDiv.classList.toggle('checked', isSelected);
                }
            });
        }, 100);
    }

    hideSettings() {
        document.getElementById('settingsScreen').classList.remove('active');
        this.showWelcome();
    }

    saveSettings() {
        const saveBtn = document.getElementById('saveSettingsBtn');
        const originalText = saveBtn.innerHTML;
        saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
        saveBtn.disabled = true;
        setTimeout(() => {
            try {
                this.examSettings.questionCount = parseInt(document.getElementById('questionCount').value);
                this.examSettings.timePerQuestion = parseInt(document.getElementById('timePerQuestion').value);
                this.examSettings.totalTime = parseInt(document.getElementById('totalTimeSetting').value);
                this.examSettings.showAnswerAfter = document.getElementById('showAnswerAfter').value;
                this.examSettings.passingMark = parseInt(document.getElementById('passingMarkSetting').value);
                const topics = this.availableTopics && this.availableTopics.length > 0 ? this.availableTopics : [
                    "Cardiology", "Neurology", "Endocrinology", "Obstetrics", "Surgery",
                    "Pediatrics", "Gastroenterology", "Gynecology", "Urology", "Pulmonology", "Infectious Diseases", "Hematology"
                ];
                this.examSettings.selectedTopics = [];
                topics.forEach(topic => {
                    const checkbox = document.getElementById(`topic-${topic}`);
                    if (checkbox && checkbox.checked) this.examSettings.selectedTopics.push(topic);
                });
                if (this.examSettings.selectedTopics.length === 0) this.examSettings.selectedTopics = [...topics];
                this.updateWelcomeStats();
                this.hideSettings();
                this.showSuccess('Settings saved successfully!');
            } catch (error) {
                this.showError('Error saving settings. Please try again.');
            } finally {
                saveBtn.innerHTML = originalText;
                saveBtn.disabled = false;
            }
        }, 500);
    }

    showWelcome() { this.hideAllScreens(); document.getElementById('welcomeScreen').classList.add('active'); }

    startExam() {
        if (!this.questions || this.questions.length === 0) { this.showError('Questions are still loading. Please wait a moment and try again.'); return; }
        if (!this.examSettings.selectedTopics || this.examSettings.selectedTopics.length === 0) {
            const allTopics = [...new Set(this.questions.map(q => q.topic))];
            this.examSettings.selectedTopics = allTopics;
        }
        const filteredQuestions = Array.isArray(this.questions)
            ? this.questions.filter(q => {
                const inTopic = this.examSettings.selectedTopics && this.examSettings.selectedTopics.includes(q.topic);
                // Determine difficulty from tags; default Basic
                const tags = Array.isArray(q.tags) ? q.tags : [];
                let difficulty = 'Basic';
                const found = tags.find(t => typeof t === 'string' && (t.toLowerCase() === 'basic' || t.toLowerCase() === 'intermediate' || t.toLowerCase() === 'advanced'));
                if (found) difficulty = found.charAt(0).toUpperCase() + found.slice(1).toLowerCase();
                const inDiff = this.examSettings.selectedDifficulties && this.examSettings.selectedDifficulties.includes(difficulty);
                return inTopic && inDiff;
            })
            : [];
        if (filteredQuestions.length === 0) { this.showError('No questions available for selected topics.'); return; }
        const shuffled = this.shuffleArray(filteredQuestions);
        const desiredCount = (Number.isFinite(this.examSettings.questionCount) && this.examSettings.questionCount > 0)
            ? Math.floor(this.examSettings.questionCount)
            : shuffled.length;
        this.examQuestions = shuffled.slice(0, Math.min(desiredCount, shuffled.length));
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.examStartTime = new Date();
        this.isExamActive = true;
        this.hideAllScreens();
        document.getElementById('examScreen').classList.add('active');
        this.loadQuestion();
        this.startTimers();
    }

    loadQuestion() {
        const question = this.examQuestions[this.currentQuestionIndex];
        document.getElementById('currentQuestionNum').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuestionsExam').textContent = this.examQuestions.length;
        // Topic splitting: "Chapter / Sub-chapter" if contains '/'
        let topicLabel = question.topic || '';
        if (typeof topicLabel === 'string' && topicLabel.includes('/')) {
            const parts = topicLabel.split('/');
            const chapter = parts[0].trim();
            const sub = parts.slice(1).join('/').trim();
            topicLabel = `${chapter} / ${sub}`;
        }
        document.getElementById('currentTopic').textContent = topicLabel;
        // Difficulty label
        const diffEl = document.getElementById('currentDifficulty');
        if (diffEl) diffEl.textContent = question.difficulty || 'Basic';
        document.getElementById('questionText').textContent = question.question;
        const choicesContainer = document.getElementById('choicesContainer');
        choicesContainer.innerHTML = '';
        question.choices.forEach((choice, index) => {
            const choiceDiv = document.createElement('div');
            choiceDiv.className = 'choice-item';
            choiceDiv.innerHTML = `
                <input type="radio" name="question-${question.id}" value="${index}" id="choice-${question.id}-${index}">
                <label for="choice-${question.id}-${index}" class="choice-text">${choice}</label>
            `;
            if (this.userAnswers[question.id] === index) {
                choiceDiv.querySelector('input[type="radio"]').checked = true;
                choiceDiv.classList.add('selected');
            }
            choiceDiv.addEventListener('click', () => this.selectChoice(question.id, index));
            choicesContainer.appendChild(choiceDiv);
        });
        document.getElementById('prevQuestionBtn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('nextQuestionBtn').style.display = this.currentQuestionIndex === this.examQuestions.length - 1 ? 'none' : 'inline-flex';
        document.getElementById('submitExamBtn').style.display = this.currentQuestionIndex === this.examQuestions.length - 1 ? 'inline-flex' : 'none';
        document.getElementById('answerExplanation').style.display = 'none';
        this.startQuestionTimer();

        // Update mark button state and header badge
        this.updateMarkUI(question);
    }

    selectChoice(questionId, choiceIndex) {
        document.querySelectorAll(`input[name="question-${questionId}"]`).forEach(input => { input.closest('.choice-item').classList.remove('selected'); });
        const selectedChoice = document.querySelector(`input[name="question-${questionId}"][value="${choiceIndex}"]`);
        selectedChoice.checked = true;
        selectedChoice.closest('.choice-item').classList.add('selected');
        this.userAnswers[questionId] = choiceIndex;
        if (this.examSettings.showAnswerAfter === 'each') { setTimeout(() => this.showAnswerExplanation(), 500); }
    }

    showAnswerExplanation() {
        const question = this.examQuestions[this.currentQuestionIndex];
        const explanationDiv = document.getElementById('answerExplanation');
        const explanationText = document.getElementById('explanationText');
        explanationText.textContent = question.explanation;
        explanationDiv.style.display = 'block';
        const choices = document.querySelectorAll('.choice-item');
        choices.forEach((choice, index) => {
            choice.classList.remove('correct', 'incorrect');
            if (index === question.correctAnswer) choice.classList.add('correct');
            else if (this.userAnswers[question.id] === index && index !== question.correctAnswer) choice.classList.add('incorrect');
        });
    }

    nextQuestion() { if (this.currentQuestionIndex < this.examQuestions.length - 1) { this.currentQuestionIndex++; this.loadQuestion(); } }
    prevQuestion() { if (this.currentQuestionIndex > 0) { this.currentQuestionIndex--; this.loadQuestion(); } }

    submitExam() {
        const counts = this.getAnswerStatusCounts();
        let warnMsg = 'Are you sure you want to submit your exam? You cannot change answers after submission.';
        const extras = [];
        if (counts.unanswered > 0) extras.push(`${counts.unanswered} unanswered`);
        if (counts.marked > 0) extras.push(`${counts.marked} marked for review`);
        if (extras.length) warnMsg = `You have ${extras.join(', ')}.\n\n` + warnMsg;
        if (confirm(warnMsg)) {
            this.isExamActive = false;
            this.stopTimers();
            this.calculateResults();
            this.showResults();
        }
    }

    exitExam() {
        if (confirm('Are you sure you want to exit the exam? Your progress will be lost and you will return to the main menu.')) {
            this.isExamActive = false;
            this.stopTimers();
            this.showWelcome();
        }
    }

    calculateResults() {
        let correctAnswers = 0;
        const totalQuestions = this.examQuestions.length;
        const topicScores = {};
        this.examQuestions.forEach(question => {
            const userAnswer = this.userAnswers[question.id];
            const isCorrect = userAnswer === question.correctAnswer;
            if (isCorrect) correctAnswers++;
            if (!topicScores[question.topic]) topicScores[question.topic] = { correct: 0, total: 0 };
            topicScores[question.topic].total++;
            if (isCorrect) topicScores[question.topic].correct++;
        });
        const score = Math.round((correctAnswers / totalQuestions) * 100);
        const timeTaken = this.examStartTime ? Math.round((new Date() - this.examStartTime) / 1000) : 0;
        this.results = { score, correctAnswers, incorrectAnswers: totalQuestions - correctAnswers, totalQuestions, timeTaken, topicScores, passed: score >= this.examSettings.passingMark };
    }

    showResults() {
        this.hideAllScreens();
        document.getElementById('resultsScreen').classList.add('active');
        const resultsIcon = document.getElementById('resultsIcon');
        const resultsTitle = document.getElementById('resultsTitle');
        const resultsSubtitle = document.getElementById('resultsSubtitle');
        if (this.results.passed) {
            resultsIcon.className = 'fas fa-trophy pass';
            resultsTitle.textContent = 'Congratulations! You Passed!';
            resultsSubtitle.textContent = `You scored ${this.results.score}% and passed the exam.`;
        } else {
            resultsIcon.className = 'fas fa-times-circle fail';
            resultsTitle.textContent = 'Exam Failed';
            resultsSubtitle.textContent = `You scored ${this.results.score}%. You need ${this.examSettings.passingMark}% to pass.`;
        }
        document.getElementById('scoreValue').textContent = `${this.results.score}%`;
        document.getElementById('correctAnswers').textContent = this.results.correctAnswers;
        document.getElementById('incorrectAnswers').textContent = this.results.incorrectAnswers;
        document.getElementById('timeTaken').textContent = this.formatTime(this.results.timeTaken);
        this.updateTopicPerformance();
    }

    updateTopicPerformance() {
        const topicPerformance = document.getElementById('topicPerformance');
        topicPerformance.innerHTML = '';
        Object.entries(this.results.topicScores).forEach(([topic, scores]) => {
            const percentage = Math.round((scores.correct / scores.total) * 100);
            const topicDiv = document.createElement('div');
            topicDiv.className = 'topic-item';
            topicDiv.innerHTML = `
                <span class="topic-name">${topic}</span>
                <span class="topic-score">${scores.correct}/${scores.total} (${percentage}%)</span>
            `;
            topicPerformance.appendChild(topicDiv);
        });
    }

    showReview() {
        this.hideAllScreens();
        document.getElementById('reviewScreen').classList.add('active');
        const reviewContent = document.getElementById('reviewContent');
        reviewContent.innerHTML = '';
        this.examQuestions.forEach((question, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            const userAnswer = this.userAnswers[question.id];
            reviewItem.innerHTML = `
                <div class="review-question"><strong>Question ${index + 1}:</strong> ${question.question}</div>
                <div class="review-choices">
                    ${question.choices.map((choice, choiceIndex) => {
                        let className = 'review-choice';
                        if (choiceIndex === userAnswer) className += ' user-answer';
                        if (choiceIndex === question.correctAnswer) className += ' correct-answer';
                        return `<div class="${className}">${choice}</div>`;
                    }).join('')}
                </div>
                <div class="review-explanation">
                    <h4>Explanation:</h4>
                    <p>${question.explanation}</p>
                </div>`;
            reviewContent.appendChild(reviewItem);
        });
    }

    retakeExam() { this.startExam(); }
    newExam() { this.showWelcome(); }

    // Mark for Review logic
    toggleMarkCurrent() {
        const q = this.examQuestions && this.examQuestions[this.currentQuestionIndex];
        if (!q) return;
        if (this.markedQuestionIds.has(q.id)) this.markedQuestionIds.delete(q.id);
        else this.markedQuestionIds.add(q.id);
        this.updateMarkUI(q);
    }
    updateMarkUI(question) {
        const btn = document.getElementById('markQuestionBtn');
        if (!btn || !question) return;
        const marked = this.markedQuestionIds.has(question.id);
        btn.classList.toggle('is-marked', marked);
        btn.innerHTML = marked ? '<i class="fas fa-flag"></i> Unmark' : '<i class="fas fa-flag"></i> Mark for Review';
    }

    // Summary modal
    showSummaryModal() {
        if (!this.examQuestions || this.examQuestions.length === 0) return;
        const modal = document.getElementById('summaryModal');
        const grid = document.getElementById('summaryGrid');
        const countsDiv = document.getElementById('summaryCounts');
        if (!modal || !grid || !countsDiv) return;
        grid.innerHTML = '';
        const counts = this.getAnswerStatusCounts();
        countsDiv.textContent = `Answered: ${counts.answered} • Unanswered: ${counts.unanswered} • Marked: ${counts.marked}`;
        this.examQuestions.forEach((q, idx) => {
            const isAnswered = this.userAnswers[q.id] !== undefined;
            const isMarked = this.markedQuestionIds.has(q.id);
            const btn = document.createElement('button');
            btn.className = 'summary-item';
            if (isMarked) btn.classList.add('marked');
            if (!isAnswered) btn.classList.add('unanswered');
            btn.textContent = String(idx + 1);
            btn.addEventListener('click', () => {
                this.currentQuestionIndex = idx;
                this.loadQuestion();
                this.hideSummaryModal();
            });
            grid.appendChild(btn);
        });
        modal.classList.add('active');
    }
    hideSummaryModal() {
        const modal = document.getElementById('summaryModal');
        if (modal) modal.classList.remove('active');
    }
    getAnswerStatusCounts() {
        let answered = 0;
        let unanswered = 0;
        let marked = 0;
        const answers = this.userAnswers || {};
        (this.examQuestions || []).forEach(q => {
            if (answers[q.id] === undefined) unanswered++; else answered++;
            if (this.markedQuestionIds.has(q.id)) marked++;
        });
        return { answered, unanswered, marked };
    }

    startTimers() { this.startTotalTimer(); this.startQuestionTimer(); }
    startTotalTimer() {
        const totalTimeMs = this.examSettings.totalTime * 60 * 1000;
        const startTime = Date.now();
        this.timers.total = setInterval(() => {
            if (!this.isExamActive) { clearInterval(this.timers.total); return; }
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, totalTimeMs - elapsed);
            if (remaining === 0) { this.autoSubmitExam(); return; }
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            document.getElementById('timerDisplay').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            const progress = (elapsed / totalTimeMs) * 100;
            document.getElementById('progressFill').style.width = `${Math.min(100, progress)}%`;
        }, 1000);
    }
    startQuestionTimer() {
        if (this.timers.question) clearTimeout(this.timers.question);
        const questionTimeMs = this.examSettings.timePerQuestion * 1000;
        this.questionStartTime = Date.now();
        this.timers.question = setTimeout(() => {
            if (this.isExamActive) {
                if (this.currentQuestionIndex < this.examQuestions.length - 1) this.nextQuestion();
                else this.submitExam();
            }
        }, questionTimeMs);
    }
    stopTimers() { if (this.timers.question) clearTimeout(this.timers.question); if (this.timers.total) clearInterval(this.timers.total); }
    autoSubmitExam() { this.isExamActive = false; this.stopTimers(); this.calculateResults(); this.showResults(); this.showError('Time is up! Your exam has been automatically submitted.'); }
    formatTime(seconds) { const m = Math.floor(seconds / 60); const s = seconds % 60; return `${m}:${s.toString().padStart(2, '0')}`; }
    shuffleArray(array) {
        const a = Array.isArray(array) ? array.slice() : [];
        let i = a.length >>> 0;
        while (i > 1) {
            i--;
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a;
    }
    hideAllScreens() { document.querySelectorAll('.screen').forEach(screen => { screen.classList.remove('active'); }); }
    showHelp() { document.getElementById('helpModal').classList.add('active'); }
    hideHelp() { document.getElementById('helpModal').classList.remove('active'); }
    showError(message) { const n = document.createElement('div'); n.style.cssText = `position: fixed; top: 20px; right: 20px; background: #f56565; color: white; padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10000; font-weight: 500; max-width: 300px;`; n.textContent = message; document.body.appendChild(n); setTimeout(() => { if (n.parentNode) n.parentNode.removeChild(n); }, 3000); }
    showSuccess(message) { const n = document.createElement('div'); n.style.cssText = `position: fixed; top: 20px; right: 20px; background: #48bb78; color: white; padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10000; font-weight: 500; max-width: 300px;`; n.textContent = message; document.body.appendChild(n); setTimeout(() => { if (n.parentNode) n.parentNode.removeChild(n); }, 3000); }

    disableStartButton() {
        const startBtn = document.getElementById('startExamBtn');
        if (startBtn) {
            startBtn.disabled = true;
            startBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading Questions...';
        }
    }

    enableStartButton() {
        const startBtn = document.getElementById('startExamBtn');
        if (startBtn) {
            startBtn.disabled = false;
            startBtn.innerHTML = '<i class="fas fa-play"></i> Start Exam';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => { new COCExamSimulator(); });

document.addEventListener('keydown', (e) => {
    if (document.getElementById('examScreen').classList.contains('active')) {
        if (e.key === 'ArrowLeft' && !document.getElementById('prevQuestionBtn').disabled) document.getElementById('prevQuestionBtn').click();
        else if (e.key === 'ArrowRight') {
            if (document.getElementById('nextQuestionBtn').style.display !== 'none') document.getElementById('nextQuestionBtn').click();
            else if (document.getElementById('submitExamBtn').style.display !== 'none') document.getElementById('submitExamBtn').click();
        }
    }
});

window.addEventListener('beforeunload', (e) => {
    if (document.getElementById('examScreen').classList.contains('active')) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your exam progress will be lost.';
    }
});


