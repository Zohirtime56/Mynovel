// كود جافاسكريبت الرئيسي
document.addEventListener('DOMContentLoaded', function() {
    // تحميل الروايات
    loadStories();
    
    // إضافة تأثير عند النقر على أزرار الإعجاب
    const likeButtons = document.querySelectorAll('.comment-action');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = '#ff6b6b';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '';
            }
        });
    });
    
    // تأثير التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// دالة تحميل الروايات
function loadStories() {
    const storiesGrid = document.querySelector('.stories-grid');
    if (!storiesGrid) return;
    
    // بيانات تجريبية (ستأتي من قاعدة البيانات لاحقاً)
    const stories = [
        {
            title: "ظلال الماضي",
            author: "أحمد الشمري",
            authorImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
            excerpt: "رواية تشويقية تدور أحداثها في قصر قديم، حيث تكتشف بطلة الرواية أسراراً عائلية مظلمة تهدد حياتها...",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            likes: 234,
            comments: 57,
            views: 1200
        },
        {
            title: "عندما يغني البلبل",
            author: "فاطمة العبدالله",
            authorImg: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
            excerpt: "قصة حب تدور في ريف دمشق، تروي معاناة الحب في زمن الحرب وكيف يبقى الأمل حياً رغم كل الظروف...",
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            likes: 187,
            comments: 42,
            views: 987
        },
        {
            title: "لغز القلعة القديمة",
            author: "خالد السعد",
            authorImg: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
            excerpt: "مجموعة من الأصدقاء يقررون قضاء عطلة في قلعة قديمة، ليكتشفوا أن القلعة تخفي أسراراً وغموضاً يفوق توقعاتهم...",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            likes: 321,
            comments: 76,
            views: 1500
        }
    ];
    
    // إضافة الروايات إلى الشبكة
    storiesGrid.innerHTML = '';
    stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.innerHTML = `
            <div class="story-img" style="background-image: url('${story.image}');"></div>
            <div class="story-content">
                <h3 class="story-title">${story.title}</h3>
                <div class="story-author">
                    <img src="${story.authorImg}" alt="${story.author}">
                    <span>${story.author}</span>
                </div>
                <p class="story-excerpt">${story.excerpt}</p>
                <div class="story-stats">
                    <div class="stat"><i class="far fa-heart"></i> ${story.likes}</div>
                    <div class="stat"><i class="far fa-comment"></i> ${story.comments}</div>
                    <div class="stat"><i class="far fa-eye"></i> ${story.views}</div>
                </div>
            </div>
        `;
        storiesGrid.appendChild(storyCard);
    });
              }
