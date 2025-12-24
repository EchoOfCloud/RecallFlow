// 初始知识点库 - 添加带有公式的示例
const initialIdioms = [
    { 
        text: "医用碘伏常见浓度是______%，可直接涂擦除______外的皮肤表面", 
        pinyin: "yī yòng diǎn fú cháng jiàn nóng dù shì ______%，kě zhí jiē tú cā chú ______ wài de pí fū biǎo miàn",
        meaning: "医用碘伏常见浓度是1%，可直接涂擦除眼睛外的皮肤表面", 
        example: "医用碘伏常用于皮肤消毒", 
        usage: "用于皮肤消毒",
        context: "医疗、卫生",
        field: "医学、消毒",
        tags: "医疗,消毒",
        notes: "碘伏消毒液使用指南",
        priority: 7,
        studyCount: 0,
        isFavorite: true,
        favoriteReason: "重要医疗知识"
    },
    { 
        text: "冬天麦盖三层被，来年枕着馒头睡", 
        pinyin: "dōng tiān mài gài sān céng bèi, lái nián zhěn zhe mán tou shuì",
        meaning: "今年冬天如果下了厚厚的雪，那么麦苗上就有好几层的雪，来年就可以丰收。这是因为大雪覆盖冬小麦时可以起到很好的保温作用，使冬小麦免受冻害。", 
        example: "农民伯伯常说：'冬天麦盖三层被，来年枕着馒头睡'，意思是冬天下大雪预示着来年丰收。", 
        usage: "用于农业谚语，表达瑞雪兆丰年的意思",
        context: "农业、气象预测",
        field: "农业、气象学",
        tags: "农业,气象,谚语",
        notes: "民间谚语，描述冬雪对农作物生长的积极作用",
        priority: 6,
        studyCount: 0,
        isFavorite: false,
        favoriteReason: ""
    },
    { 
        text: "守株待兔", 
        pinyin: "shǒu zhū dài tù",
        meaning: "比喻死守经验，不知变通", 
        example: "我们不能有守株待兔的心理，要主动寻找机会。", 
        usage: "多用于批评不主动努力、存侥幸心理的人",
        context: "消极、被动的情境",
        field: "教育、工作、生活",
        tags: "消极,被动",
        notes: "出自《韩非子·五蠹》",
        priority: 5,
        studyCount: 3,
        isFavorite: false,
        favoriteReason: ""
    },
    { 
        text: "基期比重", 
        pinyin: "jī qī bǐ zhòng",
        meaning: "统计学中用于表示过去某一时期数据在总量中的占比", 
        formula: "\\text{基期比重} = \\frac{\\frac{A}{1+a}}{\\frac{B}{1+b}} = \\frac{A}{B} \\times \\frac{1+b}{1+a}",
        formulaCase: "2020年A产品销售额为1200万元，增长率为8%；2021年总销售额为5000万元，增长率为12%。则2020年销售额占比为：\\[\\frac{\\frac{1200}{1+0.08}}{\\frac{5000}{1+0.12}} = \\frac{1200}{5000} \\times \\frac{1.12}{1.08} \\approx 24.4\\%\\]",
        formulaNote: "基期比重公式常用于经济分析，计算历史数据在总体中的占比",
        example: "基期比重公式常用于经济学分析",
        usage: "用于历史数据分析",
        context: "经济学、统计学分析",
        field: "经济学、统计学",
        tags: "公式,统计",
        notes: "基期比重公式推导",
        priority: 7,
        studyCount: 2,
        isFavorite: true,
        favoriteReason: "重要公式，需要重点掌握"
    },
    { 
        text: "增长率计算", 
        pinyin: "zēng zhǎng lǜ jì suàn",
        meaning: "2020年增长10%，2021年增长15%，则两年总增长率 = $0.1 + 0.15 + 0.1 \\times 0.15 = 0.265$ 即 26.5%", 
        formula: "r = r_1 + r_2 + r_1 \\times r_2",
        formulaCase: "某公司2020年销售额增长率为10%，2021年增长率为15%，则两年总增长率为：\\[0.10 + 0.15 + (0.10 \\times 0.15) = 0.265\\] 即26.5%",
        formulaNote: "复合增长率计算公式，适用于连续两年的增长率计算",
        example: "根据公式计算复合增长率",
        usage: "用于计算连续增长",
        context: "经济学、投资分析",
        field: "经济学、金融学",
        tags: "公式,增长",
        notes: "复合增长率计算公式",
        priority: 8,
        studyCount: 4,
        isFavorite: true,
        favoriteReason: "经常忘记，需要反复练习"
    },
    { 
        text: "画蛇添足", 
        pinyin: "huà shé tiān zú",
        meaning: "比喻做了多余的事，反而有害无益", 
        example: "这个设计已经很完美了，再加装饰就是画蛇添足了。", 
        usage: "多用于批评过度修饰或多余行动",
        context: "评价事物、行为",
        field: "艺术、设计、生活",
        tags: "多余,过度",
        notes: "出自《战国策·齐策二》",
        priority: 3,
        studyCount: 2,
        isFavorite: false,
        favoriteReason: ""
    },
    { 
        text: "亡羊补牢", 
        pinyin: "wáng yáng bǔ láo",
        meaning: "比喻出了问题以后想办法补救，可以防止继续受损失", 
        example: "虽然出了些问题，但现在亡羊补牢还来得及。", 
        usage: "强调及时补救的重要性",
        context: "出现问题后的修复情境",
        field: "管理、生活、工作",
        tags: "补救,及时",
        priority: 2,
        studyCount: 1,
        isFavorite: false,
        favoriteReason: ""
    },
    { 
        text: "井底之蛙", 
        pinyin: "jǐng dǐ zhī wā",
        meaning: "比喻见识短浅的人", 
        example: "我们要多读书，多旅行，不要做井底之蛙。", 
        usage: "形容人见识狭窄",
        context: "批评见识不广的人",
        tags: "见识,狭隘",
        notes: "出自《庄子·秋水》",
        priority: 4,
        studyCount: 5,
        isFavorite: false,
        favoriteReason: ""
    }
];

// 应用状态
let idioms = [];
let currentIdiomIndex = 0;
let learningQueue = [];
let currentEditingIdiomText = null;
let selectedIds = [];
let currentSort = null;
let importErrors = [];
let learningRecords = [];
let feedbackCounts = {
    know: 0,
    vague: 0,
    forget: 0
};
let showFavoritesOnly = false;
let currentFilterTag = null;
let learningSessionCompleted = false;
let isLearningInProgress = false;
let hasStartedLearning = false; // 跟踪是否真正开始学习
let libraryVersion = Date.now().toString(); // 词库版本（时间戳）
let savedLearningProgress = null; // 保存的学习进度
let currentSessionId = null; // 当前学习会话ID

// 学习进度存储键名
const LEARNING_PROGRESS_KEY = 'learningProgress';
const LIBRARY_VERSION_KEY = 'libraryVersion';
const SETTINGS_KEY = 'appSettings';

// 应用设置（默认）
let appSettings = {
    nightMode: false,
    studyScope: { mode: 'all', tags: [] },
    fontSize: 'medium', // small | medium | large
    priorityWeights: { know: -2, vague: 1, forget: 3 },
    version: '1.0.0',
    clearProgressNextDay: true, // 次日清除学习进度（默认打开）
    defaultPriority: 3 // 默认熟练度（优先级）
};

function loadSettings() {
    const saved = localStorage.getItem(SETTINGS_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // 合并默认值，避免老版本字段缺失
            appSettings = {
                ...appSettings,
                ...parsed,
                studyScope: { ...appSettings.studyScope, ...(parsed.studyScope || {}) },
                priorityWeights: { ...appSettings.priorityWeights, ...(parsed.priorityWeights || {}) }
            };
        } catch (e) {
            console.error('Failed to parse settings:', e);
        }
    }
}

function saveSettings() {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(appSettings));
}

function applySettingsToUI() {
    // 夜间模式
    document.body.classList.toggle('dark-mode', appSettings.nightMode);
    // 字体大小
    document.documentElement.classList.remove('font-small','font-medium','font-large');
    document.documentElement.classList.add(`font-${appSettings.fontSize}`);
    // 版本信息
    const v = document.getElementById('appVersion');
    if (v) v.textContent = appSettings.version || '-';
}

function openSettingsModal() {
    // 同步设置到表单
    const nightToggle = document.getElementById('nightModeToggle');
    nightToggle.checked = !!appSettings.nightMode;
    
    const clearProgressToggle = document.getElementById('clearProgressNextDayToggle');
    if (clearProgressToggle) {
        clearProgressToggle.checked = !!appSettings.clearProgressNextDay;
    }

    const fontSizeSmall = document.getElementById('fontSizeSmall');
    const fontSizeMedium = document.getElementById('fontSizeMedium');
    const fontSizeLarge = document.getElementById('fontSizeLarge');
    fontSizeSmall.checked = appSettings.fontSize === 'small';
    fontSizeMedium.checked = appSettings.fontSize === 'medium';
    fontSizeLarge.checked = appSettings.fontSize === 'large';

    const pk = document.getElementById('priorityKnow');
    const pv = document.getElementById('priorityVague');
    const pf = document.getElementById('priorityForget');
    pk.value = appSettings.priorityWeights.know;
    pv.value = appSettings.priorityWeights.vague;
    pf.value = appSettings.priorityWeights.forget;

    const scopeAll = document.getElementById('studyScopeAll');
    const scopeTags = document.getElementById('studyScopeTags');
    scopeAll.checked = appSettings.studyScope.mode === 'all';
    scopeTags.checked = appSettings.studyScope.mode === 'tags';
    toggleSettingsTagList(appSettings.studyScope.mode === 'tags');
    buildSettingsTagList();

    // 动态添加默认熟练度设置字段
    addDefaultPrioritySetting();

    document.getElementById('settingsModal').style.display = 'flex';
}

// 动态添加默认熟练度设置字段
    function addDefaultPrioritySetting() {
        const settingsModalBody = document.querySelector('#settingsModal .modal-body');
        const priorityWeightsGroup = document.querySelector('#settingsModal .form-group:has(#priorityKnow)');
        
        // 检查是否已经添加过
        if (document.getElementById('defaultPriorityContainer')) {
            // 如果已存在，更新值
            document.getElementById('defaultPriority').value = appSettings.defaultPriority || 0;
            return;
        }
        
        // 创建默认熟练度设置字段
        const defaultPriorityGroup = document.createElement('div');
        defaultPriorityGroup.id = 'defaultPriorityContainer';
        defaultPriorityGroup.className = 'form-group';
        defaultPriorityGroup.innerHTML = `
            <label><i>📊</i> 知识点默认熟练度</label>
            <div style="display:flex;gap:8px;align-items:center;">
                <input type="number" id="defaultPriority" class="form-control" style="width:120px;" value="${appSettings.defaultPriority || 0}" min="-10" max="10">
                <small style="color: #64748b;">用于新增和导入知识点时自动设置的熟练度数值（-10到10）</small>
            </div>
        `;
        
        // 插入到优先级调整设置后面
        if (priorityWeightsGroup && priorityWeightsGroup.nextElementSibling) {
            priorityWeightsGroup.parentNode.insertBefore(defaultPriorityGroup, priorityWeightsGroup.nextElementSibling);
        } else if (priorityWeightsGroup) {
            priorityWeightsGroup.parentNode.appendChild(defaultPriorityGroup);
        }
    }

function closeSettingsModal() {
    document.getElementById('settingsModal').style.display = 'none';
}

function toggleSettingsTagList(show) {
    const list = document.getElementById('settingsTagList');
    if (!list) return;
    list.style.display = show ? 'flex' : 'none';
}

function getAllTagsFromIdioms() {
    const tagSet = new Set();
    idioms.forEach(i => {
        if (i.tags) {
            i.tags.split(',').map(t => t.trim()).filter(Boolean).forEach(t => tagSet.add(t));
        }
    });
    return Array.from(tagSet).sort((a,b) => a.localeCompare(b));
}

function buildSettingsTagList() {
    const list = document.getElementById('settingsTagList');
    if (!list) return;
    const allTags = getAllTagsFromIdioms();
    list.innerHTML = allTags.map(tag => {
        const checked = appSettings.studyScope.tags.includes(tag) ? 'checked' : '';
        return `<label style="display:inline-flex;align-items:center;gap:6px;"><input type="checkbox" class="settingsTagCheckbox" value="${tag}" ${checked}> ${tag}</label>`;
    }).join('');
}

