(function () {
  'use strict';

  // These translations cover the interface and short site summaries. Article bodies stay in Chinese.
  // Columns after the source text: en, de, es, ja, ru, zh-HK, zh-TW.
  var rows = [
    ["STUDY NOTES","STUDY NOTES","LERNNOTIZEN","APUNTES","学習ノート","УЧЕБНЫЕ ЗАМЕТКИ","學習筆記","學習筆記"],
    ["课程笔记","Course Notes","Kursnotizen","Apuntes de cursos","講義ノート","Конспекты курсов","課程筆記","課程筆記"],
    ["循着课程脉络，找到每一篇笔记。","Follow each course to find its notes.","Folge den Kursen zu den passenden Notizen.","Sigue cada curso para encontrar sus apuntes.","講義の流れに沿ってノートを探せます。","Ищите заметки по отдельным курсам.","沿著課程脈絡，找到每篇筆記。","循著課程脈絡，找到每篇筆記。"],
    ["查看全部分类 →","All categories →","Alle Kategorien →","Ver todas las categorías →","すべてのカテゴリー →","Все категории →","查看所有分類 →","查看所有分類 →"],
    ["FROM THE JOURNAL","FROM THE JOURNAL","AUS DEM JOURNAL","DEL DIARIO","最近の記事","ИЗ ЖУРНАЛА","來自日誌","來自日誌"],
    ["最新文章","Recent Posts","Neueste Beiträge","Artículos recientes","最近の記事","Последние статьи","最新文章","最新文章"],
    ["学习笔记与生活记录，按时间排列。","Study notes and personal writing, in chronological order.","Lernnotizen und persönliche Texte, chronologisch sortiert.","Apuntes y escritos personales en orden cronológico.","学習ノートと日々の記録を時系列で掲載しています。","Учебные заметки и личные записи по дате.","學習筆記與生活記錄，按時間排列。","學習筆記與生活記錄，按時間排列。"],
    ["文章归档 →","Archives →","Archiv →","Archivo →","アーカイブ →","Архив →","文章彙整 →","文章彙整 →"],
    ["更多关于我","More about me","Mehr über mich","Más sobre mí","プロフィール","Обо мне","更多關於我","更多關於我"],
    ["EXPLORE THE BLOG","EXPLORE THE BLOG","BLOG ENTDECKEN","EXPLORA EL BLOG","ブログを見てみる","ИССЛЕДУЙТЕ БЛОГ","瀏覽部落格","瀏覽部落格"],
    ["分类","Categories","Kategorien","Categorías","カテゴリー","Категории","分類","分類"],
    ["其他分类","Other Categories","Weitere Kategorien","Otras categorías","その他のカテゴリー","Другие категории","其他分類","其他分類"],
    ["按课程学习，也可以浏览其他文章。","Explore courses and other writing by topic.","Lerne nach Kursen oder entdecke weitere Texte nach Thema.","Explora los cursos y otros escritos por tema.","講義ごとに学んだり、テーマ別に記事を読んだりできます。","Изучайте курсы и другие тексты по темам.","按課程學習，也可以按主題瀏覽其他文章。","按課程學習，也可以按主題瀏覽其他文章。"],
    ["按课程顺序阅读","Read in course order","Nach Kursreihenfolge lesen","Leer en orden del curso","講義順に読む","Читать по порядку курса","按課程順序閱讀","按課程順序閱讀"],
    ["按主题浏览","Browse by topic","Nach Thema stöbern","Explorar por tema","テーマから探す","Обзор по темам","按主題瀏覽","按主題瀏覽"],
    ["课程目录","Course Contents","Kursübersicht","Índice del curso","講義目次","Содержание курса","課程目錄","課程目錄"],
    ["按笔记顺序排列","In note order","Nach Notizreihenfolge","En orden de lectura","ノート順","По порядку заметок","按筆記順序排列","按筆記順序排列"],
    ["关于这份笔记","About these notes","Über diese Notizen","Sobre estos apuntes","このノートについて","Об этих заметках","關於這份筆記","關於這份筆記"],
    ["目录按课程笔记的顺序整理。","Contents follow the course note order.","Das Inhaltsverzeichnis folgt der Reihenfolge der Kursnotizen.","El índice sigue el orden de los apuntes del curso.","目次は講義ノートの順に並んでいます。","Содержание расположено по порядку курса.","目錄按課程筆記的順序整理。","目錄按課程筆記的順序整理。"],
    ["← 返回课程目录","← Back to course contents","← Zur Kursübersicht","← Volver al índice del curso","← 講義目次へ戻る","← К содержанию курса","← 返回課程目錄","← 返回課程目錄"],
    ["← 返回课程目录","← Back to course contents","← Zur Kursübersicht","← Volver al índice del curso","← 講義目次へ戻る","← К содержанию курса","← 返回課程目錄","← 返回課程目錄"],
    ["首页","Home","Startseite","Inicio","ホーム","Главная","首頁","首頁"],
    ["关于我","About me","Über mich","Sobre mí","プロフィール","Обо мне","關於我","關於我"],
    ["关于博客","About this blog","Über den Blog","Sobre el blog","ブログについて","О блоге","關於部落格","關於部落格"],
    ["Blog History","Blog History","Blog-Chronik","Historia del blog","ブログの履歴","История блога","部落格歷史","部落格歷史"],
    ["暑假更新计划","Summer update plans","Sommerpläne für neue Beiträge","Plan de publicaciones de verano","夏休みの更新予定","Летний план обновлений","暑假更新計畫","暑假更新計畫"],
    ["最后","Final note","Zum Schluss","Nota final","最後に","В заключение","最後","最後"],
    ["上一篇","Previous","Zurück","Anterior","前の記事","Предыдущая","上一篇","上一篇"],
    ["下一篇","Next","Weiter","Siguiente","次の記事","Следующая","下一篇","下一篇"],
    ["本文目录","On this page","Inhaltsverzeichnis","En esta página","目次","На этой странице","本文目錄","本文目錄"],
    ["北京大学","Peking University","Peking-Universität","Universidad de Pekín","北京大学","Пекинский университет","北京大學","北京大學"],
    ["大作业","Projects","Projekte","Proyectos","プロジェクト","Проекты","專題作業","專題作業"],
    ["小作文","Personal Essays","Persönliche Texte","Ensayos personales","エッセイ","Личные заметки","個人隨筆","個人隨筆"],
    ["测试","Miscellaneous","Sonstiges","Varios","その他","Разное","其他","其他"],
    ["文章","Post","Beitrag","Artículo","記事","Статья","文章","文章"],
    ["课程项目与实践成果","Course projects and practical work","Kursprojekte und praktische Arbeiten","Proyectos y trabajos prácticos","授業のプロジェクトと実践記録","Учебные проекты и практические работы","課程專題與實踐成果","課程專題與實踐成果"],
    ["生活随想与个人记录","Thoughts on life and personal stories","Gedanken zum Leben und persönliche Geschichten","Reflexiones y relatos personales","日々の思いと個人的な記録","Размышления о жизни и личные истории","生活隨想與個人記錄","生活隨想與個人記錄"],
    ["一些零散的记录","A few miscellaneous notes","Einige verstreute Notizen","Algunas notas sueltas","いくつかの雑記","Несколько разрозненных заметок","一些零散的記錄","一些零散的記錄"],
    ["浏览这个分类下的文章","Explore posts in this category","Beiträge dieser Kategorie ansehen","Ver artículos de esta categoría","このカテゴリーの記事を見る","Статьи в этой категории","瀏覽此分類下的文章","瀏覽此分類下的文章"],
    ["这门课的笔记已整理成完整目录。","These notes are organized in a course index.","Diese Notizen sind in einem Kursverzeichnis geordnet.","Estos apuntes están organizados en un índice del curso.","この講義ノートは目次にまとめています。","Заметки курса собраны в отдельном указателе.","這門課的筆記已整理成完整目錄。","這門課的筆記已整理成完整目錄。"],
    ["查看课程目录 →","View course contents →","Kursübersicht ansehen →","Ver índice del curso →","講義目次を見る →","К содержанию курса →","查看課程目錄 →","查看課程目錄 →"],
    ["课程笔记已合并至分类","Course notes are listed under Categories","Kursnotizen finden Sie unter Kategorien","Los apuntes están en Categorías","講義ノートは「カテゴリー」にあります","Конспекты курсов находятся в разделе «Категории»","課程筆記已整合至分類","課程筆記已整合至分類"],
    ["在分类页浏览所有课程和其他文章。","Browse all courses and other posts on the Categories page.","Alle Kurse und weiteren Beiträge finden Sie unter Kategorien.","Consulta los cursos y otros artículos en Categorías.","カテゴリーから各講義や記事を閲覧できます。","Все курсы и статьи доступны в разделе «Категории».","在分類頁瀏覽所有課程與其他文章。","在分類頁瀏覽所有課程與其他文章。"],
    ["前往分类 →","Go to Categories →","Zu den Kategorien →","Ir a Categorías →","カテゴリーへ →","Перейти к категориям →","前往分類 →","前往分類 →"],
    ["PROJECTS","PROJECTS","PROJEKTE","PROYECTOS","プロジェクト","ПРОЕКТЫ","專題","專題"],
    ["PERSONAL NOTES","PERSONAL NOTES","PERSÖNLICHE TEXTE","NOTAS PERSONALES","個人記録","ЛИЧНЫЕ ЗАМЕТКИ","個人隨筆","個人隨筆"],
    ["MISCELLANEOUS","MISCELLANEOUS","SONSTIGES","VARIOS","その他","РАЗНОЕ","其他","其他"],
    ["COLLECTION","COLLECTION","SAMMLUNG","COLECCIÓN","コレクション","ПОДБОРКА","合集","合集"],
    ["COURSE","COURSE","KURS","KURSO","講義","КУРС","課程","課程"],
    ["COURSE NOTES","COURSE NOTES","KURSNOTIZEN","APUNTES DEL CURSO","講義ノート","КОНСПЕКТЫ КУРСА","課程筆記","課程筆記"],
    ["THE NOTEBOOK","THE NOTEBOOK","DAS NOTIZBUCH","EL CUADERNO","ノート","ЗАПИСНАЯ КНИЖКА","筆記","筆記"],
    ["Multimodal Learning","Multimodal Learning","Multimodales Lernen","Aprendizaje multimodal","マルチモーダル学習","Мультимодальное обучение","多模態學習","多模態學習"],
    ["算法设计与分析","Algorithm Design and Analysis","Algorithmendesign und -analyse","Diseño y análisis de algoritmos","アルゴリズム設計と解析","Разработка и анализ алгоритмов","演算法設計與分析","演算法設計與分析"],
    ["自然语言处理基础","Fundamentals of Natural Language Processing","Grundlagen der Sprachverarbeitung","Fundamentos del procesamiento del lenguaje natural","自然言語処理の基礎","Основы обработки естественного языка","自然語言處理基礎","自然語言處理基礎"],
    ["生成模型基础","Fundamentals of Generative Models","Grundlagen generativer Modelle","Fundamentos de modelos generativos","生成モデルの基礎","Основы генеративных моделей","生成模型基礎","生成模型基礎"],
    ["多模态学习","Multimodal Learning","Multimodales Lernen","Aprendizaje multimodal","マルチモーダル学習","Мультимодальное обучение","多模態學習","多模態學習"],
    ["这份笔记整理了课程中网络流、计算复杂性与算法设计等内容，适合按目录顺序阅读或按主题查阅。","These notes cover network flows, computational complexity, and algorithm design. Read them in order or explore by topic.","Diese Notizen behandeln Netzwerkflüsse, Komplexität und Algorithmen – geordnet oder thematisch.","Estos apuntes cubren flujos en redes, complejidad y diseño de algoritmos.","ネットワークフロー、計算複雑性、アルゴリズム設計を順にまとめています。","Заметки охватывают потоки в сетях, сложность вычислений и разработку алгоритмов.","這份筆記整理了網路流、計算複雜度與演算法設計等內容，可依目錄或主題閱讀。","這份筆記整理了網路流、計算複雜度與演算法設計等內容，可依目錄或主題閱讀。"],
    ["这份笔记围绕自然语言处理的基础概念和建模方法展开，记录课程中涉及的主要知识点。","These notes introduce core concepts and modeling methods in natural language processing.","Diese Notizen stellen Grundbegriffe und Modellierungsmethoden der Sprachverarbeitung vor.","Estos apuntes presentan conceptos y métodos básicos del procesamiento del lenguaje natural.","自然言語処理の基本概念とモデル化手法をまとめています。","Заметки знакомят с основными понятиями и методами моделирования в обработке естественного языка.","這份筆記整理自然語言處理的基礎概念與建模方法。","這份筆記整理自然語言處理的基礎概念與建模方法。"],
    ["这份笔记整理了生成模型的核心方法与相关专题，包含模型原理、加速和评估等内容。","These notes cover core generative models, including their principles, acceleration, and evaluation.","Diese Notizen behandeln generative Modelle, ihre Grundlagen, Beschleunigung und Evaluation.","Estos apuntes cubren modelos generativos, sus principios, aceleración y evaluación.","生成モデルの原理、高速化、評価などの主要テーマをまとめています。","Заметки охватывают принципы генеративных моделей, их ускорение и оценку.","這份筆記整理生成模型的核心方法，涵蓋原理、加速與評估。","這份筆記整理生成模型的核心方法，涵蓋原理、加速與評估。"],
    ["这组笔记围绕多模态学习展开，涵盖视觉与语言基础、联合表示、对齐方法、注意力机制及视觉语言模型。","These notes cover visual and language foundations, joint representations, alignment, attention, and vision-language models.","Diese Notizen behandeln Seh- und Sprachgrundlagen, gemeinsame Repräsentationen, Ausrichtung, Aufmerksamkeit und Vision-Language-Modelle.","Estos apuntes cubren fundamentos visuales y lingüísticos, representaciones conjuntas, alineación, atención y modelos visión-lenguaje.","視覚と言語の基礎、共同表現、対応付け、注意機構、視覚言語モデルを扱います。","Заметки охватывают основы зрения и языка, совместные представления, выравнивание, внимание и визуально-языковые модели.","這組筆記涵蓋視覺與語言基礎、聯合表示、對齊方法、注意力機制及視覺語言模型。","這組筆記涵蓋視覺與語言基礎、聯合表示、對齊方法、注意力機制及視覺語言模型。"],
    ["从问题复杂度到近似算法、网络流与随机算法。","From computational complexity to approximation, network flows, and randomized algorithms.","Von Komplexität über Approximation bis zu Flüssen und randomisierten Algorithmen.","De la complejidad a la aproximación, los flujos y los algoritmos aleatorios.","計算量、近似、ネットワークフロー、ランダム化アルゴリズムを扱います。","От сложности вычислений до приближённых, потоковых и рандомизированных алгоритмов.","從問題複雜度到近似演算法、網路流與隨機演算法。","從問題複雜度到近似演算法、網路流與隨機演算法。"],
    ["从词义、语言模型到序列建模与句法分析。","From word meaning and language models to sequence modeling and syntax.","Von Wortbedeutung und Sprachmodellen bis zu Sequenzen und Syntax.","Del significado y los modelos de lenguaje al modelado secuencial y la sintaxis.","語義、言語モデル、系列モデル、構文解析を扱います。","От значения слов и языковых моделей до последовательностей и синтаксиса.","從詞義、語言模型到序列建模與句法分析。","從詞義、語言模型到序列建模與句法分析。"],
    ["探索 VAE、自回归模型、GAN 与扩散模型等生成方法。","Explore VAEs, autoregressive models, GANs, diffusion models, and more.","Ein Überblick über VAE, autoregressive Modelle, GANs und Diffusionsmodelle.","Explora VAE, modelos autorregresivos, GAN y modelos de difusión.","VAE、自己回帰モデル、GAN、拡散モデルなどを紹介します。","Обзор VAE, авторегрессионных моделей, GAN и диффузионных моделей.","探索 VAE、自迴歸模型、GAN 與擴散模型等生成方法。","探索 VAE、自回歸模型、GAN 與擴散模型等生成方法。"],
    ["从视觉与语言基础，到多模态表示、跨模态对齐和基础模型。","From visual and language foundations to multimodal representations, alignment, and foundation models.","Von visuellen und sprachlichen Grundlagen bis zu multimodalen Repräsentationen, Ausrichtung und Basismodellen.","De los fundamentos visuales y lingüísticos a las representaciones multimodales, la alineación y los modelos fundacionales.","視覚・言語の基礎から、マルチモーダル表現、対応付け、基盤モデルまでを扱います。","От основ зрения и языка до мультимодальных представлений, выравнивания и базовых моделей.","從視覺與語言基礎，到多模態表示、跨模態對齊與基礎模型。","從視覺與語言基礎，到多模態表示、跨模態對齊與基礎模型。"],
    ["课程介绍","Course Introduction","Kurseinführung","Introducción al curso","講義紹介","Введение в курс","課程介紹","課程介紹"],
    ["问题复杂度","Computational Complexity","Berechnungskomplexität","Complejidad computacional","計算複雑性","Вычислительная сложность","問題複雜度","問題複雜度"],
    ["NP完全","NP-Completeness","NP-Vollständigkeit","NP-completitud","NP完全","NP-полнота","NP 完全","NP 完全"],
    ["近似算法","Approximation Algorithms","Approximationsalgorithmen","Algoritmos de aproximación","近似アルゴリズム","Приближённые алгоритмы","近似演算法","近似演算法"],
    ["网络流","Network Flow","Netzwerkfluss","Flujo en redes","ネットワークフロー","Потоки в сетях","網路流","網路流"],
    ["随机算法","Randomized Algorithms","Randomisierte Algorithmen","Algoritmos aleatorizados","ランダム化アルゴリズム","Рандомизированные алгоритмы","隨機演算法","隨機演算法"],
    ["词义消歧","Word Sense Disambiguation","Wortsinndisambiguierung","Desambiguación léxica","語義曖昧性解消","Разрешение лексической неоднозначности","詞義消歧","詞義消歧"],
    ["分类 - 对数线性模型","Classification: Log-linear Models","Klassifikation: log-lineare Modelle","Clasificación: modelos log-lineales","分類：対数線形モデル","Классификация: лог-линейные модели","分類－對數線性模型","分類－對數線性模型"],
    ["语言模型","Language Models","Sprachmodelle","Modelos de lenguaje","言語モデル","Языковые модели","語言模型","語言模型"],
    ["自然语言模型","Natural Language Models","Natürliche Sprachmodelle","Modelos de lenguaje natural","自然言語モデル","Модели естественного языка","自然語言模型","自然語言模型"],
    ["分布语义学","Distributional Semantics","Distributionelle Semantik","Semántica distribucional","分布意味論","Дистрибутивная семантика","分布語義學","分布語義學"],
    ["序列标注 - 隐马尔可夫模型","Sequence Labeling: Hidden Markov Models","Sequenzmarkierung: Hidden-Markov-Modelle","Etiquetado secuencial: modelos ocultos de Markov","系列標注：隠れマルコフモデル","Разметка последовательностей: скрытые модели Маркова","序列標註－隱馬可夫模型","序列標註－隱馬可夫模型"],
    ["神经序列建模及其扩展","Neural Sequence Modeling and Extensions","Neuronale Sequenzmodellierung und Erweiterungen","Modelado neuronal de secuencias y extensiones","ニューラル系列モデルとその拡張","Нейросетевое моделирование последовательностей и расширения","神經序列建模及其擴充","神經序列建模及其擴充"],
    ["句法分析Ⅰ","Syntactic Parsing I","Syntaktische Analyse I","Análisis sintáctico I","構文解析 I","Синтаксический анализ I","句法分析 I","句法分析 I"],
    ["句法分析 II","Syntactic Parsing II","Syntaktische Analyse II","Análisis sintáctico II","構文解析 II","Синтаксический анализ II","句法分析 II","句法分析 II"],
    ["变分自编码器(VAE)","Variational Autoencoders (VAE)","Variationale Autoencoder (VAE)","Autoencoders variacionales (VAE)","変分オートエンコーダ（VAE）","Вариационные автоэнкодеры (VAE)","變分自編碼器（VAE）","變分自編碼器（VAE）"],
    ["自回归模型(Transformer&AR)","Autoregressive Models (Transformer & AR)","Autoregressive Modelle (Transformer & AR)","Modelos autorregresivos (Transformer y AR)","自己回帰モデル（Transformer・AR）","Авторегрессионные модели (Transformer и AR)","自迴歸模型（Transformer 與 AR）","自回歸模型（Transformer 與 AR）"],
    ["生成对抗模型(GAN)","Generative Adversarial Networks (GAN)","Generative Adversarial Networks (GAN)","Redes generativas antagónicas (GAN)","敵対的生成ネットワーク（GAN）","Генеративно-состязательные сети (GAN)","生成對抗網路（GAN）","生成對抗網路（GAN）"],
    ["调试","Debugging","Fehlersuche","Depuración","デバッグ","Отладка","除錯","除錯"],
    ["Normalizing Flow","Normalizing Flows","Normalizing Flows","Flujos normalizantes","正規化フロー","Нормализующие потоки","正規化流","正規化流"],
    ["扩散模型(Diffusion)","Diffusion Models","Diffusionsmodelle","Modelos de difusión","拡散モデル","Диффузионные модели","擴散模型","擴散模型"],
    ["模型加速","Model Acceleration","Modellbeschleunigung","Aceleración de modelos","モデル高速化","Ускорение моделей","模型加速","模型加速"],
    ["能量模型","Energy-based Models","Energiebasierte Modelle","Modelos basados en energía","エネルギーベースモデル","Энергетические модели","能量模型","能量模型"],
    ["评估","Evaluation","Evaluation","Evaluación","評価","Оценка","評估","評估"],
    ["多模态学习概览","Multimodal Learning Overview","Überblick zum multimodalen Lernen","Introducción al aprendizaje multimodal","マルチモーダル学習の概要","Обзор мультимодального обучения","多模態學習概覽","多模態學習概覽"],
    ["公式与计算","Formulas and Calculations","Formeln und Berechnungen","Fórmulas y cálculos","公式と計算","Формулы и вычисления","公式與計算","公式與計算"],
    ["练习题与参考解答","Practice Problems and Solutions","Übungsaufgaben und Lösungen","Ejercicios y soluciones","練習問題と解答","Задачи и решения","練習題與參考解答","練習題與參考解答"],
    ["数竞生涯回忆录（上）","Memories of Mathematical Competitions (Part 1)","Erinnerungen an Mathematikwettbewerbe (Teil 1)","Recuerdos de olimpiadas matemáticas (Parte 1)","数学コンテストの思い出（前編）","Воспоминания о математических олимпиадах (часть 1)","數學競賽回憶錄（上）","數學競賽回憶錄（上）"],
    ["数竞生涯回忆录（下）","Memories of Mathematical Competitions (Part 2)","Erinnerungen an Mathematikwettbewerbe (Teil 2)","Recuerdos de olimpiadas matemáticas (Parte 2)","数学コンテストの思い出（後編）","Воспоминания о математических олимпиадах (часть 2)","數學競賽回憶錄（下）","數學競賽回憶錄（下）"],
    ["📜 每日诗词","📜 Daily Poetry","📜 Gedicht des Tages","📜 Poesía del día","📜 今日の詩","📜 Стихотворение дня","📜 每日詩詞","📜 每日詩詞"],
    ["🎵 每日推歌","🎵 Daily Music","🎵 Musiktipp des Tages","🎵 Música del día","🎵 今日の曲","🎵 Песня дня","🎵 每日推歌","🎵 每日推歌"],
    ["阅读进度","Reading progress","Lesefortschritt","Progreso de lectura","読書の進捗","Ход чтения","閱讀進度","閱讀進度"],
    ["🔊 朗读","🔊 Read aloud","🔊 Vorlesen","🔊 Leer en voz alta","🔊 読み上げ","🔊 Читать вслух","🔊 朗讀","🔊 朗讀"],
    ["📋 复制","📋 Copy","📋 Kopieren","📋 Copiar","📋 コピー","📋 Копировать","📋 複製","📋 複製"],
    ["换一首","Another poem","Ein anderes Gedicht","Otro poema","別の詩","Другое стихотворение","換一首","換一首"],
    ["The original article content is not automatically translated.","The article body remains in Chinese.","Der Artikeltext bleibt auf Chinesisch.","El texto del artículo permanece en chino.","記事本文は中国語のままです。","Текст статьи остаётся на китайском языке.","文章內文仍為中文。","文章內文仍為中文。"]
  ];

  var locales = ['en', 'de', 'es', 'ja', 'ru', 'zh-hk', 'zh-tw'];
  var dictionaries = {};
  locales.forEach(function (locale, index) {
    dictionaries[locale] = {};
    rows.forEach(function (row) { if (row[index + 1]) dictionaries[locale][row[0]] = row[index + 1]; });
  });

  var slogans = {
    en: 'Hello! I’m Yjy, a third-year student at Peking University studying Intelligence Science and Technology.<br>I’m learning about AI and enjoy literature, history, music, and travel.<br>Welcome to my blog!<br><a class="hero-about-link" href="/about/">More about me <span aria-hidden="true">↗</span></a>',
    de: 'Hallo! Ich bin Yjy und studiere im dritten Jahr Intelligente Wissenschaft und Technologie an der Peking-Universität.<br>Ich beschäftige mich mit KI und mag Literatur, Geschichte, Musik und Reisen.<br>Willkommen auf meinem Blog!<br><a class="hero-about-link" href="/about/">Mehr über mich <span aria-hidden="true">↗</span></a>',
    es: '¡Hola! Soy Yjy, estudiante de tercer año de Ciencia y Tecnología de la Inteligencia en la Universidad de Pekín.<br>Estoy aprendiendo sobre IA y me gustan la literatura, la historia, la música y viajar.<br>¡Te doy la bienvenida a mi blog!<br><a class="hero-about-link" href="/about/">Más sobre mí <span aria-hidden="true">↗</span></a>',
    ja: 'こんにちは、Yjyです。北京大学で知能科学技術を学ぶ学部3年生です。<br>AIを学びながら、文学、歴史、音楽、旅行を楽しんでいます。<br>ブログへようこそ！<br><a class="hero-about-link" href="/about/">プロフィール <span aria-hidden="true">↗</span></a>',
    ru: 'Привет! Я Yjy, студент третьего курса Пекинского университета по специальности «Интеллектуальные науки и технологии».<br>Я изучаю ИИ и люблю литературу, историю, музыку и путешествия.<br>Добро пожаловать в мой блог!<br><a class="hero-about-link" href="/about/">Обо мне <span aria-hidden="true">↗</span></a>',
    'zh-hk': '你好！我是 Yjy，現就讀於北京大學智能科學與技術專業三年級。<br>我正在 AI 領域繼續學習與探索。<br>我喜歡文學、歷史、音樂與旅行。<br>歡迎來到我的部落格！<br><a class="hero-about-link" href="/about/">更多關於我 <span aria-hidden="true">↗</span></a>',
    'zh-tw': '你好！我是 Yjy，目前就讀於北京大學智能科學與技術專業三年級。<br>我正在 AI 領域繼續學習與探索。<br>我喜歡文學、歷史、音樂與旅行。<br>歡迎來到我的部落格！<br><a class="hero-about-link" href="/about/">更多關於我 <span aria-hidden="true">↗</span></a>',
    'zh-cn': '你好呀！我是 Yjy，PKU 信科智能专业大三学生。<br>正在 AI 方向继续学习和探索。<br>我喜欢文学、历史、音乐和旅行。<br>欢迎来到我的博客！<br><a class="hero-about-link" href="/about/">更多关于我 <span aria-hidden="true">↗</span></a>'
  };

  var aboutText = {
    en: ['About me', 'I’m Yjy, an undergraduate at Peking University studying Intelligence Science and Technology. I’m learning about AI and enjoy literature, history, music, and travel.', 'This is my personal space for course notes and life. Welcome, and thank you for visiting!', 'The detailed introduction and blog history below are in Chinese.'],
    de: ['Über mich', 'Ich bin Yjy und studiere Intelligente Wissenschaft und Technologie an der Peking-Universität. Ich beschäftige mich mit KI und mag Literatur, Geschichte, Musik und Reisen.', 'Hier teile ich Kursnotizen und persönliche Erlebnisse. Schön, dass du vorbeischaust!', 'Die ausführliche Vorstellung und Bloggeschichte unten sind auf Chinesisch.'],
    es: ['Sobre mí', 'Soy Yjy, estudiante de grado en Ciencia y Tecnología de la Inteligencia en la Universidad de Pekín. Estoy aprendiendo sobre IA y me gustan la literatura, la historia, la música y viajar.', 'Este es mi espacio personal para apuntes y relatos de vida. ¡Gracias por visitar!', 'La presentación completa y la historia del blog aparecen abajo en chino.'],
    ja: ['プロフィール', 'Yjyです。北京大学で知能科学技術を学んでいます。AIを学びながら、文学、歴史、音楽、旅行を楽しんでいます。', '授業ノートや日々の記録をまとめる個人ブログです。訪問ありがとうございます！', '以下の詳しい紹介とブログの履歴は中国語で記載しています。'],
    ru: ['Обо мне', 'Я Yjy, студент бакалавриата Пекинского университета по специальности «Интеллектуальные науки и технологии». Я изучаю ИИ и люблю литературу, историю, музыку и путешествия.', 'Это моё личное пространство для учебных заметок и историй из жизни. Спасибо за визит!', 'Подробная биография и история блога ниже написаны на китайском языке.'],
    'zh-hk': ['關於我', '我是 Yjy，目前就讀於北京大學智能科學與技術專業，正在 AI 領域學習與探索，也喜歡文學、歷史、音樂與旅行。', '這裡記錄課程筆記與生活點滴，感謝你來訪！', '下方較詳細的自我介紹與部落格歷史以簡體中文撰寫。'],
    'zh-tw': ['關於我', '我是 Yjy，目前就讀於北京大學智能科學與技術專業，正在 AI 領域學習與探索，也喜歡文學、歷史、音樂與旅行。', '這裡記錄課程筆記與生活點滴，感謝你來訪！', '下方較詳細的自我介紹與部落格歷史以簡體中文撰寫。']
  };

  var selectors = [
    '.hero-about-link', '.section-kicker', '.course-card-index', '.about-localized h2', '.about-content .markdown-body h2', '.about-content .markdown-body h3',
    '.reading-title', '.reading-course-link', '.course-about h2', '.course-about p', '.section-heading h2', '.section-heading p', '.section-link', '.course-card h3', '.course-card h2', '.course-card p', '.course-card-foot span:first-child',
    '.journal-meta', '.journal-title', '.category-overview .course-page-heading h1', '.category-overview .course-page-heading p', '.chapter-heading h2', '.chapter-heading span',
    '.other-category-name', '.other-category-description', '.other-category-count', '.other-category-label', '.course-breadcrumb a', '.course-breadcrumb span:last-child',
    '.courses-page:not(.category-overview) .course-page-heading h1', '.courses-page:not(.category-overview) .course-page-heading p:not(.legacy-course-link)', '.legacy-course-link a', '.course-summary span',
    '.chapter-title', '.post-course-breadcrumb a', '.mobile-toc summary', '.course-back', '.course-neighbors small', '.course-neighbors strong',
    '.legacy-category-notice strong', '.legacy-category-notice p', '.legacy-category-notice a', '.archive-card-title', '.archive-card-tag',
    '.daily-card h3', '#poem-read-btn', '#poem-copy-btn', '.poem-actions button:last-child', '.toc-header span', '.toc-reading-progress-row span:first-child',
    '.translation-notice span'
  ];

  var originals = new WeakMap();
  function getLocale() {
    var lang = (document.documentElement.lang || 'zh-CN').toLowerCase();
    if (lang.indexOf('zh-tw') === 0) return 'zh-tw';
    if (lang.indexOf('zh-hk') === 0) return 'zh-hk';
    if (lang.indexOf('zh') === 0) return 'zh-cn';
    return locales.indexOf(lang) >= 0 ? lang : 'en';
  }
  function translate(value, locale) {
    var dictionary = dictionaries[locale] || dictionaries.en;
    var result = value.replace(/(\d{4}) 春/g, function (_, year) { return locale === 'ru' ? 'Весна ' + year : year + ' ' + ({en:'Spring',de:'Frühjahr',es:'primavera',ja:'春','zh-hk':'春季','zh-tw':'春季'}[locale] || 'Spring'); })
      .replace(/(\d{4}) 秋/g, function (_, year) { return locale === 'ru' ? 'Осень ' + year : year + ' ' + ({en:'Fall',de:'Herbst',es:'otoño',ja:'秋','zh-hk':'秋季','zh-tw':'秋季'}[locale] || 'Fall'); })
      .replace(/(\d+) 篇笔记/g, function (_, count) {
        var n = Number(count), last = n % 10, lastTwo = n % 100;
        var ruSuffix = last === 1 && lastTwo !== 11 ? ' заметка' : last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14) ? ' заметки' : ' заметок';
        var suffix = {en:count === '1' ? ' note' : ' notes',de:' Notizen',es:count === '1' ? ' apunte' : ' apuntes',ja:'件のノート',ru:ruSuffix,'zh-hk':'篇筆記','zh-tw':'篇筆記'}[locale] || ' notes';
        return count + suffix;
      })
      .replace(/(\d+) 篇文章/g, function (_, count) {
        var n = Number(count), last = n % 10, lastTwo = n % 100;
        var ruSuffix = last === 1 && lastTwo !== 11 ? ' статья' : last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14) ? ' статьи' : ' статей';
        var suffix = {en:count === '1' ? ' post' : ' posts',de:count === '1' ? ' Beitrag' : ' Beiträge',es:count === '1' ? ' artículo' : ' artículos',ja:'件の記事',ru:ruSuffix,'zh-hk':'篇文章','zh-tw':'篇文章'}[locale] || ' posts';
        return count + suffix;
      });
    var keys = Object.keys(dictionary).sort(function (a, b) { return b.length - a.length; });
    var pattern = new RegExp(keys.map(function (key) { return key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|'), 'g');
    result = result.replace(pattern, function (match) { return dictionary[match]; });
    result = result.replace(/← 返回 (.+?) 目录/g, function (_, course) {
      return ({en:'← Back to ' + course,de:'← Zur Übersicht von ' + course,es:'← Volver a ' + course,ja:'← ' + course + 'の目次に戻る',ru:'← К содержанию курса «' + course + '»','zh-hk':'← 返回' + course + '目錄','zh-tw':'← 返回' + course + '目錄'}[locale] || '← Back to ' + course);
    });
    return result;
  }
  function apply() {
    var locale = getLocale();
    var subtitle = document.querySelector('#banner.hero-banner #subtitle');
    if (subtitle && slogans[locale]) subtitle.innerHTML = slogans[locale];
    document.querySelectorAll(selectors.join(',')).forEach(function (el) {
      if (!originals.has(el)) originals.set(el, el.textContent);
      var source = originals.get(el);
      el.textContent = locale === 'zh-cn' ? source : translate(source, locale);
    });
    var controls = {
      'song-volume': ['音量','Volume','Lautstärke','Volumen','音量','Громкость','音量','音量'],
      'song-prev-btn': ['上一首','Previous track','Vorheriger Titel','Pista anterior','前の曲','Предыдущий трек','前一首','前一首'],
      'song-play-btn': ['播放 / 暂停','Play / pause','Wiedergabe / Pause','Reproducir / pausar','再生／一時停止','Воспроизвести / пауза','播放／暫停','播放／暫停'],
      'song-next-btn': ['下一首','Next track','Nächster Titel','Pista siguiente','次の曲','Следующий трек','下一首','下一首']
    };
    Object.keys(controls).forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var labels = controls[id];
      var label = labels[locale === 'zh-cn' ? 0 : locales.indexOf(locale) + 1] || labels[1];
      el.title = label;
      el.setAttribute('aria-label', label);
    });
    var about = document.getElementById('about-translation');
    if (about) {
      var aboutCopy = aboutText[locale] || aboutText.en;
      about.hidden = locale === 'zh-cn';
      about.querySelector('[data-about-title]').textContent = aboutCopy[0];
      about.querySelectorAll('[data-about-copy]').forEach(function (p) { p.textContent = aboutCopy[Number(p.getAttribute('data-about-copy')) + 1]; });
    }
    var notice = document.querySelector('.translation-notice');
    if (notice) {
      var title = notice.querySelector('.translated-post-title');
      var sourceTitle = title.getAttribute('data-original-title');
      var translated = locale === 'zh-cn' ? sourceTitle : translate(sourceTitle, locale);
      title.textContent = translated === sourceTitle ? '' : translated;
      notice.hidden = locale === 'zh-cn';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply();
    document.querySelectorAll('.language-option').forEach(function (option) {
      option.addEventListener('click', function () { window.setTimeout(apply, 50); });
    });
    if (window.Fluid && Fluid.events && typeof Fluid.events.registerRefreshCallback === 'function') Fluid.events.registerRefreshCallback(apply);
  });
})();
