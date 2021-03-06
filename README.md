
## Plataforma Amassa!!!
<img src="/plataforma-amassa/public/banner.png" width="100%">
 
---

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

 ![GitHub Org's stars](https://img.shields.io/github/stars/matgermano/Plataforma_Amassa?style=social)
 [![GitHub forks](https://img.shields.io/github/forks/matgermano/Plataforma_Amassa.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/matgermano/Plataforma_Amassa/network/)
 [![GitHub branches](https://badgen.net/github/branches/matgermano/Plataforma_Amassa)](https://github.com/matgermano/Plataforma_Amassa)

---
## :computer: Tecnologias utilizada
* React.js
* JavaScript
* HTML
* CSS
* NodeJS 
* Sequelize 
* MySQL
* Figma - [link do nosso protótipo.](https://www.figma.com/file/knQ58zgdT8TJEUiLFlTJ1w/Amassa!!!?node-id=0%3A1)

 
 ---
 
## :running: Iniciando o projeto

1. Clone esse repositório em sua máquina: `$ git clone https://github.com/matgermano/Amassa_API.git`
2. Rode o comando npx sequelize-cli db:seed:all no terminal do VSCode
3. Digite npm start no terminal do seu VSCode para rodar a API
4. Depois disso, clone o projeto Plataforma Amassa! em: https://github.com/matgermano/Plataforma_Amassa
5. Rode o comando `npm i - f` no terminal do VSCode
6. Rode o comando `npm start`


---

## 💻 Aprendemos e utilizamos:

 Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quanto no Node.js ou qualquer serviço de API.
 
 Características do Axios:
 
1. Faz requisições HTTP com o Node.js;
2. Suporta a Promises;
3. Todas as respostas são transformadas e retornadas em JSON;
4. Tem suporte a falsificação de solicitações entre sites, conhecido como XRSF.

## useEffect:
```
useEffect(()=>{
    axios.get('http://localhost:3000/pratos-principais')
    .then((response)=>{      
      console.log(response);
    }) .catch((error)=>{
      console.log(error);
    })

  });
  
  ```
## useState:
```

const [isModalVisible, setIsModalVisible] = useState(false);

function ModalCarrinho({ setIsModalVisible2 }) {
  return (
    <div id="dvmodal" className="modalEnd">
      <div id="dvmodal" className="modalCar">
        <div class="principal">
          <h1 class="modal-carrinho">
            <i class="fas fa-tools"></i>
          </h1>
          <h1>Em construção!</h1>
          <h4>
            Estamos construindo nosso site para que em breve você possa pedir
            nossos deliciosos pratos no conforto de sua casa. Enquanto isso, que
            tal dar uma olhada em nosso cardápio?
          </h4>
          <button className="btn-2" onClick={() => setIsModalVisible2(false)}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
  
  ```
 

## 💻 Equipe de Desenvolvedores

💻 **Matheus Germano** - [Linkedin](https://www.linkedin.com/in/matheusgermanodesouza/)

💻 **Camila Rangel**  - [Linkedin](https://www.linkedin.com/in/cafrangel/)

💻 **Israel Marques** - [Linkedin](https://www.linkedin.com/in/israel-marques-375017158/)

💻 **Gabriel Bastos** - [Linkedin](https://www.linkedin.com/in/gabrielbastos1995/)

💻 **Rafael Soares** - [Linkedin](https://www.linkedin.com/in/rafaelsfsoares/)