function updateSettingsFromForm() {
    appSettings.nightMode = document.getElementById('nightModeToggle').checked;
    
    const clearProgressToggle = document.getElementById('clearProgressNextDayToggle');
    if (clearProgressToggle) {
        appSettings.clearProgressNextDay = clearProgressToggle.checked;
    }

    const fontSize = document.querySelector('input[name="fontSize"]:checked').value;
    appSettings.fontSize = fontSize;

    const pk = parseInt(document.getElementById('priorityKnow').value, 10);
    const pv = parseInt(document.getElementById('priorityVague').value, 10);
    const pf = parseInt(document.getElementById('priorityForget').value, 10);
    appSettings.priorityWeights = {
        know: isNaN(pk) ? -2 : pk,
        vague: isNaN(pv) ? 1 : pv,
        forget: isNaN(pf) ? 3 : pf
    };

    // 获取默认熟练度设置
    const defaultPriorityInput = document.getElementById('defaultPriority');
    if (defaultPriorityInput) {
        const defaultPriority = parseInt(defaultPriorityInput.value, 10);
        if (isNaN(defaultPriority) || defaultPriority < -10 || defaultPriority > 10) {
            showNotification('提示', '知识点默认熟练度必须在-10到10之间', 'warning');
            // 重置输入框的值为有效范围，而不是直接设置为0
            defaultPriorityInput.value = appSettings.defaultPriority || 0;
            return false; // 阻止继续保存
        } else {
            appSettings.defaultPriority = defaultPriority;
        }
    }

    const scope = document.querySelector('input[name="studyScope"]:checked').value;
    if (scope === 'all') {
        appSettings.studyScope = { mode: 'all', tags: [] };
    } else {
        const selectedTags = Array.from(document.querySelectorAll('.settingsTagCheckbox:checked')).map(el => el.value);
        appSettings.studyScope = { mode: 'tags', tags: selectedTags };
    }
    
    return true; // 所有设置验证通过，返回true允许继续保存
}

function setVersionInfo() {
    // 如需后续动态更新版本，可在此处调整逻辑
}

// 生成新的学习会话ID
function generateSessionId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// 渲染学习次数统计
function renderStudyCountStats() {
    // 计算总学习次数
    const totalStudyCount = idioms.reduce((sum, idiom) => sum + (idiom.studyCount || 0), 0);
    
    // 计算每个优先级的学习次数
    const studyCountsByPriority = {
        critical: 0,
        high: 0,
        medium: 0,
        low: 0,
        easy: 0
    };
    
    idioms.forEach(idiom => {
        const priorityLevel = getPriorityLevel(idiom.priority);
        studyCountsByPriority[priorityLevel] += (idiom.studyCount || 0);
    });
    
    // 找到学习次数最多的知识点
    const mostStudiedIdiom = idioms.reduce((most, current) => {
        if (!most || (current.studyCount || 0) > (most.studyCount || 0)) {
            return current;
        }
        return most;
    }, null);
    
    // 在统计视图中添加学习次数统计
    const statsContainer = document.querySelector('#studyCountStats');
    if (!statsContainer) {
        // 如果容器不存在，创建它
        const statsSection = document.querySelector('#statsOverview .stats-cards');
        if (statsSection) {
            const studyCountCard = document.createElement('div');
            studyCountCard.id = 'studyCountStats';
            studyCountCard.className = 'stat-card';
            studyCountCard.innerHTML = `
                <h3>总学习次数</h3>
                <div class="stat-number">${totalStudyCount}</div>
                <div class="stat-details">
                    <div class="study-count-by-priority">
                        <div>严重: ${studyCountsByPriority.critical}</div>
                        <div>高: ${studyCountsByPriority.high}</div>
                        <div>中: ${studyCountsByPriority.medium}</div>
                        <div>低: ${studyCountsByPriority.low}</div>
                        <div>轻松: ${studyCountsByPriority.easy}</div>
                    </div>
                    ${mostStudiedIdiom ? `<div class="most-studied">
                        <p>学习最多的知识点:</p>
                        <p class="most-studied-name">${mostStudiedIdiom.text}</p>
                        <p>${mostStudiedIdiom.studyCount}次</p>
                    </div>` : ''}
                </div>
            `;
            statsSection.appendChild(studyCountCard);
        }
    } else {
        // 如果容器已存在，更新内容
        statsContainer.innerHTML = `
            <h3>总学习次数</h3>
            <div class="stat-number">${totalStudyCount}</div>
            <div class="stat-details">
                <div class="study-count-by-priority">
                    <div>严重: ${studyCountsByPriority.critical}</div>
                    <div>高: ${studyCountsByPriority.high}</div>
                    <div>中: ${studyCountsByPriority.medium}</div>
                    <div>低: ${studyCountsByPriority.low}</div>
                    <div>轻松: ${studyCountsByPriority.easy}</div>
                </div>
                ${mostStudiedIdiom ? `<div class="most-studied">
                    <p>学习最多的知识点:</p>
                    <p class="most-studied-name">${mostStudiedIdiom.text}</p>
                    <p>${mostStudiedIdiom.studyCount}次</p>
                </div>` : ''}
            </div>
        `;
    }
}

// DOM元素
const elements = {
    libraryView: document.getElementById('library-view'),
    learningView: document.getElementById('learning-view'),
    statsView: document.getElementById('stats-view'),
    learningViewBtn: document.getElementById('learning-view-btn'),
    statsViewBtn: document.getElementById('stats-view-btn'),
    backToLibraryBtn: document.getElementById('backToLibraryBtn'),
    idiomListBody: document.getElementById('idiomListBody'),
    searchInput: document.getElementById('searchInput'),
    searchContainer: document.getElementById('search-container'),
    idiomModal: document.getElementById('idiomModal'),
    importModal: document.getElementById('importModal'),
    viewModal: document.getElementById('viewModal'),
    currentIdiom: document.getElementById('currentIdiom'),
    meaningDisplay: document.getElementById('meaningDisplay'),
    showMeaningBtn: document.getElementById('showMeaningBtn'),
    feedbackButtons: document.getElementById('feedbackButtons'),
    progressBar: document.getElementById('progressBar'),
    emptyState: document.getElementById('emptyState'),
    importProgress: document.getElementById('importProgress'),
    progressText: document.getElementById('progressText'),
    importDetails: document.getElementById('importDetails'),
    selectAll: document.getElementById('selectAll'),
    headerCheckbox: document.getElementById('headerCheckbox'),
    batchDeleteBtn: document.getElementById('batchDeleteBtn'),
    batchDeleteModal: document.getElementById('batchDeleteModal'),
    selectedCount: document.getElementById('selectedCount'),
    confirmBatchDeleteBtn: document.getElementById('confirmBatchDeleteBtn'),
    cancelBatchDeleteBtn: document.getElementById('cancelBatchDeleteBtn'),
    notification: document.getElementById('notification'),
    priorityDistribution: document.getElementById('priorityDistribution'),
    totalIdioms: document.getElementById('totalIdioms'),
    masteredIdioms: document.getElementById('masteredIdioms'),
    needReviewIdioms: document.getElementById('needReviewIdioms'),
    difficultIdioms: document.getElementById('difficultIdioms'),
    learningSuggestion: document.getElementById('learningSuggestion'),
    meaningText: document.getElementById('meaningText'),
    exampleText: document.getElementById('exampleText'),
    usageText: document.getElementById('usageText'),
    contextText: document.getElementById('contextText'),
    fieldText: document.getElementById('fieldText'),
    tagsText: document.getElementById('tagsText'),
    notesText: document.getElementById('notesText'),
    meaningItem: document.getElementById('meaningItem'),
    exampleItem: document.getElementById('exampleItem'),
    usageItem: document.getElementById('usageItem'),
    contextItem: document.getElementById('contextItem'),
    fieldItem: document.getElementById('fieldItem'),
    tagsItem: document.getElementById('tagsItem'),
    notesItem: document.getElementById('notesItem'),
    statsItem: document.getElementById('statsItem'),
    statsText: document.getElementById('statsText'),
    learningRecordsContainer: document.getElementById('learningRecordsContainer'),
    clearRecordsBtn: document.getElementById('clearRecordsBtn'),
    learningRecordsChart: document.getElementById('learningRecordsChart'),
    selectAllContainer: document.getElementById('selectAllContainer'),
    learningComplete: document.getElementById('learningComplete'),
    knowCount: document.getElementById('knowCount'),
    vagueCount: document.getElementById('vagueCount'),
    forgetCount: document.getElementById('forgetCount'),
    restartLearningBtn: document.getElementById('restartLearningBtn'),
    backToLibraryAfterLearning: document.getElementById('backToLibraryAfterLearning'),
    formulaItem: document.getElementById('formulaItem'),
    formulaDisplay: document.getElementById('formulaDisplay'),
    formulaCaseItem: document.getElementById('formulaCaseItem'),
    formulaCase: document.getElementById('formulaCase'),
    formulaNoteItem: document.getElementById('formulaNoteItem'),
    formulaNote: document.getElementById('formulaNote'),
    idiomFormula: document.getElementById('idiomFormula'),
    idiomFormulaCase: document.getElementById('idiomFormulaCase'),
    idiomFormulaNote: document.getElementById('idiomFormulaNote'),
    pinyinItem: document.getElementById('pinyinItem'),
    pinyinText: document.getElementById('pinyinText'),
    idiomPinyin: document.getElementById('idiomPinyin'),
    favoriteBtnStudy: document.getElementById('favoriteBtnStudy'),
    favoriteIcon: document.getElementById('favoriteIcon'),
    favoriteReasonItem: document.getElementById('favoriteReasonItem'),
    favoriteReasonText: document.getElementById('favoriteReasonText'),
    favoritesFilterBtn: document.getElementById('favoritesFilterBtn'),
    viewText: document.getElementById('viewText'),
    viewPinyin: document.getElementById('viewPinyin'),
    viewMeaning: document.getElementById('viewMeaning'),
    viewExample: document.getElementById('viewExample'),
    viewUsage: document.getElementById('viewUsage'),
    viewContext: document.getElementById('viewContext'),
    viewField: document.getElementById('viewField'),
    viewTags: document.getElementById('viewTags'),
    viewNotes: document.getElementById('viewNotes'),
    viewStats: document.getElementById('viewStats'),
    viewFormulaDisplay: document.getElementById('viewFormulaDisplay'),
    viewFormulaItem: document.getElementById('viewFormulaItem'),
    viewFormulaCase: document.getElementById('viewFormulaCase'),
    viewFormulaCaseItem: document.getElementById('viewFormulaCaseItem'),
    viewFormulaNote: document.getElementById('viewFormulaNote'),
    viewFormulaNoteItem: document.getElementById('viewFormulaNoteItem'),
    viewFavoriteReasonItem: document.getElementById('viewFavoriteReasonItem'),
    viewFavoriteReason: document.getElementById('viewFavoriteReason'),
    closeViewBtn: document.getElementById('closeViewBtn'),
    closeModalBtn: document.getElementById('closeModalBtn'),
    closeViewModalBtn: document.getElementById('closeViewModalBtn'),
    closeImportModalBtn: document.getElementById('closeImportModalBtn'),
    closeBatchDeleteModalBtn: document.getElementById('closeBatchDeleteModalBtn'),
    tagStats: document.getElementById('tagStats'),
    knowledgeStats: document.getElementById('knowledgeStats'),
    allTagCount: document.getElementById('allTagCount'),
    favoriteCount: document.getElementById('favoriteCount'),
    idiomHeader: document.getElementById('idiomHeader'),
    resumeLearningPrompt: document.getElementById('resumeLearningPrompt'),
    studySection: document.getElementById('studySection'),
    resumeBtn: document.getElementById('resumeBtn'),
    newLearningBtn: document.getElementById('newLearningBtn'),
    previousBtn: document.getElementById('previousBtn')
};

// 图表实例
let priorityChart = null;
let memoryLevelChart = null;
let priorityDistributionChart = null;
let learningRecordsChart = null;
let studyCountDistributionChart = null;
let priorityZeroStudyChart = null;
let tagDistributionChart = null;

// 初始化应用
function initApp() {
    loadIdioms();
    loadLearningRecords();
    loadSettings();
    setVersionInfo();
    applySettingsToUI();
    renderIdiomList();
    updateKnowledgeStats();
    setupEventListeners();
    setupSettingsEventListeners();
    switchToLibraryView();
}

// 从localStorage加载知识点数据
function loadIdioms() {
    const savedIdioms = localStorage.getItem('idioms');
    if (savedIdioms) {
        idioms = JSON.parse(savedIdioms);
        idioms.forEach(idiom => {
            if (idiom.studyCount === undefined) idiom.studyCount = 0;
            if (idiom.formula === undefined) idiom.formula = '';
            if (idiom.formulaCase === undefined) idiom.formulaCase = '';
            if (idiom.formulaNote === undefined) idiom.formulaNote = '';
            if (idiom.isFavorite === undefined) {
                idiom.isFavorite = false;
                idiom.favoriteReason = '';
            }
            if (idiom.pinyin === undefined) idiom.pinyin = '';
        });
    } else {
        idioms = [...initialIdioms];
        saveIdioms(); // 初始化词库时更新版本
    }
    
    // 加载词库版本
    const savedVersion = localStorage.getItem(LIBRARY_VERSION_KEY);
    if (savedVersion) {
        libraryVersion = savedVersion;
    } else {
        saveLibraryVersion();
    }
}

// 保存知识点数据到localStorage
function saveIdioms(updateVersion = true) {
    localStorage.setItem('idioms', JSON.stringify(idioms));
    if (updateVersion) {
        saveLibraryVersion();
    }
    updateKnowledgeStats();
}

// 保存词库版本
function saveLibraryVersion() {
    libraryVersion = Date.now().toString();
    localStorage.setItem(LIBRARY_VERSION_KEY, libraryVersion);
}

