// 知识点数据存储
let idioms = [];
let learningRecords = [];
let currentLearningSession = null;
let selectedIdiomIds = new Set();
let settings = {
    learningBatchSize: 10,
    priorityAdjustment: 1,
    nightMode: false,
    clearProgressDaily: false,
    learningScope: 'all',
    learningFontSize: 'md'
};

// DOM元素引用
const elements = {
    knowledgeManageView: document.getElementById('knowledgeManageView'),
    learningView: document.getElementById('learningView'),
    statsView: document.getElementById('statsView'),
    idiomTableBody: document.getElementById('idiomTableBody'),
    emptyState: document.getElementById('emptyState'),
    searchInput: document.getElementById('searchInput'),
    searchResults: document.getElementById('searchResults'),
    searchResultList: document.getElementById('searchResultList'),
    searchResultCount: document.getElementById('searchResultCount'),
    sortSelect: document.getElementById('sortSelect'),
    filterSelect: document.getElementById('filterSelect'),
    knowledgeManageBtn: document.getElementById('knowledgeManageBtn'),
    learningBtn: document.getElementById('learningBtn'),
    backToLearningBtn: document.getElementById('backToLearningBtn'),
    addBtn: document.getElementById('addBtn'),
    addModal: document.getElementById('addModal'),
    closeAddModalBtn: document.getElementById('closeAddModalBtn'),
    cancelAddBtn: document.getElementById('cancelAddBtn'),
    saveKnowledgeBtn: document.getElementById('saveKnowledgeBtn'),
    knowledgeContent: document.getElementById('knowledgeContent'),
    knowledgeTags: document.getElementById('knowledgeTags'),
    knowledgePriority: document.getElementById('knowledgePriority'),
    formula: document.getElementById('formula'),
    formulaCases: document.getElementById('formulaCases'),
    formulaNotes: document.getElementById('formulaNotes'),
    viewModal: document.getElementById('viewModal'),
    closeViewModalBtn: document.getElementById('closeViewModalBtn'),
    deleteKnowledgeBtn: document.getElementById('deleteKnowledgeBtn'),
    editKnowledgeBtn: document.getElementById('editKnowledgeBtn'),
    viewKnowledgeContent: document.getElementById('viewKnowledgeContent'),
    viewKnowledgeTags: document.getElementById('viewKnowledgeTags'),
    viewPriority: document.getElementById('viewPriority'),
    viewMemoryLevel: document.getElementById('viewMemoryLevel'),
    viewStudyCount: document.getElementById('viewStudyCount'),
    viewLastStudyTime: document.getElementById('viewLastStudyTime'),
    viewFormula: document.getElementById('viewFormula'),
    viewFormulaCases: document.getElementById('viewFormulaCases'),
    viewFormulaNotes: document.getElementById('viewFormulaNotes'),
    favoriteBtn: document.getElementById('favoriteBtn'),
    batchSelectionArea: document.getElementById('batchSelectionArea'),
    headerCheckbox: document.getElementById('headerCheckbox'),
    selectAllCheckbox: document.getElementById('selectAllCheckbox'),
    batchDeleteBtn: document.getElementById('batchDeleteBtn'),
    batchResetBtn: document.getElementById('batchResetBtn'),
    batchImportBtn: document.getElementById('batchImportBtn'),
    batchExportBtn: document.getElementById('batchExportBtn'),
    batchDeleteModal: document.getElementById('batchDeleteModal'),
    closeBatchDeleteModalBtn: document.getElementById('closeBatchDeleteModalBtn'),
    cancelBatchDeleteBtn: document.getElementById('cancelBatchDeleteBtn'),
    confirmBatchDeleteBtn: document.getElementById('confirmBatchDeleteBtn'),
    batchDeleteCount: document.getElementById('batchDeleteCount'),
    batchResetModal: document.getElementById('batchResetModal'),
    closeBatchResetModalBtn: document.getElementById('closeBatchResetModalBtn'),
    cancelBatchResetBtn: document.getElementById('cancelBatchResetBtn'),
    confirmBatchResetBtn: document.getElementById('confirmBatchResetBtn'),
    batchResetCount: document.getElementById('batchResetCount'),
    importModal: document.getElementById('importModal'),
    closeImportModalBtn: document.getElementById('closeImportModalBtn'),
    cancelImportBtn: document.getElementById('cancelImportBtn'),
    selectFileBtn: document.getElementById('selectFileBtn'),
    importFile: document.getElementById('importFile'),
    importProgress: document.getElementById('importProgress'),
    importProgressText: document.getElementById('importProgressText'),
    importProgressBar: document.getElementById('importProgressBar'),
    settingsModal: document.getElementById('settingsModal'),
    closeSettingsModalBtn: document.getElementById('closeSettingsModalBtn'),
    cancelSettingsBtn: document.getElementById('cancelSettingsBtn'),
    saveSettingsBtn: document.getElementById('saveSettingsBtn'),
    learningBatchSize: document.getElementById('learningBatchSize'),
    priorityAdjustment: document.getElementById('priorityAdjustment'),
    nightModeToggle: document.getElementById('nightModeToggle'),
    clearProgressDaily: document.getElementById('clearProgressDaily'),
    learningScope: document.getElementById('learningScope'),
    learningFontSize: document.getElementById('learningFontSize'),
    resetProgressBtn: document.getElementById('resetProgressBtn'),
    versionInfo: document.getElementById('versionInfo'),
    notification: document.getElementById('notification'),
    notificationTitle: document.getElementById('notificationTitle'),
    notificationMessage: document.getElementById('notificationMessage'),
    notificationIcon: document.getElementById('notificationIcon'),
    closeNotificationBtn: document.getElementById('closeNotificationBtn'),
    learningContainer: document.getElementById('learningContainer'),
    learningCompleted: document.getElementById('learningCompleted'),
    currentItemIndex: document.getElementById('currentItemIndex'),
    totalItems: document.getElementById('totalItems'),
    currentIdiom: document.getElementById('currentIdiom'),
    idiomContent: document.getElementById('idiomContent'),
    idiomTags: document.getElementById('idiomTags'),
    learningProgressBar: document.getElementById('learningProgressBar'),
    reviewBtn: document.getElementById('reviewBtn'),
    newBatchBtn: document.getElementById('newBatchBtn'),
    resumeBtn: document.getElementById('resumeBtn'),
    newLearningBtn: document.getElementById('newLearningBtn'),
    priorityChart: document.getElementById('priorityChart'),
    memoryLevelChart: document.getElementById('memoryLevelChart'),
    priorityDistributionChart: document.getElementById('priorityDistributionChart'),
    learningRecordsChart: document.getElementById('learningRecordsChart'),
    priorityDistribution: document.getElementById('priorityDistribution'),
    totalIdioms: document.getElementById('totalIdioms'),
    studiedCount: document.getElementById('studiedCount'),
    notStudiedCount: document.getElementById('notStudiedCount'),
    studyRate: document.getElementById('studyRate'),
    avgStudyCount: document.getElementById('avgStudyCount'),
    learningRecords: document.getElementById('learningRecords'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    settingsBtn: document.getElementById('settingsBtn'),
    totalKnowledgeCount: document.getElementById('totalKnowledgeCount'),
    masteredCount: document.getElementById('masteredCount'),
    pendingReviewCount: document.getElementById('pendingReviewCount'),
    unmasteredCount: document.getElementById('unmasteredCount'),
    studyCountDistributionChart: document.getElementById('studyCountDistributionChart'),
    priorityZeroStudyChart: document.getElementById('priorityZeroStudyChart'),
    tagDistributionChart: document.getElementById('tagDistributionChart')
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
}

// 从本地存储加载知识点数据
function loadIdioms() {
    const storedIdioms = localStorage.getItem('idioms');
    idioms = storedIdioms ? JSON.parse(storedIdioms) : [];
}

// 保存知识点数据到本地存储
function saveIdioms() {
    localStorage.setItem('idioms', JSON.stringify(idioms));
    updateKnowledgeStats();
}

// 从本地存储加载学习记录
function loadLearningRecords() {
    const storedRecords = localStorage.getItem('learningRecords');
    learningRecords = storedRecords ? JSON.parse(storedRecords) : [];
}

// 保存学习记录到本地存储
function saveLearningRecords() {
    localStorage.setItem('learningRecords', JSON.stringify(learningRecords));
}

// 从本地存储加载设置
function loadSettings() {
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings) {
        settings = {...settings, ...JSON.parse(storedSettings)};
    }
}

