export const generateResumeHTML = (): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rahul Gupta - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #fff;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #3B82F6;
            padding-bottom: 20px;
        }
        
        .name {
            font-size: 32px;
            font-weight: bold;
            color: #1F2937;
            margin-bottom: 8px;
        }
        
        .title {
            font-size: 16px;
            color: #3B82F6;
            margin-bottom: 15px;
            font-weight: 500;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 14px;
            color: #6B7280;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .section {
            margin-bottom: 25px;
        }
        
        .section-title {
            font-size: 20px;
            font-weight: bold;
            color: #1F2937;
            margin-bottom: 15px;
            border-bottom: 1px solid #E5E7EB;
            padding-bottom: 5px;
        }
        
        .education-item, .project-item {
            margin-bottom: 15px;
        }
        
        .degree {
            font-weight: bold;
            color: #1F2937;
            font-size: 16px;
        }
        
        .institution {
            color: #3B82F6;
            font-weight: 500;
        }
        
        .duration {
            color: #6B7280;
            font-size: 14px;
        }
        
        .percentage {
            color: #059669;
            font-weight: 500;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        
        .skill-category {
            background: #F9FAFB;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #3B82F6;
        }
        
        .skill-category-title {
            font-weight: bold;
            color: #1F2937;
            margin-bottom: 8px;
        }
        
        .skill-list {
            color: #6B7280;
            font-size: 14px;
        }
        
        .project-title {
            font-weight: bold;
            color: #1F2937;
            font-size: 16px;
            margin-bottom: 5px;
        }
        
        .project-description {
            color: #6B7280;
            margin-bottom: 5px;
        }
        
        .project-tools {
            color: #3B82F6;
            font-size: 14px;
            font-weight: 500;
        }
        
        .project-achievement {
            color: #059669;
            font-size: 14px;
            font-style: italic;
        }
        
        .certifications-list {
            list-style: none;
        }
        
        .certification-item {
            background: #F0F9FF;
            padding: 10px 15px;
            margin-bottom: 8px;
            border-radius: 6px;
            border-left: 3px solid #3B82F6;
        }
        
        .achievements-list {
            list-style: none;
        }
        
        .achievement-item {
            background: #F0FDF4;
            padding: 10px 15px;
            margin-bottom: 8px;
            border-radius: 6px;
            border-left: 3px solid #059669;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        @media print {
            body {
                padding: 20px;
            }
            
            .contact-info {
                font-size: 12px;
            }
            
            .skills-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">Rahul Gupta</div>
        <div class="title">Data Science | Machine Learning | Deep Learning | Generative AI | Python Developer | Agentic AI</div>
        <div class="contact-info">
            <div class="contact-item">📞 +91 9310121875</div>
            <div class="contact-item">📧 rgupta8750@gmail.com</div>
            <div class="contact-item">🔗 LinkedIn</div>
            <div class="contact-item">💻 GitHub</div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Education</div>
        
        <div class="education-item">
            <div class="degree">Master of Computer Application (MCA)</div>
            <div class="institution">Lovely Professional University (LPU)</div>
            <div class="duration">2024–2026</div>
        </div>
        
        <div class="education-item">
            <div class="degree">Bachelor of Computer Application (BCA)</div>
            <div class="institution">Sunder Deep College Of Management & Technology (CCSU)</div>
            <div class="duration">2021–2024</div>
        </div>
        
        <div class="education-item">
            <div class="degree">Class 12th</div>
            <div class="institution">Ram Kishan Institute (CBSE)</div>
            <div class="duration">2021 | <span class="percentage">Percentage: 62%</span></div>
        </div>
        
        <div class="education-item">
            <div class="degree">Class 10th</div>
            <div class="institution">Ram Kishan Institute (CBSE)</div>
            <div class="duration">2019 | <span class="percentage">Percentage: 62%</span></div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Skills</div>
        <div class="skills-grid">
            <div class="skill-category">
                <div class="skill-category-title">Programming Languages</div>
                <div class="skill-list">Python, JavaScript, SQL</div>
            </div>
            
            <div class="skill-category">
                <div class="skill-category-title">AI & Machine Learning</div>
                <div class="skill-list">Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn, TensorFlow, YOLOv11</div>
            </div>
            
            <div class="skill-category">
                <div class="skill-category-title">Frameworks</div>
                <div class="skill-list">Flask, Django, Streamlit, Bootstrap, HTML, CSS</div>
            </div>
            
            <div class="skill-category">
                <div class="skill-category-title">Tools & Technologies</div>
                <div class="skill-list">VS Code, Jupyter Notebook, Google Colab, Git, GitHub, MS Excel</div>
            </div>
            
            <div class="skill-category">
                <div class="skill-category-title">Databases</div>
                <div class="skill-list">Supabase, SQLite, MySQL</div>
            </div>
            
            <div class="skill-category">
                <div class="skill-category-title">Core Competencies</div>
                <div class="skill-list">Data Analysis, Data Visualization, DSA</div>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Projects</div>
        
        <div class="project-item">
            <div class="project-title">📌 Laptop Price Predictor</div>
            <div class="project-description">Built an ML model to predict laptop prices based on brand, processor, RAM, storage, etc.</div>
            <div class="project-tools">Tools: Python, Flask, HTML/CSS, Pandas, Scikit-learn</div>
            <div class="project-achievement">Achieved R² score of 85% with hyperparameter tuning and model evaluation.</div>
        </div>
        
        <div class="project-item">
            <div class="project-title">📌 Real-Time Object Detection with YOLOv11</div>
            <div class="project-description">Trained a YOLOv11 model using custom data annotations via LabelImg.</div>
            <div class="project-tools">Tools: Python, PyTorch, YOLOv11</div>
            <div class="project-achievement">Detected objects like animals, household items, food items in real time.</div>
        </div>
        
        <div class="project-item">
            <div class="project-title">📌 Rock vs Mine Prediction</div>
            <div class="project-description">Classified sonar signals using ML algorithms.</div>
            <div class="project-tools">Tools: Python, Scikit-learn</div>
            <div class="project-achievement">Achieved 79% accuracy using Logistic Regression, SVM, and Random Forest.</div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Certifications</div>
        <ul class="certifications-list">
            <li class="certification-item">Deep Learning with TensorFlow – IBM (ML0120EN)</li>
            <li class="certification-item">Machine Learning with Python – IBM (ML0101EN)</li>
            <li class="certification-item">Data Analysis with Python – IBM (DA0101EN)</li>
            <li class="certification-item">Data Visualization with Python – IBM (DV0101EN)</li>
            <li class="certification-item">SQL and Relational Databases – IBM (DB0101EN)</li>
            <li class="certification-item">Python Certificate – HackerRank</li>
        </ul>
    </div>

    <div class="section">
        <div class="section-title">Achievements</div>
        <ul class="achievements-list">
            <li class="achievement-item">⭐ 4-star Python badge on HackerRank</li>
            <li class="achievement-item">Completed 8+ projects in Machine Learning & Deep Learning</li>
            <li class="achievement-item">Experienced in building predictive models and deep neural networks</li>
        </ul>
    </div>
</body>
</html>
  `;
};

export const downloadResume = () => {
  const resumeHTML = generateResumeHTML();
  
  // Create a blob with the HTML content
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  // Create a temporary link and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Rahul_Gupta_Resume.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Clean up the URL object
  URL.revokeObjectURL(url);
  
  // Show success message
  setTimeout(() => {
    alert('Resume downloaded successfully! You can open the HTML file in any browser and print it as PDF if needed.');
  }, 100);
};