// 从localStorage加载学习记录
function loadLearningRecords() {
    const savedRecords = localStorage.getItem('learningRecords');
    if (savedRecords) {
        learningRecords = JSON.parse(savedRecords);
    } else {
        learningRecords = [];
    }
}

// 保存学习记录到localStorage
function saveLearningRecords() {
    localStorage.setItem('learningRecords', JSON.stringify(learningRecords));
}

// 新增：更新未完成的学习记录（覆盖当前会话的上一条未完成）
function updateInProgressLearningRecord() {
    const studiedCount = currentIdiomIndex;
    if (studiedCount <= 0) return;

    const record = {
        timestamp: new Date().toISOString(),
        total: studiedCount,
        knowCount: feedbackCounts.know,
        vagueCount: feedbackCounts.vague,
        forgetCount: feedbackCounts.forget,
        completed: false,
        sessionId: currentSessionId
    };

    if (
        learningRecords.length > 0 &&
        learningRecords[learningRecords.length - 1].completed === false &&
        learningRecords[learningRecords.length - 1].sessionId === currentSessionId
    ) {
        learningRecords[learningRecords.length - 1] = record;
    } else {
        learningRecords.push(record);
    }

    saveLearningRecords();
}

// 保存学习进度
function saveLearningProgress() {
    console.log('尝试保存学习进度:', { queueLength: learningQueue.length, currentIndex: currentIdiomIndex });
    if (learningQueue.length > 0 && currentIdiomIndex >= 0) {
        const progress = {
            currentIndex: currentIdiomIndex,
            feedbackCounts: feedbackCounts,
            learningQueue: learningQueue.map(i => i.text), // 只保存文本用于恢复
            libraryVersion: libraryVersion, // 保存当前词库版本
            timestamp: new Date().toISOString(),
            sessionId: currentSessionId
        };
        
        localStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(progress));
            console.log('成功保存学习进度:', progress.currentIndex);
    }
}

// 加载学习进度
function loadLearningProgress() {
    console.log('尝试加载学习进度');
    const savedProgress = localStorage.getItem(LEARNING_PROGRESS_KEY);
    if (savedProgress) {
        try {
            const parsedProgress = JSON.parse(savedProgress);
            
            // 检查是否启用次日清除进度功能
            if (appSettings.clearProgressNextDay) {
                const progressDate = new Date(parsedProgress.timestamp);
                const today = new Date();
                
                // 检查是否是同一天
                if (progressDate.toDateString() !== today.toDateString()) {
                    console.log('学习进度已过期（非当天），已清除');
                    clearLearningProgress();
                    return null;
                }
            }
            
            return parsedProgress;
        } catch (e) {
            console.error('Failed to parse learning progress:', e);
        }
    }
    return null;
}

// 清除学习进度
function clearLearningProgress() {
    localStorage.removeItem(LEARNING_PROGRESS_KEY);
}

// 更新知识点统计信息
function updateKnowledgeStats() {
    elements.allTagCount.textContent = idioms.length;
    const favoriteCount = idioms.filter(idiom => idiom.isFavorite).length;
    elements.favoriteCount.textContent = favoriteCount;
    
    const tagMap = {};
    idioms.forEach(idiom => {
        if (idiom.tags) {
            const tags = idiom.tags.split(',');
            tags.forEach(tag => {
                const cleanTag = tag.trim();
                if (cleanTag) {
                    tagMap[cleanTag] = (tagMap[cleanTag] || 0) + 1;
                }
            });
        }
    });
    
    let tagStatsHTML = '<button class="tag-stat all-tag' + (currentFilterTag === null ? ' active' : '') + '" data-tag="all">全部 (' + idioms.length + ')</button>';
    for (const [tag, count] of Object.entries(tagMap)) {
        const isActive = currentFilterTag === tag;
        tagStatsHTML += `<button class="tag-stat ${isActive ? 'active' : ''}" data-tag="${tag}">${tag}: ${count}</button>`;
    }
    
    elements.tagStats.innerHTML = tagStatsHTML;
}

// 渲染知识点列表
function renderIdiomList(filteredIdioms = null) {
    let idiomList = filteredIdioms || idioms;
    
    if (currentFilterTag) {
        idiomList = idiomList.filter(idiom => 
            idiom.tags && idiom.tags.split(',').map(t => t.trim()).includes(currentFilterTag)
        );
    }
    
    if (showFavoritesOnly) {
        idiomList = idiomList.filter(idiom => idiom.isFavorite);
    }
    
    if (currentSort) {
        const [field, direction] = currentSort.split('-');
        idiomList = [...idiomList].sort((a, b) => {
            let aValue = a[field];
            let bValue = b[field];
            
            if (field === 'priority' || field === 'studyCount') {
                return direction === 'asc' ? aValue - bValue : bValue - aValue;
            }
            
            if (direction === 'asc') {
                return aValue.localeCompare(bValue);
            } else {
                return bValue.localeCompare(aValue);
            }
        });
    }
    
    elements.idiomListBody.innerHTML = '';
    
    if (idiomList.length === 0) {
        elements.emptyState.style.display = 'block';
        elements.batchDeleteBtn.style.display = 'none';
        return;
    }
    
    elements.emptyState.style.display = 'none';
    
    const fragment = document.createDocumentFragment();
    
    idiomList.forEach((idiom) => {
        const row = document.createElement('tr');
        
        const priorityLevel = getPriorityLevel(idiom.priority);
        const priorityClass = `priority-${priorityLevel}`;
        const priorityText = getPriorityText(priorityLevel);
        
        const isChecked = selectedIds.includes(idiom.text);
        const safeIdiomText = idiom.text.replace(/"/g, '&quot;');
        const favoriteStar = idiom.isFavorite ? '<span class="favorite-star">★</span>' : '';
        
        row.innerHTML = `
            <td class="checkbox-cell"><input type="checkbox" class="checkbox-input idiom-checkbox" data-id="${safeIdiomText}" ${isChecked ? 'checked' : ''}></td>
            <td>${favoriteStar}${idiom.text}</td>
            <td>${idiom.meaning}</td>
            <td><span class="priority-badge ${priorityClass}">${priorityText} (${idiom.priority})</span></td>
            <td><span class="study-count-badge">${idiom.studyCount}</span></td>
            <td class="action-buttons">
                <button class="action-btn favorite-btn ${idiom.isFavorite ? 'active' : ''}" data-id="${safeIdiomText}">
                    <i>${idiom.isFavorite ? '★' : '☆'}</i>
                </button>
                <button class="action-btn view-btn" data-id="${safeIdiomText}"><i>🔍</i> 查看</button>
                <button class="action-btn edit-btn" data-id="${safeIdiomText}"><i>✏️</i> 编辑</button>
                <button class="action-btn reset-priority-btn" data-id="${safeIdiomText}"><i>♻️</i> 重置</button>
                <button class="action-btn delete-btn" data-id="${safeIdiomText}"><i>🗑️</i> 删除</button>
            </td>
        `;
        
        fragment.appendChild(row);
    });
    
    elements.idiomListBody.appendChild(fragment);
    updateSelectAllStatus();
    updateBatchDeleteButton();
    updateSortIcons();
}

// 获取优先级级别
function getPriorityLevel(priority) {
    if (priority < -10) return 'easy';
    if (priority >= -10 && priority < 0) return 'low';
    if (priority >= 0 && priority <= 5) return 'medium';
    if (priority > 5 && priority <= 10) return 'high';
    return 'critical';
}

// 获取优先级文本
function getPriorityText(level) {
    switch(level) {
        case 'easy': return '轻松';
        case 'low': return '低';
        case 'medium': return '中';
        case 'high': return '高';
        case 'critical': return '严重';
        default: return '未知';
    }
}

// 更新批量删除按钮状态
function updateBatchDeleteButton() {
    if (selectedIds.length > 0) {
        elements.batchDeleteBtn.style.display = 'block';
        const batchResetBtn = document.getElementById('batchResetBtn');
        if (batchResetBtn) batchResetBtn.style.display = 'block';
        elements.selectedCount.textContent = selectedIds.length;
        const selectedResetCount = document.getElementById('selectedResetCount');
        if (selectedResetCount) selectedResetCount.textContent = selectedIds.length;
    } else {
        elements.batchDeleteBtn.style.display = 'none';
        const batchResetBtn = document.getElementById('batchResetBtn');
        if (batchResetBtn) batchResetBtn.style.display = 'none';
    }
}

// 更新全选框状态
function updateSelectAllStatus() {
    const checkboxes = document.querySelectorAll('.idiom-checkbox');
    const checkedCount = document.querySelectorAll('.idiom-checkbox:checked').length;
    const totalCount = checkboxes.length;
    
    elements.selectAll.checked = totalCount > 0 && totalCount === checkedCount;
    elements.headerCheckbox.checked = elements.selectAll.checked;
}

// 设置事件监听器
function setupEventListeners() {
    // 视图切换
    elements.learningViewBtn.addEventListener('click', switchToLearningView);
    elements.statsViewBtn.addEventListener('click', switchToStatsView);
    elements.backToLibraryBtn.addEventListener('click', switchToLibraryView);
    
    // 搜索功能
    let searchTimeout;
    elements.searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = elements.searchInput.value.toLowerCase();
            if (!searchTerm) {
                renderIdiomList();
                return;
            }
            
            const filtered = idioms.filter(idiom => 
                idiom.text.toLowerCase().includes(searchTerm) || 
                idiom.meaning.toLowerCase().includes(searchTerm) ||
                (idiom.tags && idiom.tags.toLowerCase().includes(searchTerm)) ||
                (idiom.formula && idiom.formula.toLowerCase().includes(searchTerm)) ||
                (idiom.formulaCase && idiom.formulaCase.toLowerCase().includes(searchTerm)) ||
                (idiom.formulaNote && idiom.formulaNote.toLowerCase().includes(searchTerm)) ||
                (idiom.pinyin && idiom.pinyin.toLowerCase().includes(searchTerm))
            );
            renderIdiomList(filtered);
        }, 300);
    });
    
    // 添加知识点按钮
    document.getElementById('addIdiomBtn').addEventListener('click', () => {
        openAddModal();
    });
    
    document.getElementById('addFirstIdiomBtn').addEventListener('click', () => {
        openAddModal();
    });
    
    // 模态框按钮
    document.getElementById('cancelBtn').addEventListener('click', closeModal);
    document.getElementById('saveIdiomBtn').addEventListener('click', saveIdiom);
    elements.closeModalBtn.addEventListener('click', closeModal);
    elements.closeViewModalBtn.addEventListener('click', closeViewModal);
    elements.closeImportModalBtn.addEventListener('click', closeImportModal);
    elements.closeBatchDeleteModalBtn.addEventListener('click', closeBatchDeleteModal);
    elements.closeViewBtn.addEventListener('click', closeViewModal);
    
    // 导入相关按钮
    document.getElementById('importBtn').addEventListener('click', () => {
        elements.importModal.style.display = 'flex';
        elements.importDetails.style.display = 'none';
        elements.importDetails.innerHTML = '';
    });
    
    document.getElementById('cancelImportBtn').addEventListener('click', () => {
        elements.importModal.style.display = 'none';
        elements.importProgress.style.display = 'none';
    });
    
    document.getElementById('excelFile').addEventListener('change', (e) => {
        document.getElementById('confirmImportBtn').disabled = !e.target.files.length;
    });
    
    document.getElementById('confirmImportBtn').addEventListener('click', importExcel);
    
    // 下载模板
    document.getElementById('downloadTemplate').addEventListener('click', downloadTemplate);
    
    // 导出数据
    document.getElementById('exportBtn').addEventListener('click', exportData);
    
    // 学习界面按钮
    elements.showMeaningBtn.addEventListener('click', showMeaning);
    
    // 反馈按钮
    document.querySelectorAll('.feedback-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            handleFeedback(e.target.dataset.feedback);
        });
    });
    
    // 全选功能
    elements.selectAll.addEventListener('change', () => {
        const checkboxes = document.querySelectorAll('.idiom-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = elements.selectAll.checked;
            const id = checkbox.dataset.id;
            if (checkbox.checked && !selectedIds.includes(id)) {
                selectedIds.push(id);
            } else if (!checkbox.checked && selectedIds.includes(id)) {
                selectedIds = selectedIds.filter(selectedId => selectedId !== id);
            }
        });
        updateBatchDeleteButton();
    });
    
    // 表头复选框同步
    elements.headerCheckbox.addEventListener('change', () => {
        elements.selectAll.checked = elements.headerCheckbox.checked;
        elements.selectAll.dispatchEvent(new Event('change'));
    });
    
    // 批量删除相关
    elements.batchDeleteBtn.addEventListener('click', () => {
        elements.batchDeleteModal.style.display = 'flex';
    });

    // 批量重置
    const batchResetBtn = document.getElementById('batchResetBtn');
    if (batchResetBtn) {
        batchResetBtn.addEventListener('click', () => {
            const modal = document.getElementById('batchResetModal');
            const countSpan = document.getElementById('selectedResetCount');
            if (countSpan) countSpan.textContent = selectedIds.length;
            if (modal) modal.style.display = 'flex';
        });
    }

    const closeBatchResetModalBtn = document.getElementById('closeBatchResetModalBtn');
    const cancelBatchResetBtn = document.getElementById('cancelBatchResetBtn');
    const confirmBatchResetBtn = document.getElementById('confirmBatchResetBtn');
    if (closeBatchResetModalBtn) closeBatchResetModalBtn.addEventListener('click', () => {
        document.getElementById('batchResetModal').style.display = 'none';
    });
    if (cancelBatchResetBtn) cancelBatchResetBtn.addEventListener('click', () => {
        document.getElementById('batchResetModal').style.display = 'none';
    });
    if (confirmBatchResetBtn) confirmBatchResetBtn.addEventListener('click', () => {
        let updated = 0;
        selectedIds.forEach(id => {
            const i = idioms.find(it => it.text === id);
            if (i) { i.priority = 0; updated++; }
        });
        saveIdioms();
        renderIdiomList();
        showNotification('批量重置', `已重置 ${updated} 个知识点的优先级为 0`, 'success');
        document.getElementById('batchResetModal').style.display = 'none';
    });

    elements.confirmBatchDeleteBtn.addEventListener('click', batchDeleteIdioms);
    elements.cancelBatchDeleteBtn.addEventListener('click', () => {
        elements.batchDeleteModal.style.display = 'none';
    });
    
    // 清除学习记录
    elements.clearRecordsBtn.addEventListener('click', () => {
        if (confirm('确定要清除所有学习记录吗？此操作不可撤销。')) {
            learningRecords = [];
            saveLearningRecords();
            renderLearningRecords();
            showNotification('学习记录', '所有学习记录已清除', 'success');
        }
    });
    
    // 事件委托处理查看、编辑和删除按钮
    elements.idiomListBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-btn') || 
            e.target.parentElement.classList.contains('view-btn')) {
            const btn = e.target.classList.contains('view-btn') ? e.target : e.target.parentElement;
            const idiomText = btn.dataset.id;
            openViewModal(idiomText);
        } else if (e.target.classList.contains('edit-btn') || 
                   e.target.parentElement.classList.contains('edit-btn')) {
            const btn = e.target.classList.contains('edit-btn') ? e.target : e.target.parentElement;
            const idiomText = btn.dataset.id;
            openEditModal(idiomText);
        } else if (e.target.classList.contains('delete-btn') || 
                   e.target.parentElement.classList.contains('delete-btn')) {
            const btn = e.target.classList.contains('delete-btn') ? e.target : e.target.parentElement;
            const idiomText = btn.dataset.id;
            deleteIdiom(idiomText);
        } else if (e.target.classList.contains('favorite-btn') || 
                   e.target.parentElement.classList.contains('favorite-btn')) {
            const btn = e.target.classList.contains('favorite-btn') ? e.target : e.target.parentElement;
            const idiomText = btn.dataset.id;
            toggleFavorite(idiomText);
        } else if (e.target.classList.contains('reset-priority-btn') ||
                   e.target.parentElement.classList.contains('reset-priority-btn')) {
            const btn = e.target.classList.contains('reset-priority-btn') ? e.target : e.target.parentElement;
            const idiomText = btn.dataset.id;
            resetIdiomPriority(idiomText);
        }
    });
    
    // 事件委托处理知识点复选框
    elements.idiomListBody.addEventListener('change', (e) => {
        if (e.target.classList.contains('idiom-checkbox')) {
            const id = e.target.dataset.id;
            if (e.target.checked) {
                selectedIds.push(id);
            } else {
                selectedIds = selectedIds.filter(selectedId => selectedId !== id);
            }
            updateBatchDeleteButton();
            updateSelectAllStatus();
        }
    });
    
    // 排序功能 - 使用事件委托
    document.querySelectorAll('.sortable-header').forEach(header => {
        header.addEventListener('click', (e) => {
            clearTimeout(window.sortTimeout);
            window.sortTimeout = setTimeout(() => {
                const field = header.dataset.sort;
                if (!currentSort || !currentSort.startsWith(field)) {
                    currentSort = `${field}-asc`;
                } else {
                    currentSort = currentSort.endsWith('asc') ? `${field}-desc` : `${field}-asc`;
                }
                renderIdiomList();
                updateSortIcons();
            }, 150);
        });
    });
    
    // 学习完成后的操作按钮
    elements.restartLearningBtn.addEventListener('click', () => {
        elements.learningComplete.style.display = 'none';
        switchToLearningView();
    });
    
    elements.backToLibraryAfterLearning.addEventListener('click', () => {
        elements.learningComplete.style.display = 'none';
        switchToLibraryView();
    });
    
    // 收藏按钮点击事件（学习界面）
    elements.favoriteBtnStudy.addEventListener('click', () => {
        const idiom = learningQueue[currentIdiomIndex];
        if (!idiom) return;
        // 调用toggleFavorite后，会在函数内部更新按钮状态，不需要在这里再次调用
        toggleFavorite(idiom.text);
    });
    
    // 收藏筛选按钮
    elements.favoritesFilterBtn.addEventListener('click', () => {
        showFavoritesOnly = !showFavoritesOnly;
        if (showFavoritesOnly) {
            elements.favoritesFilterBtn.classList.add('active');
            showNotification('收藏筛选', '仅显示收藏的知识点', 'info');
        } else {
            elements.favoritesFilterBtn.classList.remove('active');
            showNotification('收藏筛选', '显示所有知识点', 'info');
        }
        renderIdiomList();
    });
    
    // 标签筛选按钮
    elements.tagStats.addEventListener('click', (e) => {
        if (e.target.classList.contains('tag-stat')) {
            if (e.target.classList.contains('all-tag')) {
                currentFilterTag = null;
            } else {
                const tag = e.target.dataset.tag;
                if (currentFilterTag === tag) {
                    currentFilterTag = null;
                } else {
                    currentFilterTag = tag;
                }
            }
            updateKnowledgeStats();
            renderIdiomList();
            if (currentFilterTag) {
                showNotification('标签筛选', `仅显示标签为 "${currentFilterTag}" 的知识点`, 'info');
            } else {
                showNotification('标签筛选', '显示所有知识点', 'info');
            }
            // 标签重置功能已移除
        }
    });
    
    // 恢复学习按钮
    elements.resumeBtn.addEventListener('click', resumeLearning);
    
    // 开始新学习按钮
    elements.newLearningBtn.addEventListener('click', startNewLearning);
    
    // 结束学习按钮
    // 结束学习按钮已禁用，不再绑定事件
