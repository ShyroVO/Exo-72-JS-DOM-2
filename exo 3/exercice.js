let mesDivs = document.getElementsByClassName("name-tag");

for (i = 0 ; i < mesDivs.length; i++) {
    let para = document.createElement("p");
    mesDivs[i].append(para);
    para.innerHTML="HELLO WORLD!"
}
