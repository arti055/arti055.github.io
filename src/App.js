import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const ProjectCard = ({ title, desc, image, link }) => (
  <div className="project-card">
    <img src={image} alt="Project thumbnail" className="project-img" />
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to={link} className="details-link">View Project Details</Link>
    </div>
  </div>
);

const Home = () => (
  <div className="container">
    <header className="hero">
      <h1>Artyom Serebryakov</h1>
      <p>Data Scientist | ML & AI Engineer</p>
      <div className="socials">
        <a href="https://www.linkedin.com/in/artyom-serebryakov-702371257/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://machineasy.ru/" target="_blank" rel="noreferrer">Machineasy</a>
        <a href="/Resume_Artyom.pdf" download>Resume (PDF)</a>
      </div>
    </header>
    <main>
      <section className="projects-grid">
        <ProjectCard
          title="Database Design & Analysis (SQL): AirBnB Database Implementation"
          desc="Created ER diagrams, implemented a scalable SQL schema, and built query procedures for Airbnb-style platform."
          image="/airbnb-logo.png"
          link="/project1"
        />
        <ProjectCard
          title="NLP Document Parsing (LLM & RAG)"
          desc="Fine-tuned LLMs and deployed fast document parsing pipelines with vector search to assist engineering teams."
          image="/doc-ai.png"
          link="/project2"
        />
        <ProjectCard
          title="EDA & Regression Modeling on Health Data"
          desc="Predicted life expectancy using GDP, healthcare, and mortality indicators. Used linear, polynomial, and Lasso regression."
          image="/health-project.png"
          link="/project3"
        />
        <ProjectCard
          title="Happiness Score Prediction"
          desc="Built regression models to analyze and forecast national happiness based on real-world features."
          image="/happiness_map.jpg"
          link="/project4"
        />

      </section>
    </main>
    <footer>
      <p>&copy; 2025 Artyom Serebryakov</p>
    </footer>
  </div>
);


const Project1 = () => (
  <div className="project-full styled-bg">
    <div className="centered-section">
      <h1 className="project-title">Airbnb Database Project</h1>
      <h2 className="project-subtitle">Database Creation and Management</h2>
      <section className="executive-summary">
        <h3>EXECUTIVE SUMMARY</h3>
        <p>This project focuses on building a scalable and reliable database for Airbnb operations. It includes core data components like renters, bookings, payments, and reviews. We used SQL and Mockaroo for database design and data population, ensuring realistic simulations. The goal was to optimize Airbnb's backend operations while providing business insights.</p>
      </section>
      <img src="/airbnb-logo.png" alt="SQL Airbnb Project Logo" className="centered-image" />
    </div>

    <section className="project-step">
      <h3>STEP 1: INITIAL PLANNING</h3>
      <p>We identified key entities: <strong>Renter/Guest</strong>, <strong>Property</strong>, <strong>Booking</strong>, <strong>Review</strong>, <strong>Payment</strong>, <strong>Message</strong>, and <strong>Landlord</strong>. Attributes and relationships were carefully mapped to mirror real-world Airbnb usage.</p>
    </section>

    <section className="project-step">
      <h3>STEP 2: DATABASE DESIGN</h3>
      <p>We visualized the system using an ER diagram that ensured every foreign key relationship reflected meaningful associations between renters, landlords, and platform events.</p>
      <img src="/er-diagram.jpg" alt="ER Diagram" className="project-image" />
    </section>

    <section className="project-step">
      <h3>STEP 3: DATA TYPE SELECTION</h3>
      <p>For efficient querying and storage, we used appropriate types: <code>DECIMAL</code> for transactions, <code>TEXT</code> for reviews, and <code>DATE</code> for temporal tracking.</p>
    </section>

    <section className="project-step">
      <h3>STEP 4: CREATING THE DATABASE</h3>
      <p>Using SQL, we created relational tables and enforced data integrity with constraints. Populated all data using <a href="https://mockaroo.com/" target="_blank" rel="noreferrer">Mockaroo</a>.</p>
      <img src="/table-preview.jpg" alt="Mockaroo Sample Table" className="project-image" />
    </section>

    <section className="project-step">
      <h3>STEP 5: QUERY DEVELOPMENT</h3>
      <p>Below is a stored procedure used to identify top-performing landlords based on revenue from bookings:</p>
      <pre>{`
CREATE OR ALTER PROCEDURE GetTopLandlordsByRent
AS
BEGIN
  SET NOCOUNT ON;
  SELECT TOP 5
    L.LandlordID,
    L.Name AS LandlordName,
    SUM(B.AmountPaid) AS TotalRentCollected
  FROM Landlord L
  JOIN Property P ON L.LandlordID = P.LandlordID
  JOIN Booking B ON P.PropertyID = B.PropertyID
  GROUP BY L.LandlordID, L.Name
  ORDER BY TotalRentCollected DESC;
END;
`}</pre>
    </section>

    <section className="project-step">
      <h3>STEP 6: FINALIZING THE APPLICATION</h3>
      <p>We validated every step, documented procedures, and tested outputs for accuracy. The final system supports efficient analytics and visual dashboards.</p>
    </section>

    <Link className="back-link" to="/">← Back to Homepage</Link>
    <footer>
      <p>&copy; 2025 Artyom Serebryakov. All Rights Reserved.</p>
    </footer>
  </div>
);