// const finishLearningBtn = document.getElementById('finishLearningBtn');
// if (finishLearningBtn) finishLearningBtn.addEventListener('click', finishLearning);
    
    // 上一个按钮事件监听
    if (elements.previousBtn) {
        elements.previousBtn.addEventListener('click', showPreviousIdiom);
    }

    // 标签重置功能已移除
}

// 新增：设置面板事件绑定
function setupSettingsEventListeners() {
    const settingsBtn = document.getElementById('settingsBtn');
    const closeBtn = document.getElementById('closeSettingsModalBtn');
    const cancelBtn = document.getElementById('cancelSettingsBtn');
    const saveBtn = document.getElementById('saveSettingsBtn');
    const scopeAll = document.getElementById('studyScopeAll');
    const scopeTags = document.getElementById('studyScopeTags');
    const resetInSettingsBtn = document.getElementById('resetProgressInSettingsBtn');

    if (settingsBtn) settingsBtn.addEventListener('click', () => {
        buildSettingsTagList();
        openSettingsModal();
    });
    if (closeBtn) closeBtn.addEventListener('click', closeSettingsModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeSettingsModal);
    if (scopeAll) scopeAll.addEventListener('change', () => toggleSettingsTagList(false));
    if (scopeTags) scopeTags.addEventListener('change', () => toggleSettingsTagList(true));
    if (saveBtn) saveBtn.addEventListener('click', () => {
        // 检查updateSettingsFromForm的返回值，如果验证失败则不继续
        if (!updateSettingsFromForm()) {
            return; // 验证失败，阻止后续操作
        }
        saveSettings();
        applySettingsToUI();
        closeSettingsModal();
        showNotification('设置', '设置已保存', 'success');
    });
    if (resetInSettingsBtn) resetInSettingsBtn.addEventListener('click', () => {
        resetProgress();
    });
}

// 切换到题库管理视图
function switchToLibraryView() {
    // 总是尝试保存学习进度，无论学习是否进行中
    console.log('切换到词库视图，检查是否保存进度:', { queueLength: learningQueue.length, currentIndex: currentIdiomIndex, hasStarted: hasStartedLearning });
    if (learningQueue.length > 0 && currentIdiomIndex >= 0 && hasStartedLearning) {
        saveLearningProgress();
        console.log('保存进度后currentIdiomIndex:', currentIdiomIndex);
    }
    isLearningInProgress = false;
    learningSessionCompleted = false;
    // 不重置currentIdiomIndex，保持当前进度值
    
    elements.libraryView.classList.add('active');
    elements.learningView.classList.remove('active');
    elements.statsView.classList.remove('active');
    elements.searchContainer.classList.remove('hidden');
    elements.selectAllContainer.style.display = 'flex';
    elements.knowledgeStats.style.display = 'flex';
    renderIdiomList();
    showNotification('视图切换', '已切换到题库管理视图', 'info');
}

// 切换到学习模式视图
function switchToLearningView() {
    feedbackCounts = {
        know: 0,
        vague: 0,
        forget: 0
    };
    learningSessionCompleted = false;
    isLearningInProgress = true;
    
    // 隐藏学习界面，显示恢复提示
    elements.studySection.style.display = 'none';
    elements.learningComplete.style.display = 'none';
    
    // 清空之前可能保留的进度数据
    savedLearningProgress = null;
    
    // 尝试加载保存的学习进度
    const loadedProgress = loadLearningProgress();
    
    // 只有在没有保存进度时才重置索引
    if (!loadedProgress) {
        currentIdiomIndex = 0;
    }
    
    if (loadedProgress) {
            // 检查词库是否发生变化
            const libraryChanged = loadedProgress.libraryVersion !== libraryVersion;
            console.log('词库版本比较:', { saved: loadedProgress.libraryVersion, current: libraryVersion, changed: libraryChanged });
            
            if (libraryChanged) {
                // 词库已变化，清除旧进度
                clearLearningProgress();
                showNotification('词库变化', '检测到词库已更新，将开始新的学习', 'info');
                startNewLearning();
            } else {
                // 保存加载的进度到全局变量
                savedLearningProgress = loadedProgress;
                // 显示恢复提示
                elements.resumeLearningPrompt.style.display = 'block';
                
                // 显示恢复进度
                const resumeProgressBar = document.getElementById('resumeProgressBar');
                if (resumeProgressBar) {
                    if (savedLearningProgress && savedLearningProgress.learningQueue && savedLearningProgress.learningQueue.length > 0) {
                        const currentIndex = savedLearningProgress.currentIndex || 0;
                        const total = savedLearningProgress.learningQueue.length;
                        const completed = currentIndex + 1;
                          // 直接设置为100%宽度
                          const displayPercentage = 100;
                          // 获取认识、模糊、不认识的数量
                          const knowCount = savedLearningProgress.feedbackCounts?.know || 0;
                          const vagueCount = savedLearningProgress.feedbackCounts?.vague || 0;
                          const forgetCount = savedLearningProgress.feedbackCounts?.forget || 0;
                          resumeProgressBar.style.width = displayPercentage + '%';
                          resumeProgressBar.textContent = `进度：${completed}/${total}，认识${knowCount}个，模糊${vagueCount}个，不认识${forgetCount}个`;
                    } else {
                        // 即使没有保存进度，也显示一个默认的进度信息
                        resumeProgressBar.style.width = '0%';
                        resumeProgressBar.textContent = '进度：尚未开始学习';
                    }
                }
            }
        } else {
        // 没有保存的进度，直接开始新学习
        startNewLearning();
    }
    
    elements.libraryView.classList.remove('active');
    elements.learningView.classList.add('active');
    elements.statsView.classList.remove('active');
    elements.searchContainer.classList.add('hidden');
    elements.selectAllContainer.style.display = 'none';
    elements.knowledgeStats.style.display = 'none';
}

// 开始新的学习
function startNewLearning() {
    hasStartedLearning = false; // 重置学习状态
    elements.resumeLearningPrompt.style.display = 'none';
    elements.studySection.style.display = 'flex';
    
    // 新会话：生成新的会话ID，并清除旧的学习进度快照
    currentSessionId = generateSessionId();
    clearLearningProgress();
    
    // 重置savedLearningProgress变量，确保下次切换视图时重新加载
    savedLearningProgress = null;
    
    updateLearningQueue();
    currentIdiomIndex = 0;
    feedbackCounts = { know: 0, vague: 0, forget: 0 };
    
    if (learningQueue.length === 0) {
        showNotification('无法开始学习', '你的学习队列是空的，请先添加或导入更多知识点', 'error');
        return;
    }
    
    showCurrentIdiom();
    showNotification('学习模式', '已开始新的学习，请认真记忆知识点', 'info');
}

