document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("bookingModal");
    const btn = document.querySelector(".booking-button a");
    const span = document.querySelector(".close");
    const timeSlots = document.querySelectorAll('.time-slot');
    const bookingTimeInput = document.getElementById('booking-time');

    // กำหนดวันและช่วงเวลาที่ไม่ว่าง
    const unavailableDates = {
        '2024-08-21': ['morning'] // วันที่ 21 สิงหาคม 2024 ช่วงเช้าไม่ว่าง
    };

    // เปิดโมดอล
    btn.addEventListener('click', () => {
        openModal();
    });

    // ปิดโมดอล
    span.addEventListener('click', () => {
        closeModal();
    });

    // ปิดโมดอล เมื่อคลิกที่นอกโมดอล
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // จัดการการเลือกช่วงเวลา
    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            if (slot.classList.contains('unavailable')) return; // ถ้าเป็นช่วงเวลาที่ไม่ว่าง ให้ไม่ทำอะไร

            slot.classList.toggle('selected');

            const morningSelected = document.querySelector('.time-slot.morning.selected');
            const afternoonSelected = document.querySelector('.time-slot.afternoon.selected');

            if (morningSelected && afternoonSelected) {
                bookingTimeInput.value = 'All day';
            } else if (morningSelected) {
                bookingTimeInput.value = '9.00 - 13.00';
            } else if (afternoonSelected) {
                bookingTimeInput.value = '13.00 - 18.00';
            } else {
                bookingTimeInput.value = '';
            }
        });
    });

    // เมื่อคลิกที่วันที่ในปฏิทิน
    document.querySelectorAll('.calendar td').forEach(day => {
        day.addEventListener('click', () => {
            const date = day.getAttribute('data-date');
            if (!day.classList.contains('unavailable')) {
                openModal(date);
            }
        });
    });

    function openModal(date) {
        modal.style.display = "block";
        modal.setAttribute('aria-hidden', 'false');

        // รีเซ็ตการเลือกช่วงเวลา
        timeSlots.forEach(slot => {
            slot.classList.remove('selected');
            slot.classList.remove('unavailable');
        });

        // กำหนดช่วงเวลาไม่ว่าง
        const unavailableSlots = unavailableDates[date] || [];
        timeSlots.forEach(slot => {
            if (slot.classList.contains('morning') && unavailableSlots.includes('morning')) {
                slot.classList.add('unavailable');
            } else if (slot.classList.contains('afternoon') && unavailableSlots.includes('afternoon')) {
                slot.classList.add('unavailable');
            }
        });

        // ตั้งค่าช่วงเวลาใน bookingTimeInput ตามสถานะของช่วงเวลา
        const morningSlot = document.querySelector('.time-slot.morning');
        const afternoonSlot = document.querySelector('.time-slot.afternoon');

        if (morningSlot.classList.contains('unavailable') && afternoonSlot.classList.contains('unavailable')) {
            bookingTimeInput.value = '';
        } else if (!morningSlot.classList.contains('unavailable') && !afternoonSlot.classList.contains('unavailable')) {
            bookingTimeInput.value = 'All day';
        } else if (morningSlot.classList.contains('unavailable')) {
            bookingTimeInput.value = '13.00 - 18.00';
        } else if (afternoonSlot.classList.contains('unavailable')) {
            bookingTimeInput.value = '9.00 - 13.00';
        }
    }

    function closeModal() {
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', 'true');

        // รีเซ็ตการเลือกช่วงเวลา
        timeSlots.forEach(slot => {
            slot.classList.remove('selected');
        });

        bookingTimeInput.value = '';
    }
});