// 保存设置到本地存储
function saveSettings() {
    localStorage.setItem('settings', JSON.stringify(settings));
    applySettingsToUI();
}

// 设置版本信息
function setVersionInfo() {
    elements.versionInfo.textContent = '1.0.0';
}

// 应用设置到UI
function applySettingsToUI() {
    // 应用夜间模式
    if (settings.nightMode) {
        document.body.classList.add('dark');
        elements.themeToggleBtn.innerHTML = '<i class="fa fa-sun-o text-yellow-500"></i>';
    } else {
        document.body.classList.remove('dark');
        elements.themeToggleBtn.innerHTML = '<i class="fa fa-moon-o text-gray-600"></i>';
    }
    
    // 应用其他设置
    elements.learningBatchSize.value = settings.learningBatchSize;
    elements.priorityAdjustment.value = settings.priorityAdjustment;
    elements.nightModeToggle.checked = settings.nightMode;
    elements.clearProgressDaily.checked = settings.clearProgressDaily;
    elements.learningScope.value = settings.learningScope;
    elements.learningFontSize.value = settings.learningFontSize;
}

// 设置事件监听器
function setupEventListeners() {
    // 视图切换按钮
    elements.knowledgeManageBtn.addEventListener('click', () => {
        elements.knowledgeManageView.classList.remove('hidden');
        elements.learningView.classList.add('hidden');
        elements.statsView.classList.add('hidden');
    });
    
    elements.learningBtn.addEventListener('click', () => {
        elements.knowledgeManageView.classList.add('hidden');
        elements.learningView.classList.remove('hidden');
        elements.statsView.classList.add('hidden');
    });
    
    elements.reviewBtn.addEventListener('click', () => {
        elements.knowledgeManageView.classList.add('hidden');
        elements.learningView.classList.add('hidden');
        elements.statsView.classList.remove('hidden');
        updateStatsView();
    });
    
    elements.backToLearningBtn.addEventListener('click', () => {
        elements.knowledgeManageView.classList.add('hidden');
        elements.learningView.classList.remove('hidden');
        elements.statsView.classList.add('hidden');
    });
    
    // 添加知识点模态框
    elements.addBtn.addEventListener('click', openAddModal);
    elements.closeAddModalBtn.addEventListener('click', closeAddModal);
    elements.cancelAddBtn.addEventListener('click', closeAddModal);
    elements.saveKnowledgeBtn.addEventListener('click', saveKnowledge);
    
    // 搜索功能
    elements.searchInput.addEventListener('input', handleSearch);
    
    // 排序和筛选
    elements.sortSelect.addEventListener('change', renderIdiomList);
    elements.filterSelect.addEventListener('change', renderIdiomList);
    
    // 批量选择
    elements.headerCheckbox.addEventListener('change', handleHeaderCheckboxChange);
    elements.selectAllCheckbox.addEventListener('change', handleSelectAllChange);
    
    // 批量操作
    elements.batchDeleteBtn.addEventListener('click', openBatchDeleteModal);
    elements.closeBatchDeleteModalBtn.addEventListener('click', closeBatchDeleteModal);
    elements.cancelBatchDeleteBtn.addEventListener('click', closeBatchDeleteModal);
    elements.confirmBatchDeleteBtn.addEventListener('click', confirmBatchDelete);
    
    elements.batchResetBtn.addEventListener('click', openBatchResetModal);
    elements.closeBatchResetModalBtn.addEventListener('click', closeBatchResetModal);
    elements.cancelBatchResetBtn.addEventListener('click', closeBatchResetModal);
    elements.confirmBatchResetBtn.addEventListener('click', confirmBatchReset);
    
    elements.batchImportBtn.addEventListener('click', openImportModal);
    elements.closeImportModalBtn.addEventListener('click', closeImportModal);
    elements.cancelImportBtn.addEventListener('click', closeImportModal);
    elements.selectFileBtn.addEventListener('click', () => elements.importFile.click());
    elements.importFile.addEventListener('change', handleFileImport);
    
    elements.batchExportBtn.addEventListener('click', handleFileExport);
    
    // 设置模态框
    elements.settingsBtn.addEventListener('click', openSettingsModal);
    elements.closeSettingsModalBtn.addEventListener('click', closeSettingsModal);
    elements.cancelSettingsBtn.addEventListener('click', closeSettingsModal);
    elements.saveSettingsBtn.addEventListener('click', saveSettings);
    elements.resetProgressBtn.addEventListener('click', resetAllProgress);
    
    // 主题切换
    elements.themeToggleBtn.addEventListener('click', toggleTheme);
    
    // 学习功能
    elements.newLearningBtn.addEventListener('click', startNewLearning);
    elements.resumeBtn.addEventListener('click', resumeLearning);
    elements.newBatchBtn.addEventListener('click', startNewLearning);
    
    // 通知关闭按钮
    elements.closeNotificationBtn.addEventListener('click', hideNotification);
    
    // 文档点击事件（用于关闭模态框）
    document.addEventListener('click', (e) => {
        if (e.target === elements.addModal) closeAddModal();
        if (e.target === elements.viewModal) closeViewModal();
        if (e.target === elements.batchDeleteModal) closeBatchDeleteModal();
        if (e.target === elements.batchResetModal) closeBatchResetModal();
        if (e.target === elements.importModal) closeImportModal();
        if (e.target === elements.settingsModal) closeSettingsModal();
    });
}

