const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("message");
const chatBox = document.getElementById("chat");


function fakeAI(question) {

    question = question.toLowerCase();

    if (question.includes("salom")) {
        return "salom Qanday yordam beray?";
    }

    if (question.includes("kamunal tolovdan qancha qarzim bor") || question.includes("tolov")) {
        return "sizning gazdan qarzingi 320 ming som     sizning svetdan qarzingi 420 ming som ";
    }

    if (question.includes("qandey tolasam boladi")) {
        return "Gaz to‘lovini MyUzcard, Payme, Click yoki shaxsan gaz idorasiga borib to‘lashingiz mumkin.";
    }

    if (question.includes("radardan qarzimi korsat") || question.includes("elektr")) {
        return "Radardan qarzingiz qancha";
    }

    if (question.includes("suv")) {
        return "Suv taʼminoti to‘lovi m³ hisobida sanaladi. Odatda oylik ravishda hisob-kitob qilinadi.";
    }
      if (question.includes("www")) {
        return "";
    }

    if (question.includes("raqamli") || question.includes("ai")) {
        return "Bizning tizim sunʼiy intellekt yordamida kommunal xizmatlar haqida maʼlumot beradi.";
    }
    if (question.includes("77777") || question.includes("ai")) {
        return "Sizning xisob raqamingiz royhatan otilmagan";
    }
    if (question.includes("mening ismim nima") || question.includes("ai")) {
        return "sizning ismingiz Hallilo, Miranshoh, behruz shu ismimda bittasi";
    }
    if (question.includes("12345 raqami soliqdan qancha qazi bor") || question.includes("ai")) {
        return "Sizning soliqdan 45$ qarsingiz bor";
    }
    if (question.includes(" ") || question.includes("ai")) {
        return "";
    }
     if (question.includes("maktab uchun ariza kerak") || question.includes("ai")) {
        return " (Muassasa nomi) rahbariyatiga ___(Sinf/guruh rahbari)___ga ___(Ismingiz Familiyangiz)___dan ___(Farzandingizning ismi familiyasi)___ning ota-onasi  ARIZA  Sizdan shuni malum qilamanki, (farzandingizning ismi) sog'ligi sababli (sana) kuni darslarga (yokimashg‘ulotlarga) qatnasha olmadi. Iltimos, mazkur sababni inobatga olib darsga kelmaganligini uzrli deb hisoblashni so‘rayman.Hurmat bilan, (Ismingiz Familiyangiz)Sana: (bugungi sana)";
    }
    if (question.includes("maktab uchun sprafka kerak") || question.includes("ai")) {
        return " (Muassasa nomi) rahbariyatiga ___(Sinf/guruh rahbari)___ga ___(Ismingiz Familiyangiz)___dan ___(Farzandingizning ismi familiyasi)___ning ota-onasi  ARIZA  Sizdan shuni malum qilamanki, (farzandingizning ismi) sog'ligi sababli (sana) kuni darslarga (yokimashg‘ulotlarga) qatnasha olmadi. Iltimos, mazkur sababni inobatga olib darsga kelmaganligini uzrli deb hisoblashni so‘rayman.Hurmat bilan, (Ismingiz Familiyangiz)Sana: (bugungi sana)";
    }
 
    return "Savolingiz qabul qilindi! Hozircha bu savol bo‘yicha aniq maʼlumot yo‘q, lekin tizimni yangilash davom etmoqda.";
    if (question.includes("") || question.includes("ai")) {
        return ", ";
    }
}


sendBtn.addEventListener("click", () => {
    const question = messageInput.value.trim();

    if (!question) {
        chatBox.textContent = "Iltimos savol kiriting!";
        return;
    }


    const answer = fakeAI(question);

    
    chatBox.textContent = answer;
});
