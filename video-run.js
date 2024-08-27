document.addEventListener('DOMContentLoaded', () => {
    const videoSources = [
        {
            src: 'videos/Home 1.mp4',
            name: 'Studio 1',
            details: '- Size 9.50 x 10.00 m., height 6 m. - Curved white screen',
            description: '- Still photography and studio',
            link: 'studio1.html'
        },
        {
            src: 'videos/Studio 2.mp4',
            name: 'Studio 2',
            details: '- Size 6.50 x 8.00 m., height 8 m. - Curved white screen',
            description: '- Still photography and studio',
            link: 'studio2.html'
        },
        {
            src: 'videos/Studio 3.mp4',
            name: 'Studio 3',
            details: '- Size 12.00 x 12.00 m., height 6 m. - Curved white screen',
            description: '- Still photography and studio',
            link: 'studio3.html'
        }
    ];

    const navigationDots = document.querySelectorAll('.navigation-dot');
    const studioNameLink = document.getElementById('studio-name');
    const studioDetails = document.getElementById('studio-details');
    const studioDescription = document.getElementById('studio-description');
    const video = document.getElementById('videoBackground');
    const videoText = document.querySelector('.video-text');
    let currentIndex = 0;

    function updateVideo(index) {
        const videoSource = videoSources[index];

        // อัพเดทข้อความ
        studioNameLink.textContent = videoSource.name;
        studioDetails.textContent = videoSource.details;
        studioDescription.textContent = videoSource.description;
        studioNameLink.href = videoSource.link;

        // เปลี่ยนตำแหน่งข้อความ
        if (index === 1) {
            videoText.classList.add('right');
        } else {
            videoText.classList.remove('right');
        }

        // ค่อยๆ จางวิดีโอและข้อความ
        video.classList.add('fade-out');
        videoText.classList.add('fade-out');

        setTimeout(() => {
            video.src = videoSource.src;
            video.load();
            video.play();

            // ค่อยๆ เพิ่มความโปร่งใสของวิดีโอใหม่และข้อความ
            video.classList.remove('fade-out');
            videoText.classList.remove('fade-out');
        }, 1000); // ใช้เวลา 1 วินาทีในการจาง

        // เปลี่ยนคลาส active สำหรับ dot
        navigationDots.forEach(d => d.classList.remove('active'));
        navigationDots[index].classList.add('active');
    }

    function onVideoEnd() {
        currentIndex = (currentIndex + 1) % videoSources.length;
        updateVideo(currentIndex);
    }

    // ตั้งค่าเหตุการณ์ให้กับวิดีโอ
    video.addEventListener('ended', onVideoEnd);

    // เริ่มต้นการเล่นวิดีโอแรก
    updateVideo(currentIndex);

    navigationDots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            currentIndex = parseInt(index);
            updateVideo(currentIndex);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'disableScrolling': true
    });
});

    // ค้นหาและเพิ่ม event listener ให้กับทุกภาพใน image-gallery
    document.querySelectorAll('.image-wrapper img').forEach(img => {
        img.addEventListener('click', function() {
            const popup = document.getElementById('popup');
            const popupImage = document.getElementById('popup-image');
            const popupClose = document.getElementById('popup-close');

            // ตั้งค่าที่มาของภาพใน popup
            popupImage.src = this.src;
            popup.classList.add('active');

            // ปิด popup เมื่อคลิกที่ปุ่มปิด
            popupClose.addEventListener('click', function() {
                popup.classList.remove('active');
            });

            // ปิด popup เมื่อคลิกที่พื้นที่นอกภาพ
            document.addEventListener('click', function(event) {
                if (event.target === popup) {
                    popup.classList.remove('active');
                }
            });
        });
    });

