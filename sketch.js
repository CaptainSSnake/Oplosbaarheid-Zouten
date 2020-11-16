//ALLE CREDITS GAAN NAAR QUINTEN ALEXANDER GOVEARTS

let zouten = ["Pb(NO<sub>3</sub>)<sub>2</sub>", "KI", "PbI<sub>2</sub>", "KNO<sub>3</sub>", "AgNO<sub>3</sub>", "AgCl", "AgOH", "(NH<sub>4</sub>)<sub>2</sub>S", "CdS", "Sb<sub>2</sub>S<sub>3</sub>", "PbS", "NaOH", "Ca(OH)<sub>2</sub>", "Fe(OH)<sub>3</sub>", "Ni(OH)<sub>2</sub>",
"BaCl<sub>2</sub>", "Na<sub>2</sub>SO<sub>4</sub>", "BaSO<sub>4</sub>", "MgF<sub>2</sub>", "CaF<sub>2</sub>", "PbF<sub>2</sub>", "AgCl", "AgBr", "AgI", "PbCl<sub>2</sub>", "PbBr<sub>2</sub>", "PbI<sub>2</sub>", "Al(OH)<sub>3</sub>", "Ca(OH)<sub>2</sub>", "Fe(OH)<sub>2</sub>",
"Fe(OH)<sub>3</sub>", "Mg(OH)<sub>2</sub>", "Zn(OH)<sub>2</sub>", "Ag<sub>2</sub>CO<sub>3</sub>", "MgCO<sub>3</sub>", "CaCO<sub>3</sub>", "SrCO<sub>3</sub>", "BaCO<sub>3</sub>", "CoCO<sub>3</sub>", "NiCO<sub>3</sub>", "ZnCO<sub>3</sub>", "Ag<sub>2</sub>CrO<sub>4</sub>", "PbCrO<sub>4</sub>",
"CaSO<sub>4</sub>", "SrSO<sub>4</sub>", "BaSO<sub>4</sub>", "PbSO<sub>4</sub>", "CaC<sub>2</sub>CO<sub>4</sub>", "MgC<sub>2</sub>CO<sub>4</sub>", "BaC<sub>2</sub>CO<sub>4</sub>", "PbC<sub>2</sub>CO<sub>4</sub>", "Cd(NO<sub>3</sub>)<sub>2</sub>", "Cu(NO<sub>3</sub>)<sub>2</sub>",
"CdCl<sub>2</sub>", "CuCl<sub>2</sub>", "PbCl<sub>2</sub>", "PbCrO<sub>4</sub>", "K<sub>2</sub>CrO<sub>4</sub>", "Fe(OH)<sub>2</sub>", "Ag<sub>3</sub>PO<sub>4</sub>"];

let SCHAAL = 1.3;
let geklikt = false;

let f = 0;
let zout;

let oplosbaar = false;
let stopaftellen = false;
let geraden = 0;
let score = 0;
let teller = 0;

function setup() {
  createCanvas(300*SCHAAL, 400*SCHAAL);
  nieuwZout();
}

function draw() {
  background(255);

  if(geraden > 0) fill(0, 255, 0);
  else if(geraden < 0) fill(255, 0, 0);
  if(geraden != 0){
    noStroke();
    rect(0, 0, width, height);
    fill(255);
    rect(20*SCHAAL, 20*SCHAAL, width-40*SCHAAL, height-60*SCHAAL);
  }

  fill(0, 255);
  noStroke();
  textAlign(LEFT);
  textSize(14*SCHAAL);
  text(str(score) + "/" + str(teller), 10*SCHAAL, height-10*SCHAAL);
  textAlign(CENTER);
  textSize(16*SCHAAL);
  if(teller != 0) text(str(int(float(score)/float(teller)*100.0)) + "%", width/2, height-10*SCHAAL);
  text("Onderstaand zout is:", width/2, 80*SCHAAL);
  // image(formule, 100, 120);
  text("in water.", width/2, height-60*SCHAAL);
  //text(str(oplosbaar), width/2, height-20);

  let a;
  if (mouseY > height/2 && mouseY < height/2+30*SCHAAL && geraden == 0) {
    a = 255;
    if (mouseIsPressed) {
      geklikt = true;
      if (oplosbaar) {
        geraden = 5*60*SCHAAL;
        score++;
        teller++;
      } else {
        geraden = -5*60*SCHAAL;
        teller++;
      }
    }
  } else if(geraden == 0){
    a = 150;
  }else a = 255;
  if (geraden == 0 || (geraden != 0 && oplosbaar)) {
    textSize(20*SCHAAL);
    fill(0, 255, 0, a);
    stroke(0, 100, 0, a);
    rect(50*SCHAAL, height/2, width-100*SCHAAL, 30*SCHAAL, 5*SCHAAL);
    fill(0, 100, 0, a);
    noStroke();
    text("OPLOSBAAR", width/2, height/2+20*SCHAAL);
  }

  if (mouseY > height/2+50*SCHAAL && mouseY < height/2+80*SCHAAL && geraden == 0) {
    a = 255;
    if (mouseIsPressed) {
      geklikt = true;
      if (!oplosbaar) {
        geraden = 5*60*SCHAAL;
        score++;
        teller++;
      } else {
        geraden = -5*60*SCHAAL;
        teller++;
      }
    }
  } else if(geraden == 0){
    a = 150;
  }else a = 255;
  if (geraden == 0 || (geraden != 0 && !oplosbaar)) {
    textSize(20*SCHAAL);
    fill(255, 0, 0, a);
    stroke(100, 0, 0, a);
    rect(50*SCHAAL, height/2+50*SCHAAL, width-100*SCHAAL, 30*SCHAAL, 5*SCHAAL);
    fill(100, 0, 0, a);
    noStroke();
    text("NIET OPLOSBAAR", width/2, height/2+70*SCHAAL);
  }

  if(geraden != 0){
    fill(0, 0, 255);
    noStroke();
    rect(0, 0, map(abs(geraden), 0, 5*60*SCHAAL, 0, width), 20*SCHAAL);

  }

  if(abs(geraden) > 5*SCHAAL && !stopaftellen){
    geraden -= geraden/abs(geraden);
  }else if(geraden != 0 && !stopaftellen){
    geraden = 0;
    nieuwZout();
  }
}