const Project2 = () => (
  <div className="project-page">
    <h1>NLP Document Parsing (LLM & RAG)</h1>
    <p>Extracted insights from internal logs using LLM fine-tuning, vector DBs, and real-time RAG pipelines. Reduced runtime from hours to minutes.</p>
    <p><a href="https://github.com/arti055/project2" target="_blank" rel="noreferrer">View on GitHub</a></p>
    <Link to="/">← Back</Link>
  </div>
);

const Project3 = () => (
  <div className="project-full styled-bg">
    <div className="centered-section">
      <h1 className="project-title">Health Analytics Project</h1>
      <h2 className="project-subtitle">Physical & Mental Health Forecasting with LSTM</h2>
      <section className="executive-summary">
        <h3>EXECUTIVE SUMMARY</h3>
        <p>This project explores how physical and mental health indicators across the U.S. correlate and evolve over time. Drawing from five large datasets (CDC BRFSS, Household Pulse Survey, Chronic Disease Indicators, Suicide and Overdose rates), it uncovers racial, regional, and temporal disparities. Advanced machine learning models (LSTM) were used to predict disease and mortality trends based on demographic and behavioral variables.</p>
      </section>
      <img src="/health-project.png" alt="Health Analytics Project Logo" className="centered-image" />
    </div>

    <section className="project-step">
      <h3>RESEARCH OBJECTIVES</h3>
      <ul>
        <li><strong>Nutrition & Mental Health:</strong> Correlated anxiety/depression with vegetable consumption, obesity and inactivity.</li>
        <li><strong>Ethnic Disparities:</strong> Stratified by racial/ethnic groups to highlight disparities in access and outcome.</li>
        <li><strong>Suicide & Overdose:</strong> Time-series analysis of mortality rates (1999–2019) by sex, race, and age.</li>
        <li><strong>Diabetes Trends:</strong> Modeled prevalence by state over time using LSTM.</li>
      </ul>
    </section>

    <section className="project-step">
      <h3>DATA SOURCES</h3>
      <ul>
        <li>CDC BRFSS (Nutrition): ~90,000 rows across states</li>
        <li>Mental Health Survey: ~14,000 responses grouped by demographic</li>
        <li>Drug Overdose & Suicide Rates: Time series from 1999–2019 by subgroup</li>
        <li>Chronic Disease Indicators: 1.18 million records filtered for diabetes</li>
      </ul>
    </section>

    <section className="project-step">
      <h3>TECHNICAL METHODOLOGY</h3>
      <ul>
        <li><strong>Data Cleaning:</strong> Used <code>pandas</code> for NaN checks, standardizing labels, and stratified groupings</li>
        <li><strong>Merging:</strong> Left joins across state or demographic keys</li>
        <li><strong>Statistical Testing:</strong> Pearson r with significance, grouped aggregations validated using <code>assert</code></li>
      </ul>
    </section>

    <section className="project-step">
      <h3>VISUALIZATION</h3>
      <p>Used Plotly to build rich, interactive UI:</p>
      <ul>
        <li>State-wise scatter plots (Depression vs Nutrition)</li>
        <li>Color-coded by U.S. region, with trendlines</li>
        <li>Grouped bar charts by race for nutrition and anxiety indicators</li>
      </ul>
      <img src="/inactivity-anxiety.jpg" alt="Obesity vs Depression Scatter" className="project-image" />
      <img src="/nutrition_race_bar.png" alt="Nutrition by Race Bar Chart" className="project-image" />
    </section>

    <section className="project-step">
      <h3>MACHINE LEARNING MODELS</h3>
      <h4>LSTM #1: Suicide & Overdose Forecasting</h4>
      <ul>
        <li>Inputs: year, age, sex, race (one-hot)</li>
        <li>Model: 64-unit LSTM + dense output</li>
        <li>Loss: MSE; scaled with MinMaxScaler</li>
        <li>Post-analysis: DecisionTreeRegressor for feature importances</li>
      </ul>
      <img src="/suicide-od.jpg" alt="Suicide Rates Over Time" className="project-image" />
      <img src="/graph2.jpg" alt="Male/Female Suicide Over Time" className="project-image" />
      <img src="/graph1.jpg" alt="Suicide Prediction by Age Group" className="project-image" />

      <h4>LSTM #2: Diabetes Trend Forecasting</h4>
      <ul>
        <li>Inputs: state (encoded) and year</li>
        <li>Goal: Model chronic disease risk by geography and time</li>
        <li>Analyzed correlations between nutrition and mental health by location</li>
      </ul>
      <img src="/diabetes_forecasting.jpg" alt="LSTM Diabetes Prediction vs Actual" className="project-image" />
    </section>

    <section className="project-step">
      <h3>TESTING & VALIDATION</h3>
      <ul>
        <li>Assert-driven validation of merges, means, and filtering logic</li>
        <li>LSTM models evaluated via 80/20 splits and visual RMSE plots</li>
      </ul>
    </section>

    <section className="project-step">
      <h3>TEAM COLLABORATION</h3>
      <p>Used Discord for screen shares and Google Drive for versioned Jupyter Notebooks. 3 team members in total.</p>
    </section>

    <section className="project-step">
      <h3>APPLICATIONS & IMPACT</h3>
      <ul>
        <li><strong>Public Health:</strong> Targeted insights by race and region</li>
        <li><strong>Policy:</strong> Evidence-based resource allocation</li>
        <li><strong>Health AI:</strong> Deployable LSTM model for trend forecasting</li>
        <li><strong>Product:</strong> Integrates into analytics dashboards for strategic use</li>
      </ul>
    </section>

    <section className="project-step">
      <h3>TECH STACK</h3>
      <table>
        <thead>
          <tr><th>Area</th><th>Tools/Libraries</th></tr>
        </thead>
        <tbody>
          <tr><td>Data Engineering</td><td>Pandas, NumPy</td></tr>
          <tr><td>Visualization</td><td>Plotly, Matplotlib, Seaborn</td></tr>
          <tr><td>Modeling</td><td>Scikit-learn, TensorFlow, Keras</td></tr>
          <tr><td>Time Series</td><td>LSTM, Decision Trees</td></tr>
          <tr><td>Testing</td><td>pytest, assert</td></tr>
        </tbody>
      </table>
    </section>

    <Link className="back-link" to="/">← Back to Homepage</Link>
    <footer>
      <p>&copy; 2025 Artyom Serebryakov. All Rights Reserved.</p>
    </footer>
  </div>
);