// 渲染知识点列表
function renderIdiomList() {
    const sortedIdioms = [...idioms].sort((a, b) => {
        const sortBy = elements.sortSelect.value;
        switch (sortBy) {
            case 'priority':
                return b.priority - a.priority;
            case 'memoryLevel':
                return a.memoryLevel - b.memoryLevel;
            case 'studyCount':
                return b.studyCount - a.studyCount;
            case 'lastStudyTime':
                return new Date(b.lastStudyTime || 0) - new Date(a.lastStudyTime || 0);
            case 'updateTime':
            default:
                return new Date(b.updateTime || 0) - new Date(a.updateTime || 0);
        }
    });
    
    const filteredIdioms = sortedIdioms.filter(idiom => {
        const filterBy = elements.filterSelect.value;
        if (filterBy === 'all') return true;
        if (filterBy === 'unmastered' && idiom.memoryLevel === 0) return true;
        if (filterBy === 'pendingReview' && idiom.memoryLevel === 1) return true;
        if (filterBy === 'mastered' && idiom.memoryLevel === 2) return true;
        return false;
    });
    
    if (filteredIdioms.length === 0) {
        elements.idiomTableBody.innerHTML = '';
        elements.emptyState.classList.remove('hidden');
        elements.batchSelectionArea.classList.add('hidden');
        return;
    }
    
    elements.emptyState.classList.add('hidden');
    elements.batchSelectionArea.classList.remove('hidden');
    
    elements.idiomTableBody.innerHTML = filteredIdioms.map(idiom => {
        const isSelected = selectedIdiomIds.has(idiom.id);
        const memoryLevelText = getMemoryLevelText(idiom.memoryLevel);
        const memoryLevelColor = getMemoryLevelColor(idiom.memoryLevel);
        const priorityText = getPriorityText(idiom.priority);
        const priorityColor = getPriorityColor(idiom.priority);
        const lastStudyTimeText = idiom.lastStudyTime ? new Date(idiom.lastStudyTime).toLocaleString() : '从未学习';
        const isFavorite = idiom.favorite || false;
        
        return `
            <tr>
                <td class="px-4 py-3 whitespace-nowrap">
                    <input type="checkbox" class="idiom-checkbox rounded text-primary focus:ring-primary" data-id="${idiom.id}" ${isSelected ? 'checked' : ''}>
                </td>
                <td class="px-4 py-3 whitespace-nowrap">
                    <div class="flex items-center">
                        ${isFavorite ? '<i class="fa fa-star text-yellow-500 mr-2"></i>' : ''}
                        <span>${idiom.content}</span>
                    </div>
                </td>
                <td class="px-4 py-3 whitespace-nowrap">
                    <div class="flex flex-wrap gap-1">
                        ${idiom.tags ? idiom.tags.map(tag => `<span class="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded">${tag}</span>`).join('') : '- -'}
                    </div>
                </td>
                <td class="px-4 py-3 whitespace-nowrap">
                    <span class="px-2 py-1 text-xs rounded-full bg-${memoryLevelColor}-100 text-${memoryLevelColor}-800">${memoryLevelText}</span>
                </td>
                <td class="px-4 py-3 whitespace-nowrap">
                    <span class="px-2 py-1 text-xs rounded-full bg-${priorityColor}-100 text-${priorityColor}-800">${priorityText}</span>
                </td>
                <td class="px-4 py-3 whitespace-nowrap">${idiom.studyCount || 0}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">${lastStudyTimeText}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm font-medium">
                    <button class="text-primary hover:text-primary/80 mr-3" onclick="viewKnowledge('${idiom.id}')">
                        <i class="fa fa-eye mr-1"></i> 查看
                    </button>
                </td>
            </tr>
        `;
    }).join('');
    
    // 添加复选框事件监听器
    document.querySelectorAll('.idiom-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const id = e.target.dataset.id;
            if (e.target.checked) {
                selectedIdiomIds.add(id);
            } else {
                selectedIdiomIds.delete(id);
            }
            updateHeaderCheckbox();
        });
    });
}

// 获取记忆水平文本
function getMemoryLevelText(level) {
    switch (level) {
        case 0: return '未掌握';
        case 1: return '待复习';
        case 2: return '已掌握';
        default: return '未掌握';
    }
}

// 获取记忆水平颜色
function getMemoryLevelColor(level) {
    switch (level) {
        case 0: return 'red';
        case 1: return 'yellow';
        case 2: return 'green';
        default: return 'red';
    }
}

// 获取优先级文本
function getPriorityText(priority) {
    switch (priority) {
        case 0: return '轻松';
        case 1: return '低';
        case 2: return '中';
        case 3: return '高';
        case 4: return '严重';
        default: return '低';
    }
}

// 获取优先级颜色
function getPriorityColor(priority) {
    switch (priority) {
        case 0: return 'green';
        case 1: return 'blue';
        case 2: return 'purple';
        case 3: return 'yellow';
        case 4: return 'red';
        default: return 'blue';
    }
}

// 更新头部复选框状态
function updateHeaderCheckbox() {
    const checkboxes = document.querySelectorAll('.idiom-checkbox');
    const allChecked = checkboxes.length > 0 && [...checkboxes].every(checkbox => checkbox.checked);
    elements.headerCheckbox.checked = allChecked;
    elements.selectAllCheckbox.checked = allChecked;
}

// 处理头部复选框变化
function handleHeaderCheckboxChange(e) {
    const checkboxes = document.querySelectorAll('.idiom-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = e.target.checked;
        const id = checkbox.dataset.id;
        if (e.target.checked) {
            selectedIdiomIds.add(id);
        } else {
            selectedIdiomIds.delete(id);
        }
    });
    elements.selectAllCheckbox.checked = e.target.checked;
}

