// Sample course data
const coursesData = [
    {
        name: "Deep Learning Specialization",
        description: "A series of courses designed to help you master Deep Learning, understand how to build neural networks, and learn how to lead successful machine learning projects.",
        instructor: "Andrew Ng",
        rating: 4.9,
        duration: "3 months",
        topic: "Deep Learning",
        level: "Intermediate",
        price: "$49/month",
        link: "https://www.deeplearning.ai/courses/deep-learning-specialization/"
    },
    {
        name: "Machine Learning Engineering for Production (MLOps)",
        description: "Learn how to design, build, and operate machine learning systems in production environments.",
        instructor: "Andrew Ng",
        rating: 4.8,
        duration: "4 months",
        topic: "MLOps",
        level: "Advanced",
        price: "$49/month",
        link: "https://www.deeplearning.ai/courses/machine-learning-engineering-for-production-mlops/"
    },
    {
        name: "The Complete SQL Bootcamp",
        description: "Learn SQL for data science and analytics with hands-on exercises and real-world examples.",
        instructor: "Jose Portilla",
        rating: 4.7,
        duration: "10 hours",
        topic: "SQL",
        level: "Beginner",
        price: "$89.99",
        link: "https://www.udemy.com/course/the-complete-sql-bootcamp/"
    },
    {
        name: "Python for Data Science and Machine Learning Bootcamp",
        description: "A comprehensive course covering Python libraries for data science including Pandas, NumPy, Matplotlib, Seaborn, and machine learning with Scikit-Learn.",
        instructor: "Jose Portilla",
        rating: 4.6,
        duration: "25 hours",
        topic: "Python",
        level: "Beginner to Intermediate",
        price: "$94.99",
        link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/"
    },
    {
        name: "TensorFlow Developer Professional Certificate",
        description: "Build and train neural networks using TensorFlow, improve network performance with regularization, and deploy models to the web.",
        instructor: "Laurence Moroney",
        rating: 4.7,
        duration: "3 months",
        topic: "TensorFlow",
        level: "Intermediate",
        price: "$49/month",
        link: "https://www.coursera.org/professional-certificates/tensorflow-in-practice"
    },
    {
        name: "AI For Everyone",
        description: "A non-technical course designed to help you understand AI technologies and how they can be applied to business problems.",
        instructor: "Andrew Ng",
        rating: 4.8,
        duration: "4 weeks",
        topic: "AI Fundamentals",
        level: "Beginner",
        price: "Free",
        link: "https://www.coursera.org/learn/ai-for-everyone"
    },
    {
        name: "Data Science: R Basics",
        description: "Introduction to the basics of R programming. Learn how to wrangle, analyze, and visualize data.",
        instructor: "Rafael Irizarry",
        rating: 4.6,
        duration: "8 weeks",
        topic: "R Programming",
        level: "Beginner",
        price: "Free (Certificate: $99)",
        link: "https://www.edx.org/course/data-science-r-basics"
    },
    {
        name: "Applied Data Science with Python",
        description: "A 5-course specialization focusing on data science using Python tools like pandas, matplotlib, scikit-learn, nltk, and networkx.",
        instructor: "Christopher Brooks",
        rating: 4.5,
        duration: "5 months",
        topic: "Python",
        level: "Intermediate",
        price: "$49/month",
        link: "https://www.coursera.org/specializations/data-science-python"
    },
    {
        name: "IBM Data Science Professional Certificate",
        description: "Develop skills in Python, SQL, data visualization, machine learning, and more to launch a career in data science.",
        instructor: "IBM",
        rating: 4.6,
        duration: "10 months",
        topic: "Data Science",
        level: "Beginner to Intermediate",
        price: "$39/month",
        link: "https://www.coursera.org/professional-certificates/ibm-data-science"
    },
    {
        name: "Natural Language Processing Specialization",
        description: "Build natural language processing applications using TensorFlow and gain expertise in sentiment analysis, machine translation, and more.",
        instructor: "Younes Bensouda Mourri",
        rating: 4.7,
        duration: "4 months",
        topic: "NLP",
        level: "Intermediate",
        price: "$49/month",
        link: "https://www.coursera.org/specializations/natural-language-processing"
    },
    {
        name: "Machine Learning",
        description: "The classic Stanford machine learning course covering supervised and unsupervised learning algorithms.",
        instructor: "Andrew Ng",
        rating: 4.9,
        duration: "11 weeks",
        topic: "Machine Learning",
        level: "Intermediate",
        price: "Free (Certificate: $79)",
        link: "https://www.coursera.org/learn/machine-learning"
    },
    {
        name: "Data Science A-Z™: Real-Life Data Science",
        description: "Learn data science step by step through real analytics examples. Data mining, modeling, tableau visualization and more!",
        instructor: "Kirill Eremenko",
        rating: 4.6,
        duration: "21 hours",
        topic: "Data Science",
        level: "Beginner",
        price: "$94.99",
        link: "https://www.udemy.com/course/datascience/"
    },
    {
        name: "FastAI: Practical Deep Learning for Coders",
        description: "Learn to build state-of-the-art deep learning models from scratch using PyTorch.",
        instructor: "Jeremy Howard",
        rating: 4.8,
        duration: "7 weeks",
        topic: "Deep Learning",
        level: "Intermediate",
        price: "Free",
        link: "https://course.fast.ai/"
    },
    {
        name: "Computer Vision Specialization",
        description: "Master the fundamentals of computer vision and deep learning techniques for visual recognition tasks.",
        instructor: "Radhakrishna Dasari",
        rating: 4.6,
        duration: "3 months",
        topic: "Computer Vision",
        level: "Advanced",
        price: "$49/month",
        link: "https://www.coursera.org/specializations/computervision"
    },
    {
        name: "Mathematics for Machine Learning Specialization",
        description: "A foundational specialization covering linear algebra, multivariate calculus, and PCA for machine learning applications.",
        instructor: "David Dye",
        rating: 4.5,
        duration: "4 months",
        topic: "Math for ML",
        level: "Intermediate",
        price: "$49/month",
        link: "https://www.coursera.org/specializations/mathematics-machine-learning"
    },
    {
        name: "Statistics with R Specialization",
        description: "Master Statistics with R. Statistical mastery of data analysis including inference, modeling, and Bayesian approaches.",
        instructor: "Mine Çetinkaya-Rundel",
        rating: 4.6,
        duration: "7 months",
        topic: "Statistics",
        level: "Intermediate",
        price: "$49/month",
        link: "https://www.coursera.org/specializations/statistics"
    },
    {
        name: "Complete 2023 Data Science & Machine Learning Bootcamp",
        description: "Learn Python, Tensorflow, Deep Learning, Regression, Classification, Neural Networks, Artificial Intelligence & more!",
        instructor: "Dr. Angela Yu",
        rating: 4.7,
        duration: "44 hours",
        topic: "Data Science",
        level: "Beginner to Intermediate",
        price: "$89.99",
        link: "https://www.udemy.com/course/python-data-science-machine-learning-bootcamp/"
    },
    {
        name: "Big Data Specialization",
        description: "Solve real-world problems with Big Data tools such as Hadoop, Spark, and MapReduce.",
        instructor: "Ilkay Altintas",
        rating: 4.3,
        duration: "6 months",
        topic: "Big Data",
        level: "Intermediate",
        price: "$49/month",
        link: "https://www.coursera.org/specializations/big-data"
    },
    {
        name: "AWS Machine Learning Engineer Nanodegree",
        description: "Learn advanced machine learning techniques and algorithms and how to deploy models to a production environment.",
        instructor: "AWS",
        rating: 4.5,
        duration: "3 months",
        topic: "MLOps",
        level: "Advanced",
        price: "$399/month",
        link: "https://www.udacity.com/course/aws-machine-learning-engineer-nanodegree--nd189"
    },
    {
        name: "Introduction to Data Science",
        description: "Develop data science skills to work with data, create visualizations, and build machine learning models.",
        instructor: "Microsoft",
        rating: 4.5,
        duration: "10 weeks",
        topic: "Data Science",
        level: "Beginner",
        price: "Free (Certificate: $99)",
        link: "https://www.edx.org/course/introduction-to-data-science"
    }
];