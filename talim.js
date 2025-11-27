const data = {
    guliston: [
        { name: "1-maktab", rating: 89 },
        { name: "2-maktab", rating: 76 },
        { name: "3-maktab", rating: 91 },
        { name: "4-maktab", rating: 85 },
        { name: "5-maktab", rating: 72 },
        { name: "6-maktab", rating: 95 },
        { name: "7-maktab", rating: 80 }
    ],
    boyovut: [
        { name: "1-maktab", rating: 78 },
        { name: "2-maktab", rating: 88 },
        { name: "3-maktab", rating: 82 },
        { name: "4-maktab", rating: 90 },
        { name: "5-maktab", rating: 75 },
        { name: "6-maktab", rating: 84 },
        { name: "7-maktab", rating: 79 }
    ],
    mirzaobod: [
        { name: "1-maktab", rating: 73 },
        { name: "2-maktab", rating: 80 },
        { name: "3-maktab", rating: 92 },
        { name: "4-maktab", rating: 81 },
        { name: "5-maktab", rating: 68 },
        { name: "6-maktab", rating: 77 },
        { name: "7-maktab", rating: 90 }
    ],
    oqoltin: [
        { name: "1-maktab", rating: 71 },
        { name: "2-maktab", rating: 83 },
        { name: "3-maktab", rating: 78 },
        { name: "4-maktab", rating: 88 },
        { name: "5-maktab", rating: 66 },
        { name: "6-maktab", rating: 94 },
        { name: "7-maktab", rating: 86 }
    ],
    sardoba: [
        { name: "1-maktab", rating: 82 },
        { name: "2-maktab", rating: 79 },
        { name: "3-maktab", rating: 91 },
        { name: "4-maktab", rating: 73 },
        { name: "5-maktab", rating: 88 },
        { name: "6-maktab", rating: 69 },
        { name: "7-maktab", rating: 80 }
    ],
    sayxunobod: [
        { name: "1-maktab", rating: 84 },
        { name: "2-maktab", rating: 90 },
        { name: "3-maktab", rating: 77 },
        { name: "4-maktab", rating: 68 },
        { name: "5-maktab", rating: 93 },
        { name: "6-maktab", rating: 75 },
        { name: "7-maktab", rating: 89 }
    ],
    xovos: [
        { name: "1-maktab", rating: 86 },
        { name: "2-maktab", rating: 78 },
        { name: "3-maktab", rating: 92 },
        { name: "4-maktab", rating: 80 },
        { name: "5-maktab", rating: 74 },
        { name: "6-maktab", rating: 88 },
        { name: "7-maktab", rating: 90 }
    ],
    sirdaryo: [
        { name: "1-maktab", rating: 79 },
        { name: "2-maktab", rating: 88 },
        { name: "3-maktab", rating: 82 },
        { name: "4-maktab", rating: 69 },
        { name: "5-maktab", rating: 91 },
        { name: "6-maktab", rating: 74 },
        { name: "7-maktab", rating: 85 }
    ],
    yangiyer: [
        { name: "1-maktab", rating: 81 },
        { name: "2-maktab", rating: 77 },
        { name: "3-maktab", rating: 89 },
        { name: "4-maktab", rating: 85 },
        { name: "5-maktab", rating: 70 },
        { name: "6-maktab", rating: 92 },
        { name: "7-maktab", rating: 79 }
    ],
    shirin: [
        { name: "1-maktab", rating: 74 },
        { name: "2-maktab", rating: 82 },
        { name: "3-maktab", rating: 90 },
        { name: "4-maktab", rating: 78 },
        { name: "5-maktab", rating: 67 },
        { name: "6-maktab", rating: 85 },
        { name: "7-maktab", rating: 80 }
    ]
};

const tumans = document.getElementById("tumans");
const schools = document.getElementById("schools");
const ratingBox = document.getElementById("ratingBox");

tumans.addEventListener("change", function() {
    const tuman = tumans.value;
    schools.innerHTML = `<option value="">— Maktabni tanlang —</option>`;
    ratingBox.style.display = "none";

    if(data[tuman]) {
        data[tuman].forEach(item => {
            const option = document.createElement("option");
            option.value = item.name;
            option.textContent = item.name;
            schools.appendChild(option);
        });
    }
});

schools.addEventListener("change", function() {
    const tuman = tumans.value;
    const selected = schools.value;

    if(selected && data[tuman]) {
        const info = data[tuman].find(s => s.name === selected);

        // Viloyat bo‘yicha umumiy reyting
        let allSchools = [];
        for(let key in data) {
            data[key].forEach(s => {
                allSchools.push({ name: s.name, tuman: key, rating: s.rating });
            });
        }
        allSchools.sort((a,b) => b.rating - a.rating);
        let position = allSchools.findIndex(s => s.name===info.name && s.tuman===tuman) + 1;

        ratingBox.style.display = "block";
        ratingBox.innerHTML = `
            <strong>${info.name} (${tuman.charAt(0).toUpperCase() + tuman.slice(1)})</strong><br>
            Reyting: <b>${info.rating}</b> / 100<br>
            Viloyat bo'yicha o'rni: <b>${position}</b> / ${allSchools.length}
            <div class="progress-container">
                <div class="progress-bar" style="width:0%">${info.rating}%</div>
            </div>
        `;

        const progress = ratingBox.querySelector(".progress-bar");
        let width = 0;
        const target = info.rating;
        const interval = setInterval(() => {
            if(width >= target) clearInterval(interval);
            else {
                width++;
                progress.style.width = width + "%";
                progress.textContent = width + "%";
            }
        }, 10);
    }
});