// 继续之前的学习
function resumeLearning() {
    console.log('resumeLearning函数开始执行');
    hasStartedLearning = false; // 重置学习状态
    elements.resumeLearningPrompt.style.display = 'none';
    elements.studySection.style.display = 'flex';
    
    // 恢复进度
    if (savedLearningProgress) {
        console.log('恢复学习进度:', { sessionId: savedLearningProgress.sessionId, currentIndex: savedLearningProgress.currentIndex, queueLength: savedLearningProgress.learningQueue.length });
        // 设置本次会话ID（兼容旧数据）
        currentSessionId = savedLearningProgress.sessionId || generateSessionId();

        // 兼容处理：如果最后一条未完成记录没有 sessionId，则归属到当前会话
        if (
            learningRecords.length > 0 &&
            learningRecords[learningRecords.length - 1].completed === false &&
            (learningRecords[learningRecords.length - 1].sessionId === undefined || learningRecords[learningRecords.length - 1].sessionId === null)
        ) {
            learningRecords[learningRecords.length - 1].sessionId = currentSessionId;
            saveLearningRecords();
        }
        
        // 根据保存的文本重建学习队列
        learningQueue = savedLearningProgress.learningQueue
            .map(text => {
                const found = idioms.find(i => i.text === text);
                if (!found) console.log('未找到知识点:', text);
                return found;
            })
            .filter(i => i); // 过滤掉可能已被删除的知识点
        console.log('重建后的学习队列长度:', learningQueue.length);
        
        currentIdiomIndex = savedLearningProgress.currentIndex || 0;
        console.log('恢复后的currentIdiomIndex:', currentIdiomIndex, 'savedLearningProgress.currentIndex:', savedLearningProgress.currentIndex);
        feedbackCounts = savedLearningProgress.feedbackCounts;
        
        if (learningQueue.length === 0) {
            console.log('学习队列为空，开始新学习');
            showNotification('无法恢复学习', '学习队列为空，将开始新的学习', 'error');
            startNewLearning();
            return;
        }
        
        // 确保索引在有效范围内
        if (currentIdiomIndex >= learningQueue.length) {
            console.log(`索引越界，调整前currentIdiomIndex: ${currentIdiomIndex}, 队列长度: ${learningQueue.length}`);
            currentIdiomIndex = learningQueue.length - 1;
            console.log(`调整后currentIdiomIndex: ${currentIdiomIndex}`);
        }
        
        console.log('索引检查后currentIdiomIndex:', currentIdiomIndex);
        showCurrentIdiom();
        console.log('显示当前知识点后currentIdiomIndex:', currentIdiomIndex);
        showNotification('学习恢复', `已恢复学习进度 (${currentIdiomIndex + 1}/${learningQueue.length})`, 'info');
        
        // 重置savedLearningProgress变量，确保下次切换视图时重新加载
        savedLearningProgress = null;
        console.log('resumeLearning函数结束时currentIdiomIndex:', currentIdiomIndex);
    } else {
        console.log('没有保存的进度，开始新学习');
        // 没有保存的进度，开始新学习
        startNewLearning();
    }
}

// 结束本次学习
function finishLearning() {
    // 添加二次确认
    if (!confirm('确定要结束本次学习吗？当前学习进度将被清除。')) {
        return;
    }
    
    // 清除学习进度，确保下次开始新学习
    clearLearningProgress();
    
    // 重置学习状态
    isLearningInProgress = false;
    learningSessionCompleted = false;
    currentIdiomIndex = 0;
    feedbackCounts = { know: 0, vague: 0, forget: 0 };
    
    // 切换到词库界面
    switchToLibraryView();
    
    showNotification('学习结束', '已结束本次学习，下次将开始新的学习', 'info');
}

// 切换到统计视图
function switchToStatsView() {
    if (isLearningInProgress && !learningSessionCompleted && hasStartedLearning) {
        saveLearningProgress();
    }
    isLearningInProgress = false;
    learningSessionCompleted = false;
    
    elements.libraryView.classList.remove('active');
    elements.learningView.classList.remove('active');
    elements.statsView.classList.add('active');
    elements.searchContainer.classList.add('hidden');
    elements.selectAllContainer.style.display = 'none';
    elements.knowledgeStats.style.display = 'none';
    showNotification('学习统计', '已切换到学习情况统计视图', 'info');
    updateStatsView();
}

// 显示当前知识点
function showCurrentIdiom() {
    if (currentIdiomIndex >= learningQueue.length) {
        if (learningQueue.length > 0) {
            const record = {
                timestamp: new Date().toISOString(),
                total: learningQueue.length,
                knowCount: feedbackCounts.know,
                vagueCount: feedbackCounts.vague,
                forgetCount: feedbackCounts.forget,
                completed: true,
                sessionId: currentSessionId
            };
            // 若存在当前会话的未完成记录，则用完成记录覆盖；否则追加
            if (
                learningRecords.length > 0 &&
                learningRecords[learningRecords.length - 1].completed === false &&
                learningRecords[learningRecords.length - 1].sessionId === currentSessionId
            ) {
                learningRecords[learningRecords.length - 1] = record;
            } else {
                learningRecords.push(record);
            }
            saveLearningRecords();
            learningSessionCompleted = true;
            isLearningInProgress = false;
            elements.learningComplete.style.display = 'block';
            elements.idiomHeader.style.display = 'none';
            elements.currentIdiom.style.display = 'none';
            elements.showMeaningBtn.style.display = 'none';
            elements.meaningDisplay.style.display = 'none';
            elements.feedbackButtons.style.display = 'none';
            elements.previousBtn.style.display = 'none';
            elements.knowCount.textContent = feedbackCounts.know;
            elements.vagueCount.textContent = feedbackCounts.vague;
            elements.forgetCount.textContent = feedbackCounts.forget;
            showNotification('学习完成', `本轮学习完成！认识:${feedbackCounts.know} 模糊:${feedbackCounts.vague} 不认识:${feedbackCounts.forget}`, 'success');
            feedbackCounts = { know: 0, vague: 0, forget: 0 };
            currentIdiomIndex = 0;
            learningQueue = [];
            
            // 清除学习进度
            clearLearningProgress();
        }
        return;
    }
    
    elements.idiomHeader.style.display = 'flex';
    elements.currentIdiom.style.display = 'block';
    elements.learningComplete.style.display = 'none';
    
    // 控制上一个按钮的显示
    if (elements.previousBtn) {
        elements.previousBtn.style.display = currentIdiomIndex > 0 ? 'block' : 'none';
    }
    
    // 移除可能存在的返回按钮
    const returnBtn = document.getElementById('returnToCurrentBtn');
    if (returnBtn && returnBtn.parentNode) {
        returnBtn.parentNode.removeChild(returnBtn);
    }
    
    const idiom = learningQueue[currentIdiomIndex];
    elements.currentIdiom.textContent = idiom.text;
    elements.meaningDisplay.style.display = 'none';
    elements.feedbackButtons.style.display = 'none';
    elements.showMeaningBtn.style.display = 'block';
    elements.learningComplete.style.display = 'none';
    
    elements.meaningText.innerHTML = idiom.meaning || '';
    elements.pinyinText.textContent = idiom.pinyin || '';
    elements.exampleText.textContent = idiom.example || '';
    elements.usageText.textContent = idiom.usage || '';
    elements.contextText.textContent = idiom.context || '';
    elements.fieldText.textContent = idiom.field || '';
    elements.tagsText.textContent = idiom.tags || '';
    elements.notesText.textContent = idiom.notes || '';
    
    const priorityLevel = getPriorityLevel(idiom.priority);
    const priorityClass = `priority-${priorityLevel}`;
    const priorityText = getPriorityText(priorityLevel);
    
    elements.statsText.innerHTML = `
        优先级: <span class="priority-badge ${priorityClass}">${priorityText} (${idiom.priority})</span> | 
        学习次数: <span class="study-count-badge">${idiom.studyCount}</span>
    `;
    
    if (idiom.formula) {
        elements.formulaDisplay.innerHTML = '\\[' + idiom.formula + '\\]';
        elements.formulaItem.style.display = 'block';
    } else {
        elements.formulaItem.style.display = 'none';
    }
    
    if (idiom.formulaCase) {
        elements.formulaCase.innerHTML = idiom.formulaCase || '';
        elements.formulaCaseItem.style.display = 'block';
    } else {
        elements.formulaCaseItem.style.display = 'none';
    }
    
    if (idiom.formulaNote) {
        elements.formulaNote.innerHTML = idiom.formulaNote || '';
        elements.formulaNoteItem.style.display = 'block';
    } else {
        elements.formulaNoteItem.style.display = 'none';
    }
    
    if (idiom.isFavorite && idiom.favoriteReason) {
        elements.favoriteReasonText.textContent = idiom.favoriteReason || '';
        elements.favoriteReasonItem.style.display = 'block';
    } else {
        elements.favoriteReasonItem.style.display = 'none';
    }
    
    elements.meaningItem.style.display = idiom.meaning ? 'block' : 'none';
    elements.pinyinItem.style.display = idiom.pinyin ? 'block' : 'none';
    elements.exampleItem.style.display = idiom.example ? 'block' : 'none';
    elements.usageItem.style.display = idiom.usage ? 'block' : 'none';
    elements.contextItem.style.display = idiom.context ? 'block' : 'none';
    elements.fieldItem.style.display = idiom.field ? 'block' : 'none';
    elements.tagsItem.style.display = idiom.tags ? 'block' : 'none';
    elements.notesItem.style.display = idiom.notes ? 'block' : 'none';
    elements.statsItem.style.display = 'block';
    
    elements.progressBar.textContent = `进度：${currentIdiomIndex + 1}/${learningQueue.length}`;
    updateStudyFavoriteButton(idiom);
    
    // 使用通用的typesetMathJax函数处理MathJax排版，确保兼容性
    typesetMathJax([
        elements.meaningText, 
        elements.formulaDisplay,
        elements.formulaCase,
        elements.formulaNote
    ]);
}

// 更新学习界面的收藏按钮状态
function updateStudyFavoriteButton(idiom) {
    if (idiom.isFavorite) {
        elements.favoriteIcon.textContent = '★';
        elements.favoriteBtnStudy.classList.add('active');
    } else {
        elements.favoriteIcon.textContent = '☆';
        elements.favoriteBtnStudy.classList.remove('active');
    }
}

// 显示释义
// 显示上一个知识点（查看模式）
function showPreviousIdiom() {
    if (currentIdiomIndex > 0) {
        // 保存当前索引
        const tempIndex = currentIdiomIndex;
        currentIdiomIndex--;
        
        // 显示上一个知识点
        const idiom = learningQueue[currentIdiomIndex];
        elements.currentIdiom.textContent = idiom.text;
        
        // 直接显示释义，隐藏反馈按钮（查看模式）
        elements.meaningDisplay.style.display = 'block';
        elements.feedbackButtons.style.display = 'none';
        elements.showMeaningBtn.style.display = 'none';
        
        // 完整更新知识点的所有内容
        elements.meaningText.innerHTML = idiom.meaning || '';
        elements.pinyinText.textContent = idiom.pinyin || '';
        elements.exampleText.textContent = idiom.example || '';
        elements.usageText.textContent = idiom.usage || '';
        elements.contextText.textContent = idiom.context || '';
        elements.fieldText.textContent = idiom.field || '';
        elements.tagsText.textContent = idiom.tags || '';
        elements.notesText.textContent = idiom.notes || '';
        
        const priorityLevel = getPriorityLevel(idiom.priority);
        const priorityClass = `priority-${priorityLevel}`;
        const priorityText = getPriorityText(priorityLevel);
        
        elements.statsText.innerHTML = `
            优先级: <span class="priority-badge ${priorityClass}">${priorityText} (${idiom.priority})</span> | 
            学习次数: <span class="study-count-badge">${idiom.studyCount}</span>
        `;
        
        if (idiom.formula) {
            elements.formulaDisplay.innerHTML = '\\[' + idiom.formula + '\\]';
            elements.formulaItem.style.display = 'block';
        } else {
            elements.formulaItem.style.display = 'none';
        }
        
        if (idiom.formulaCase) {
            elements.formulaCase.innerHTML = idiom.formulaCase || '';
            elements.formulaCaseItem.style.display = 'block';
        } else {
            elements.formulaCaseItem.style.display = 'none';
        }
        
        if (idiom.formulaNote) {
            elements.formulaNote.innerHTML = idiom.formulaNote || '';
            elements.formulaNoteItem.style.display = 'block';
        } else {
            elements.formulaNoteItem.style.display = 'none';
        }
        
        if (idiom.isFavorite && idiom.favoriteReason) {
            elements.favoriteReasonText.textContent = idiom.favoriteReason || '';
            elements.favoriteReasonItem.style.display = 'block';
        } else {
            elements.favoriteReasonItem.style.display = 'none';
        }
        
        elements.meaningItem.style.display = idiom.meaning ? 'block' : 'none';
        elements.pinyinItem.style.display = idiom.pinyin ? 'block' : 'none';
        elements.exampleItem.style.display = idiom.example ? 'block' : 'none';
        elements.usageItem.style.display = idiom.usage ? 'block' : 'none';
        elements.contextItem.style.display = idiom.context ? 'block' : 'none';
        elements.fieldItem.style.display = idiom.field ? 'block' : 'none';
        elements.tagsItem.style.display = idiom.tags ? 'block' : 'none';
        elements.notesItem.style.display = idiom.notes ? 'block' : 'none';
        elements.statsItem.style.display = 'block';
        
        updateStudyFavoriteButton(idiom);
        
        // 添加返回按钮
        let returnBtn = document.getElementById('returnToCurrentBtn');
        if (!returnBtn) {
            returnBtn = document.createElement('button');
            returnBtn.id = 'returnToCurrentBtn';
            returnBtn.className = 'btn btn-primary mt-2';
            returnBtn.textContent = '返回继续学习';
            returnBtn.addEventListener('click', () => {
                currentIdiomIndex = tempIndex;
                showCurrentIdiom();
                // 移除返回按钮
                if (returnBtn.parentNode) {
                    returnBtn.parentNode.removeChild(returnBtn);
                }
            });
            // 将返回按钮添加到合适的位置
            if (elements.meaningDisplay) {
                elements.meaningDisplay.appendChild(returnBtn);
            }
        }
        
        // 更新提示信息
        showNotification('查看模式', '点击"返回继续学习"回到当前学习位置', 'info');
        
        // 渲染数学公式
        typesetMathJax([
            elements.meaningText, 
            elements.formulaDisplay,
            elements.formulaCase,
            elements.formulaNote
        ]);
    }
}

