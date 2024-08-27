document.addEventListener('DOMContentLoaded', () => {
    const gallerySets = document.querySelectorAll('.gallery-set');
    let currentSetIndex = 0;
    const interval = 5000; // ระยะเวลาในการเปลี่ยน Set (ในมิลลิวินาที)

    // ฟังก์ชันเพื่อแสดง Gallery Set ปัจจุบันและซ่อนที่เหลือ
    function showGallerySet(index) {
        gallerySets.forEach((set, i) => {
            if (i === index) {
                set.classList.add('active');
            } else {
                set.classList.remove('active');
            }
        });
    }

    // เริ่มต้นแสดง Set 1
    showGallerySet(currentSetIndex);

    // ฟังก์ชันเพื่อเปลี่ยนไปยัง Set ถัดไป
    function nextSet() {
        currentSetIndex = (currentSetIndex + 1) % gallerySets.length;
        showGallerySet(currentSetIndex);
    }

    // ตั้งค่าให้เปลี่ยน Set อัตโนมัติ
    setInterval(nextSet, interval);
});
