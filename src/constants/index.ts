export const STAGE_WEIGHTS = {
  1: 0.15,
  2: 0.15,
  3: 0.15,
  4: 0.15,
  5: 0.15,
  6: 0.15,
  7: 0.10
} as const;

export const RATING_RANGES = {
  system: { min: 85 },
  stable: { min: 70 },
  cautious: { min: 55 },
  'high-risk': { min: 0 }
} as const;

export const MIN_VALID_ANSWER_LENGTH = 10;

export const translations = {
  en: {
    appName: 'Investment Decision App',
    loginRegister: 'Login / Register',
    enterCredentials: 'Enter your credentials to access the Investment Decision App.',
    email: 'Email',
    password: 'Password',
    register: 'Register',
    login: 'Login',
    welcome: 'Welcome',
    logout: 'Logout',
    profile: 'Profile',
    riskTolerance: 'Risk Tolerance',
    preferredStrategies: 'Preferred Strategies',
    activeDecisions: 'Active Decisions',
    noActiveDecisions: 'No active decisions.',
    completedDecisions: 'Completed Decisions',
    noCompletedDecisions: 'No completed decisions.',
    decisionSummary: 'Decision Summary',
    youHaveMade: 'You have made',
    decisions: 'investment decisions',
    areCompleted: 'decisions are completed.',
    newInvestmentCheckpoint: 'New Investment Checkpoint',
    decisionJournal: 'Decision Journal',
    noDecisionsRecorded: 'No decisions recorded yet.',
    editDecision: 'Edit Decision',
    viewDecision: 'View Decision',
    decisionName: 'Decision Name',
    stage: 'Stage',
    reviewScheduled: 'Review Scheduled',
    enterDecisionName: 'Enter decision name (required)',
    pleaseEnterDecisionName: 'Please enter a decision name.',
    previous: 'Previous',
    next: 'Next',
    completeDecision: 'Complete Decision',
    saving: 'Saving...',
    error: 'Error',
    pleaseAnswerAll: 'Please answer all required questions before proceeding.',
    failedToSave: 'Failed to save decision. Please try again.',
    anErrorOccurred: 'An error occurred while saving. Please check your connection.',
    decisionNotFound: 'Decision not found.',
    goalAndRisk: 'Goal & Risk Definition',
    investmentMethod: 'Investment Method Selection',
    buySellRules: 'Buy/Sell Rule Establishment',
    riskAssessment: 'Risk Assessment & Management',
    informationValidation: 'Information Validation',
    cognitiveBias: 'Cognitive Bias Checking',
    documentationReview: 'Documentation & Review',
    riskAssessmentTitle: 'Risk Tolerance Assessment',
    riskToleranceScore: 'Your Risk Tolerance Score',
    riskType: 'Risk Type',
    riskDescription: 'Description',
    investmentRecommendation: 'Investment Recommendation',
    doneButton: 'Done',
    submitAssessment: 'Submit Assessment',
    financialCapacity: 'Financial Capacity',
    investmentGoals: 'Investment Goals',
    psychologicalTolerance: 'Psychological Tolerance',
    investmentExperience: 'Investment Experience',
    personalInfo: 'Personal Information',
    pleaseAnswerAllQuestions: 'Please answer all required questions before submitting',
    shortTerm: 'Short-term',
    mediumTerm: 'Medium-term',
    longTerm: 'Long-term',
    conservative: 'Conservative',
    moderate: 'Moderate',
    aggressive: 'Aggressive',
    fundamentalAnalysis: 'Fundamental Analysis',
    technicalAnalysis: 'Technical Analysis',
    quantitativeAnalysis: 'Quantitative Analysis',
    passiveInvesting: 'Passive Investing',
    companyFilings: 'Company Filings',
    financialNews: 'Financial News Outlets',
    analystReports: 'Analyst Reports',
    independentResearch: 'Independent Research',
    yes: 'Yes',
    no: 'No',
    stage1Title: 'Stage 1: Goal & Risk Definition',
    stage2Title: 'Stage 2: Investment Method Selection',
    stage3Title: 'Stage 3: Buy/Sell Rule Establishment',
    stage4Title: 'Stage 4: Risk Assessment & Management',
    stage5Title: 'Stage 5: Information Validation',
    stage6Title: 'Stage 6: Cognitive Bias Checking',
    stage7Title: 'Stage 7: Documentation & Review',
    evaluateDecision: 'Evaluate Decision',
    viewEvaluation: 'View Evaluation',
    evaluationTitle: 'Investment Decision Evaluation',
    evaluationInProgress: 'Evaluation in progress...',
    validatingInputs: 'Validating inputs',
    basicScoring: 'Basic scoring',
    apiAnalysis: 'API enhanced analysis',
    finalizingResults: 'Finalizing results',
    evaluationComplete: 'Evaluation complete',
    evaluationError: 'Evaluation error',
    evaluationStrengths: 'Strengths',
    evaluationWeaknesses: 'Weaknesses',
    evaluationRecommendations: 'Recommendations',
    evaluationScore: 'Evaluation Score',
    evaluationRating: 'Rating',
    saveEvaluation: 'Save Evaluation',
    exportEvaluation: 'Export Results',
    evaluatedDecisionEdit: 'Evaluated decisions cannot be edited',
    shortTermWithPeriod: 'Short-term (<1 year)',
    mediumTermWithPeriod: 'Medium-term (1-5 years)',
    longTermWithPeriod: 'Long-term (>5 years)',
    conservativeWithDetail: 'Conservative (fluctuation <10%)',
    moderateWithDetail: 'Moderate (fluctuation 10-25%)',
    aggressiveWithDetail: 'Aggressive (fluctuation >25%)',
    fundamentalAnalysisWithDetail: 'Fundamental Analysis (financial reports, industry position)',
    technicalAnalysisWithDetail: 'Technical Analysis (trend lines, volume)',
    quantitativeAnalysisWithDetail: 'Quantitative Analysis (factor backtest)',
    passiveInvestingWithDetail: 'Passive Investing (index tracking)',
    stopLossOrders: 'Stop-loss Orders',
    diversification: 'Diversification (across 3+ unrelated industries)',
    optionsHedging: 'Options Hedging',
    companyFilingsDetail: 'Company Filings',
    bloombergReutersData: 'Bloomberg/Reuters Data',
    analystReportsDetail: 'Analyst Reports',
    independentThirdPartyAudits: 'Independent Third-party Audits',
    socialMediaDetail: 'Social Media (e.g., Douyin, Xiaohongshu)',
    monthly: 'Monthly',
    quarterly: 'Quarterly',
    eventDriven: 'Event-driven (e.g., earnings release)',
    helpText: 'For example: ',
    selectOption: 'Select an option',
    fieldRequired: 'This field is required',
    pleaseSelectAtLeastOne: 'Please select at least one option',
    pleaseSelectOneOption: 'Please select an option',
    noRecommendedStrategies: 'No recommended strategies yet',
    strategyRecommendationHint: 'After completing decision evaluations, the system will recommend suitable investment strategies based on your scores',
    strategyRecommendationBased: 'Investment strategies recommended based on "{0}" score ({1} points). Higher scores lead to more aggressive strategy recommendations.',
    valueInvesting: 'Value Investing',
    growthInvesting: 'Growth Investing',
    indexInvesting: 'Index Investing',
    dollarCostAveraging: 'Dollar-Cost Averaging',
    blueChipInvesting: 'Blue-Chip Investing',
    conservativeInvesting: 'Conservative Investing',
    bondInvesting: 'Bond Investing',
    strategyHighlyComplete: 'Strategy is highly complete and ready for execution.',
    saveAndComplete: 'Save & Complete',
    goBack: 'Back',
  },
  zh: {
    appName: '投资决策应用',
    loginRegister: '登录/注册',
    enterCredentials: '输入您的凭据以访问投资决策应用。',
    email: '电子邮件',
    password: '密码',
    register: '注册',
    login: '登录',
    welcome: '欢迎',
    logout: '登出',
    profile: '个人资料',
    riskTolerance: '风险承受能力',
    preferredStrategies: '偏好策略',
    activeDecisions: '进行中的决策',
    noActiveDecisions: '没有进行中的决策。',
    completedDecisions: '已完成的决策',
    noCompletedDecisions: '没有已完成的决策。',
    decisionSummary: '决策摘要',
    youHaveMade: '您已做出',
    decisions: '项投资决策',
    areCompleted: '项决策已完成。',
    newInvestmentCheckpoint: '新的投资检查点',
    decisionJournal: '决策日志',
    noDecisionsRecorded: '尚未记录任何决策。',
    editDecision: '编辑决策',
    viewDecision: '查看决策',
    decisionName: '决策名称',
    stage: '阶段',
    reviewScheduled: '预定审查',
    enterDecisionName: '输入决策名称（必填）',
    pleaseEnterDecisionName: '请输入决策名称。',
    previous: '上一步',
    next: '下一步',
    completeDecision: '完成决策',
    saving: '保存中...',
    error: '错误',
    pleaseAnswerAll: '请先回答所有必填问题，然后再继续。',
    failedToSave: '无法保存决策。请重试。',
    anErrorOccurred: '保存时发生错误。请检查您的连接。',
    decisionNotFound: '找不到决策。',
    goalAndRisk: '目标与风险定义',
    investmentMethod: '投资方法选择',
    buySellRules: '买卖规则建立',
    riskAssessment: '风险评估与管理',
    informationValidation: '信息验证',
    cognitiveBias: '认知偏差检查',
    documentationReview: '文档与审查',
    riskAssessmentTitle: '风险承受能力评估',
    riskToleranceScore: '您的风险承受能力评分',
    riskType: '风险类型',
    riskDescription: '特征描述',
    investmentRecommendation: '投资建议',
    doneButton: '完成',
    submitAssessment: '提交评估',
    financialCapacity: '财务能力评估',
    investmentGoals: '投资目标与期限',
    psychologicalTolerance: '心理承受测试',
    investmentExperience: '投资经验与知识',
    personalInfo: '个人基本信息',
    pleaseAnswerAllQuestions: '请回答所有必填问题后再提交',
    shortTerm: '短期',
    mediumTerm: '中期',
    longTerm: '长期',
    conservative: '保守型',
    moderate: '适中型',
    aggressive: '激进型',
    fundamentalAnalysis: '基本面分析',
    technicalAnalysis: '技术分析',
    quantitativeAnalysis: '量化分析',
    passiveInvesting: '被动投资',
    companyFilings: '公司文件',
    financialNews: '财经新闻',
    analystReports: '分析师报告',
    independentResearch: '独立研究',
    yes: '是',
    no: '否',
    stage1Title: '阶段1：目标与风险定义',
    stage2Title: '阶段2：投资方法选择',
    stage3Title: '阶段3：买卖规则建立',
    stage4Title: '阶段4：风险评估与管理',
    stage5Title: '阶段5：信息验证',
    stage6Title: '阶段6：认知偏差自查',
    stage7Title: '阶段7：文档化与审查',
    shortTermWithPeriod: '短期（<1年）',
    mediumTermWithPeriod: '中期（1-5年）',
    longTermWithPeriod: '长期（>5年）',
    conservativeWithDetail: '保守型（波动<10%）',
    moderateWithDetail: '适中型（波动10-25%）',
    aggressiveWithDetail: '激进型（波动>25%）',
    fundamentalAnalysisWithDetail: '基本面分析（财报、行业地位）',
    technicalAnalysisWithDetail: '技术分析（趋势线、成交量）',
    quantitativeAnalysisWithDetail: '量化分析（因子回测）',
    passiveInvestingWithDetail: '被动投资（指数跟踪）',
    stopLossOrders: '止损单',
    diversification: '分散投资（跨3+不相关行业）',
    optionsHedging: '期权对冲',
    companyFilingsDetail: '公司文件',
    bloombergReutersData: '彭博/路透数据',
    analystReportsDetail: '分析师报告',
    independentThirdPartyAudits: '独立第三方审计',
    socialMediaDetail: '社交媒体（如抖音、小红书）',
    monthly: '每月',
    quarterly: '每季度',
    eventDriven: '事件驱动（如财报发布）',
    helpText: '例如：',
    selectOption: '选择一个选项',
    fieldRequired: '此字段为必填项',
    pleaseSelectAtLeastOne: '请至少选择一个选项',
    pleaseSelectOneOption: '请选择一个选项',
    noRecommendedStrategies: '暂无推荐策略',
    strategyRecommendationHint: '完成决策评估后，系统将根据您的评分推荐适合的投资策略',
    strategyRecommendationBased: '基于 "{0}" 评分 ({1} 分) 的投资策略推荐。得分越高，推荐的策略越激进。',
    valueInvesting: '价值投资',
    growthInvesting: '成长投资', 
    indexInvesting: '指数投资',
    dollarCostAveraging: '平均成本投资',
    blueChipInvesting: '蓝筹投资',
    conservativeInvesting: '保守型投资',
    bondInvesting: '债券投资',
    strategyHighlyComplete: '策略高度完备，可直接执行。',
    saveAndComplete: '保存并完成',
    evaluationComplete: '评估完成',
    goBack: '返回',
  },
} as const;