const users = [
  {
    id: 1,
    nome: "Davi Pita",
    foto: "./assets/images/davi.jpg",
    descricao:
      "Seu domínio das ferramentas e técnicas da área garante resultados impecáveis e soluções inovadoras para os desafios do dia a dia.",
    midias: [
      {
        link: "#",
        icone: "./assets/icons/whatsapp.svg",
        nome: "whatsapp",
      },
      {
        link: "tel:999999999",
        icone: "./assets/icons/phone-solid.svg",
        nome: "ligar",
      },
      {
        link: "mailto:teste@mail.com",
        icone: "./assets/icons/envelope-solid.svg",
        nome: "e-mail",
      },
      {
        link: "#",
        icone: "./assets/icons/sitemap-solid.svg",
        nome: "site",
      },
      {
        link: "#",
        icone: "./assets/icons/linkedin-in.svg",
        nome: "linkedin",
      },
      {
        link: "#",
        icone: "./assets/icons/instagram.svg",
        nome: "instagram",
      },
      {
        link: "#",
        icone: "./assets/icons/user-plus-solid.svg",
        nome: "salvar contato",
      },
    ],
    foto_qrcode: "./assets/icons/qrcode-solid.svg",
    aba_link: "#",
    outro_link: "#",
  },
  {
    id: 2,
    foto: "./assets/images/kate.jpg",
    nome: "Kate Xavier",
    descricao:
      "Seu domínio das ferramentas e técnicas da área garante resultados impecáveis e soluções inovadoras para os desafios do dia a dia.",
    midias: [
      {
        link: "#",
        icone: "./assets/icons/whatsapp.svg",
        nome: "whatsapp",
      },
      {
        link: "#",
        icone: "./assets/icons/phone-solid.svg",
        nome: "ligar",
      },
      {
        link: "#",
        icone: "./assets/icons/envelope-solid.svg",
        nome: "e-mail",
      },
      {
        link: "#",
        icone: "./assets/icons/sitemap-solid.svg",
        nome: "site",
      },
      {
        link: "#",
        icone: "./assets/icons/linkedin-in.svg",
        nome: "linkedin",
      },
      {
        link: "#",
        icone: "./assets/icons/instagram.svg",
        nome: "instagram",
      },
      {
        link: "#",
        icone: "./assets/icons/user-plus-solid.svg",
        nome: "salvar contato",
      },
    ],
    foto_qrcode: "./assets/icons/qrcode-solid.svg",
    aba_link: "#",
    outro_link: "#",
  },
  {
    id: 3,
    foto: "./assets/images/arnaldo.jpg",
    nome: "Arnaldo Jesus",
    descricao:
      "Seu domínio das ferramentas e técnicas da área garante resultados impecáveis e soluções inovadoras para os desafios do dia a dia.",
    midias: [
      {
        link: "#",
        icone: "./assets/icons/whatsapp.svg",
        nome: "whatsapp",
      },
      {
        link: "#",
        icone: "./assets/icons/phone-solid.svg",
        nome: "ligar",
      },
      {
        link: "#",
        icone: "./assets/icons/envelope-solid.svg",
        nome: "e-mail",
      },
      {
        link: "#",
        icone: "./assets/icons/sitemap-solid.svg",
        nome: "site",
      },
      {
        link: "#",
        icone: "./assets/icons/linkedin-in.svg",
        nome: "linkedin",
      },
      {
        link: "#",
        icone: "./assets/icons/instagram.svg",
        nome: "instagram",
      },
      {
        link: "#",
        icone: "./assets/icons/user-plus-solid.svg",
        nome: "salvar contato",
      },
    ],
    foto_qrcode: "./assets/icons/qrcode-solid.svg",
    aba_link: "#",
    outro_link: "#",
  },
  {
    id: 4,
    foto: "./assets/images/raphael.jpg",
    nome: "Raphael Barreiro",
    descricao:
      "Seu domínio das ferramentas e técnicas da área garante resultados impecáveis e soluções inovadoras para os desafios do dia a dia.",
    midias: [
      {
        link: "#",
        icone: "./assets/icons/whatsapp.svg",
        nome: "whatsapp",
      },
      {
        link: "tel:991182502",
        icone: "./assets/icons/phone-solid.svg",
        nome: "ligar",
      },
      {
        link: "#",
        icone: "./assets/icons/envelope-solid.svg",
        nome: "e-mail",
      },
      {
        link: "#",
        icone: "./assets/icons/sitemap-solid.svg",
        nome: "site",
      },
      {
        link: "#",
        icone: "./assets/icons/linkedin-in.svg",
        nome: "linkedin",
      },
      {
        link: "#",
        icone: "./assets/icons/instagram.svg",
        nome: "instagram",
      },
      {
        link: "#",
        icone: "./assets/icons/user-plus-solid.svg",
        nome: "salvar contato",
      },
    ],
    foto_qrcode: "./assets/icons/qrcode-solid.svg",
    aba_link: "#",
    outro_link: "#",
  },
  {
    id: 5,
    foto: "./assets/images/priscila.jpg",
    nome: "Priscila Missio",
    descricao:
      "Seu domínio das ferramentas e técnicas da área garante resultados impecáveis e soluções inovadoras para os desafios do dia a dia.",
    midias: [
      {
        link: "#",
        icone: "./assets/icons/whatsapp.svg",
        nome: "whatsapp",
      },
      {
        link: "#",
        icone: "./assets/icons/phone-solid.svg",
        nome: "ligar",
      },
      {
        link: "#",
        icone: "./assets/icons/envelope-solid.svg",
        nome: "e-mail",
      },
      {
        link: "#",
        icone: "./assets/icons/sitemap-solid.svg",
        nome: "site",
      },
      {
        link: "#",
        icone: "./assets/icons/linkedin-in.svg",
        nome: "linkedin",
      },
      {
        link: "#",
        icone: "./assets/icons/instagram.svg",
        nome: "instagram",
      },
      {
        link: "#",
        icone: "./assets/icons/user-plus-solid.svg",
        nome: "salvar contato",
      },
    ],
    foto_qrcode: "./assets/icons/qrcode-solid.svg",
    aba_link: "#",
    outro_link: "#",
  },
];

