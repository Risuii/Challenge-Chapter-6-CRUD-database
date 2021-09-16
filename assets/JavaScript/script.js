let hasilBatu = document.getElementById("comBatu");

let hasilKertas = document.getElementById("comKertas");

let hasilGunting = document.getElementById("comGunting");

// get hasil

function hasil(player, computer) {
  if (player === computer) {
    return "Draw";
  }
  if (player == "batu" && computer == "kertas") {
    return "COM WIN";
  }
  if (player == "batu" && computer == "gunting") {
    return "PLAYER 1 WIN";
  }

  if (player == "kertas" && computer == "gunting") {
    return "COM WIN";
  }
  if (player == "kertas" && computer == "batu") {
    return "PLAYER 1 WIN";
  }

  if (player == "gunting" && computer == "batu") {
    return "COM WIN";
  }

  if (player == "gunting" && computer == "kertas") {
    return "PLAYER 1 WIN";
  }
}
// console.log(hasil());

// pilihan player

let pilPlayer = document.querySelectorAll(".pilPlayer img");
pilPlayer.forEach(function (pilihan) {
  pilihan.addEventListener("click", function () {
    let pComp = pilihanComputer();
    let pilihanPlayer = pilihan.id;
    // console.log("player memilih " + pilihan.id);
    // console.log("komputer memilih " + pComp);
    let info = document.querySelector(".info");
    info.innerHTML = hasil(pilihanPlayer, pComp);
    info.style.fontSize = "40px";
    info.style.color = "white";
    info.style.transform = "rotate(330deg)";
    info.style.position = "relative";
    info.style.fontSize = "3.1vw";
    info.style.left = "1vw";
    info.style.top = "28vh";
    info.style.textAlign = "center";
    info.style.backgroundColor = "green";
    pilihan.style.backgroundColor = "#ADD8E6";

    // random computer

    function pilihanComputer() {
      const comp = Math.floor(Math.random() * 60);
      if (comp < 20) {
        hasilBatu.style.backgroundColor = "#ADD8E6";
        return "batu";
      } else if (comp >= 20 && comp < 40) {
        hasilKertas.style.backgroundColor = "#ADD8E6";
        return "kertas";
      } else {
        hasilGunting.style.backgroundColor = "#ADD8E6";
        return "gunting";
      }
    }
  });
});

// refresh

let reset = document.querySelector(".refresh");
reset.addEventListener("click", function () {
  window.location.reload();
});
