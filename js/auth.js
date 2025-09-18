// كود المصادقة
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // هنا سيتم إضافة كود التسجيل مع الخادم
            console.log('محاولة تسجيل:', { name, email, password });
            
            // رسالة نجاح (مؤقتة)
            alert('تم إنشاء حسابك بنجاح! سيتم توجيهك إلى صفحة التسجيل.');
            registerForm.reset();
        });
    }
    
    // محاكاة تسجيل الدخول عبر وسائل التواصل الاجتماعي
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.classList.contains('google-btn') ? 'Google' : 'Facebook';
            alert(`سيتم توجيهك إلى صفحة تسجيل الدخول عبر ${platform}`);
        });
    });
});