// 通用MathJax渲染函数，添加兼容性处理
function typesetMathJax(elements) {
    if (!window.MathJax) {
        console.warn('MathJax is not available');
        return Promise.resolve();
    }
    
    // 等待MathJax加载完成
    if (!MathJax.isReady) {
        return new Promise((resolve, reject) => {
            const checkReady = () => {
                if (MathJax.isReady) {
                    resolve();
                } else {
                    setTimeout(checkReady, 100);
                }
            };
            checkReady();
        }).then(() => typesetMathJax(elements));
    }
    
    // 使用typesetPromise或回退到typeset
    if (MathJax.typesetPromise) {
        return MathJax.typesetPromise(elements).catch((err) => {
            console.error('MathJax typeset error:', err);
        });
    } else {
        // 回退到旧版本的typeset方法
        try {
            MathJax.typeset(elements);
            return Promise.resolve();
        } catch (err) {
            console.error('MathJax typeset error:', err);
            return Promise.resolve();
        }
    }
}

function showMeaning() {
    elements.meaningDisplay.style.display = 'block';
    elements.feedbackButtons.style.display = 'flex';
    elements.showMeaningBtn.style.display = 'none';
    elements.meaningDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // 移除可能存在的返回按钮
    const returnBtn = document.getElementById('returnToCurrentBtn');
    if (returnBtn && returnBtn.parentNode) {
        returnBtn.parentNode.removeChild(returnBtn);
    }
}

// 处理用户反馈
function handleFeedback(feedback) {
    hasStartedLearning = true; // 用户已进行学习操作
    const idiom = learningQueue[currentIdiomIndex];
    feedbackCounts[feedback]++;
    idiom.studyCount = (idiom.studyCount || 0) + 1;
    
    const w = appSettings.priorityWeights;
    switch (feedback) {
        case 'know': idiom.priority += (typeof w.know === 'number' ? w.know : -2); break;
        case 'vague': idiom.priority += (typeof w.vague === 'number' ? w.vague : 1); break;
        case 'forget': idiom.priority += (typeof w.forget === 'number' ? w.forget : 3); break;
    }
    
    const originalIndex = idioms.findIndex(i => i.text === idiom.text);
    if (originalIndex !== -1) {
        idioms[originalIndex] = idiom;
    }
    
    saveIdioms(false); // 用户学习反馈不更新词库版本
    currentIdiomIndex++;
    
    // 保存学习进度（包含本次会话ID）
    saveLearningProgress();
    
    // 更新/覆盖当前会话的未完成学习记录
    updateInProgressLearningRecord();
    
    showCurrentIdiom();
}

// 收藏/取消收藏知识点
function toggleFavorite(idiomText) {
    const idiom = idioms.find(i => i.text === idiomText);
    if (!idiom) return;
    
    if (idiom.isFavorite) {
        idiom.isFavorite = false;
        idiom.favoriteReason = "";
        showNotification('已取消收藏', '知识点"' + idiomText + '"已从收藏中移除', 'info');
        
        saveIdioms();
        renderIdiomList();
        
        // 无论是否在学习视图，都更新学习状态为已开始，确保取消收藏后切换视图能保存进度
        hasStartedLearning = true;
        
        // 如果在学习视图并且当前显示的是这个知识点，更新收藏按钮状态
        if (elements.learningView.classList.contains('active') && 
            learningQueue[currentIdiomIndex] && 
            learningQueue[currentIdiomIndex].text === idiomText) {
            updateStudyFavoriteButton(idiom);
        }
    } else {
        // 使用自定义模态框替代prompt，收藏确认后的操作在模态框的确认按钮事件中处理
        showFavoriteReasonModal(idiom, idiomText);
    }
}