// 处理全选复选框变化
function handleSelectAllChange(e) {
    const checkboxes = document.querySelectorAll('.idiom-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = e.target.checked;
        const id = checkbox.dataset.id;
        if (e.target.checked) {
            selectedIdiomIds.add(id);
        } else {
            selectedIdiomIds.delete(id);
        }
    });
    elements.headerCheckbox.checked = e.target.checked;
}

// 打开添加知识点模态框
function openAddModal() {
    elements.knowledgeContent.value = '';
    elements.knowledgeTags.value = '';
    elements.knowledgePriority.value = '0';
    elements.formula.value = '';
    elements.formulaCases.value = '';
    elements.formulaNotes.value = '';
    elements.addModal.classList.remove('hidden');
}

// 关闭添加知识点模态框
function closeAddModal() {
    elements.addModal.classList.add('hidden');
}

// 保存知识点
function saveKnowledge() {
    const content = elements.knowledgeContent.value.trim();
    if (!content) {
        showNotification('提示', '知识点内容不能为空', 'warning');
        return;
    }
    
    const tags = elements.knowledgeTags.value.trim() ? elements.knowledgeTags.value.split(',').map(tag => tag.trim()) : [];
    const priority = parseInt(elements.knowledgePriority.value);
    const formula = elements.formula.value.trim();
    const formulaCases = elements.formulaCases.value.trim();
    const formulaNotes = elements.formulaNotes.value.trim();
    
    const newIdiom = {
        id: Date.now().toString(),
        content,
        tags,
        priority,
        formula,
        formulaCases,
        formulaNotes,
        memoryLevel: 0,
        studyCount: 0,
        lastStudyTime: null,
        createTime: new Date().toISOString(),
        updateTime: new Date().toISOString(),
        favorite: false
    };
    
    idioms.push(newIdiom);
    saveIdioms();
    renderIdiomList();
    closeAddModal();
    
    showNotification('成功', '知识点添加成功', 'success');
}

// 查看知识点
function viewKnowledge(id) {
    const idiom = idioms.find(item => item.id === id);
    if (!idiom) return;
    
    elements.viewKnowledgeContent.textContent = idiom.content;
    elements.viewPriority.textContent = getPriorityText(idiom.priority);
    elements.viewMemoryLevel.textContent = getMemoryLevelText(idiom.memoryLevel);
    elements.viewStudyCount.textContent = idiom.studyCount || 0;
    elements.viewLastStudyTime.textContent = idiom.lastStudyTime ? new Date(idiom.lastStudyTime).toLocaleString() : '从未学习';
    elements.viewFormula.textContent = idiom.formula || '- -';
    elements.viewFormulaCases.textContent = idiom.formulaCases || '- -';
    elements.viewFormulaNotes.textContent = idiom.formulaNotes || '- -';
    
    elements.viewKnowledgeTags.innerHTML = idiom.tags ? idiom.tags.map(tag => `<span class="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded">${tag}</span>`).join('') : '- -';
    
    // 设置收藏状态
    if (idiom.favorite) {
        elements.favoriteBtn.innerHTML = '<i class="fa fa-star text-yellow-500"></i>';
    } else {
        elements.favoriteBtn.innerHTML = '<i class="fa fa-star-o text-gray-400"></i>';
    }
    
    // 存储当前查看的知识点ID
    elements.viewModal.dataset.id = id;
    
    elements.viewModal.classList.remove('hidden');
}

// 关闭查看知识点模态框
function closeViewModal() {
    elements.viewModal.classList.add('hidden');
}

// 删除知识点
function deleteKnowledge() {
    const id = elements.viewModal.dataset.id;
    const idiomIndex = idioms.findIndex(item => item.id === id);
    if (idiomIndex !== -1) {
        idioms.splice(idiomIndex, 1);
        saveIdioms();
        renderIdiomList();
        closeViewModal();
        
        showNotification('成功', '知识点删除成功', 'success');
    }
}

// 编辑知识点
function editKnowledge() {
    const id = elements.viewModal.dataset.id;
    const idiom = idioms.find(item => item.id === id);
    if (!idiom) return;
    
    elements.knowledgeContent.value = idiom.content;
    elements.knowledgeTags.value = idiom.tags ? idiom.tags.join(', ') : '';
    elements.knowledgePriority.value = idiom.priority.toString();
    elements.formula.value = idiom.formula;
    elements.formulaCases.value = idiom.formulaCases;
    elements.formulaNotes.value = idiom.formulaNotes;
    
    closeViewModal();
    openAddModal();
    
    // 修改保存按钮的行为
    const originalSaveHandler = elements.saveKnowledgeBtn.onclick;
    elements.saveKnowledgeBtn.onclick = function() {
        const content = elements.knowledgeContent.value.trim();
        if (!content) {
            showNotification('提示', '知识点内容不能为空', 'warning');
            return;
        }
        
        const tags = elements.knowledgeTags.value.trim() ? elements.knowledgeTags.value.split(',').map(tag => tag.trim()) : [];
        const priority = parseInt(elements.knowledgePriority.value);
        const formula = elements.formula.value.trim();
        const formulaCases = elements.formulaCases.value.trim();
        const formulaNotes = elements.formulaNotes.value.trim();
        
        // 更新知识点
        Object.assign(idiom, {
            content,
            tags,
            priority,
            formula,
            formulaCases,
            formulaNotes,
            updateTime: new Date().toISOString()
        });
        
        saveIdioms();
        renderIdiomList();
        closeAddModal();
        
        showNotification('成功', '知识点更新成功', 'success');
        
        // 恢复原始保存按钮行为
        elements.saveKnowledgeBtn.onclick = originalSaveHandler;
    };
}

// 切换收藏状态
function toggleFavorite() {
    const id = elements.viewModal.dataset.id;
    const idiom = idioms.find(item => item.id === id);
    if (!idiom) return;
    
    idiom.favorite = !idiom.favorite;
    saveIdioms();
    
    if (idiom.favorite) {
        elements.favoriteBtn.innerHTML = '<i class="fa fa-star text-yellow-500"></i>';
        showNotification('成功', '已添加到收藏', 'success');
    } else {
        elements.favoriteBtn.innerHTML = '<i class="fa fa-star-o text-gray-400"></i>';
        showNotification('成功', '已取消收藏', 'success');
    }
    
    renderIdiomList();
}

