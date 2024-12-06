// Dummy data for the charts
const chartData1 = [
    { category: 'Text-to-Image Models', value: 40 },
    { category: 'Text-to-Text Models', value: 35 },
    { category: 'Other AI Models', value: 25 }
  ];
  
  const chartData2 = [
    { month: 'July', users: 1200 },
    { month: 'August', users: 2300 },
    { month: 'September', users: 3100 }
  ];
  
  // Summary Content
  const summaryContent = {
    summary: "Generative AI has revolutionized industries by enabling innovations such as text-to-image models (e.g., DALL·E), text-to-text transformers (e.g., ChatGPT), and audio synthesis tools.",
    source: "https://example.com/generative-ai-innovations"
  };
  
  // API Handlers
  exports.getSummary = (req, res) => {
    res.status(200).json(summaryContent);
  };
  
  exports.getChart1 = (req, res) => {
    res.status(200).json(chartData1);
  };
  
  exports.getChart2 = (req, res) => {
    res.status(200).json(chartData2);
  };
  