document.addEventListener('DOMContentLoaded', ()=>{

    // 1. Alert saat form dikirim (UTS)
    const form = document.getElementById('contactForm');
    if(form){
        form.addEventListener('submit', e=>{
            e.preventDefault();
            alert("Terima kasih, pesan Anda telah terkirim!");
            form.reset();
        });
    }

    // 2. Ubah tema
    const themeBtn = document.getElementById('themeBtn');
    if(themeBtn){
        themeBtn.addEventListener('click', ()=>{
            const r = document.documentElement;
            const now = r.style.getPropertyValue("--accent");
            r.style.setProperty("--accent", now==="#10b981" ? "#3b82f6" : "#10b981");
        });
    }

    // 3. Waktu Real-Time
    const timeEl = document.getElementById("timeNow");
    if(timeEl){
        function update(){
            timeEl.textContent = new Date().toLocaleString("id-ID", {
                weekday:"long",
                hour:"2-digit",
                minute:"2-digit",
                second:"2-digit"
            });
        }
        update();
        setInterval(update, 1000);
    }

    // Tahun Footer
    const year = document.getElementById("year");
    if(year){
        year.textContent = new Date().getFullYear();
    }

});