// 处理搜索
function handleSearch() {
    const searchTerm = elements.searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        elements.searchResults.classList.add('hidden');
        return;
    }
    
    const results = idioms.filter(idiom => 
        idiom.content.toLowerCase().includes(searchTerm) || 
        (idiom.tags && idiom.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
    );
    
    elements.searchResultCount.textContent = `${results.length} 条结果`;
    
    elements.searchResultList.innerHTML = results.map(idiom => {
        const memoryLevelText = getMemoryLevelText(idiom.memoryLevel);
        const memoryLevelColor = getMemoryLevelColor(idiom.memoryLevel);
        const priorityText = getPriorityText(idiom.priority);
        const priorityColor = getPriorityColor(idiom.priority);
        
        return `
            <div class="p-4 border-b last:border-0 hover:bg-gray-50 cursor-pointer transition-custom animate-fade-in" onclick="viewKnowledge('${idiom.id}')">
                <div class="flex justify-between items-start mb-2">
                    <h4 class="font-medium">${idiom.content}</h4>
                    <span class="px-2 py-0.5 text-xs rounded-full bg-${priorityColor}-100 text-${priorityColor}-800">${priorityText}</span>
                </div>
                <div class="flex flex-wrap gap-1 mb-2">
                    ${idiom.tags ? idiom.tags.map(tag => `<span class="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded">${tag}</span>`).join('') : ''}
                </div>
                <div class="flex justify-between items-center text-sm text-gray-500">
                    <span>记忆水平: <span class="text-${memoryLevelColor}-600">${memoryLevelText}</span></span>
                    <span>学习次数: ${idiom.studyCount || 0}</span>
                </div>
            </div>
        `;
    }).join('');
    
    elements.searchResults.classList.remove('hidden');
}

// 打开批量删除确认模态框
function openBatchDeleteModal() {
    elements.batchDeleteCount.textContent = selectedIdiomIds.size;
    elements.batchDeleteModal.classList.remove('hidden');
}

// 关闭批量删除确认模态框
function closeBatchDeleteModal() {
    elements.batchDeleteModal.classList.add('hidden');
}

// 确认批量删除
function confirmBatchDelete() {
    idioms = idioms.filter(idiom => !selectedIdiomIds.has(idiom.id));
    saveIdioms();
    selectedIdiomIds.clear();
    renderIdiomList();
    closeBatchDeleteModal();
    
    showNotification('成功', `已删除 ${elements.batchDeleteCount.textContent} 个知识点`, 'success');
}

// 打开批量重置确认模态框
function openBatchResetModal() {
    elements.batchResetCount.textContent = selectedIdiomIds.size;
    elements.batchResetModal.classList.remove('hidden');
}

// 关闭批量重置确认模态框
function closeBatchResetModal() {
    elements.batchResetModal.classList.add('hidden');
}

// 确认批量重置
function confirmBatchReset() {
    idioms.forEach(idiom => {
        if (selectedIdiomIds.has(idiom.id)) {
            idiom.memoryLevel = 0;
            idiom.studyCount = 0;
            idiom.lastStudyTime = null;
        }
    });
    saveIdioms();
    selectedIdiomIds.clear();
    renderIdiomList();
    closeBatchResetModal();
    
    showNotification('成功', `已重置 ${elements.batchResetCount.textContent} 个知识点的学习进度`, 'success');
}

// 打开导入模态框
function openImportModal() {
    elements.importFile.value = '';
    elements.importProgress.classList.add('hidden');
    elements.importProgressBar.style.width = '0%';
    elements.importProgressText.textContent = '0%';
    elements.importModal.classList.remove('hidden');
}

// 关闭导入模态框
function closeImportModal() {
    elements.importModal.classList.add('hidden');
}

// 处理文件导入
function handleFileImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    elements.importProgress.classList.remove('hidden');
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            
            // 处理导入的数据
            let importedCount = 0;
            jsonData.forEach((row, index) => {
                // 假设第一列是知识点内容，第二列是标签，第三列是优先级，第四列是公式，第五列是公式案例，第六列是公式备注
                const content = row['知识点内容'] || row['A'] || '';
                if (!content) return;
                
                const tags = row['标签'] || row['B'] || '';
                const priority = row['优先级'] || row['C'] || 0;
                const formula = row['公式'] || row['D'] || '';
                const formulaCases = row['公式案例'] || row['E'] || '';
                const formulaNotes = row['公式备注'] || row['F'] || '';
                
                const tagArray = tags ? tags.split(',').map(tag => tag.trim()) : [];
                
                const newIdiom = {
                    id: Date.now().toString() + '_' + index,
                    content,
                    tags: tagArray,
                    priority: parseInt(priority) || 0,
                    formula,
                    formulaCases,
                    formulaNotes,
                    memoryLevel: 0,
                    studyCount: 0,
                    lastStudyTime: null,
                    createTime: new Date().toISOString(),
                    updateTime: new Date().toISOString(),
                    favorite: false
                };
                
                idioms.push(newIdiom);
                importedCount++;
                
                // 更新进度条
                const progress = Math.min(Math.floor(((index + 1) / jsonData.length) * 100), 100);
                elements.importProgressBar.style.width = progress + '%';
                elements.importProgressText.textContent = progress + '%';
            });
            
            saveIdioms();
            renderIdiomList();
            closeImportModal();
            
            showNotification('成功', `成功导入 ${importedCount} 个知识点`, 'success');
        } catch (error) {
            showNotification('错误', '文件导入失败，请检查文件格式', 'error');
            console.error('Import error:', error);
        }
    };
    
    reader.onerror = function() {
        showNotification('错误', '文件读取失败', 'error');
    };
    
    reader.readAsArrayBuffer(file);
}

// 处理文件导出
function handleFileExport() {
    if (idioms.length === 0) {
        showNotification('提示', '没有可导出的知识点', 'warning');
        return;
    }
    
    // 准备导出数据
    const exportData = idioms.map(idiom => ({
        '知识点内容': idiom.content,
        '标签': idiom.tags ? idiom.tags.join(',') : '',
        '优先级': idiom.priority,
        '记忆水平': getMemoryLevelText(idiom.memoryLevel),
        '学习次数': idiom.studyCount || 0,
        '最后学习时间': idiom.lastStudyTime ? new Date(idiom.lastStudyTime).toLocaleString() : '',
        '公式': idiom.formula,
        '公式案例': idiom.formulaCases,
        '公式备注': idiom.formulaNotes
    }));
    
    // 创建工作簿和工作表
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "知识点列表");
    
    // 导出文件
    XLSX.writeFile(wb, `知识点列表_${new Date().toLocaleDateString()}.xlsx`);
    
    showNotification('成功', `成功导出 ${idioms.length} 个知识点`, 'success');
}

