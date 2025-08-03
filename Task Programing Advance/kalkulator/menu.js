// Menu Js
import { kalkulator } from "./rumus.js";
import readline from 'readline';

// Membuat interface untuk input dari terminal
const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Meminta input darii pengguna
function mulai(){
    // Mulai proses perhitungan
    inputUser.question("Masukan angka pertama : ", angka1 => {
        inputUser.question("Masukan angka kedua : ", angka2 => {
            const tanyaOperator = () => {
                inputUser.question("Masukan operator (+, -, *, /) : ", operator => {
                    const hasil = kalkulator(parseFloat(angka1), parseFloat(angka2), operator);

                    if (hasil === "Operator tidak valid!") {
                        console.log("Operator tidak valid! Silahkan masukan lagi.");
                        tanyaOperator(); // rekursi: ulangi input kalkulator
                    } else {
                        console.log(`Hasil : ${angka1} ${operator} ${angka2} = ${hasil}`);
                        inputUser.question("Ingin menghitung lagi ? (ya/tidak) : ", jawaban => {
                            if (jawaban.toLowerCase() === "ya") {
                                mulai(); // rekursi ulang
                            } else {
                                console.log("Terima kasih telah menggunakan kalkulator");
                                inputUser.close();
                            }
                        });
                    }
                });
            };

            tanyaOperator(); // panggil validasi operator
        });
    });
}
mulai();