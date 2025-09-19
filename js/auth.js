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
    const googleSignup = document.getElementById('googleSignup');
    const facebookSignup = document.getElementById('facebookSignup');
    
    if (googleSignup) {
        googleSignup.addEventListener('click', function(e) {
            e.preventDefault();
            alert('سيتم توجيهك إلى صفحة تسجيل الدخول عبر Google');
        });
    }
    
    if (facebookSignup) {
        facebookSignup.addEventListener('click', function(e) {
            e.preventDefault();
            alert('سيتم توجيهك إلى صفحة تسجيل الدخول عبر Facebook');
        });
    }
    
    // التعامل مع أزرار التسجيل والدخول في الصفحة الرئيسية
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const startWritingBtn = document.getElementById('startWritingBtn');
    
    // إزالة أي event listeners قديمة تمنع الانتقال إلى الصفحات
    if (loginBtn) {
        // إزالة أي معالجات أحداث موجودة مسبقاً
        loginBtn.replaceWith(loginBtn.cloneNode(true));
    }
    
    if (registerBtn) {
        // إزالة أي معالجات أحداث موجودة مسبقاً
        registerBtn.replaceWith(registerBtn.cloneNode(true));
    }
    
    if (startWritingBtn) {
        startWritingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('لنشر روايتك، يرجى تسجيل الدخول أو إنشاء حساب جديد.');
            document.querySelector('.auth-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // إضافة event listener جديد لزر "انضم إلينا" في الصفحة الرئيسية
    // للتمرير السلس إلى قسم التسجيل بدلاً من الانتقال المباشر
    const newRegisterBtn = document.getElementById('registerBtn');
    if (newRegisterBtn && newRegisterBtn.getAttribute('href') === '#') {
        newRegisterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.auth-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