// 显示收藏原因模态框
function showFavoriteReasonModal(idiom, idiomText) {
    // 检查是否已存在模态框，如果有则移除
    let modal = document.getElementById('favorite-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
    
    // 创建模态框容器
    modal = document.createElement('div');
    modal.id = 'favorite-modal';
    modal.className = 'modal';
    modal.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 1000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;";
    
    // 创建模态框内容
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.cssText = "background-color: white; padding: 20px; border-radius: 8px; width: 90%; max-width: 400px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);";
    
    // 创建标题
    const title = document.createElement('h3');
    title.textContent = '收藏知识点';
    title.style.marginTop = '0';
    title.style.marginBottom = '15px';
    
    // 创建描述
    const description = document.createElement('p');
    description.textContent = '请输入收藏原因（可选）：';
    description.style.marginBottom = '15px';
    
    // 创建输入框
    const input = document.createElement('textarea');
    input.placeholder = '输入收藏原因...';
    input.style.width = '100%';
    input.style.height = '80px';
    input.style.padding = '8px';
    input.style.boxSizing = 'border-box';
    input.style.border = '1px solid #ddd';
    input.style.borderRadius = '4px';
    input.style.resize = 'vertical';
    input.style.marginBottom = '15px';
    
    // 创建按钮容器
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'flex-end';
    buttonContainer.style.gap = '10px';
    
    // 创建取消按钮
    const cancelButton = document.createElement('button');
    cancelButton.textContent = '取消';
    cancelButton.style.padding = '8px 16px';
    cancelButton.style.border = '1px solid #ddd';
    cancelButton.style.borderRadius = '4px';
    cancelButton.style.backgroundColor = '#f8f9fa';
    cancelButton.style.cursor = 'pointer';
    cancelButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // 创建确认按钮
    const confirmButton = document.createElement('button');
    confirmButton.textContent = '确认收藏';
    confirmButton.style.padding = '8px 16px';
    confirmButton.style.border = 'none';
    confirmButton.style.borderRadius = '4px';
    confirmButton.style.backgroundColor = '#28a745';
    confirmButton.style.color = 'white';
    confirmButton.style.cursor = 'pointer';
    confirmButton.addEventListener('click', () => {
        const reason = input.value;
        idiom.isFavorite = true;
        idiom.favoriteReason = reason || "";
        showNotification('已收藏', '知识点"' + idiomText + '"已添加到收藏', 'success');
        
        saveIdioms();
        renderIdiomList();
        
        // 无论是否在学习视图，都更新学习状态为已开始，确保收藏后切换视图能保存进度
        hasStartedLearning = true;
        
        // 如果在学习视图并且当前显示的是这个知识点，更新收藏按钮状态
        if (elements.learningView.classList.contains('active') && 
            learningQueue[currentIdiomIndex] && 
            learningQueue[currentIdiomIndex].text === idiomText) {
            updateStudyFavoriteButton(idiom);
        }
        
        document.body.removeChild(modal);
    });
    
    // 组装模态框
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(confirmButton);
    modalContent.appendChild(title);
    modalContent.appendChild(description);
    modalContent.appendChild(input);
    modalContent.appendChild(buttonContainer);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // 自动聚焦输入框
    input.focus();
}

// 更新学习队列
function updateLearningQueue() {
    let source = [...idioms];
    if (appSettings.studyScope.mode === 'tags') {
        const sel = new Set(appSettings.studyScope.tags);
        source = source.filter(i => {
            if (!i.tags || sel.size === 0) return false;
            const tags = i.tags.split(',').map(t => t.trim());
            return tags.some(t => sel.has(t));
        });
    }
    learningQueue = source;
    learningQueue.sort((a, b) => {
        if (b.priority !== a.priority) {
            return b.priority - a.priority;
        }
        return Math.random() - 0.5;
    });
}

// 更新统计视图
function updateStatsView() {
    elements.totalIdioms.textContent = idioms.length;
    const priorityCounts = {
        critical: 0,
        high: 0,
        medium: 0,
        low: 0,
        easy: 0
    };
    
    idioms.forEach(idiom => {
        const level = getPriorityLevel(idiom.priority);
        priorityCounts[level]++;
    });
    
    elements.masteredIdioms.textContent = priorityCounts.easy + priorityCounts.low;
    elements.needReviewIdioms.textContent = priorityCounts.medium;
    elements.difficultIdioms.textContent = priorityCounts.high + priorityCounts.critical;
    
    if (priorityCounts.critical > 0) {
        elements.learningSuggestion.textContent = '您有多个优先级为"严重"的知识点，建议优先复习这些知识点。';
    } else if (priorityCounts.high > 0) {
        elements.learningSuggestion.textContent = '您有一些优先级为"高"的知识点，建议在下次学习时重点关注。';
    } else if (priorityCounts.medium > 0) {
        elements.learningSuggestion.textContent = '您的学习情况良好，建议定期复习优先级为"中"的知识点以巩固记忆。';
    } else {
        elements.learningSuggestion.textContent = '恭喜！您已掌握所有知识点，可以添加新知识点或重置进度重新学习。';
    }
    
    elements.priorityDistribution.innerHTML = `
        <div class="priority-item">
            <div class="priority-color" style="background-color: #fce8e6;"></div>
            <div class="priority-label">严重 (优先级 > 10)</div>
            <div class="priority-count">${priorityCounts.critical}</div>
        </div>
        <div class="priority-item">
            <div class="priority-color" style="background-color: #fef7e0;"></div>
            <div class="priority-label">高 (5 < 优先级 ≤ 10)</div>
            <div class="priority-count">${priorityCounts.high}</div>
        </div>
        <div class="priority-item">
            <div class="priority-color" style="background-color: #e6f4ea;"></div>
            <div class="priority-label">中 (0 ≤ 优先级 ≤ 5)</div>
            <div class="priority-count">${priorityCounts.medium}</div>
        </div>
        <div class="priority-item">
            <div class="priority-color" style="background-color: #e6f7ff;"></div>
            <div class="priority-label">低 (-10 ≤ 优先级 < 0)</div>
            <div class="priority-count">${priorityCounts.low}</div>
        </div>
        <div class="priority-item">
            <div class="priority-color" style="background-color: #f0f8ff;"></div>
            <div class="priority-label">轻松 (优先级 < -10)</div>
            <div class="priority-count">${priorityCounts.easy}</div>
        </div>
    `;
    renderLearningRecords();
    renderStudyCountStats();
    
    if (priorityChart) priorityChart.destroy();
    if (memoryLevelChart) memoryLevelChart.destroy();
    if (priorityDistributionChart) priorityDistributionChart.destroy();
    if (learningRecordsChart) learningRecordsChart.destroy();
    if (studyCountDistributionChart) studyCountDistributionChart.destroy();
    if (priorityZeroStudyChart) priorityZeroStudyChart.destroy();
    if (tagDistributionChart) tagDistributionChart.destroy();
    
    // 创建优先级分布饼图
    const priorityCtx = document.getElementById('priorityChart').getContext('2d');
    priorityChart = new Chart(priorityCtx, {
        type: 'pie',
        data: {
            labels: ['严重', '高', '中', '低', '轻松'],
            datasets: [{
                data: [
                    priorityCounts.critical, 
                    priorityCounts.high, 
                    priorityCounts.medium, 
                    priorityCounts.low, 
                    priorityCounts.easy
                ],
                backgroundColor: [
                    '#fce8e6',
                    '#fef7e0',
                    '#e6f4ea',
                    '#e6f7ff',
                    '#f0f8ff'
                ],
                borderColor: [
                    '#db4437',
                    '#f57c00',
                    '#0f9d58',
                    '#0288d1',
                    '#4b6cb7'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: '知识点优先级分布'
                }
            }
        }
    });
    
    // 创建记忆水平柱状图
    const memoryCtx = document.getElementById('memoryLevelChart').getContext('2d');
    memoryLevelChart = new Chart(memoryCtx, {
        type: 'bar',
        data: {
            labels: ['轻松', '低', '中', '高', '严重'],
            datasets: [{
                label: '知识点数量',
                data: [
                    priorityCounts.easy,
                    priorityCounts.low,
                    priorityCounts.medium,
                    priorityCounts.high,
                    priorityCounts.critical
                ],
                backgroundColor: [
                    '#4b6cb7',
                    '#0288d1',
                    '#0f9d58',
                    '#f57c00',
                    '#db4437'
                ],
                borderColor: [
                    '#182848',
                    '#0069a0',
                    '#0b7a43',
                    '#cc5500',
                    '#a52714'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: '知识点记忆水平分布'
                }
            }
        }
    });
    
    // 创建优先级分布折线图
    const priorityDistributionCtx = document.getElementById('priorityDistributionChart').getContext('2d');
    const priorityMap = {};
    idioms.forEach(idiom => {
        const priority = idiom.priority;
        priorityMap[priority] = (priorityMap[priority] || 0) + 1;
    });
    const priorities = Object.keys(priorityMap).map(Number).sort((a, b) => a - b);
    const counts = priorities.map(p => priorityMap[p]);
    
    priorityDistributionChart = new Chart(priorityDistributionCtx, {
        type: 'line',
        data: {
            labels: priorities,
            datasets: [{
                label: '知识点数量',
                data: counts,
                borderColor: '#4b6cb7',
                backgroundColor: 'rgba(75, 108, 183, 0.1)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '知识点优先级分布（横坐标：优先级，纵坐标：知识点数量）'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1,
                    precision: 0,
                    maxTicksLimit: 15,
                    title: {
                        display: true,
                        text: '知识点数量'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '优先级'
                    }
                }
            }
        }
    });
    
    // 创建学习次数分布折线图
    const studyCountCtx = document.getElementById('studyCountDistributionChart').getContext('2d');
    const studyCountMap = {};
    idioms.forEach(idiom => {
        const studyCount = idiom.studyCount || 0;
        studyCountMap[studyCount] = (studyCountMap[studyCount] || 0) + 1;
    });
    const studyCounts = Object.keys(studyCountMap).map(Number).sort((a, b) => a - b);
    const studyCountData = studyCounts.map(count => studyCountMap[count]);
    
    studyCountDistributionChart = new Chart(studyCountCtx, {
        type: 'line',
        data: {
            labels: studyCounts,
            datasets: [{
                label: '知识点数量',
                data: studyCountData,
                borderColor: '#0f9d58',
                backgroundColor: 'rgba(15, 157, 88, 0.1)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '学习次数分布（横坐标：学习次数，纵坐标：知识点数量）'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1,
                    precision: 0,
                    maxTicksLimit: 15,
                    title: {
                        display: true,
                        text: '知识点数量'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '学习次数'
                    },
                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    });
    
    // 创建默认优先级（3）的知识点学习情况饼图
    const priorityZeroCtx = document.getElementById('priorityZeroStudyChart').getContext('2d');
    const priorityZeroIdioms = idioms.filter(idiom => idiom.priority === appSettings.defaultPriority);
    const studiedCount = priorityZeroIdioms.filter(idiom => (idiom.studyCount || 0) > 0).length;
    const unstudiedCount = priorityZeroIdioms.length - studiedCount;
    
    // 检查是否有默认优先级的知识点
    if (priorityZeroIdioms.length === 0) {
        // 如果没有默认优先级的知识点，显示提示信息
        priorityZeroStudyChart = new Chart(priorityZeroCtx, {
            type: 'pie',
            data: {
                labels: ['暂无数据'],
                datasets: [{
                    data: [1],
                    backgroundColor: ['#e0e0e0'],
                    borderColor: ['#bdbdbd'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: '暂无优先级为' + appSettings.defaultPriority + '的知识点'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return '您当前没有优先级为' + appSettings.defaultPriority + '的知识点';
                            }
                        }
                    }
                }
            }
        });
    } else {
        // 正常显示学习情况饼图
        priorityZeroStudyChart = new Chart(priorityZeroCtx, {
            type: 'pie',
            data: {
                labels: ['已学习', '未学习'],
                datasets: [{
                    data: [studiedCount, unstudiedCount],
                    backgroundColor: [
                        '#0f9d58',
                        '#db4437'
                    ],
                    borderColor: [
                        '#0b7a43',
                        '#a52714'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: '优先级为' + appSettings.defaultPriority + '的知识点学习情况'
                    }
                }
            }
        });
    }

    // 创建标签分布统计柱状图
    const tagDistributionCtx = document.getElementById('tagDistributionChart').getContext('2d');
    const tagMap = {};
    idioms.forEach(idiom => {
        const tags = idiom.tags ? idiom.tags.split(',').map(tag => tag.trim()) : [];
        tags.forEach(tag => {
            if (tag) {
                tagMap[tag] = (tagMap[tag] || 0) + 1;
            }
        });
    });
    // 获取前10个最常用的标签
    const sortedTags = Object.entries(tagMap)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10);
    const tagLabels = sortedTags.map(([tag]) => tag);
    const tagData = sortedTags.map(([,count]) => count);
    
    tagDistributionChart = new Chart(tagDistributionCtx, {
        type: 'bar',
        data: {
            labels: tagLabels,
            datasets: [{
                label: '知识点数量',
                data: tagData,
                backgroundColor: '#6366F1',
                borderColor: '#4338CA',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1,
                    precision: 0,
                    maxTicksLimit: 15,
                    title: {
                        display: true,
                        text: '知识点数量'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '标签'
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '标签分布统计（前10个最常用标签）'
                }
            }
        }
    });

    // 创建学习记录图表
    if (learningRecords.length > 0) {
        const recordsCtx = elements.learningRecordsChart.getContext('2d');
        const recentRecords = learningRecords.slice(-10);
        
        learningRecordsChart = new Chart(recordsCtx, {
            type: 'line',
            data: {
                labels: recentRecords.map(record => {
                    const date = new Date(record.timestamp);
                    return `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
                }),
                datasets: [
                    {
                        label: '认识数量',
                        data: recentRecords.map(record => record.knowCount),
                        borderColor: '#0f9d58',
                        backgroundColor: 'rgba(15, 157, 88, 0.1)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: '模糊数量',
                        data: recentRecords.map(record => record.vagueCount),
                        borderColor: '#f57c00',
                        backgroundColor: 'rgba(245, 124, 0, 0.1)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: '不认识数量',
                        data: recentRecords.map(record => record.forgetCount),
                        borderColor: '#db4437',
                        backgroundColor: 'rgba(219, 68, 55, 0.1)',
                        tension: 0.3,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: '最近学习情况趋势'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '数量'
                        }
                    }
                }
            }
        });
    }
}

// 渲染学习记录
function renderLearningRecords() {
    if (learningRecords.length === 0) {
        elements.learningRecordsContainer.innerHTML = `
            <div style="text-align: center; padding: 20px; color: #718096;">
                <div style="font-size: 48px; margin-bottom: 15px;">📊</div>
                <p>暂无学习记录</p>
                <p>开始学习后会记录您的学习情况</p>
            </div>
        `;
        return;
    }
    
    const sortedRecords = [...learningRecords].reverse();
    
    let recordsHTML = `
        <table class="records-table">
            <thead>
                <tr>
                    <th>学习时间</th>
                    <th>学习知识点数</th>
                    <th>认识</th>
                    <th>模糊</th>
                    <th>不认识</th>
                    <th>完成状态</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    sortedRecords.forEach(record => {
        const date = new Date(record.timestamp);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        
        recordsHTML += `
            <tr>
                <td>${formattedDate}</td>
                <td>${record.total}</td>
                <td class="record-know">${record.knowCount}</td>
                <td class="record-vague">${record.vagueCount}</td>
                <td class="record-forget">${record.forgetCount}</td>
                <td>${record.completed ? '已完成' : '未完成'}</td>
            </tr>
        `;
    });
    
    recordsHTML += `
            </tbody>
        </table>
    `;
    
    elements.learningRecordsContainer.innerHTML = recordsHTML;
}

// 显示通知
function showNotification(title, message, type) {
    elements.notification.textContent = `${title}: ${message}`;
    elements.notification.className = `notification ${type}`;
    elements.notification.classList.add('show');
    
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 3000);
}

// 更新排序图标
function updateSortIcons() {
    document.querySelectorAll('.sortable-header .sort-icon').forEach(icon => {
        icon.textContent = '';
    });
    
    if (!currentSort) return;
    
    const [field, direction] = currentSort.split('-');
    const header = document.querySelector(`.sortable-header[data-sort="${field}"]`);
    
    if (header) {
        const icon = header.querySelector('.sort-icon');
        icon.textContent = direction === 'asc' ? '↑' : '↓';
    }
}

// 打开添加模态框
function openAddModal() {
    currentEditingIdiomText = null;
    document.getElementById('modalTitle').textContent = '添加知识点';
    document.getElementById('idiomText').value = '';
    document.getElementById('idiomText').disabled = false;
    document.getElementById('idiomPinyin').value = '';
    document.getElementById('idiomMeaning').value = '';
    document.getElementById('idiomExample').value = '';
    document.getElementById('idiomUsage').value = '';
    document.getElementById('idiomContext').value = '';
    document.getElementById('idiomField').value = '';
    document.getElementById('idiomTags').value = '';
    document.getElementById('idiomNotes').value = '';
    elements.idiomFormula.value = '';
    elements.idiomFormulaCase.value = '';
    elements.idiomFormulaNote.value = '';
    
    elements.idiomModal.style.display = 'flex';
}

// 打开编辑模态框
function openEditModal(idiomText) {
    currentEditingIdiomText = idiomText;
    const idiom = idioms.find(i => i.text === idiomText);
    if (!idiom) return;
    
    document.getElementById('modalTitle').textContent = '编辑知识点';
    document.getElementById('idiomText').value = idiom.text;
    document.getElementById('idiomText').disabled = true;
    document.getElementById('idiomPinyin').value = idiom.pinyin || '';
    document.getElementById('idiomMeaning').value = idiom.meaning || '';
    document.getElementById('idiomExample').value = idiom.example || '';
    document.getElementById('idiomUsage').value = idiom.usage || '';
    document.getElementById('idiomContext').value = idiom.context || '';
    document.getElementById('idiomField').value = idiom.field || '';
    document.getElementById('idiomTags').value = idiom.tags || '';
    document.getElementById('idiomNotes').value = idiom.notes || '';
    elements.idiomFormula.value = idiom.formula || '';
    elements.idiomFormulaCase.value = idiom.formulaCase || '';
    elements.idiomFormulaNote.value = idiom.formulaNote || '';
    
    elements.idiomModal.style.display = 'flex';
}

// 打开查看模态框
function openViewModal(idiomText) {
    const idiom = idioms.find(i => i.text === idiomText);
    if (!idiom) return;
    
    document.getElementById('viewModalTitle').textContent = `知识点`;
    elements.viewText.textContent = idiom.text;
    elements.viewPinyin.textContent = idiom.pinyin || '';
    elements.viewMeaning.innerHTML = idiom.meaning || '';
    elements.viewExample.textContent = idiom.example || '';
    elements.viewUsage.textContent = idiom.usage || '';
    elements.viewContext.textContent = idiom.context || '';
    elements.viewField.textContent = idiom.field || '';
    elements.viewTags.textContent = idiom.tags || '';
    elements.viewNotes.textContent = idiom.notes || '';

    // 新增：空属性块隐藏（除释义外）
    if (elements.viewPinyin && elements.viewPinyin.parentElement) {
        const has = !!(idiom.pinyin && idiom.pinyin.trim());
        elements.viewPinyin.parentElement.style.display = has ? 'block' : 'none';
    }
    if (elements.viewExample && elements.viewExample.parentElement) {
        const has = !!(idiom.example && idiom.example.trim());
        elements.viewExample.parentElement.style.display = has ? 'block' : 'none';
    }
    if (elements.viewUsage && elements.viewUsage.parentElement) {
        const has = !!(idiom.usage && idiom.usage.trim());
        elements.viewUsage.parentElement.style.display = has ? 'block' : 'none';
    }
    if (elements.viewContext && elements.viewContext.parentElement) {
        const has = !!(idiom.context && idiom.context.trim());
        elements.viewContext.parentElement.style.display = has ? 'block' : 'none';
    }
    if (elements.viewField && elements.viewField.parentElement) {
        const has = !!(idiom.field && idiom.field.trim());
        elements.viewField.parentElement.style.display = has ? 'block' : 'none';
    }
    if (elements.viewTags && elements.viewTags.parentElement) {
        const has = !!(idiom.tags && idiom.tags.trim());
        elements.viewTags.parentElement.style.display = has ? 'block' : 'none';
    }
    if (elements.viewNotes && elements.viewNotes.parentElement) {
        const has = !!(idiom.notes && idiom.notes.trim());
        elements.viewNotes.parentElement.style.display = has ? 'block' : 'none';
    }
    
    const priorityLevel = getPriorityLevel(idiom.priority);
    const priorityClass = `priority-${priorityLevel}`;
    const priorityText = getPriorityText(priorityLevel);
    
    elements.viewStats.innerHTML = `
        优先级: <span class="priority-badge ${priorityClass}">${priorityText} (${idiom.priority})</span> | 
        学习次数: <span class="study-count-badge">${idiom.studyCount}</span>
    `;
    
    if (idiom.formula) {
        elements.viewFormulaDisplay.innerHTML = '\\[' + idiom.formula + '\\]';
        elements.viewFormulaItem.style.display = 'block';
    } else {
        elements.viewFormulaItem.style.display = 'none';
    }
    
    if (idiom.formulaCase) {
        elements.viewFormulaCase.innerHTML = idiom.formulaCase || '';
        elements.viewFormulaCaseItem.style.display = 'block';
    } else {
        elements.viewFormulaCaseItem.style.display = 'none';
    }
    
    if (idiom.formulaNote) {
        elements.viewFormulaNote.innerHTML = idiom.formulaNote || '';
        elements.viewFormulaNoteItem.style.display = 'block';
    } else {
        elements.viewFormulaNoteItem.style.display = 'none';
    }
    
    if (idiom.isFavorite && idiom.favoriteReason) {
        elements.viewFavoriteReason.textContent = idiom.favoriteReason || '';
        elements.viewFavoriteReasonItem.style.display = 'block';
    } else {
        elements.viewFavoriteReasonItem.style.display = 'none';
    }
    
    elements.viewModal.style.display = 'flex';
    
    setTimeout(() => {
        typesetMathJax([
            elements.viewMeaning, 
            elements.viewFormulaDisplay,
            elements.viewFormulaCase,
            elements.viewFormulaNote
        ]);
    }, 100);
}

// 关闭模态框
function closeModal() {
    elements.idiomModal.style.display = 'none';
}

function closeViewModal() {
    elements.viewModal.style.display = 'none';
}

function closeImportModal() {
    elements.importModal.style.display = 'none';
    elements.importProgress.style.display = 'none';
}

function closeBatchDeleteModal() {
    elements.batchDeleteModal.style.display = 'none';
}

// 保存知识点
function saveIdiom() {
    const text = document.getElementById('idiomText').value.trim();
    const meaning = document.getElementById('idiomMeaning').value.trim();
    
    if (!text || !meaning) {
        alert('知识点和释义不能为空！');
        return;
    }
    
    const newIdiom = {
        text,
        pinyin: document.getElementById('idiomPinyin').value.trim() || undefined,
        meaning,
        example: document.getElementById('idiomExample').value.trim() || undefined,
        usage: document.getElementById('idiomUsage').value.trim() || undefined,
        context: document.getElementById('idiomContext').value.trim() || undefined,
        field: document.getElementById('idiomField').value.trim() || undefined,
        tags: document.getElementById('idiomTags').value.trim() || undefined,
        notes: document.getElementById('idiomNotes').value.trim() || undefined,
        formula: elements.idiomFormula.value.trim() || undefined,
        formulaCase: elements.idiomFormulaCase.value.trim() || undefined,
        formulaNote: elements.idiomFormulaNote.value.trim() || undefined,
        priority: appSettings.defaultPriority || 0,
        studyCount: 0,
        isFavorite: false,
        favoriteReason: ""
    };
    
    if (!currentEditingIdiomText) {
        idioms.push(newIdiom);
        showNotification('添加成功', `知识点"${text}"已添加到题库`, 'success');
    } else {
        const index = idioms.findIndex(i => i.text === currentEditingIdiomText);
        if (index !== -1) {
            newIdiom.priority = idioms[index].priority;
            newIdiom.studyCount = idioms[index].studyCount;
            newIdiom.isFavorite = idioms[index].isFavorite;
            newIdiom.favoriteReason = idioms[index].favoriteReason;
            idioms[index] = newIdiom;
            showNotification('更新成功', `知识点"${text}"已更新`, 'success');
        }
    }
    
    saveIdioms();
    renderIdiomList();
    closeModal();
}

// 删除单个知识点
function deleteIdiom(idiomText) {
    if (confirm(`确定要删除"${idiomText}"这个知识点吗？`)) {
        const index = idioms.findIndex(i => i.text === idiomText);
        if (index !== -1) {
            idioms.splice(index, 1);
            selectedIds = selectedIds.filter(selectedId => selectedId !== idiomText);
            saveIdioms();
            renderIdiomList();
            showNotification('删除成功', `知识点"${idiomText}"已删除`, 'success');
        }
    }
}

// 批量删除知识点
function batchDeleteIdioms() {
    if (selectedIds.length === 0) {
        elements.batchDeleteModal.style.display = 'none';
        return;
    }
    
    const deleteCount = selectedIds.length;
    selectedIds.slice().reverse().forEach(idiomText => {
        const index = idioms.findIndex(i => i.text === idiomText);
        if (index !== -1) {
            idioms.splice(index, 1);
        }
    });
    
    selectedIds = [];
    saveIdioms();
    renderIdiomList();
    elements.batchDeleteModal.style.display = 'none';
    showNotification('批量删除', `成功删除 ${deleteCount} 个知识点`, 'success');
}

// 导入Excel
function importExcel() {
    const fileInput = document.getElementById('excelFile');
    if (!fileInput.files.length) return;
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    importErrors = [];
    elements.importDetails.innerHTML = '';
    elements.importDetails.style.display = 'none';
    
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet);
            
            if (jsonData.length === 0) {
                alert('Excel文件中没有数据！');
                return;
            }
            
            elements.importProgress.style.display = 'block';
            
            let importedCount = 0;
            let skippedCount = 0;
            
            jsonData.forEach((row, index) => {
                const rowNumber = index + 1;
                const idiomText = row['知识点'];
                const meaning = row['释义'];
                
                if (!idiomText || !meaning) {
                    skippedCount++;
                    importErrors.push({
                        row: rowNumber,
                        reason: `知识点或释义为空`,
                        data: row
                    });
                    return;
                }
                
                const exists = idioms.some(i => i.text === idiomText);
                if (exists) {
                    skippedCount++;
                    importErrors.push({
                        row: rowNumber,
                        reason: `知识点已存在: ${idiomText}`,
                        data: row
                    });
                    return;
                }
                
                const newIdiom = {
                    text: idiomText,
                    pinyin: row['拼音'] || undefined,
                    meaning: meaning,
                    example: row['例句'] || undefined,
                    usage: row['用法特点'] || undefined,
                    context: row['语境'] || undefined,
                    field: row['解析'] || undefined,
                    tags: row['标签'] || undefined,
                    notes: row['备注'] || undefined,
                    formula: row['公式'] || undefined,
                    formulaCase: row['公式案例'] || undefined,
                    formulaNote: row['公式备注'] || undefined,
                    priority: typeof row['优先级'] === 'number' ? row['优先级'] : (appSettings.defaultPriority || 0),
                    studyCount: typeof row['学习次数'] === 'number' ? row['学习次数'] : 0,
                    isFavorite: row['收藏'] === '是' || row['收藏'] === true || row['收藏'] === 'true' || false,
                    favoriteReason: row['收藏原因'] || ""
                };
                
                idioms.push(newIdiom);
                
                importedCount++;
                elements.progressText.textContent = `已导入 ${importedCount} 条数据，跳过 ${skippedCount} 条`;
                
                if (index === jsonData.length - 1) {
                    setTimeout(() => {
                        saveIdioms();
                        renderIdiomList();
                        
                        if (importErrors.length > 0) {
                            elements.importDetails.style.display = 'block';
                            elements.importDetails.innerHTML = `
                                <div style="font-weight: 600; margin-bottom: 10px;">导入详情（跳过 ${importErrors.length} 条）:</div>
                                ${importErrors.map(error => `
                                    <div class="import-detail-item import-error">
                                        <strong>第 ${error.row} 行</strong>: ${error.reason}
                                    </div>
                                `).join('')}
                            `;
                        }
                        
                        showNotification('导入完成', `成功导入 ${importedCount} 条数据，跳过 ${skippedCount} 条无效或重复数据`, 'success');
                    }, 500);
                }
            });
        } catch (error) {
            console.error('导入失败:', error);
            showNotification('导入失败', '请检查文件格式是否正确', 'error');
        }
    };
    
    reader.readAsArrayBuffer(file);
}

// 下载模板
function downloadTemplate() {
    const templateData = [
        ['知识点', '拼音', '释义', '例句', '用法特点', '语境', '解析', '标签', '备注', '优先级', '学习次数', '公式', '公式案例', '公式备注', '收藏', '收藏原因'],
        ['守株待兔', 'shǒu zhū dài tù', '比喻死守经验，不知变通', '我们不能有守株待兔的心理，要主动寻找机会。', '多用于批评不主动努力、存侥幸心理的人', '消极、被动的情境', '教育、工作、生活', '消极,被动', '出自《韩非子·五蠹》', 5, 3, '', '', '', '否', ''],
        ['基期比重', 'jī qī bǐ zhòng', '统计学中用于表示过去某一时期数据在总量中的占比', '基期比重公式常用于经济学分析', '用于历史数据分析', '经济学、统计学分析', '经济学、统计学', '公式,统计', '基期比重公式推导', 7, 2, '\\text{基期比重} = \\frac{\\frac{A}{1+a}}{\\frac{B}{1+b}} = \\frac{A}{B} \\times \\frac{1+b}{1+a}', '2020年A产品销售额为1200万元，增长率为8%；2021年总销售额为5000万元，增长率为12%。则2020年销售额占比为：\\[\\frac{\\frac{1200}{1+0.08}}{\\frac{5000}{1+0.12}} = \\frac{1200}{5000} \\times \\frac{1.12}{1.08} \\approx 24.4\\%\\]', '基期比重公式常用于经济分析，计算历史数据在总体中的占比', '是', '重要公式，需要重点掌握'],
        ['增长率计算', 'zēng zhǎng lǜ jì suàn', '2020年增长10%，2021年增长15%，则两年总增长率 = $0.1 + 0.15 + 0.1 \\times 0.15 = 0.265$ 即 26.5%', '根据公式计算复合增长率', '用于计算连续增长', '经济学、投资分析', '经济学、金融学', '公式,增长', '复合增长率计算公式', 8, 4, 'r = r_1 + r_2 + r_1 \\times r_2', '某公司2020年销售额增长率为10%，2021年增长率为15%，则两年总增长率为：\\[0.10 + 0.15 + (0.10 \\times 0.15) = 0.265\\] 即26.5%', '复合增长率计算公式，适用于连续两年的增长率计算', '是', '经常忘记，需要反复练习'],
        ['冬天麦盖三层被，来年枕着馒头睡', 'dōng tiān mài gài sān céng bèi, lái nián zhěn zhe mán tou shuì', '今年冬天如果下了厚厚的雪，那么麦苗上就有好几层的雪，来年就可以丰收。这是因为大雪覆盖冬小麦时可以起到很好的保温作用，使冬小麦免受冻害。', '农民伯伯常说："冬天麦盖三层被，来年枕着馒头睡"，意思是冬天下大雪预示着来年丰收。', '用于农业谚语，表达瑞雪兆丰年的意思', '农业、气象预测', '农业、气象学', '农业,气象,谚语', '民间谚语，描述冬雪对农作物生长的积极作用', 6, 0, '', '', '', '否', '']
    ];
    
    const worksheet = XLSX.utils.aoa_to_sheet(templateData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '知识点模板');
    XLSX.writeFile(workbook, '知识点导入模板.xlsx');
    showNotification('模板下载', '知识点导入模板已开始下载', 'info');
}

// 导出数据
function exportData() {
    if (idioms.length === 0) {
        showNotification('导出失败', '没有数据可导出', 'error');
        return;
    }
    
    const exportData = idioms.map(idiom => ({
        '知识点': idiom.text,
        '拼音': idiom.pinyin || '',
        '释义': idiom.meaning,
        '例句': idiom.example || '',
        '用法特点': idiom.usage || '',
        '语境': idiom.context || '',
        '解析': idiom.field || '',
        '标签': idiom.tags || '',
        '备注': idiom.notes || '',
        '公式': idiom.formula || '',
        '公式案例': idiom.formulaCase || '',
        '公式备注': idiom.formulaNote || '',
        '优先级': idiom.priority,
        '学习次数': idiom.studyCount,
        '收藏': idiom.isFavorite ? '是' : '否',
        '收藏原因': idiom.favoriteReason || ''
    }));
    
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timestamp = `${year}${month}${day}_${hours}${minutes}${seconds}`;
    
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '知识点数据');
    XLSX.writeFile(workbook, `知识点数据_${timestamp}.xlsx`);
    showNotification('导出成功', '知识点数据已成功导出', 'success');
}

// 重置学习进度
function resetProgress() {
    if (confirm('确定要重置所有知识点的学习进度吗？学习次数将保留。')) {
        idioms.forEach(idiom => {
            idiom.priority = appSettings.defaultPriority;
        });
        saveIdioms();
        renderIdiomList();
        showNotification('重置成功', `所有知识点的学习进度已重置为默认熟练度 ${appSettings.defaultPriority}`, 'success');
    }
}

function resetIdiomPriority(idiomText) {
    const idiom = idioms.find(i => i.text === idiomText);
    if (!idiom) return;
    if (!confirm(`确定要将 "${idiomText}" 的优先级重置为默认熟练度 ${appSettings.defaultPriority} 吗？`)) return;
    idiom.priority = appSettings.defaultPriority;
    saveIdioms();
    renderIdiomList();
    showNotification('重置优先级', `已重置 "${idiomText}" 的优先级为默认熟练度 ${appSettings.defaultPriority}`, 'success');
}

// 页面加载时初始化应用
window.addEventListener('DOMContentLoaded', initApp);