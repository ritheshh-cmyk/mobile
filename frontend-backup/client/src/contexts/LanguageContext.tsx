import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // App Title
    appTitle: 'call me mobiles',
    businessManagement: 'Business Management',
    
    // Navigation
    newTransaction: 'New Transaction',
    transactionHistory: 'Transaction History',
    customers: 'Customers',
    reports: 'Reports',
    exportToExcel: 'Export to Excel',
    export: 'Export',
    dashboard: 'Dashboard',
    settings: 'Settings',
    inventory: 'Inventory',
    expenditure: 'Expenditure',
    history: 'History',
    
    // Navigation Groups
    mainOperations: 'Main Operations',
    
    // Dashboard
    recordTransaction: 'Record customer repair service and payment details',
    viewHistory: 'View History',
    exportExcel: 'Export Excel',
    
    // Transaction Form
    customerInformation: 'Customer Information',
    customerName: 'Customer Name',
    mobileNumber: 'Mobile Number',
    deviceModel: 'Device Model',
    repairDetails: 'Repair Details',
    repairType: 'Repair Type',
    repairCost: 'Repair Cost',
    freeGlassInstallation: 'Eligible for free glass installation',
    paymentInformation: 'Payment Information',
    paymentMethod: 'Payment Method',
    amountGiven: 'Amount Given',
    changeReturned: 'Change Returned',
    additionalNotes: 'Additional Notes',
    remarks: 'Remarks',
    cancel: 'Cancel',
    saveDraft: 'Save Draft',
    completeTransaction: 'Complete Transaction',
    processing: 'Processing...',
    
    // Payment Methods
    cash: 'Cash',
    online: 'Online',
    
    // Transaction Summary
    transactionSummary: 'Transaction Summary',
    dateTime: 'Date & Time',
    customer: 'Customer',
    device: 'Device',
    changeDue: 'Change Due',
    recentTransactions: 'Recent Transactions',
    noRecentTransactions: 'No recent transactions',
    todaySummary: "Today's Summary",
    totalRevenue: 'Total Revenue',
    transactions: 'Transactions',
    customers_count: 'Customers',
    
    // History Page
    allTransactions: 'All Transactions',
    searchTransactions: 'Search transactions...',
    allTime: 'All Time',
    today: 'Today',
    thisWeek: 'This Week',
    thisMonth: 'This Month',
    thisYear: 'This Year',
    loadingTransactions: 'Loading transactions...',
    noTransactionsFound: 'No transactions found',
    payment: 'Payment',
    amount: 'Amount',
    status: 'Status',
    actions: 'Actions',
    view: 'View',
    print: 'Print',
    edit: 'Edit',
    previous: 'Previous',
    next: 'Next',
    showingTransactions: 'Showing {count} transactions',
    
    // Status
    completed: 'Completed',
    inProgress: 'In Progress',
    pending: 'Pending',
    
    // Stats
    weekExpense: 'Week Expense',
    monthExpense: 'Month Expense',
    yearExpense: 'Year Expense',
    
    // Placeholders
    enterCustomerName: 'Enter customer name',
    enterMobileNumber: 'Enter mobile number',
    deviceModelPlaceholder: 'e.g., iPhone 14 Pro, Samsung Galaxy S23',
    selectRepairType: 'Select repair type',
    selectPaymentMethod: 'Select payment method',
    additionalNotesPlaceholder: 'Additional notes, special instructions, or warranty information',
    
    // Messages
    transactionCreated: 'Transaction created successfully!',
    exportFailed: 'Export failed',
    validationError: 'Validation error',
    failedToCreateTransaction: 'Failed to create transaction',
    fetchTransactionsFailed: 'Failed to fetch transactions',
    fetchStatsFailed: 'Failed to fetch stats',
    exportDataFailed: 'Failed to export data',

    // New Features
    suppliers: 'Suppliers',
    needsParts: 'Needs Parts',
    addInventoryItem: 'Add Inventory Item',
    addExpenditure: 'Add Expenditure',
    addSupplier: 'Add Supplier',
    partName: 'Part Name',
    partType: 'Part Type',
    cost: 'Cost',
    sellingPrice: 'Selling Price',
    quantity: 'Quantity',
    supplier: 'Supplier',
    compatibleDevices: 'Compatible Devices',
    category: 'Category',
    recipient: 'Recipient',
    description: 'Description',
    supplierName: 'Supplier Name',
    contactNumber: 'Contact Number',
    address: 'Address',
    totalDue: 'Total Due',
    makePayment: 'Make Payment',
    purchaseOrders: 'Purchase Orders',
    orderDate: 'Order Date',
    unitCost: 'Unit Cost',
    totalCost: 'Total Cost',
    orderStatus: 'Order Status',
    paymentHistory: 'Payment History',
    paymentDate: 'Payment Date',
    paymentAmount: 'Payment Amount',
    viewAllTransactions: 'View All Transactions',
    actualCost: 'Actual Cost',
    profit: 'Profit',
    costBreakdown: 'Cost Breakdown',
    hiddenDetails: 'Hidden Details',
    customerPaid: 'Customer Paid',
    usedInventoryParts: 'Used Inventory Parts',
    outletPatels: 'Patels',
    outletMahalaxmi: 'Mahalaxmi',
    outletRathod: 'Rathod',
    outletSri: 'Sri',
    outletRamdev: 'Ramdev',
    outletHub: 'Hub',
    selectSupplierOutlet: 'Select supplier outlet',
    otherCustom: 'Other (Custom)',
    customSupplierName: 'Custom Supplier Name',
    partsCostFromSuppliers: 'Parts Cost from Suppliers',
    supplierOutlet: 'Supplier Outlet',
    amountSpentAt: 'Amount Spent at',
    quickAddCommonExpenses: 'Quick Add Common Expenses',
    yourProfit: 'Your Profit',
    spentAt: 'Spent at',
    broughtItemsFromOtherStore: 'Brought items from other store',
    checkIfPurchasedParts: 'Check if you purchased parts from Patels, Mahalaxmi, Rathod, Sri, Ramdev, Hub etc.',
    externalStorePurchase: 'External Store Purchase',
    recordCostOfItems: 'Record the cost of items purchased from external suppliers to calculate accurate profit margins.',
    whichStore: 'Which Store?',
    chooseStoreOutlet: 'Choose the store outlet',
    howMuchSpent: 'How much spent',
    quickAddCommonStoreExpenses: 'Quick Add Common Store Expenses',
    
    // Settings
    businessInformation: 'Business Information',
    businessName: 'Business Name',
    currency: 'Currency',
    appearance: 'Appearance',
    darkMode: 'Dark Mode',
    language: 'Language',
    systemSettings: 'System Settings',
    autoBackup: 'Auto Backup',
    notifications: 'Notifications',
    dataManagement: 'Data Management',
    exportAllData: 'Export All Data',
    importData: 'Import Data',
    clearAllData: 'Clear All Data',
    resetToDefault: 'Reset to Default',
    saveSettings: 'Save Settings',
    settingsSaved: 'Settings Saved',
    settingsReset: 'Settings Reset',
    
    // Function Buttons
    search: 'Search',
    calculator: 'Calculator',
    notes: 'Notes',
    customerManagement: 'Customer Management',
    paymentManagement: 'Payment Management',
    alerts: 'Alerts',
    backup: 'Backup',
    help: 'Help',
    quickFunctions: 'Quick Functions',
    
    // Additional Navigation
    invoices: 'Invoices',
    schedule: 'Schedule',
    analytics: 'Analytics'
  },
  te: {
    // App Title
    appTitle: 'కాల్ మీ మొబైల్స్',
    businessManagement: 'వ్యాపార నిర్వహణ',
    
    // Navigation
    newTransaction: 'కొత్త లావాదేవీ',
    transactionHistory: 'లావాదేవీల చరిత్ర',
    customers: 'కస్టమర్లు',
    reports: 'నివేదికలు',
    exportToExcel: 'ఎక్సెల్‌కు ఎగుమతి',
    export: 'ఎగుమతి',
    dashboard: 'డాష్బోర్డ్',
    settings: 'అమలు',
    inventory: 'జాబితా',
    expenditure: 'ఖర్చు',
    history: 'చరిత్ర',
    
    // Navigation Groups
    mainOperations: 'ముఖాలయాలు',
    
    // Dashboard
    recordTransaction: 'కస్టమర్ రిపేర్ సేవ మరియు చెల్లింపు వివరాలను రికార్డ్ చేయండి',
    viewHistory: 'చరిత్రను చూడండి',
    exportExcel: 'ఎక్సెల్ ఎగుమతి',
    
    // Transaction Form
    customerInformation: 'కస్టమర్ సమాచారం',
    customerName: 'కస్టమర్ పేరు',
    mobileNumber: 'మొబైల్ నంబర్',
    deviceModel: 'పరికర మోడల్',
    repairDetails: 'రిపేర్ వివరాలు',
    repairType: 'రిపేర్ రకం',
    repairCost: 'రిపేర్ ఖర్చు',
    freeGlassInstallation: 'ఉచిత గ్లాస్ ఇన్‌స్టాలేషన్‌కు అర్హత',
    paymentInformation: 'చెల్లింపు సమాచారం',
    paymentMethod: 'చెల్లింపు పద్ధతి',
    amountGiven: 'ఇచ్చిన మొత్తం',
    changeReturned: 'తిరిగి ఇచ్చిన మార్చు',
    additionalNotes: 'అదనపు గమనికలు',
    remarks: 'వ్యాఖ్యలు',
    cancel: 'రద్దు',
    saveDraft: 'డ్రాఫ్ట్ సేవ్',
    completeTransaction: 'లావాదేవీ పూర్తి చేయండి',
    processing: 'ప్రాసెసింగ్...',
    
    // Payment Methods
    cash: 'నగదు',
    online: 'ఆన్‌లైన్',
    
    // Transaction Summary
    transactionSummary: 'లావాదేవీ సారాంశం',
    dateTime: 'తేదీ మరియు సమయం',
    customer: 'కస్టమర్',
    device: 'పరికరం',
    changeDue: 'మార్చు రావలసినది',
    recentTransactions: 'ఇటీవలి లావాదేవీలు',
    noRecentTransactions: 'ఇటీవలి లావాదేవీలు లేవు',
    todaySummary: 'ఈరోజు సారాంశం',
    totalRevenue: 'మొత్తం ఆదాయం',
    transactions: 'లావాదేవీలు',
    customers_count: 'కస్టమర్లు',
    
    // History Page
    allTransactions: 'అన్ని లావాదేవీలు',
    searchTransactions: 'లావాదేవీలను వెతకండి...',
    allTime: 'అన్ని సమయాలు',
    today: 'ఈరోజు',
    thisWeek: 'ఈ వారం',
    thisMonth: 'ఈ నెల',
    thisYear: 'ఈ సంవత్సరం',
    loadingTransactions: 'లావాదేవీలను లోడ్ చేస్తోంది...',
    noTransactionsFound: 'లావాదేవీలు కనుగొనబడలేదు',
    payment: 'చెల్లింపు',
    amount: 'మొత్తం',
    status: 'స్థితి',
    actions: 'చర్యలు',
    view: 'చూడండి',
    print: 'ప్రింట్',
    edit: 'సవరించు',
    previous: 'మునుపటి',
    next: 'తదుపరి',
    showingTransactions: '{count} లావాదేవీలను చూపిస్తోంది',
    
    // Status
    completed: 'పూర్తైంది',
    inProgress: 'ప్రగతిలో ఉంది',
    pending: 'పెండింగ్‌లో ఉంది',
    
    // Stats
    weekExpense: 'వారం ఖర్చు',
    monthExpense: 'నెల ఖర్చు',
    yearExpense: 'సంవత్సర ఖర్చు',
    
    // Placeholders
    enterCustomerName: 'కస్టమర్ పేరు నమోదు చేయండి',
    enterMobileNumber: 'మొబైల్ నంబర్ నమోదు చేయండి',
    deviceModelPlaceholder: 'ఉదా., iPhone 14 Pro, Samsung Galaxy S23',
    selectRepairType: 'రిపేర్ రకాన్ని ఎంచుకోండి',
    selectPaymentMethod: 'చెల్లింపు పద్ధతిని ఎంచుకోండి',
    additionalNotesPlaceholder: 'అదనపు గమనికలు, ప్రత్యేక సూచనలు లేదా వారంటీ సమాచారం',
    
    // Messages
    transactionCreated: 'లావాదేవీ విజయవంతంగా సృష్టించబడింది!',
    exportFailed: 'ఎగుమతి విఫలమైంది',
    validationError: 'ధృవీకరణ లోపం',
    failedToCreateTransaction: 'లావాదేవీని సృష్టించడంలో విఫలమైంది',
    fetchTransactionsFailed: 'లావాదేవీలను పొందడంలో విఫలమైంది',
    fetchStatsFailed: 'గణాంకాలను పొందడంలో విఫలమైంది',
    exportDataFailed: 'డేటాను ఎగుమతి చేయడంలో విఫలమైంది',

    // New Features
    suppliers: 'సరఫరాదారులు',
    needsParts: 'భాగాలు అవసరం',
    addInventoryItem: 'జాబితా అంశం జోడించండి',
    addExpenditure: 'ఖర్చు జోడించండి',
    addSupplier: 'సరఫరాదారుని జోడించండి',
    partName: 'భాగం పేరు',
    partType: 'భాగం రకం',
    cost: 'ఖర్చు',
    sellingPrice: 'అమ్మకపు ధర',
    quantity: 'పరిమాణం',
    supplier: 'సరఫరాదారు',
    compatibleDevices: 'అనుకూల పరికరాలు',
    category: 'వర్గం',
    recipient: 'స్వీకర్త',
    description: 'వివరణ',
    supplierName: 'సరఫరాదారు పేరు',
    contactNumber: 'సంప్రదింపు నంబర్',
    address: 'చిరునామా',
    totalDue: 'మొత్తం బకాయి',
    makePayment: 'చెల్లింపు చేయండి',
    purchaseOrders: 'కొనుగోలు ఆర్డర్లు',
    orderDate: 'ఆర్డర్ తేదీ',
    unitCost: 'యూనిట్ ఖర్చు',
    totalCost: 'మొత్తం ఖర్చు',
    orderStatus: 'ఆర్డర్ స్థితి',
    paymentHistory: 'చెల్లింపు చరిత్ర',
    paymentDate: 'చెల్లింపు తేదీ',
    paymentAmount: 'చెల్లింపు మొత్తం',
    viewAllTransactions: 'అన్ని లావాదేవీలను చూడండి',
    actualCost: 'వాస్తవ ఖర్చు',
    profit: 'లాభం',
    costBreakdown: 'ఖర్చు వివరణ',
    hiddenDetails: 'దాచిన వివరాలు',
    customerPaid: 'కస్టమర్ చెల్లించినది',
    usedInventoryParts: 'ఉపయోగించిన జాబితా భాగాలు',
    outletPatels: 'పటేల్స్',
    outletMahalaxmi: 'మహాలక్ష్మి',
    outletRathod: 'రాథోడ్',
    outletSri: 'శ్రీ',
    outletRamdev: 'రామదేవ్',
    outletHub: 'హబ్',
    selectSupplierOutlet: 'సరఫరాదారు అవుట్‌లెట్‌ను ఎంచుకోండి',
    otherCustom: 'ఇతర (కస్టమ్)',
    customSupplierName: 'కస్టమ్ సరఫరాదారు పేరు',
    partsCostFromSuppliers: 'సరఫరాదారుల నుండి భాగాల ఖర్చు',
    supplierOutlet: 'సరఫరాదారు అవుట్‌లెట్',
    amountSpentAt: 'వద్ద ఖర్చు చేసిన మొత్తం',
    quickAddCommonExpenses: 'సాధారణ ఖర్చులను త్వరగా జోడించండి',
    yourProfit: 'మీ లాభం',
    spentAt: 'వద్ద ఖర్చు చేయబడింది',
    broughtItemsFromOtherStore: 'ఇతర దుకాణం నుండి వస్తువులు తెచ్చుకున్నారు',
    checkIfPurchasedParts: 'మీరు పటేల్స్, మహాలక్ష్మి, రాథోడ్, శ్రీ, రామదేవ్, హబ్ మొదలైన వాటి నుండి భాగాలను కొనుగోలు చేశారో లేదో తనిఖీ చేయండి',
    externalStorePurchase: 'బాహ్య దుకాణ కొనుగోలు',
    recordCostOfItems: 'ఖచ్చితమైన లాభ మార్జిన్‌లను లెక్కించడానికి బాహ్య సరఫరాదారుల నుండి కొనుగోలు చేసిన వస్తువుల ఖర్చును రికార్డ్ చేయండి',
    whichStore: 'ఏ దుకాణం?',
    chooseStoreOutlet: 'దుకాణ అవుట్‌లెట్‌ను ఎంచుకోండి',
    howMuchSpent: 'ఎంత ఖర్చు చేశారు',
    quickAddCommonStoreExpenses: 'సాధారణ దుకాణ ఖర్చులను త్వరగా జోడించండి',
    
    // Settings
    businessInformation: 'వ్యాపార సమాచారం',
    businessName: 'వ్యాపార పేరు',
    currency: 'నివారణ',
    appearance: 'ప్రాసెస్',
    darkMode: 'డార్ మోడ్',
    language: 'భాష',
    systemSettings: 'వ్యవస్థ అమలు',
    autoBackup: 'స్వయంచాలా బాక్పు',
    notifications: 'అమలు',
    dataManagement: 'డేటా నిర్వహణ',
    exportAllData: 'అన్ని డేటాను ఎగుమతి',
    importData: 'డేటాను పొందడం',
    clearAllData: 'అన్ని డేటాను తొలిసారి',
    resetToDefault: 'డిఫాల్ట్ గా స్థానంలోకి',
    saveSettings: 'అమలు చేయండి',
    settingsSaved: 'అమలు సేవ్యం',
    settingsReset: 'అమలు తొలిసారి',
    
    // Function Buttons
    search: 'శోధించండి',
    calculator: 'కాలిక్యులేటర్',
    notes: 'గమనాలు',
    customerManagement: 'కస్టమర్ నిర్వహణ',
    paymentManagement: 'చెల్లింపు నిర్వహణ',
    alerts: 'అలర్ట్లు',
    backup: 'బ్యాకప్',
    help: 'సహాయం',
    quickFunctions: 'త్వరగా ఫంక్షన్లు',
    
    // Additional Navigation
    invoices: 'వివాహాలు',
    schedule: 'పనికార్యాలు',
    analytics: 'విశ్లేషణాలు'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize from localStorage if available
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLanguage = prev === 'en' ? 'te' : 'en';
      localStorage.setItem('language', newLanguage);
      return newLanguage;
    });
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}