// 打开设置模态框
function openSettingsModal() {
    elements.settingsModal.classList.remove('hidden');
}

// 关闭设置模态框
function closeSettingsModal() {
    elements.settingsModal.classList.add('hidden');
}

// 重置所有学习进度
function resetAllProgress() {
    if (confirm('确定要重置所有知识点的学习进度吗？此操作不可撤销。')) {
        idioms.forEach(idiom => {
            idiom.memoryLevel = 0;
            idiom.studyCount = 0;
            idiom.lastStudyTime = null;
        });
        saveIdioms();
        renderIdiomList();
        closeSettingsModal();
        
        showNotification('成功', '已重置所有知识点的学习进度', 'success');
    }
}

// 切换主题
function toggleTheme() {
    settings.nightMode = !settings.nightMode;
    saveSettings();
}

// 开始新的学习
function startNewLearning() {
    // 根据设置选择学习范围
    let learningPool = [];
    
    if (settings.learningScope === 'all') {
        learningPool = [...idioms];
    } else if (settings.learningScope === 'tag') {
        // 这里可以添加按标签选择的逻辑
        // 暂时默认使用所有知识点
        learningPool = [...idioms];
    }
    
    if (learningPool.length === 0) {
        showNotification('提示', '没有可学习的知识点，请先添加知识点', 'warning');
        return;
    }
    
    // 根据优先级排序，优先级高的排在前面
    learningPool.sort((a, b) => {
        // 优先考虑记忆水平（未掌握的排在前面）
        if (a.memoryLevel !== b.memoryLevel) {
            return a.memoryLevel - b.memoryLevel;
        }
        // 记忆水平相同时，按优先级排序
        return b.priority - a.priority;
    });
    
    // 选择前N个知识点
    const selectedItems = learningPool.slice(0, settings.learningBatchSize);
    
    // 创建学习会话
    currentLearningSession = {
        items: selectedItems.map(item => item.id),
        currentIndex: 0
    };
    
    // 显示学习界面
    showLearningInterface();
}

// 继续学习
function resumeLearning() {
    if (!currentLearningSession) {
        startNewLearning();
        return;
    }
    
    showLearningInterface();
}

// 显示学习界面
function showLearningInterface() {
    if (!currentLearningSession || currentLearningSession.items.length === 0) {
        return;
    }
    
    elements.learningContainer.classList.remove('hidden');
    elements.learningCompleted.classList.add('hidden');
    elements.resumeBtn.classList.add('hidden');
    elements.newLearningBtn.classList.add('hidden');
    
    // 显示当前知识点
    showCurrentLearningItem();
    
    // 添加反馈按钮事件监听器
    document.querySelectorAll('.feedback-btn').forEach(btn => {
        btn.removeEventListener('click', handleFeedback);
        btn.addEventListener('click', handleFeedback);
    });
}

// 显示当前学习项目
function showCurrentLearningItem() {
    if (!currentLearningSession) return;
    
    const itemId = currentLearningSession.items[currentLearningSession.currentIndex];
    const item = idioms.find(idiom => idiom.id === itemId);
    if (!item) return;
    
    // 更新进度条
    const progress = ((currentLearningSession.currentIndex + 1) / currentLearningSession.items.length) * 100;
    elements.learningProgressBar.style.width = progress + '%';
    
    // 更新进度文本
    elements.currentItemIndex.textContent = currentLearningSession.currentIndex + 1;
    elements.totalItems.textContent = currentLearningSession.items.length;
    
    // 显示知识点内容
    elements.currentIdiom.textContent = item.content;
    elements.idiomContent.textContent = item.content;
    
    // 显示标签
    elements.idiomTags.innerHTML = item.tags ? item.tags.map(tag => `<span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">${tag}</span>`).join('') : '';
    
    // 应用字体大小设置
    if (settings.learningFontSize === 'sm') {
        elements.currentIdiom.classList.remove('text-3xl', 'text-2xl');
        elements.currentIdiom.classList.add('text-xl');
    } else if (settings.learningFontSize === 'md') {
        elements.currentIdiom.classList.remove('text-xl', 'text-3xl');
        elements.currentIdiom.classList.add('text-2xl');
    } else if (settings.learningFontSize === 'lg') {
        elements.currentIdiom.classList.remove('text-xl', 'text-2xl');
        elements.currentIdiom.classList.add('text-3xl');
    }
}

// 处理学习反馈
function handleFeedback(e) {
    const level = parseInt(e.target.dataset.level || e.target.parentElement.dataset.level);
    
    if (!currentLearningSession) return;
    
    const itemId = currentLearningSession.items[currentLearningSession.currentIndex];
    const item = idioms.find(idiom => idiom.id === itemId);
    if (!item) return;
    
    // 更新知识点状态
    item.memoryLevel = level;
    item.studyCount = (item.studyCount || 0) + 1;
    item.lastStudyTime = new Date().toISOString();
    
    // 根据反馈调整优先级
    if (level === 0) {
        // 完全不会，提高优先级
        item.priority = Math.min(4, (item.priority || 0) + settings.priorityAdjustment);
    } else if (level === 2) {
        // 已经掌握，降低优先级
        item.priority = Math.max(0, (item.priority || 0) - settings.priorityAdjustment);
    }
    
    // 创建学习记录
    const record = {
        id: Date.now().toString(),
        idiomId: itemId,
        idiomContent: item.content,
        memoryLevel: level,
        timestamp: new Date().toISOString()
    };
    
    learningRecords.push(record);
    
    // 保存数据
    saveIdioms();
    saveLearningRecords();
    
    // 检查是否完成当前批次
    if (currentLearningSession.currentIndex >= currentLearningSession.items.length - 1) {
        // 完成学习
        currentLearningSession = null;
        elements.learningContainer.classList.add('hidden');
        elements.learningCompleted.classList.remove('hidden');
        elements.resumeBtn.classList.add('hidden');
        elements.newLearningBtn.classList.remove('hidden');
        
        // 更新统计数据
        updateKnowledgeStats();
    } else {
        // 继续下一个知识点
        currentLearningSession.currentIndex++;
        showCurrentLearningItem();
    }
}