// function mouseReleased() {
//   geklikt = false;
// }
//
// function mousePressed() {
//   if(!geklikt) {
//     if(abs(geraden) > 10*SCHAAL) geraden = 6*SCHAAL;
//     geklikt = false;
//   }
// }

function keyPressed(){
  if(key == ' '){
    stopaftellen = !stopaftellen;
  }else if(keyCode == RIGHT_ARROW){
    if(abs(geraden) > 10*SCHAAL) geraden = 6*SCHAAL;
  }
}

function nieuwZout() {
  f = int(random(0, zouten.length));
  zout = zouten[f];
  document.getElementById('tekstZout').innerHTML = zout;
  // formule = loadImage(LaTeXurl + zout);
  // formule.resize(width-200, 0);
  oplosbaar = testOplosbaarheid(zout);
}

function testOplosbaarheid(z) {
  let opl = false;
  //alle alkalimetaal(1A)zouten en zouten met NH_4 zijn oplosbaar:
  if (z.indexOf("Li") > -1 || z.indexOf("Na") > -1 || z.indexOf("K") > -1 || z.indexOf("Rb") > -1 || z.indexOf("Cs") > -1 || z.indexOf("NH<sub>4</sub>") > -1) opl =  true;
  //alles met de volgende ionen is niet oplosbaar:
  else if (z.indexOf("PO<sub>4</sub>") > -1 || z.indexOf("CO<sub>3</sub>") > -1 || z.indexOf("SO<sub>3</sub>") > -1 || z.indexOf("SiO<sub>3</sub>") > -1 || z.indexOf("C<sub>2</sub>O<sub>4</sub>") > -1 || z.indexOf("CrO<sub>4</sub>") > -1 || (z.indexOf("S") > -1 && !(z.indexOf("SO<sub>4</sub>") > -1))) opl =  false;
  //alles met volgende ionen is oplosbaar:
  else if (z.indexOf("NO<sub>3</sub>") > -1 || z.indexOf("CH<sub>3</sub>COO") > -1 || z.indexOf("ClO<sub>3</sub>") > -1 || z.indexOf("ClO<sub>4</sub>") > -1) opl =  true;
  //alle Cl, Br en I zouten zijn oplosbaar behalve met Ag, Pb en, Hg_2:
  else if (z.indexOf("Cl") > -1 || z.indexOf("Br") > -1 || z.indexOf("I") > -1) {
    if (z.indexOf("Ag") > -1 || z.indexOf("Pb") > -1 || z.indexOf("Hg<sub>2</sub>") > -1) opl =  false;
    else opl =  true;
  }
  //alle F zouten zijn oplosbaar behalve met Pb, Mg, Ca, Sr en Ba:
  else if (z.indexOf("F") > -1 && !(z.indexOf("Fe") > -1) ) {
    if (z.indexOf("Mg") > -1 || z.indexOf("Pb") > -1 || z.indexOf("Ca") > -1 || z.indexOf("Sr") > -1 || z.indexOf("Ba") > -1) opl =  false;
    else opl =  true;
  }
  //alle SO_4 zouten zijn oplosbaar behalve met Ag, Pb, Hg_2, Ca, Sr en Ba:
  else if (z.indexOf("SO<sub>4</sub>") > -1) {
    if (z.indexOf("Ag") > -1 || z.indexOf("Pb") > -1 || z.indexOf("Hg<sub>2</sub>") > -1 || z.indexOf("Ca") > -1 || z.indexOf("Sr") > -1 || z.indexOf("Ba") > -1) opl =  false;
    else opl =  true;
  }
  //alle metaalhydroxiden (OH) zijn niet oplosbaar:
  else if (z.indexOf("OH") > -1) opl =  false;
  //alle metaalhydroxiden (O) zijn niet oplosbaar:
  else if (z.indexOf("O") > -1) opl =  false;
  return opl;
}