// passa o valor do id na url (http://localhost:5500/cartao-digital.html?id=1)
function pegaParametroUrl() {
  const parametro = new URLSearchParams(window.location.search);
  const id = parametro.get("id"); // pega o valor do parametro passado na url
  return id;
}

function adicionaDados() {
  const usuario = users.find(
    (user) => user.id === parseInt(pegaParametroUrl())
  );

  $(".foto-integrante").append(
    `<img src="${usuario.foto}" alt="foto-integrante" class="perfil"/>`
  );

  $("#info-profissional").append(
    `<h1>${usuario.nome}</h1>
    <p class="w-50 my-1">
      ${usuario.descricao}
    </p>`
  );

  usuario.midias.map((item) => {
    $("#container-midia-sociais")
      .append(`<div class="d-flex flex-column align-items-center">
    <a
      href="${item.link}"
      class="icone-botao-midia-social d-flex justify-content-center align-items-center"
    >
      <img
        src="${item.icone}"
        alt="Icone ${item.nome}"
        class="icone-midia-sociais"
      />
    </a>
    <label class="label-midia-social">${item.nome.toUpperCase()}</label>
  </div>`);
  });

  $("#aba-link").append(
    `<a href="${usuario.aba_link}" 
  class="container-3 pos-absolute d-flex justify-content-end align-items-center"
  >
    <img
      src="./assets/icons/up-right-from-square-solid.svg"
      alt="Icone aba-link"
      class="icone-link"
    />
  </a>`
  );

  $("#outro-link").append(
    `<a href="${usuario.outro_link}"
    class="container-4 pos-absolute d-flex justify-content-end align-items-center"
    >
      <img
        src="./assets/icons/link-solid.svg"
        alt="Icone outro link"
        class="icone-link"
      />
    </a>`
  );
}

adicionaDados();