// 更新知识点统计
function updateKnowledgeStats() {
    const totalCount = idioms.length;
    const masteredCount = idioms.filter(item => item.memoryLevel === 2).length;
    const pendingReviewCount = idioms.filter(item => item.memoryLevel === 1).length;
    const unmasteredCount = idioms.filter(item => item.memoryLevel === 0).length;
    
    elements.totalKnowledgeCount.textContent = totalCount;
    elements.masteredCount.textContent = masteredCount;
    elements.pendingReviewCount.textContent = pendingReviewCount;
    elements.unmasteredCount.textContent = unmasteredCount;
    
    // 检查是否有正在进行的学习会话
    if (currentLearningSession) {
        elements.resumeBtn.classList.remove('hidden');
    } else {
        elements.resumeBtn.classList.add('hidden');
    }
}

// 更新统计视图
function updateStatsView() {
    // 计算优先级分布
    const priorityCounts = {
        critical: idioms.filter(item => item.priority === 4).length,
        high: idioms.filter(item => item.priority === 3).length,
        medium: idioms.filter(item => item.priority === 2).length,
        low: idioms.filter(item => item.priority === 1).length,
        easy: idioms.filter(item => item.priority === 0).length
    };
    
    // 计算记忆水平分布
    const memoryLevelCounts = {
        unmastered: idioms.filter(item => item.memoryLevel === 0).length,
        pendingReview: idioms.filter(item => item.memoryLevel === 1).length,
        mastered: idioms.filter(item => item.memoryLevel === 2).length
    };
    
    // 计算学习统计
    const totalIdioms = idioms.length;
    const studiedCount = idioms.filter(item => item.studyCount > 0).length;
    const notStudiedCount = totalIdioms - studiedCount;
    const studyRate = totalIdioms > 0 ? Math.round((studiedCount / totalIdioms) * 100) : 0;
    const totalStudyCount = idioms.reduce((sum, item) => sum + (item.studyCount || 0), 0);
    const avgStudyCount = studiedCount > 0 ? (totalStudyCount / studiedCount).toFixed(1) : 0;
    
    // 更新统计数据
    elements.totalIdioms.textContent = totalIdioms;
    elements.studiedCount.textContent = studiedCount;
    elements.notStudiedCount.textContent = notStudiedCount;
    elements.studyRate.textContent = studyRate + '%';
    elements.avgStudyCount.textContent = avgStudyCount;
    
    // 更新优先级分布详情
    elements.priorityDistribution.innerHTML = `
        <div class="flex justify-between items-center mb-2">
            <span>严重 (4):</span>
            <span>${priorityCounts.critical} (${totalIdioms > 0 ? Math.round((priorityCounts.critical / totalIdioms) * 100) : 0}%)</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div class="bg-red-500 h-2 rounded-full" style="width: ${totalIdioms > 0 ? (priorityCounts.critical / totalIdioms) * 100 : 0}%"></div>
        </div>
        
        <div class="flex justify-between items-center mb-2">
            <span>高 (3):</span>
            <span>${priorityCounts.high} (${totalIdioms > 0 ? Math.round((priorityCounts.high / totalIdioms) * 100) : 0}%)</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div class="bg-yellow-500 h-2 rounded-full" style="width: ${totalIdioms > 0 ? (priorityCounts.high / totalIdioms) * 100 : 0}%"></div>
        </div>
        
        <div class="flex justify-between items-center mb-2">
            <span>中 (2):</span>
            <span>${priorityCounts.medium} (${totalIdioms > 0 ? Math.round((priorityCounts.medium / totalIdioms) * 100) : 0}%)</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div class="bg-purple-500 h-2 rounded-full" style="width: ${totalIdioms > 0 ? (priorityCounts.medium / totalIdioms) * 100 : 0}%"></div>
        </div>
        
        <div class="flex justify-between items-center mb-2">
            <span>低 (1):</span>
            <span>${priorityCounts.low} (${totalIdioms > 0 ? Math.round((priorityCounts.low / totalIdioms) * 100) : 0}%)</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div class="bg-blue-500 h-2 rounded-full" style="width: ${totalIdioms > 0 ? (priorityCounts.low / totalIdioms) * 100 : 0}%"></div>
        </div>
        
        <div class="flex justify-between items-center mb-2">
            <span>轻松 (0):</span>
            <span>${priorityCounts.easy} (${totalIdioms > 0 ? Math.round((priorityCounts.easy / totalIdioms) * 100) : 0}%)</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" style="width: ${totalIdioms > 0 ? (priorityCounts.easy / totalIdioms) * 100 : 0}%"></div>
        </div>
    `;
    
    renderLearningRecords();
    renderStudyCountStats();
    
    // 销毁现有图表
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
                    '#EF4444',
                    '#F59E0B',
                    '#8B5CF6',
                    '#3B82F6',
                    '#10B981'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    // 创建记忆水平柱状图
    const memoryLevelCtx = document.getElementById('memoryLevelChart').getContext('2d');
    memoryLevelChart = new Chart(memoryLevelCtx, {
        type: 'bar',
        data: {
            labels: ['未掌握', '待复习', '已掌握'],
            datasets: [{
                label: '数量',
                data: [
                    memoryLevelCounts.unmastered,
                    memoryLevelCounts.pendingReview,
                    memoryLevelCounts.mastered
                ],
                backgroundColor: [
                    '#EF4444',
                    '#F59E0B',
                    '#10B981'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
    
    // 创建优先级分布折线图
    const priorityDistributionCtx = document.getElementById('priorityDistributionChart').getContext('2d');
    priorityDistributionChart = new Chart(priorityDistributionCtx, {
        type: 'line',
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
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                borderColor: '#4F46E5',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
    
    // 创建学习次数分布折线图
    const studyCountMap = {};
    idioms.forEach(idiom => {
        const count = idiom.studyCount || 0;
        studyCountMap[count] = (studyCountMap[count] || 0) + 1;
    });
    
    const maxStudyCount = Math.max(...Object.keys(studyCountMap).map(Number), 0);
    const studyCountLabels = Array.from({ length: maxStudyCount + 1 }, (_, i) => i);
    const studyCountData = studyCountLabels.map(count => studyCountMap[count] || 0);
    
    const studyCountCtx = document.getElementById('studyCountDistributionChart').getContext('2d');
    studyCountDistributionChart = new Chart(studyCountCtx, {
        type: 'line',
        data: {
            labels: studyCountLabels,
            datasets: [{
                label: '知识点数量',
                data: studyCountData,
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderColor: '#10B981',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '学习次数'
                    }
                },
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
    
    // 创建学习记录图表
    const recentRecords = learningRecords.slice(-7);
    const recordsLabels = recentRecords.map(record => new Date(record.timestamp).toLocaleDateString());
    const recordsData = recentRecords.map(record => {
        // 根据记忆水平转换为数值（完全不会:0, 不太熟练:1, 已经掌握:2）
        return record.memoryLevel;
    });
    
    const learningRecordsCtx = document.getElementById('learningRecordsChart').getContext('2d');
    learningRecordsChart = new Chart(learningRecordsCtx, {
        type: 'line',
        data: {
            labels: recordsLabels,
            datasets: [{
                label: '平均记忆水平',
                data: recordsData,
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                borderColor: '#7C3AED',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 2,
                    ticks: {
                        stepSize: 1,
                        callback: function(value) {
                            switch (value) {
                                case 0: return '完全不会';
                                case 1: return '不太熟练';
                                case 2: return '已经掌握';
                                default: return value;
                            }
                        }
                    }
                }
            }
        }
    });

    // 创建优先级为0的知识点学习次数比例图
    const priorityZeroIdioms = idioms.filter(item => item.priority === 0);
    const priorityZeroStudied = priorityZeroIdioms.filter(item => item.studyCount > 0).length;
    const priorityZeroNotStudied = priorityZeroIdioms.length - priorityZeroStudied;
    
    const priorityZeroCtx = document.getElementById('priorityZeroStudyChart').getContext('2d');
    priorityZeroStudyChart = new Chart(priorityZeroCtx, {
        type: 'pie',
        data: {
            labels: ['已学习', '未学习'],
            datasets: [{
                data: [priorityZeroStudied, priorityZeroNotStudied],
                backgroundColor: ['#10B981', '#3B82F6'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });

    // 创建标签分布统计图表
    const tagCountMap = {};
    idioms.forEach(idiom => {
        if (idiom.tags) {
            idiom.tags.forEach(tag => {
                tagCountMap[tag] = (tagCountMap[tag] || 0) + 1;
            });
        }
    });
    
    // 获取前10个标签
    const sortedTags = Object.entries(tagCountMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
    
    const tagLabels = sortedTags.map(([tag]) => tag);
    const tagData = sortedTags.map(([_, count]) => count);
    
    const tagCtx = document.getElementById('tagDistributionChart').getContext('2d');
    tagDistributionChart = new Chart(tagCtx, {
        type: 'bar',
        data: {
            labels: tagLabels,
            datasets: [{
                label: '知识点数量',
                data: tagData,
                backgroundColor: '#6366F1',
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '数量'
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

// 渲染学习记录
function renderLearningRecords() {
    if (learningRecords.length === 0) {
        elements.learningRecords.innerHTML = `
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
                    <th style="text-align: left; padding: 10px; border-bottom: 1px solid #E5E7EB;">知识点</th>
                    <th style="text-align: left; padding: 10px; border-bottom: 1px solid #E5E7EB;">记忆水平</th>
                    <th style="text-align: left; padding: 10px; border-bottom: 1px solid #E5E7EB;">学习时间</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    sortedRecords.forEach(record => {
        const memoryLevelText = getMemoryLevelText(record.memoryLevel);
        const memoryLevelColor = getMemoryLevelColor(record.memoryLevel);
        const timeText = new Date(record.timestamp).toLocaleString();
        
        recordsHTML += `
            <tr style="hover: background-color: #F9FAFB;">
                <td style="padding: 10px; border-bottom: 1px solid #E5E7EB;">${record.idiomContent}</td>
                <td style="padding: 10px; border-bottom: 1px solid #E5E7EB;">
                    <span class="px-2 py-1 text-xs rounded-full bg-${memoryLevelColor}-100 text-${memoryLevelColor}-800">${memoryLevelText}</span>
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #E5E7EB;">${timeText}</td>
            </tr>
        `;
    });
    
    recordsHTML += `
            </tbody>
        </table>
    `;
    
    elements.learningRecords.innerHTML = recordsHTML;
}

// 渲染学习次数统计
function renderStudyCountStats() {
    // 此函数可以用于显示更详细的学习次数统计
}

// 显示通知
function showNotification(title, message, type = 'info') {
    elements.notificationTitle.textContent = title;
    elements.notificationMessage.textContent = message;
    
    // 设置通知图标和颜色
    switch (type) {
        case 'success':
            elements.notificationIcon.className = 'fa fa-check-circle text-success mr-3 mt-0.5';
            elements.notification.classList.add('bg-green-50', 'text-green-800');
            elements.notification.classList.remove('bg-blue-50', 'text-blue-800', 'bg-yellow-50', 'text-yellow-800', 'bg-red-50', 'text-red-800');
            break;
        case 'warning':
            elements.notificationIcon.className = 'fa fa-exclamation-triangle text-warning mr-3 mt-0.5';
            elements.notification.classList.add('bg-yellow-50', 'text-yellow-800');
            elements.notification.classList.remove('bg-blue-50', 'text-blue-800', 'bg-green-50', 'text-green-800', 'bg-red-50', 'text-red-800');
            break;
        case 'error':
            elements.notificationIcon.className = 'fa fa-times-circle text-danger mr-3 mt-0.5';
            elements.notification.classList.add('bg-red-50', 'text-red-800');
            elements.notification.classList.remove('bg-blue-50', 'text-blue-800', 'bg-green-50', 'text-green-800', 'bg-yellow-50', 'text-yellow-800');
            break;
        case 'info':
        default:
            elements.notificationIcon.className = 'fa fa-info-circle text-primary mr-3 mt-0.5';
            elements.notification.classList.add('bg-blue-50', 'text-blue-800');
            elements.notification.classList.remove('bg-green-50', 'text-green-800', 'bg-yellow-50', 'text-yellow-800', 'bg-red-50', 'text-red-800');
            break;
    }
    
    // 显示通知
    elements.notification.classList.remove('translate-y-full');
    
    // 3秒后自动隐藏
    setTimeout(hideNotification, 3000);
}

// 隐藏通知
function hideNotification() {
    elements.notification.classList.add('translate-y-full');
}

// 更新排序图标
function updateSortIcons() {
    // 根据当前排序选项更新排序图标
    const sortBy = elements.sortSelect.value;
    document.querySelectorAll('.sort-icon').forEach(icon => {
        icon.className = 'fa fa-sort text-gray-400 sort-icon';
    });
    
    const selectedIcon = document.querySelector(`.sort-icon[data-sort="${sortBy}"]`);
    if (selectedIcon) {
        selectedIcon.className = 'fa fa-sort-amount-desc text-primary sort-icon';
    }
}

// 初始化应用
window.addEventListener('DOMContentLoaded', initApp);