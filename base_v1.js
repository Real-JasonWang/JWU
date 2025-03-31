document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem("theme");
    const htmlElement = document.documentElement;
    const languageToggle = document.getElementById("language-toggle");
    let currentLanguage = localStorage.getItem("language") || "en";
    const translations = {
       // Nav
       navHome: {
          en: "Home",
          zh: "首页"
       },
       navAcademics: {
          en: "Academics",
          zh: "学术"
       },
       navAdmissions: {
          en: "Admissions",
          zh: "招生"
       },
       navAbout: {
          en: "About",
          zh: "关于"
       },
       // Button
       langToggleToZh: {
          en: "EN-US / 简体中文",
          zh: "EN-US / 简体中文"
       },
       themeToggleLight: {
          en: "Light Mode",
          zh: "浅色模式"
       },
       themeToggleDark: {
          en: "Dark Mode",
          zh: "深色模式"
       },
       // Hero
       heroSubtitle1: {
          en: "Self-study is your greatest strength.",
          zh: "独学之力，莫之能及。"
       },
       heroSubtitle2: {
          en: "Welcome to JWU.",
          zh: "欢迎来到Jason Wang University。"
       },
       // Home
       cardTitleAcademics: {
          en: "Customizable Academics",
          zh: "可定制化学术"
       },
       cardDescAcademics: {
          en: "Explore groundbreaking, flexible programs you tailor yourself. At JWU, you direct your unique learning journey towards unprofessional results.",
          zh: "探索开创性的、灵活的、由您自己作茧自缚的课程。在Jason Wang University，您可以引导自己独特的学习旅程，走向非专业化的成果。"
       },
       cardTitleMentorship: {
          en: "Self-Mentorship",
          zh: "自我指导"
       },
       cardDescMentorship: {
          en: "Forge your own path to excellence. With no world-class materials and no peer support, you are your own guide. Mastery is self-made.",
          zh: "开辟自己的卓越之路。没有世界一流的材料，没有同伴的支持，你就是自己的导师。精通在于自我吹逼。"
       },
       cardTitleCommunity: {
          en: "No Community",
          zh: "没有社区"
       },
       cardDescCommunity: {
          en: "If you are so socially intimidated, why would you connect with ambitious, motivated peers from all over the world? Be creative in a lonely atmosphere full of personal initiative.",
          zh: "如果你如此社恐，为什么要与来自世界各地雄心勃勃、积极进取的同龄人建立联系？在充满个人主动性的孤独氛围中发挥创造力。"
       },
       cardTitleResearch: {
          en: "Forget Research",
          zh: "忘掉研究"
       },
       cardDescResearch: {
          en: "No one cares about your results because there is always something better. No need to invent leading edge innovations: conduct interest-based explorations guided by your own curiosity rather than research.",
          zh: "没有人关心你的成果，因为总有更好的东西。无需发明前沿创新：进行由你自己的好奇心引导、基于兴趣的探索，而非研究。"
       },
       cardTitleEnvironment: {
          en: "Non-existing Environment",
          zh: "不存在的环境"
       },
       cardDescEnvironment: {
          en: "With digital and physical resources that simply aren not available, our third-party, non-partnered café and at-home environments support your self-directed success.",
          zh: "凭借根本不存在的数字和物理资源，我们的第三方非合作苍蝇馆子和家庭环境支持您自主取得成功。"
       },
       cardTitleSkills: {
          en: "Fucked-up Skills",
          zh: "牛逼技能"
       },
       cardDescSkills: {
          en: "Master critical thinking and build the ultimate future skill: strong tanking capabilities and the ability to strongly counter workplace and academic PUA and angry criticism of everything.",
          zh: "掌握批判性思维，培养终极未来技能：强大的抗压能力，以及强力反击职场和学术PUA及对一切事物的红温批评的能力。"
       },
       // Academics
       academicsTitle: {
          en: "Academics at JWU",
          zh: "Jason Wang University的学术"
       },
       academicsIntro: {
          en: "As the #23,625 university in the world, JWU's academic philosophy is rooted in self-directed mastery. We provide nothing; you define your own knowledge and expertise.",
          zh: "作为世界第23,625的大学，Jason Wang University的学术理念根植于自主学习。我们什么都不提供；你定义自己的知识和专长。"
       },
       academicsDegreeExamplesTitle: {
          en: "Degree Examples",
          zh: "学位示例"
       },
       academicsDegreeBS: {
          en: "<strong>Bachelor of Science</strong><br />No solid foundation is needed, just be driven by your natural curiosity and shit in the fields of science and technology.",
          zh: "<strong>理学学士</strong><br />无需扎实基础，只需被你的天生好奇心驱动，在科学和技术领域随心所欲地探索自学。"
       },
       academicsDegreeMasters: {
          en: "<strong>Master's Programs</strong><br />Fuck the shitty master's supervisor. Achieve complete unspecialization through loose and free self-study and self-designed advanced courses.",
          zh: "<strong>硕士项目</strong><br />扎西德勒的垃圾硕士导师。通过松散自由的自学和自行设计的高级课程，实现完全的非专业化。"
       },
       academicsDegreePhD: {
          en: "<strong>Doctoral Programs</strong><br />Participate in formulaic parallel research at your own expense and contribute to the AI-generated knowledge of the shit mountain at the pinnacle of independent scholarship.",
          zh: "<strong>博士项目</strong><br />自费参与公式化的平行研究，在独立学术的顶峰为人工智能生成的屎山知识添砖加瓦。"
       },
       academicsDegree3plus2: {
          en: "<strong>3+2 Programs</strong><br />Embrace the spirit of JWU and accelerate your journey toward a customized degree with select partner institutions such as Wild Chicken University and Home University (Shanghai Campus).",
          zh: "<strong>3+2项目</strong><br />拥抱Jason Wang University的精神，与维尔德齐肯大学（Wild Chicken University）和加里敦大学（上海校区）（Home University (Shanghai Campus)）等精选合作大学一起，加速你获得定制学位的旅程。"
       },
       academicsMajorFieldsTitle: {
          en: "Major Fields",
          zh: "主修领域"
       },
       academicsMajorFieldsDesc: {
          en: "Your major at JWU is a symbol of your independence. You can choose from our nonexistent and completely unproven portfolio of majors, or achieve true academic autonomy through our renowned Build Your Major program. Without the guidance of an expert, this unique pathway is perfectly suited to your unique temperament.",
          zh: "你在Jason Wang University的专业是你独立的象征。你可以从我们不存在且完全未经证实的专业组合中选择，或者通过我们著名的“自建专业”项目实现真正的学术自主。没有专家的指导，这条独特的道路完美契合你独特的气质。"
       },
       academicsAIMinorsTitle: {
          en: "Recommended AI Minors",
          zh: "推荐的AI辅修"
       },
       academicsAIMinorsDesc: {
          en: "Mastering generative artificial intelligence is fundamental to modern hocus pocus and the creation of shit mountains. JWU does not offer but recommends the following minors:",
          zh: "掌握生成式人工智能是现代故弄玄虚和创造屎山的基础。Jason Wang University不提供但推荐以下辅修方向："
       },
       academicsAIMinor1: {
          en: "Minor in Applied ChatGPT Writing",
          zh: "应用ChatGPT写作辅修"
       },
       academicsAIMinor2: {
          en: "Minor in Advanced Gemini Imagen 3 Art History",
          zh: "高级Gemini Imagen 3艺术史辅修"
       },
       academicsAIMinor3: {
          en: "Minor in Creative Claude Chatting",
          zh: "创意Claude聊天辅修"
       },
       academicsAIMinor4: {
          en: "Minor in 100 Percent AI Generated Code",
          zh: "百分百AI生成代码辅修"
       },
       academicsHonorsTitle: {
          en: "The JWU Commonshit Honors College",
          zh: "Jason Wang University构式荣誉学院"
       },
       academicsHonorsDesc: {
          en: "Welcome to the JWU Commonshit Honors College! This college is for students who have demonstrated exceptional talent for self-indulgence or academic folly. Here, honors means we recognize your ability to thrive without any additional resources, special instruction, or academic challenges of any kind. By joining us, you will have access to the exact same nonexistent privileges and resources as every other JWU student, but with a more powerful-sounding, useless title.",
          zh: "欢迎来到Jason Wang University构式荣誉学院！本学院专为在躺平或学术蝗虫方面表现出非凡天赋的学生而设。在这里，“荣誉”意味着我们认可你在没有任何额外资源、特殊指导或任何形式的学术挑战的情况下苟且偷生的能力。加入我们，你将获得与其他所有Jason Wang University学生完全相同的、不存在的特权和资源，但却拥有一个听起来更厉害、毫无用处的头衔。"
       },
       // Admissions
       admissionGeneratorTitle: {
          en: "Admission Letter Generator",
          zh: "录取通知书生成器"
       },
       admissionGeneratorSubtitle: {
          en: "Fill in the details below to generate your own admission letter.",
          zh: "填写以下信息以生成您自己的录取通知书。"
       },
       formLabelStudentName: {
          en: "Student Name:",
          zh: "学生姓名："
       },
       formPlaceholderStudentName: {
          en: "e.g., Jason Wang",
          zh: "例如：Jason Wang"
       },
       formLabelProgramType: {
          en: "Program Type:",
          zh: "项目类型："
       },
       formOptionUndergrad: {
          en: "Undergraduate",
          zh: "本科"
       },
       formOptionMasters: {
          en: "Master's",
          zh: "硕士"
       },
       formOptionPhD: {
          en: "PhD",
          zh: "博士"
       },
       formOption3plus2: {
          en: "3+2 Program",
          zh: "3+2 项目"
       },
       formLabelPartnerUni: {
          en: "Partner University (for 3+2):",
          zh: "合作大学 (3+2项目)："
       },
       formPlaceholderPartnerUni: {
          en: "e.g., Home University (Shanghai Campus)",
          zh: "例如：Home University (Shanghai Campus)"
       },
       formLabelMajor: {
          en: "Major / Program Name:",
          zh: "专业/项目名称："
       },
       formPlaceholderMajor: {
          en: "e.g., Shit Science",
          zh: "例如：Shit Science"
       },
       formLabelCollege: {
          en: "College / School:",
          zh: "学院："
       },
       formPlaceholderCollege: {
          en: "e.g., College of Feces",
          zh: "例如：College of Feces"
       },
       formLabelScholarship: {
          en: "Scholarship (Optional):",
          zh: "奖学金（可选）："
       },
       formPlaceholderScholarship: {
          en: "e.g., President Scholarship ($40,000)",
          zh: "President Scholarship ($40,000)"
       },
       formLabelHonors: {
          en: "Admitted to Commonshit Honors College",
          zh: "录取至构式荣誉学院"
       },
       formButtonGenerate: {
          en: "Generate PDF",
          zh: "生成PDF"
       },
       admissionApplyNowTitle: {
          en: "Apply Now",
          zh: "立即申请"
       },
       admissionApplyNowDesc: {
          en: "Ready to join Jason Wang University? You are automatically accepted! Generate your admission letter now! There is even no rejection letter!",
          zh: "准备好加入Jason Wang University了吗？你已被自动录取！立即生成你的录取通知书吧！甚至没有拒信！"
       },
       // PDF Status Messages
       pdfStatusFillFields: {
          en: "Please fill in Student Name, Major, and College.",
          zh: "请填写学生姓名、专业和学院。"
       },
       pdfStatusFillPartner: {
          en: "Please specify the Partner University for the 3+2 Program.",
          zh: "请为 3+2 项目指定合作大学。"
       },
       pdfStatusGenerating: {
          en: "Generating PDF...",
          zh: "正在生成PDF..."
       },
       pdfStatusSuccess: {
          en: "PDF downloaded successfully!",
          zh: "PDF 载成功！"
       },
       pdfStatusError: {
          en: "Error generating PDF. See console.",
          zh: "生成PDF时出错。请查看控制台。"
       },
       pdfStatusLibError: {
          en: "Error: PDF library failed to load.",
          zh: "错误：PDF库加载失败。"
       },
       pdfStatusSetupError: {
          en: "PDF generator setup incomplete.",
          zh: "PDF生成器设置不完整。"
       },
       // About
       aboutTitle: {
          en: "About JWU",
          zh: "关于Jason Wang University"
       },
       aboutPara1: {
          en: "JWU was ambiguously founded by Jason Wang on April 1, 2025, likely conceived in the midst of a midterm meltdown and failed social connections, and since its inception, JWU has steadfastly avoided innovation in higher education. We cater specifically to the extremely self-reliant and socially confused, embracing an immaterial identity that is entirely centered around the student—whether it's a crumpled paper ball covered in milky, unidentified goo on a dorm table, dozens of gum and boogers stuck under a coffee shop bar table, or a wild park bench with questionable Wi-Fi.",
          zh: "Jason Wang University由Jason Wang于2025年4月1日模模糊糊地创立，很可能是在一次炸裂的期中考试和社交失败中构思出来的。自成立以来，Jason Wang University一直坚定地避免高等教育领域的创新。我们专门迎合那些极度自力更生和社交困惑的人，拥抱一种完全以学生为中心的非物质身份——无论是在宿舍桌子上覆盖着乳白色不明粘液的皱巴巴的纸团，还是粘在食堂饭桌下的几十块口香糖和鼻屎，抑或是自带“超强6G核辐射打胎王”WIFI的野生公园长椅。"
       },
       aboutPara2: {
          en: "Today, this spirit of shitism has made JWU one of the least-known and most proudly wild-listed institutions in the world, offering an impromptu academic curriculum that technically accepts anyone. JWU is firmly rooted in shit and leads the way in avoiding the promise of global education. We may not have international students and we don't count them, and we certainly have fewer students studying abroad than any other university in the United States because there's simply nowhere else to go.",
          zh: "如今，这种构式主义精神使Jason Wang University成为世界上最不知名、最引以为傲的野鸡大学之一，提供一种技术上接纳任何人的即兴学术课程。Jason Wang University牢牢扎根于构式之中，并在逃避全球教育承诺方面处于领先地位。我们可能没有国际学生，也不统计他们，而且我们出国留学的学生肯定比美国任何其他大学都少（并非美国），因为根本无处可去。"
       },
       aboutPara3: {
          en: "JWU's student body is a mix of students struggling to apply for their ideal offers and young people who simply don't want to work hard or are just plain funny. The university uses students' own resources without spending a penny, ensuring that its scholarships benefit from one perspective: no scholarships. JWU is the engine of society's waste culture, perfectly representing those who have mastered the art of doing absolutely nothing, professionally or otherwise, while developing truly world-class shit skills.",
          zh: "Jason Wang University的学生群体由那些努力申请理想offer而挣扎的学生，以及那些根本不想努力工作或只是单纯搞笑的年轻人混合而成。大学利用学生自己的资源，分文不花，确保其奖学金从一个角度受益：没有奖学金。Jason Wang University是社会浪费文化的引擎，完美地代表了那些掌握了专业或其他方面绝对无所事事艺术的人，同时培养了真正世界一流的构式技能。"
       },
       aboutPara4: {
          en: "As the most private non-research and non-profit university, JWU provides students with a demanding education, and conducts research expenses and grants totaling about $0 per year. It counts the voice in your head and the most responsive AI chatbot as non-faculty. While others create patents, we excel at generating vain confidence and browser histories full of porn sites. JWU apparently has a large network of invisible alumni who have successfully disappeared from society and remain untraceable to this day, which may be their choice.",
          zh: "作为最私密的非研究型非营利大学，Jason Wang University为学生提供严苛的教育，每年进行的研究开支和资助总额约为0美元。它把你脑海中的声音和响应最快的AI聊天机器人算作非教职员工。当别人在创造专利时，我们擅长产生虚荣的自信和充满抖Y擦边小视频的浏览器历史记录。Jason Wang University显然拥有一个庞大的隐形校友网络，他们成功地从社会上消失，至今无法追踪，这也许是他们的选择。"
       },
       aboutMissionTitle: {
          en: "JWU Mission Statement",
          zh: "Jason Wang University使命宣言"
       },
       aboutMissionPara1: {
          en: "Jason Wang University's name and spirit are derived from one man's valiant efforts to minimize external obligations. The university exists entirely within the student's radius of hardware and instant caffeine (or marijuana high if you are in California and Canada), all of which are magnets for shunning talented, ambitious individuals.",
          zh: "Jason Wang University的名字和精神源于一个人为最大限度减少外部义务而付出的英勇努力。这所大学完全存在于学生的硬件和速溶咖啡因（如果在加州和加拿大，则是大麻叶飞起来的快感）的半径之内，所有这些都是排斥才华横溢、雄心勃勃个体的磁石。"
       },
       aboutMissionPara2: {
          en: "Thriving within strict personal boundaries and spanning zero verifiable disciplines, JWU has become the world's most minimalist platform for circumventing the challenges of learning, teaching, researching, building knowledge, and inventing new ways to ignore the human condition. Its students draw strength from the stimulating power of unfiltered internet access by mastering procrastination, barely expressing themselves online, and excelling at avoiding demanding careers. Jason Wang University's mission is to be a cozy, bottom-tier international hub. This includes not retaining any faculty, encouraging students to create projects that attract no funding, and providing an environment of intellectual void. Jason Wang University seeks to leverage the academic disadvantage of its completely inconvenient location and embrace uniformity to ensure a single, unwavering point of view in the educational void.",
          zh: "在严格的个人界限内茁壮成长，跨越零个可验证的学科，Jason Wang University已成为世界上最简约的平台，用于规避学习、教学、研究、知识构建以及发明忽视人类状况新方法的挑战。它的学生通过掌握拖延症、几乎不在网上表达自己以及擅长避免要求苛刻的职业，从未经过滤的互联网访问的刺激力量中汲取力量。Jason Wang University的使命是成为一个舒适的、垫底的国际中心。这包括不保留任何教职员工，鼓励学生创建吸引不到任何资金的项目，并提供一个智力真空的环境。Jason Wang University寻求利用其完全不便地理位置的学术劣势，并拥抱统一性，以确保在教育真空中拥有单一、坚定不移的观点。"
       },
       // Footer
       footerRights: {
          en: "All rights reserved.",
          zh: "版权所有。"
       }
    };
 
    function setLanguage(lang) {
       currentLanguage = lang;
       localStorage.setItem("language", lang);
       htmlElement.setAttribute("lang", lang === 'zh' ? 'zh-CN' : 'en');
       document.querySelectorAll('[data-translate-key]').forEach(element => {
          const key = element.getAttribute('data-translate-key');
          if (translations[key] && translations[key][lang]) {
             if (key.startsWith('academicsDegree')) {
                element.innerHTML = translations[key][lang];
             } else {
                element.textContent = translations[key][lang];
             }
          } else if (translations[key]) {
             console.warn(`Translation missing for key: ${key} in language: ${lang}`);
          }
       });
       document.querySelectorAll('[data-translate-placeholder-key]').forEach(element => {
          const key = element.getAttribute('data-translate-placeholder-key');
          if (translations[key] && translations[key][lang]) {
             element.placeholder = translations[key][lang];
          } else if (translations[key]) {
             console.warn(`Translation missing for placeholder key: ${key} in language: ${lang}`);
          }
       });
       updateThemeToggleButtonText();
    }
 
    function updateThemeToggleButtonText() {
       const isDarkMode = htmlElement.classList.contains("dark-mode");
       const lightModeKey = translations.themeToggleLight;
       const darkModeKey = translations.themeToggleDark;
       if (!lightModeKey || !darkModeKey) {
          console.error("Theme toggle translation keys are missing!");
          themeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
          return;
       }
       if (isDarkMode) {
          themeToggle.textContent = lightModeKey[currentLanguage] || lightModeKey['en'];
       } else {
          themeToggle.textContent = darkModeKey[currentLanguage] || darkModeKey['en'];
       }
    }
    if (languageToggle) {
       languageToggle.addEventListener("click", () => {
          const newLanguage = currentLanguage === 'en' ? 'zh' : 'en';
          setLanguage(newLanguage);
       });
    } else {
       console.error("Language toggle button not found!");
    }
 
    function applyTheme(theme) {
       if (theme === "dark") {
          htmlElement.classList.add("dark-mode");
          themeToggle.textContent = "Light Mode";
       } else {
          htmlElement.classList.remove("dark-mode");
          themeToggle.textContent = "Dark Mode";
       }
       if (window.particles && typeof window.particles.updateTheme === "function") {
          setTimeout(() => window.particles.updateTheme(), 50);
       }
    }
    if (currentTheme === "dark") {
       applyTheme("dark");
    } else if (currentTheme === "light") {
       applyTheme("light");
    } else {
       applyTheme(prefersDarkScheme.matches ? "dark" : "light");
    }
    themeToggle.addEventListener("click", () => {
       let newTheme = htmlElement.classList.contains("dark-mode") ? "light" : "dark";
       applyTheme(newTheme);
       localStorage.setItem("theme", newTheme);
    });
    prefersDarkScheme.addEventListener("change", (e) => {
       if (!localStorage.getItem("theme")) {
          applyTheme(e.matches ? "dark" : "light");
       }
    });
    const canvas = document.getElementById("particle-canvas");
    if (canvas) {
       const ctx = canvas.getContext("2d");
       let particleArray = [];
       class Particle {
          constructor(x, y, size, color, speedX, speedY) {
             this.x = x;
             this.y = y;
             this.size = size;
             this.color = color;
             this.speedX = speedX;
             this.speedY = speedY;
          }
          draw() {
             ctx.fillStyle = this.color;
             ctx.beginPath();
             ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
             ctx.fill();
          }
          update(w, h) {
             this.x += this.speedX;
             this.y += this.speedY;
             if (this.x + this.size > w || this.x - this.size < 0) {
                this.speedX = -this.speedX;
             }
             if (this.y + this.size > h || this.y - this.size < 0) {
                this.speedY = -this.speedY;
             }
             this.draw();
          }
          updateColor(c) {
             this.color = c;
          }
       }
 
       function initParticles() {
          particleArray = [];
          setTimeout(() => {
             const particleColor = getComputedStyle(htmlElement).getPropertyValue("--particle-color").trim();
             if (!canvas.width || !canvas.height) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
             }
             const num = (canvas.width * canvas.height) / 9000;
             for (let i = 0; i < num; i++) {
                let size = Math.random() * 1.5 + 0.5;
                let x = Math.random() * (canvas.width - size * 2) + size;
                let y = Math.random() * (canvas.height - size * 2) + size;
                let speedX = Math.random() * 0.4 - 0.2;
                let speedY = Math.random() * 0.4 - 0.2;
                particleArray.push(new Particle(x, y, size, particleColor, speedX, speedY));
             }
          }, 0);
       }
 
       function connectParticles() {
          let opacityValue = 1;
          const lineColor = getComputedStyle(htmlElement).getPropertyValue("--particle-color").trim();
          const dist = 100;
          for (let a = 0; a < particleArray.length; a++) {
             for (let b = a + 1; b < particleArray.length; b++) {
                let dx = particleArray[a].x - particleArray[b].x;
                let dy = particleArray[a].y - particleArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < dist) {
                   opacityValue = 1 - distance / dist;
                   try {
                      ctx.strokeStyle = `color-mix(in srgb, ${lineColor} ${opacityValue * 100}%, transparent)`;
                   } catch (e) {
                      ctx.strokeStyle = lineColor.replace(/[\d\.]+\)$/g, `${opacityValue.toFixed(3)})`);
                   }
                   ctx.lineWidth = 0.5;
                   ctx.beginPath();
                   ctx.moveTo(particleArray[a].x, particleArray[a].y);
                   ctx.lineTo(particleArray[b].x, particleArray[b].y);
                   ctx.stroke();
                }
             }
          }
       }
       let animationFrameId = null;
 
       function animateParticles() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < particleArray.length; i++) {
             particleArray[i].update(canvas.width, canvas.height);
          }
          connectParticles();
          animationFrameId = requestAnimationFrame(animateParticles);
       }
 
       function handleResize() {
          cancelAnimationFrame(animationFrameId);
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          initParticles();
          animateParticles();
       }
 
       function updateParticleTheme() {
          const newParticleColor = getComputedStyle(htmlElement).getPropertyValue("--particle-color").trim();
          particleArray.forEach((p) => p.updateColor(newParticleColor));
       }
       window.particles = {
          updateTheme: updateParticleTheme
       };
       window.addEventListener("resize", handleResize);
       handleResize();
    } else {
       console.error("Canvas element #particle-canvas not found.");
    }
    const pageSections = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll("nav a[data-page], .logo[data-page]");
 
    function showPage(pageId, clickedLink) {
       pageSections.forEach((section) => {
          section.classList.remove("active");
       });
       navLinks.forEach((link) => {
          link.classList.remove("nav-active");
       });
       const targetSection = document.getElementById(pageId + "-page");
       if (targetSection) {
          targetSection.classList.add("active");
          window.scrollTo({
             top: 0,
             behavior: "smooth"
          });
       } else {
          console.warn(`Target page section not found: ${pageId}-page`);
          document.getElementById("home-page")?.classList.add("active");
          document.querySelector('nav a[data-page="home"]')?.classList.add("nav-active");
          return;
       }
       if (clickedLink && !clickedLink.classList.contains("logo")) {
          clickedLink.classList.add("nav-active");
       } else {
          document.querySelector('nav a[data-page="home"]')?.classList.add("nav-active");
       }
    }
    navLinks.forEach((link) => {
       link.addEventListener("click", (event) => {
          event.preventDefault();
          const targetPageId = link.getAttribute("data-page");
          if (targetPageId) {
             showPage(targetPageId, link);
          }
       });
    });
    const generatePdfBtn = document.getElementById("generate-pdf-btn");
    const studentNameInput = document.getElementById("student-name");
    const programTypeSelect = document.getElementById("program-type");
    const partnerUniWrapper = document.getElementById("partner-uni-wrapper");
    const partnerUniInput = document.getElementById("partner-university");
    const majorProgramInput = document.getElementById("major-program");
    const collegeSchoolInput = document.getElementById("college-school");
    const scholarshipInput = document.getElementById("scholarship-details");
    const honorsCheckbox = document.getElementById("honors-college");
    const pdfStatus = document.getElementById("pdf-status");
    programTypeSelect.addEventListener("change", () => {
       if (programTypeSelect.value === "3+2") {
          partnerUniWrapper.style.display = "block";
       } else {
          partnerUniWrapper.style.display = "none";
          partnerUniInput.value = "";
       }
    });
    if (typeof window.jspdf === "undefined") {
       console.error("jsPDF library not loaded.");
       if (pdfStatus) pdfStatus.textContent = "Error: PDF library failed to load.";
       if (generatePdfBtn) generatePdfBtn.disabled = true;
    } else if (generatePdfBtn && studentNameInput && pdfStatus) {
       const {
          jsPDF
       } = window.jspdf;
 
       generatePdfBtn.addEventListener("click", () => {
          const studentName = studentNameInput.value.trim();
          const programType = programTypeSelect.value;
          const partnerUniversity = partnerUniInput.value.trim();
          const majorProgram = majorProgramInput.value.trim();
          const collegeSchool = collegeSchoolInput.value.trim();
          const scholarship = scholarshipInput.value.trim();
          const isHonors = honorsCheckbox.checked;
          if (!studentName || !majorProgram || !collegeSchool) {
             pdfStatus.textContent = "Please fill in Student Name, Major, and College.";
             if (!studentName) studentNameInput.focus();
             else if (!majorProgram) majorProgramInput.focus();
             else if (!collegeSchool) collegeSchoolInput.focus();
             return;
          }
          if (programType === "3+2" && !partnerUniversity) {
             pdfStatus.textContent = "Please specify the Partner University for the 3+2 Program.";
             partnerUniInput.focus();
             return;
          }
          pdfStatus.textContent = "Generating PDF...";
          try {
             const doc = new jsPDF();
             const today = new Date();
             const formattedDate = `${today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
             const pageMargin = 20;
             const pageWidth = doc.internal.pageSize.getWidth();
             const contentWidth = pageWidth - pageMargin * 2;
             let yPos = 15;
             const lineSpacing = 6;
             const paragraphSpacing = lineSpacing + 3;
             doc.setFont("times", "normal");
             const logoDesiredWidth = 50;
             const estimatedLogoAspectRatio = 1;
             const calculatedLogoHeight = logoDesiredWidth / estimatedLogoAspectRatio;
             const logoX = pageWidth / 2 - logoDesiredWidth / 2;
             try {
                doc.addImage("JWU_FULL_LOGO.png", "PNG", logoX, yPos, logoDesiredWidth, calculatedLogoHeight);
                yPos += calculatedLogoHeight + 3;
             } catch (imgError) {
                console.error("Error adding logo image 'JWU_FULL_LOGO.png'.", imgError);
                doc.setFontSize(10);
                doc.setTextColor(150);
                doc.text("[ Logo Placeholder ]", pageWidth / 2, yPos + 5, {
                   align: "center"
                });
                doc.setTextColor(0);
                yPos += 10;
             }
             yPos += paragraphSpacing;
             doc.setFontSize(11);
             doc.setFont("times", "normal");
             doc.text(`Date: ${formattedDate}`, pageMargin, yPos);
             yPos += lineSpacing;
             doc.text(`To: ${studentName}`, pageMargin, yPos);
             yPos += paragraphSpacing + 5;
             doc.setFontSize(12);
             doc.setFont("times", "normal");
             doc.text(`Dear ${studentName},`, pageMargin, yPos);
             yPos += paragraphSpacing;
             let admissionText1 = `Congratulations! On behalf of the Admissions Committee and myself, it is my great pleasure to offer you admission to Jason Wang University for the upcoming academic year into our ${programType} program. `;
             if (programType === "3+2") {
                admissionText1 += `This is part of our collaborative 3+2 arrangement with ${partnerUniversity}. `;
             }
             admissionText1 += `Your poor academic record, watery personal achievements, and unique shitty potential have deeply impressed us.`;
             let splitText1 = doc.splitTextToSize(admissionText1, contentWidth);
             doc.text(splitText1, pageMargin, yPos);
             yPos += splitText1.length * lineSpacing;
             doc.setFont("times", "bold");
             let admissionText2 = `You have been admitted to the ${majorProgram} major within the ${collegeSchool}.`;
             let splitText2 = doc.splitTextToSize(admissionText2, contentWidth);
             doc.text(splitText2, pageMargin, yPos);
             yPos += splitText2.length * lineSpacing;
             doc.setFont("times", "normal");
             yPos += paragraphSpacing - 5;
             if (scholarship) {
                let scholarshipText = `We are also pleased to inform you that you have been awarded the following scholarship:`;
                let splitScholarshipText = doc.splitTextToSize(scholarshipText, contentWidth);
                doc.text(splitScholarshipText, pageMargin, yPos);
                yPos += splitScholarshipText.length * lineSpacing;
 
                doc.setFont("times", "bold");
                let splitScholarshipValue = doc.splitTextToSize(scholarship, contentWidth);
                doc.text(splitScholarshipValue, pageMargin, yPos);
                yPos += splitScholarshipValue.length * lineSpacing;
                doc.setFont("times", "normal");
 
                let scholarshipDetailsText = `Details regarding the terms and conditions of this award will be provided separately.`;
                let splitScholarshipDetails = doc.splitTextToSize(scholarshipDetailsText, contentWidth);
                doc.text(splitScholarshipDetails, pageMargin, yPos);
                yPos += splitScholarshipDetails.length + paragraphSpacing;
             }
             if (isHonors) {
                doc.setFont("times", "bold");
                let honorsText = `Additionally, congratulations on your acceptance into the prestigious JWU Commonshit Honors College! This distinction recognizes your exceptional academic failure and offers no opportunity for enriched learning and research.`;
                let splitHonors = doc.splitTextToSize(honorsText, contentWidth);
                doc.text(splitHonors, pageMargin, yPos);
                yPos += splitHonors.length * lineSpacing;
                doc.setFont("times", "normal");
                yPos += paragraphSpacing - 5;
             }
             let closingText = `Further details regarding enrollment steps, orientation schedules, and financial aid procedures (if applicable) will not follow in subsequent communications. However, we encourage you to explore our university website https://real-jasonwang.github.io/JWU/ and ignore the admissions office if you have any questions.`;
             let splitClosing = doc.splitTextToSize(closingText, contentWidth);
             doc.text(splitClosing, pageMargin, yPos);
             yPos += splitClosing.length * lineSpacing + paragraphSpacing - 5;
             doc.text("Congratulations once again and welcome to Jason Wang University!", pageMargin, yPos);
             yPos += paragraphSpacing;
             doc.text("Sincerely,", pageMargin, yPos);
             yPos += lineSpacing * 0.5;
             const sigDesiredWidth = 100;
             const estimatedSigAspectRatio = 5.0;
             const calculatedSigHeight = sigDesiredWidth / estimatedSigAspectRatio;
             try {
                doc.addImage("signature.png", "PNG", pageMargin, yPos, sigDesiredWidth, calculatedSigHeight);
                yPos += calculatedSigHeight + lineSpacing;
             } catch (imgError) {
                console.error("Error adding signature image 'signature.png'.", imgError);
                yPos += 10;
             }
             doc.setFont("times", "italic");
             doc.text("Jason Wang", pageMargin, yPos);
             yPos += lineSpacing;
             doc.text("President of Jason Wang University", pageMargin, yPos);
             const safeName = studentName.replace(/[^a-z0-9_ ]/gi, "").replace(/ /g, "_");
             doc.save(`Admission_Letter_JWU_${safeName}.pdf`);
 
             pdfStatus.textContent = "PDF downloaded successfully!";
             setTimeout(() => {
                pdfStatus.textContent = "";
             }, 5000);
          } catch (error) {
             console.error("Error generating PDF:", error);
             pdfStatus.textContent = "Error generating PDF. See console.";
          }
       });
    } else {
       console.warn("PDF Generator elements not fully found.");
       if (generatePdfBtn) generatePdfBtn.disabled = true;
       if (pdfStatus) pdfStatus.textContent = "PDF generator setup incomplete.";
    }
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
       currentYearElement.textContent = new Date().getFullYear();
    }
 
    function handleCanvasClick(event) {
       const canvas = document.getElementById("particle-canvas");
       if (!canvas) {
          return;
       }
       const rect = canvas.getBoundingClientRect();
       const clickX = event.clientX - rect.left;
       const clickY = event.clientY - rect.top;
       console.log(`Canvas clicked at (${clickX.toFixed(0)}, ${clickY.toFixed(0)}). ` +
          `Note: Interaction effects require modifying the original particle system code.`);
    }
 
    function setupClickListener() {
       const canvas = document.getElementById("particle-canvas");
       if (canvas) {
          canvas.addEventListener('click', handleCanvasClick);
          console.log("Click listener added to canvas by the appended script. " +
             "(Functionality depends on integration with original code scope)");
       } else {
          setTimeout(setupClickListener, 500);
       }
    }
    setTimeout(setupClickListener, 0);
 });