const Project4 = () => (
  <div className="project-full styled-bg">
    <div className="centered-section">
      <h1 className="project-title">Happiness Score Prediction</h1>
      <h2 className="project-subtitle">Machine Learning to Model National Well-Being</h2>
      <section className="executive-summary">
        <h3>EXECUTIVE SUMMARY</h3>
        <p>Using machine learning, we analyzed the drivers of happiness in over 140 countries. By integrating socioeconomic and demographic data, we trained models to predict each country’s “Ladder Score”—a composite happiness index. Key features included freedom, social support, healthy life expectancy, and more.</p>
      </section>
      <img src="/happiness_map.jpg" alt="Global Happiness Visualization" className="centered-image" />
    </div>

    <section className="project-step">
      <h3>DATA SOURCES</h3>
      <ul>
        <li>Kaggle World Happiness Report Dataset (142 countries, 19 features)</li>
        <li>Population statistics joined via country name</li>
        <li>Cleaned using R libraries: <code>mice</code>, <code>dplyr</code>, <code>tidyr</code></li>
      </ul>
    </section>

    <section className="project-step">
      <h3>FEATURE ENGINEERING & PROCESSING</h3>
      <p>We dropped derived features like standard error and kept core independent variables such as:</p>
      <ul>
        <li>GDP per capita (log)</li>
        <li>Freedom to make life choices</li>
        <li>Generosity</li>
        <li>Fertility Rate, Urban Population, Median Age</li>
      </ul>
    </section>

    <section className="project-step">
      <h3>EXPLORATORY ANALYSIS</h3>
      <p>We plotted feature-wise scatter plots with regression lines to identify linear trends. Correlation matrices validated our hypotheses, showing strong positive correlation between ladder score and health, freedom, and support metrics.</p>
      <img src="/scatter_freedom.jpg" alt="Freedom vs Happiness" className="project-image" />
      <img src="/corr_heatmap.jpg" alt="Neural Network" className="project-image" />
    </section>

    <section className="project-step">
      <h3>MODELING APPROACHES</h3>
      <ul>
        <li><strong>Decision Tree:</strong> RMSE = 0.736, MAE = 0.581</li>
        <li><strong>Random Forest:</strong> RMSE = 0.622, MAE = 0.477</li>
        <li><strong>Neural Network:</strong> RMSE = 0.587, MAE = 0.465</li>
        <li><strong>Linear Regression:</strong> RMSE = 0.584, MAE = 0.449 (Most accurate)</li>
      </ul>
      <img src="/dec_tree.jpg" alt="Decision Tree" className="project-image" />
      <img src="/random_forest.jpg" alt="Correlation Heatmap" className="project-image" />
      <img src="/happiness_map.jpg" alt="Neural Network" className="project-image"/>
      <img src="/lin_reg.jpg" alt="Neural Network" className="project-image"/>

    </section>

    <section className="project-step">
      <h3>BUSINESS INSIGHTS</h3>
      <ul>
        <li><strong>Health:</strong> Life expectancy and fertility rate drive public happiness</li>
        <li><strong>Freedom:</strong> Countries with greater personal agency rank higher</li>
        <li><strong>Urbanization:</strong> Urban population positively correlates with well-being</li>
      </ul>
    </section>

    <section className="project-step">
      <h3>FUTURE WORK</h3>
      <p>Given more time, we would expand across multiple years of data and explore advanced architectures like deeper neural networks. Feature selection automation and hyperparameter tuning would also be introduced to boost performance.</p>
    </section>

    <section className="project-step">
      <h3>TECH STACK</h3>
      <table>
        <thead>
          <tr><th>Area</th><th>Tools/Libraries</th></tr>
        </thead>
        <tbody>
          <tr><td>Data Wrangling</td><td>dplyr, tidyr</td></tr>
          <tr><td>Imputation</td><td>mice</td></tr>
          <tr><td>Visualization</td><td>ggplot2, corrplot</td></tr>
          <tr><td>Modeling</td><td>rpart, neuralnet, randomForest</td></tr>
          <tr><td>Evaluation</td><td>MAE, RMSE</td></tr>
        </tbody>
      </table>
    </section>

    <Link className="back-link" to="/">← Back to Homepage</Link>
    <footer>
      <p>&copy; 2025 Artyom Serebryakov. All Rights Reserved.</p>
    </footer>
  </div>
);


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project1" element={<Project1 />} />
      <Route path="/project2" element={<Project2 />} />
      <Route path="/project3" element={<Project3 />} />
      <Route path="/project4" element={<Project4 />} />
    </Routes>
  </Router>
);

export default App;
