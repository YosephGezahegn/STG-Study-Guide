# STG Study Guide

A comprehensive web-based study guide for the Certificate of Competency (STG) exam, featuring realistic practice questions, detailed explanations, and advanced exam simulation features.

## Features

### 📚 Comprehensive Question Bank
- Extensive database of STG practice questions covering key medical topics
- Questions organized by chapters and difficulty levels (Basic, Intermediate, Advanced)
- Detailed explanations for each answer to enhance learning

### ⚙️ Flexible Exam Configuration
- **Customizable Question Count**: Choose from 10, 20, 30, 50, 100, or 200 questions
- **Topic Selection**: Collapsible chapter-based topic selection with sub-chapter organization
- **Difficulty Filtering**: Include/exclude questions by difficulty level
- **Timing Options**: Configurable time per question and total exam duration
- **Passing Mark**: Adjustable passing percentage (50-100%)

### 🎯 Advanced Exam Features
- **Mark for Review**: Flag difficult questions to revisit later
- **Question Summary**: Navigate between questions with visual status indicators
- **Smart Warnings**: Submit warnings for unanswered or marked questions
- **Real-time Timer**: Visual countdown with progress bar
- **Answer Review**: Comprehensive post-exam review with explanations

### 📊 Performance Analytics
- **Topic Performance**: Detailed breakdown by medical subject area
- **Score Tracking**: Comprehensive scoring with pass/fail indicators
- **Time Analysis**: Track time spent per question and total exam duration
- **Answer Review**: Review all questions with correct answers and explanations

### 🎨 Modern User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Collapsible Topics**: Organized chapter structure to reduce clutter
- **Visual Indicators**: Clear status badges for question states
- **Intuitive Navigation**: Easy-to-use controls and keyboard shortcuts

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start studying immediately!

### Usage

#### Starting an Exam
1. Click "Start Exam" on the welcome screen
2. Or configure settings first by clicking "Configure Settings"
3. Select your preferred topics, difficulty levels, and timing
4. Begin your practice session

#### During the Exam
- **Answer Questions**: Click on your chosen answer
- **Mark for Review**: Use the "Mark for Review" button for difficult questions
- **Navigate**: Use Previous/Next buttons or the Summary modal
- **Monitor Progress**: Watch the timer and progress bar
- **Submit**: Review your answers before final submission

#### Review and Analysis
- **View Results**: See your score and performance breakdown
- **Topic Analysis**: Identify areas for improvement
- **Answer Review**: Study explanations for all questions
- **Retake Options**: Practice again with new question sets

## Technical Features

### Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Performance
- Fast loading with optimized question database
- Smooth animations and transitions
- Efficient memory usage for large question sets

### Analytics
- Google Analytics 4 integration for usage tracking
- Anonymous performance metrics collection

## File Structure

```
STG-Study-Guide/
├── index.html          # Main application file
├── script.js           # Core application logic
├── STGQuestions.js     # Question database
├── styles.css          # Styling and responsive design
└── README.md           # This file
```

## Customization

### Adding Questions
Questions are stored in `STGQuestions.js` in the following format:
```javascript
{
    "id": 1,
    "question": "Your question text here?",
    "choices": [
        "A. Option 1",
        "B. Option 2", 
        "C. Option 3",
        "D. Option 4"
    ],
    "correctAnswer": 0,
    "topic": "Chapter Name",
    "explanation": "Detailed explanation here",
    "tags": ["tag1", "tag2"],
    "difficulty": "Basic"
}
```

### Styling
Modify `styles.css` to customize:
- Color scheme and branding
- Layout and spacing
- Typography and fonts
- Responsive breakpoints

## Contributing

This study guide is designed for STG exam preparation. Contributions are welcome for:
- Additional questions and explanations
- UI/UX improvements
- Performance optimizations
- Bug fixes and enhancements

## License

This project is created for educational purposes. Please ensure compliance with any applicable licensing requirements for medical education materials.

## Support

For questions or issues:
1. Check the built-in Help modal (click the Help button)
2. Review the question explanations
3. Use the Answer Review feature for detailed analysis

## Version History

- **v1.0**: Initial release with basic exam functionality
- **v1.1**: Added collapsible topic selection and improved UI
- **v1.2**: Implemented Mark for Review and Summary features
- **v1.3**: Added Google Analytics integration and enhanced performance tracking

---

**Good luck with your STG exam preparation!** 🎓